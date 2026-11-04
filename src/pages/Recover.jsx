import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Recover() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans antialiased text-left animate-fadeIn">
      {/* Centered Isolated Form Box */}
      <div className="bg-white border border-[#F1F5F9] shadow-[0_10px_35px_rgba(0,0,0,0.02)] rounded-2xl p-8 max-w-sm w-full space-y-6">
        {/* Workspace Brand Logo Row */}
        <div className="flex flex-col items-center gap-1.5 select-none">
          <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-md shadow-[#5551FF]/20">
            <img
              src="/src/assets/baseSvgs/Base.svg"
              className="w-14 h-14"
              alt=""
            />
          </div>
          <span className="font-black text-sm text-[#1E293B] tracking-wide mt-1">
            Recover
          </span>
        </div>

        {/* Input Layer Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[11px] font-black text-[#64748B] block mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
            />
            {error && (
              <p className="text-[10px] text-rose-500 font-bold mt-1 pl-1">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#5551FF] hover:bg-[#5551FF]/95 text-white font-black py-3 rounded-xl text-xs shadow-md shadow-[#5551FF]/10 transition-all active:scale-98"
            onClick={() => navigate("/login")}
          >
            Reset Your Password
          </button>
        </form>
      </div>
    </div>
  );
}
