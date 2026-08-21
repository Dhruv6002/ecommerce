import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Password reset requested for:", email);
  };

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8  mb-14 rounded-lg shadow-lg w-[90%] max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Forgot Password
        </h1>

        <p className="text-gray-600 mb-5 text-center">
          Enter your email address and we'll send you a
          password reset link.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded hover:bg-gray-800"
        >
          Send Reset Link
        </button>
      </form>

    </div>
  );
};

export default ForgotPassword;