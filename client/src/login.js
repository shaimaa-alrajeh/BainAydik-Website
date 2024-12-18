import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const changePassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("token", result.token);
        console.log("Response from server:", result);

        navigate("/profile");
      } else {
        alert(
          result.message ||
            "Login failed. Please check your email and password."
        );
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your internet connection.");
    }
  };

  const handleCreateAccount = () => {
    navigate("/register"); // Navigates to the registration page
  };

  return (
    <body className="font-sans antialiased text-white leading-normal tracking-wider bg-cover bg-[#252525] flex flex-col ">
      <Navbar />
      <div className="min-h-screen bg-[#252525] py-6 flex flex-col justify-center sm:py-12 mt-10 ">
        <h1 className="text-5xl font-semibold ml-[45%]">Login</h1>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={handleSubmit}
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={changeEmail}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={changePassword}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 w-full"
                  >
                    Submit
                  </button>
                </form>
                <div className="w-full flex justify-center mt-4">
                  <button
                    className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={handleCreateAccount}
                  >
                    <span>Create an Account</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
