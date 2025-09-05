"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { style } from "../career/cardStyle";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials
  const hardcodedEmail = "b18158031.muhammaddanish@gmail.com";
  const hardcodedPassword = "123456";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === hardcodedEmail && password === hardcodedPassword) {
      Cookies.set("auth", "true");
      router.push("/dashboard");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <>
      <style jsx>{style}</style>
      <div
        className="flex min-h-screen justify-center items-center px-2 sm:px-4 md:px-6 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-12 relative"
        style={{
          backgroundImage: "url('/images/bg-login.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 w-full sm:w-4/5 md:w-3/4 lg:w-1/2 max-w-[95%] sm:max-w-md lg:max-w-lg p-2 sm:p-4 md:p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40">
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 p-3 sm:p-4 md:p-6 lg:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] border-2 border-gradient-to-r from-orange-400 to-black-500 hover:shadow-[0_20px_60px_rgba(255,165,0,0.9)] transition-all duration-300 backdrop-blur-sm"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center text-gray-800">
              Login to <span className="text-[#e76c02]">DGL</span>
            </h2>

            {error && (
              <p className="text-red-500 text-center mb-3 sm:mb-4 font-medium text-xs sm:text-sm md:text-base">
                {error}
              </p>
            )}

            <div className="m-2 sm:m-3 md:m-4">
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-1.5 sm:p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-[#e76c02] transition text-xs sm:text-sm md:text-base"
                required
              />
            </div>

            <div className="m-2 sm:m-3 md:m-4">
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-1.5 sm:p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-[#e76c02] transition text-xs sm:text-sm md:text-base"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-submit w-full sm:w-3/4 md:w-1/2 block mx-auto mt-3 sm:mt-4 text-xs sm:text-sm md:text-base py-1.5 sm:py-2 md:py-3 m-2 sm:m-3 md:m-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
