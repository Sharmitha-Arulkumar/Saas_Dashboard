import React, { useState } from "react";

export default function Settings() {
  // Navigation active tab context state pointer selection layer
  const [activeTab, setActiveTab] = useState("Timeline");

  // Main chronological milestones grid datasets
  const timelineTasks = [
    {
      time: "09:00 AM",
      title: "Graphich Design",
      checked: false,
      priority: "Low",
      priorityBg: "bg-[#FFEDED] text-[#FF5A79]",
      status: "On Track",
      statusBg: "bg-[#FFF7E6] text-[#FFB020]",
      position: "left-[140px] w-120",
      people: "GroupPeople1.svg",
    },
    { time: "10:00 AM" },
    { time: "11:00 AM" },
    {
      time: "12:00 PM",
      title: "Dashboard Design",
      checked: true,
      priority: "High",
      priorityBg: "bg-[#EBF3FF] text-[#5551FF]",
      status: "On Track",
      statusBg: "bg-[#FFF7E6] text-[#FFB020]",
      position: "left-[240px] w-120",
      people: "GroupPeople1.svg",
    },
    { time: "01:00 PM" },
    {
      time: "02:00 PM",
      title: "Logo Design",
      checked: true,
      priority: "High",
      priorityBg: "bg-[#EBF3FF] text-[#5551FF]",
      status: "On Track",
      statusBg: "bg-[#FFF7E6] text-[#FFB020]",
      position: "left-[160px] w-120",
      people: "GroupPeople1.svg",
    },
    { time: "03:00 PM" },
    {
      time: "04:00 PM",
      title: "Web Design",
      checked: true,
      priority: "High",
      priorityBg: "bg-[#EBF3FF] text-[#5551FF]",
      status: "On Track",
      statusBg: "bg-[#FFF7E6] text-[#FFB020]",
      position: "left-[340px] w-120",
      people: "GroupPeople1.svg",
    },
    { time: "05:00 PM" },
  ];

  return (
    <div className="space-y-6 text-left animate-fadeIn">
      {/* 1. MASTER BAR TOP PANEL HEADER TITLE */}
      <div className="flex justify-between items-center bg-[#F8FAFC] pb-1">
        <h1 className="text-xl font-black text-[#1E293B] tracking-tight">
          Task Preview
        </h1>
        <button className="bg-[#5551FF] hover:bg-[#5551FF]/95 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md shadow-[#5551FF]/10 transition-all flex items-center gap-2">
          <span>+ Add Task</span>
        </button>
      </div>

      {/* 2. WORKSPACE CONTROLS STRIP */}
      <div className="flex justify-between items-center bg-[#F8FAFC]">
        {/* Navigation Tabs Selector */}
        <div className="flex bg-[#F4F4FF]/50 p-1 rounded-xl text-xs font-bold text-[#64748B] border border-[#F1F5F9]/60">
          {["List", "Board", "Timeline"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-1.5 rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-[#5551FF] text-white shadow-xs"
                  : "hover:text-[#1E293B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Date Filter Dropdown */}
        <div className="bg-white px-3 py-1.5 rounded-xl border border-[#F1F5F9] shadow-[0_1px_3px_rgba(0,0,0,0.01)] text-[11px] font-bold text-[#64748B] flex items-center gap-2 cursor-pointer select-none">
          <span>December 2021</span>{" "}
          <span className="text-[10px] text-slate-400 font-normal">▼</span>
        </div>
      </div>

      {/* 3. DUAL-COLUMN CHRONOLOGICAL TRACKING CANVAS */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start bg-white border border-[#F1F5F9] rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.005)]">
        {/* LEFT COLUMN: WORKFLOW CATEGORIES */}
        <div className="xl:col-span-3 space-y-3.5 pr-1 select-none">
          {/* To Do Row Link */}
          <div className="flex justify-between items-center p-3.5 rounded-xl cursor-pointer transition-all bg-[#5551FF] text-white shadow-sm shadow-[#5551FF]/10">
            <span className="text-xs font-black tracking-wide">To Do</span>
            <span className="text-[10px] opacity-80 font-normal">▶</span>
          </div>

          {/* Doing Row Link */}
          <div className="flex justify-between items-center p-3.5 rounded-xl cursor-pointer transition-all bg-[#F8FAFC] border border-[#F1F5F9] text-[#1E293B] hover:bg-slate-50">
            <span className="text-xs font-black tracking-wide">Doing</span>
            <span className="text-[10px] text-slate-400 font-normal">▶</span>
          </div>

          {/* Done Row Link */}
          <div className="flex justify-between items-center p-3.5 rounded-xl cursor-pointer transition-all bg-[#F8FAFC] border border-[#F1F5F9] text-[#1E293B] hover:bg-slate-50">
            <span className="text-xs font-black tracking-wide">Done</span>
            <span className="text-[10px] text-slate-400 font-normal">▶</span>
          </div>
        </div>

        {/* RIGHT COLUMN: CHRONOLOGICAL HOURS DATA GRID FRAME */}
        <div className="xl:col-span-9 border-l border-[#F1F5F9] pl-4 space-y-1 overflow-x-auto relative min-h-[500px]">
          {/* Top Numeric Horizontal Date Calibrator Timeline Strip */}
          <div className="flex justify-between text-[11px] font-black text-[#94A3B8] border-b border-[#F1F5F9] pb-3 mb-4 select-none min-w-[620px] px-2">
            {[
              "9",
              "30",
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
              "13",
              "14",
            ].map((day, dIdx) => (
              <span
                key={dIdx}
                className={`w-7 h-7 flex items-center justify-center rounded-lg transition-all ${
                  day === "02"
                    ? "bg-[#5551FF] text-white shadow-xs font-extrabold scale-105"
                    : ""
                }`}
              >
                {day}
              </span>
            ))}
          </div>

          {/* Vertical Hourly Guideline Streams Map */}
          <div className="space-y-0.5 min-w-[620px] relative divide-y divide-[#F1F5F9]/50">
            {timelineTasks.map((slot, index) => (
              <div
                key={index}
                className="flex items-center min-h-[58px] relative py-1.5 group"
              >
                {/* Hourly Left Scale Item */}
                <span className="w-20 text-[10px] text-[#94A3B8] font-bold tracking-tight select-none">
                  {slot.time}
                </span>

                {/* Horizontal Baseline rule alignment line */}
                <div className="flex-1 h-px bg-[#F1F5F9]/40 relative" />

                {/* HORIZONTAL TASK BLOCK OVERLAY LAYERS */}
                {slot.title && (
                  <div
                    className={`absolute ${slot.position} bg-white border border-[#F1F5F9] rounded-2xl p-3 flex items-center justify-between shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:border-slate-300 transition-all z-10 animate-scaleUp`}
                  >
                    {/* Checkbox Title Group */}
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          slot.checked
                            ? "bg-[#5551FF] border-[#5551FF]"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {slot.checked && (
                          <span className="text-white text-[8px]">✓</span>
                        )}
                      </span>
                      <span className="text-xs font-black text-[#1E293B] truncate tracking-tight">
                        {slot.title}
                      </span>
                    </div>

                    {/* Meta Priority Badges Row Wrapper */}
                    <div className="flex items-center gap-2 shrink-0 pl-4">
                      <img
                        src="/src/assets/settingsSvgs/GroupPeople1.svg"
                        className="h-7 object-contain shrink-0"
                        alt="Assignees"
                      />
                      <span
                        className={`px-2 py-0.5 m-4 rounded text-[9px] font-black uppercase tracking-wide shrink-0 ${slot.priorityBg}`}
                      >
                        {slot.priority}
                      </span>
                      <span
                        className={`px-2 py-0.5 m-4 rounded text-[9px] font-black uppercase tracking-wide shrink-0 ${slot.statusBg}`}
                      >
                        {slot.status}
                      </span>
                      <img
                        src="/src/assets/settingsSvgs/3dots.svg"
                        className="w-3.5 h-3.5 opacity-80 cursor-pointer hover:opacity-60 ml-0.5 shrink-0"
                        alt="Menu options dropdown link"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
