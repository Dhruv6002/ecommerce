import "dotenv/config";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.PORT) || 3001;
const allowedSubjects = new Set([
  "Order question",
  "Poster question",
  "Something else",
]);

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  }),
);
app.use(express.json({ limit: "10kb" }));
app.use(
  "/api/contact",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  }),
);

app.post("/api/contact", async (request, response) => {
  const { name, email, subject, message } = request.body ?? {};
  const fields = { name, email, subject, message };

  for (const [field, value] of Object.entries(fields)) {
    if (typeof value !== "string" || !value.trim()) {
      return response.status(400).json({ error: `${field} is required.` });
    }
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (trimmedName.length > 100) {
    return response.status(400).json({ error: "Name must be 100 characters or fewer." });
  }
  if (
    trimmedEmail.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
  ) {
    return response.status(400).json({ error: "Enter a valid email address." });
  }
  if (!allowedSubjects.has(subject.trim())) {
    return response.status(400).json({ error: "Choose a valid subject." });
  }
  if (trimmedMessage.length > 5000) {
    return response.status(400).json({ error: "Message must be 5000 characters or fewer." });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !CONTACT_TO ||
    SMTP_USER.startsWith("your-") ||
    SMTP_PASS === "your-app-password"
  ) {
    console.error("Contact email is not configured. Set valid SMTP credentials in backend/.env.");
    return response.status(503).json({
      error: "The contact form is temporarily unavailable. Please try again later.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: SMTP_USER,
      to: CONTACT_TO,
      replyTo: { name: trimmedName, address: trimmedEmail },
      subject: `Contact form: ${subject.trim()}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${subject.trim()}\n\n${trimmedMessage}`,
    });

    return response.status(202).json({ message: "Your message has been sent." });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return response.status(502).json({
      error: "We couldn't send your message right now. Please try again later.",
    });
  }
});

app.listen(port, () => {
  console.log(`Contact backend listening on http://localhost:${port}`);
});
