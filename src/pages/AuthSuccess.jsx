import React from "react";
import { useNavigate } from "react-router-dom";

export default function AuthSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans antialiased animate-fadeIn">
      {/* Centered Gateway Card Enclosure */}
      <div className="bg-white border border-[#F1F5F9] shadow-[0_12px_40px_rgba(0,0,0,0.03)] rounded-2xl p-12 max-w-md w-full text-center space-y-6 animate-scaleUp flex flex-col items-center">
        {/* Unified Celebration Badge Canvas Container */}
        <div className="w-30 h-30 grid items-center justify-center relative select-none shrink-0">
          {/* Background Confetti Floating Asset */}
          <img
            src="/assets/baseSvgs/ThumbsUpTop.svg"
            className="absolute inset-0 w-full h-full scale-100 z-10"
            alt="Success Confetti background"
          />
          {/* Centered Primary ThumbsUp Gesture Icon */}
          <div className="w-20 h-20 bg-[#F4F4FF] rounded-full ">
            <img
              src="/assets/baseSvgs/ThumbsUp.svg"
              className="w-10 h-10 m-5 object-contain relative z-10"
              alt="Thumbs Up icon"
            />
          </div>
        </div>

        {/* Text Callouts */}
        <div className="pt-2">
          <h2 className="text-sm font-extrabold text-[#1E293B] tracking-wide">
            Your account successfully created.
          </h2>
        </div>

        {/* Primary Redirect Action Button */}
        <div className="w-full pt-2">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#5551FF] hover:bg-[#5551FF]/95 text-white font-extrabold text-xs py-3 px-8 rounded-xl transition-all shadow-md shadow-[#5551FF]/15 max-w-[140px] mx-auto block active:scale-98"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
