import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

const Myprofile = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-amber-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">
            You are not logged in
          </h1>

          <button
            onClick={() => navigate("/login")}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-amber-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          My Profile
        </h1>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center text-4xl">
            {user?.username?.charAt(0).toUpperCase() || "U"}
          </div>
        </div>
        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Username
          </label>
          <div className="border rounded p-3 bg-gray-50">
            {user?.username || "User"}
          </div>
        </div>
        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Email
          </label>
          <div className="border rounded p-3 bg-gray-50">
            {user?.email || "No email available"}
          </div>
        </div>
        <div className="flex mt-6 gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-black text-white py-3 rounded hover:bg-gray-800"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="flex-1 bg-red-600 text-white py-3 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Myprofile;