import { useState } from "react";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [currentState, setCurrentState] = useState("Sign up");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
      username,
    });
    navigate("/profile");
  };
  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 mb-12 sm:p-10 rounded-lg shadow-lg w-[90%] max-w-md min-h-[450px]"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          {currentState === "Sign up" ? "Sign Up" : "Login"}
        </h1>
        {currentState === "Sign up" && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-3 mb-4 rounded"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
          required
        />
        <div className="w-full flex justify-between items-center gap-6 text-sm mb-6 mt-3">
          {currentState === "Login" && (
            <p
              className="cursor-pointer font-semibold hover:text-amber-700"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot your password?
            </p>
          )}
          {currentState === "Login" ? (
            <p
              className="cursor-pointer font-semibold text-right hover:text-amber-700"
              onClick={() => setCurrentState("Sign up")}
            >
              Don't have an account? Sign up
            </p>
          ) : (
            <p
              className="cursor-pointer font-semibold text-right hover:text-amber-700 ml-auto"
              onClick={() => setCurrentState("Login")}
            >
              Already have an account? Login
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded hover:bg-gray-800"
        >
          {currentState === "Sign up" ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};
export default Login;