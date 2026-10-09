import { useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";

const Contactus = () => {
  const [submission, setSubmission] = useState({
    status: "idle",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmission({ status: "sending", message: "" });

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "We couldn't send your message. Please try again.");
      }

      form.reset();
      setSubmission({
        status: "sent",
        message: "Message sent. We'll be in touch soon.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't send your message. Please try again.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-amber-100 px-4 py-12 sm:px-8 lg:px-16">
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">
            Get in touch
          </p>
          <h1 className="text-4xl font-bold leading-tight text-black sm:text-6xl">
            Let&apos;s talk about your next piece.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Have a question about a poster, a custom cover, or your order? Send
            us a message and our studio team will get back to you shortly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <aside className="flex flex-col justify-between rounded-xl bg-black p-6 text-white sm:p-8">
            <div>
              <h2 className="text-2xl font-bold">The studio</h2>
              <p className="mt-3 leading-relaxed text-gray-300">
                We are here Monday to Friday, printing the pieces that keep
                your collection alive.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <FiMail className="text-xl text-red-400" />
                <span>physicality.in@gmail.com</span>
              </div>
              <div className="flex items-start gap-4">
                <FiMapPin className="mt-1 text-xl text-red-400" />
                <span>Print Studio<br />India</span>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-xl bg-white p-6 shadow-md sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row">
              <label className="flex-1 text-sm font-semibold text-gray-700">
                Your name
                <input required name="name" type="text" className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 font-normal outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" placeholder="Your Name" />
              </label>
              <label className="flex-1 text-sm font-semibold text-gray-700">
                Email address
                <input required name="email" type="email" className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 font-normal outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" placeholder="Email" />
              </label>
            </div>
            <label className="mt-6 block text-sm font-semibold text-gray-700">
              Subject
              <select required name="subject" className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200">
                <option>Order question</option>
                <option>Poster question</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="mt-6 block text-sm font-semibold text-gray-700">
              Message
              <textarea required name="message" rows="5" className="mt-2 w-full resize-y rounded-md border border-gray-300 px-4 py-3 font-normal outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" placeholder="Tell us how we can help..." />
            </label>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button disabled={submission.status === "sending"} type="submit" className="flex items-center justify-center gap-3 rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60">
                {submission.status === "sending" ? "Sending..." : "Send message"}
                <FiSend />
              </button>
              {submission.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm font-medium ${
                    submission.status === "error" ? "text-red-700" : "text-green-700"
                  }`}
                >
                  {submission.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contactus
