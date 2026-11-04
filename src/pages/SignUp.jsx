import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let activeErrors = {};
    if (!form.fullName.trim()) activeErrors.fullName = "Full Name is required";
    if (!form.email.includes("@"))
      activeErrors.email = "Please enter a valid email address";
    if (!form.username.trim()) activeErrors.username = "Username is required";
    if (form.password.length < 6)
      activeErrors.password = "Password must be at least 6 characters";
    if (!form.agree) activeErrors.agree = "You must agree to the terms";

    setErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      navigate("/auth-success");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 bg-white font-sans antialiased text-left animate-fadeIn">
      {/* LEFT FORM FIELDS COLUMN COLUMN */}
      <div className="md:col-span-5 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 py-10 w-full">
        {/* Workspace Brand Header */}
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
            Sign Up
          </span>
        </div>

        {/* Social Authentication Row Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-5 text-[11px] font-bold text-[#64748B]">
          <button className="flex items-center justify-center gap-2 border border-[#F1F5F9] bg-[#F8FAFC] py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
            <img
              src="/src/assets/baseSvgs/GoogleLogo.svg"
              className="w-3.5 h-3.5"
              alt=""
            />{" "}
            <span>Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 border border-[#F1F5F9] bg-[#F8FAFC] py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
            <img
              src="/src/assets/baseSvgs/FacebookLogo.svg"
              className="w-3.5 h-3.5"
              alt=""
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

        {/* Action input Fields Matrix Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="text-[11px] font-black text-[#64748B] block mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="liangyu"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
            />
            {errors.fullName && (
              <p className="text-[10px] text-rose-500 font-bold mt-1 pl-1">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label className="text-[11px] font-black text-[#64748B] block mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
            />
            {errors.email && (
              <p className="text-[10px] text-rose-500 font-bold mt-1 pl-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="text-[11px] font-black text-[#64748B] block mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="johnkevine4382"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
            />
            {errors.username && (
              <p className="text-[10px] text-rose-500 font-bold mt-1 pl-1">
                {errors.username}
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
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
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

          {/* Legal Acknowledgement Checkbox Row */}
          <div className="pt-1">
            <div className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                id="terms"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                className="mt-0.5 rounded border-slate-200 text-[#5551FF] focus:ring-[#5551FF]"
              />
              <label
                htmlFor="terms"
                className="text-[11px] font-semibold text-[#64748B] leading-relaxed"
              >
                By creating an account you agree to the{" "}
                <span className="text-[#5551FF] hover:underline">
                  terms of use
                </span>{" "}
                and our{" "}
                <span className="text-[#5551FF] hover:underline">
                  privacy policy
                </span>
                .
              </label>
            </div>
            {errors.agree && (
              <p className="text-[10px] text-rose-500 font-bold mt-1 pl-1">
                {errors.agree}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#5551FF] hover:bg-[#5551FF]/95 text-white font-black py-3 rounded-xl text-xs shadow-md shadow-[#5551FF]/10 transition-all active:scale-98 mt-2"
          >
            Create account
          </button>
        </form>

        <p className="text-[11px] text-[#64748B] text-center font-bold mt-5 select-none">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#5551FF] cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
        <div className="pt-4 text-left">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white hover:bg-[#F8FAFC] text-[#5551FF] border border-[#F1F5F9] font-black text-xs px-6 py-2.5 rounded-xl shadow-xs transition-all active:scale-98"
          >
            &lt;&lt; Back
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN AREA: STATIC ILLUSTRATION CANVAS */}
      <div className="hidden md:flex md:col-span-7 bg-[#F8FAFC] border-l border-[#F1F5F9] items-center justify-center p-8 select-none">
        <div className="max-w-md xl:max-w-xl w-full">
          <img
            src="/src/assets/baseSvgs/SignUpImg.svg"
            className="w-full h-auto max-h-[500px] object-contain"
            alt="Sign Up Workspace"
          />
        </div>
      </div>
    </div>
  );
}
