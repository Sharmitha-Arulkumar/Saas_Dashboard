import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let activeErrors = {};
    if (!email.includes("@"))
      activeErrors.email = "Please enter a valid email address";
    if (!password.trim()) activeErrors.password = "Password is required";

    setErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 bg-white font-sans antialiased text-left animate-fadeIn">
      {/* LEFT FORM FIELDS COLUMN */}
      <div className="md:col-span-5 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 py-10 w-full">
        {/* Workspace Brand Header (Triggers Redirect to Signup on click) */}
        <div
          onClick={() => navigate("/signup")}
          className="flex flex-col items-center gap-1.5 mb-6 cursor-pointer select-none self-center"
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-md shadow-[#5551FF]/20">
            <img
              src="/src/assets/baseSvgs/Base.svg"
              className="w-14 h-14"
              alt="Base Logo"
            />
          </div>
          <span className="font-black text-sm text-[#1E293B] tracking-wide">
            Log in
          </span>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-5 text-[11px] font-bold text-[#64748B]">
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-[#F1F5F9] bg-[#F8FAFC] py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <img
              src="/src/assets/baseSvgs/GoogleLogo.svg"
              className="w-3.5 h-3.5 object-contain"
              alt="Google Logo"
            />{" "}
            <span>Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-[#F1F5F9] bg-[#F8FAFC] py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <img
              src="/src/assets/baseSvgs/FacebookLogo.svg"
              className="w-3.5 h-3.5 object-contain"
              alt="Facebook Logo"
            />{" "}
            <span>Facebook</span>
          </button>
        </div>

        <div className="relative text-center my-4 select-none">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#F1F5F9]" />
          </div>
          <span className="relative bg-white px-3 text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">
            Or
          </span>
        </div>

        {/* Login Credentials Inputs */}
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="text-[11px] font-black text-[#64748B] block mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none"
            />
            {errors.email && (
              <p className="text-[10px] text-rose-500 font-bold mt-1 pl-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="text-[11px] font-black text-[#64748B] block mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs opacity-30 cursor-pointer">
                👁️
              </span>
            </div>
            {errors.password && (
              <p className="text-[10px] text-rose-500 font-bold mt-1 pl-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Remember me & Recover Password Actions */}
          <div className="flex justify-between items-center text-[11px] font-bold select-none pt-0.5">
            <div className="flex items-center gap-2 cursor-pointer text-[#64748B]">
              <input
                type="checkbox"
                id="remember"
                className="rounded border-slate-200 text-[#5551FF] focus:ring-[#5551FF]"
              />
              <label htmlFor="remember" className="cursor-pointer">
                Remember me
              </label>
            </div>
            {/* ROUTING TO /RECOVER */}
            <span
              onClick={() => navigate("/recover")}
              className="text-[#5551FF] cursor-pointer hover:underline"
            >
              Reset Password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5551FF] hover:bg-[#5551FF]/95 text-white font-black py-3 rounded-xl text-xs shadow-md shadow-[#5551FF]/10 transition-all active:scale-98"
          >
            Log in
          </button>
        </form>

        <p className="text-[11px] text-[#64748B] text-center font-bold mt-6 select-none">
          Don't have account yet?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#5551FF] cursor-pointer hover:underline"
          >
            New Account
          </span>
        </p>
      </div>

      {/* RIGHT COLUMN AREA: STATIC ILLUSTRATION CANVAS */}
      <div className="hidden md:flex md:col-span-7 bg-[#F8FAFC] border-l border-[#F1F5F9] items-center justify-center p-8 select-none">
        <div className="max-w-md xl:max-w-xl w-full">
          <img
            src="/src/assets/baseSvgs/LoginImg.svg"
            className="w-full h-auto max-h-[500px] object-contain"
            alt="Log In Workspace"
          />
        </div>
      </div>
    </div>
  );
}
