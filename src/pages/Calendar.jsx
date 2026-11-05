import React, { useState } from "react";

export default function Calendar() {
  // Navigation states between calendar matrix view filters and task workflows
  const [currentCalendarFilter, setCurrentCalendarFilter] = useState("Day"); // "Day", "Week", "Month", "Year", or "TaskPreview"
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [eventTypeFilter, setEventTypeFilter] = useState("Event");

  // DATA MAPPINGS FOR CORRESPONDING CALENDAR VIEWS
  const hourlyTimeSlots = [
    {
      time: "09.00 AM",
      event: "Invited by friends",
      bg: "bg-[#FF5A79] text-white",
      margin: "ml-4",
    },
    { time: "10.00 AM" },
    { time: "11.00 AM" },
    {
      time: "12.00 PM",
      event: "Prayer Time",
      bg: "bg-[#00C3F8] text-white",
      margin: "ml-64 w-44",
    },
    { time: "01.00 PM" },
    {
      time: "02.00 PM",
      event: "Lunch Time",
      bg: "bg-[#FF5A79]/70 text-white",
      margin: "ml-[450px]",
    },
    { time: "03.00 PM" },
    { time: "04.00 PM" },
    { time: "05.00 PM" },
    {
      time: "06.00 PM",
      event: "Prayer Time",
      bg: "bg-[#22C55E] text-white",
      margin: "ml-48",
    },
    { time: "07.00 PM" },
    { time: "08.00 PM" },
    {
      time: "09.00 PM",
      event: "Dinner Time",
      bg: "bg-[#5551FF] text-white",
      margin: "ml-[500px]",
    },
    { time: "10.00 PM" },
    { time: "11.00 PM" },
    { time: "12.00 AM" },
    { time: "01.00 AM" },
  ];

  const monthDays = [
    { num: "29", isMuted: true },
    { num: "30", isMuted: true },
    { num: "01", isMuted: false },
    {
      num: "02",
      isMuted: false,
      isToday: true,
      badges: [
        { label: "Free day", bg: "bg-[#00C3F8] text-white" },
        { label: "Party Time", bg: "bg-[#FF5A79] text-white" },
      ],
      hasMore: true,
    },
    { num: "03", isMuted: false },
    { num: "04", isMuted: false },
    { num: "05", isMuted: false },
    { num: "06", isMuted: false },
    { num: "07", isMuted: false },
    { num: "08", isMuted: false },
    { num: "09", isMuted: false },
    { num: "10", isMuted: false },
    { num: "11", isMuted: false },
    { num: "12", isMuted: false },
    { num: "13", isMuted: false },
    { num: "14", isMuted: false },
    { num: "15", isMuted: false },
    {
      num: "16",
      isMuted: false,
      badges: [{ label: "Victory day", bg: "bg-[#FFB020] text-white" }],
    },
    { num: "17", isMuted: false },
    { num: "18", isMuted: false },
    { num: "19", isMuted: false },
    {
      num: "20",
      isMuted: false,
      isTarget: true,
      badges: [{ label: "Invited by friends", bg: "bg-[#FF5A79] text-white" }],
    },
    { num: "21", isMuted: false },
    { num: "22", isMuted: false },
    { num: "23", isMuted: false },
    { num: "24", isMuted: false },
    {
      num: "25",
      isMuted: false,
      badges: [{ label: "Christmas Day", bg: "bg-[#00C3F8] text-white" }],
    },
    { num: "26", isMuted: false },
    { num: "27", isMuted: false },
    { num: "28", isMuted: false },
    { num: "29", isMuted: false },
    { num: "30", isMuted: false },
    { num: "31", isMuted: false },
    { num: "01", isMuted: true },
    { num: "02", isMuted: true },
  ];

  const peopleList = [
    {
      name: "Eddie Lobanovskiy",
      email: "lobanovskiy@gmail.com",
      pic: "Person1.svg",
    },
    { name: "Alexey Stave", email: "alexey@gmail.com", pic: "Person2.svg" },
    {
      name: "Anton Tkacheve",
      email: "tkacheveanton@gmail.com",
      pic: "Person3.svg",
    },
  ];

  const yearMonths = [
    "January 2021",
    "February 2021",
    "March 2021",
    "April 2021",
    "May 2021",
    "June 2021",
    "July 2021",
    "August 2021",
    "September 2021",
    "October 2021",
    "November 2021",
    "December 2021",
  ];

  const taskPreviewData = {
    ToDo: [
      {
        name: "Ui Design",
        icon: "UiDesign.svg",
        start: "03/12/2021",
        end: "5/12/2021",
        member: "5 Member",
        status: "Pending",
        bg: "bg-[#FFEDED] text-[#FF5A79]",
      },
      {
        name: "Logo Design",
        icon: "LogoDesign.svg",
        start: "03/12/2021",
        end: "5/12/2021",
        member: "5 Member",
        status: "Pending",
        bg: "bg-[#FFEDED] text-[#FF5A79]",
      },
    ],
    Doing: [
      {
        name: "Grapich Design",
        icon: "GraphicDesign.svg",
        start: "03/12/2021",
        end: "5/12/2021",
        member: "5 Member",
        status: "Running",
        bg: "bg-[#EEEDFF] text-[#5551FF]",
        checked: true,
      },
      {
        name: "Web Design",
        icon: "WebDesign.svg",
        start: "03/12/2021",
        end: "5/12/2021",
        member: "5 Member",
        status: "Running",
        bg: "bg-[#EEEDFF] text-[#5551FF]",
        checked: true,
      },
    ],
    Done: [
      {
        name: "Logo Design",
        icon: "LogoDesign.svg",
        start: "01/12/2021",
        end: "3/12/2021",
        member: "5 Member",
        status: "Done",
        bg: "bg-[#E6F4EA] text-[#137333]",
        checked: true,
      },
    ],
  };

  return (
    <div className="space-y-6 text-left relative min-h-[calc(100vh-120px)] animate-fadeIn">
      {/* TOP CALENDAR CONTROL BAR HEADER */}
      <div className="flex justify-between items-center bg-[#F8FAFC] pb-2">
        <h1 className="text-xl font-black text-[#1E293B] tracking-tight">
          {currentCalendarFilter === "TaskPreview"
            ? "Task Preview"
            : "Calendar"}
        </h1>
        {currentCalendarFilter !== "TaskPreview" && (
          <div className="flex items-center bg-[#EEEDFF]/50 p-1 rounded-xl border border-[#F1F5F9] text-[11px] font-bold text-[#94A3B8]">
            {["Day", "Week", "Month", "Year"].map((mode) => (
              <button
                key={mode}
                onClick={() => setCurrentCalendarFilter(mode)}
                className={`px-4 py-1.5 rounded-lg transition-all ${
                  currentCalendarFilter === mode
                    ? "bg-[#5551FF] text-white shadow-xs"
                    : "hover:text-[#64748B]"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* CORE STRUCTURE LAYOUT WRAPPER (FOR DAY, WEEK, MONTH, YEAR) */}
      {currentCalendarFilter !== "TaskPreview" && (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* STATIC LEFT COMPOSITION CONTROL PANEL BLOCK */}
          <div className="xl:col-span-4 bg-white border border-[#F1F5F9] rounded-2xl p-5 space-y-6 shadow-[0_4px_25px_rgba(0,0,0,0.005)]">
            <button
              onClick={() => setShowEventPopup(true)}
              className="w-full bg-[#5551FF] hover:bg-[#5551FF]/95 text-white text-xs font-extrabold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <span>+ Create Schedule</span>
            </button>

            {/* Embedded Inline Mini Calendar Layout */}
            <div className="space-y-3 border-b border-[#F1F5F9] pb-5">
              <div className="flex justify-between items-center text-xs font-black text-[#1E293B]">
                <span>December 2, 2021</span>
                <div className="flex gap-3 text-slate-300 font-normal">
                  <span className="cursor-pointer hover:text-slate-600">◀</span>
                  <span className="cursor-pointer hover:text-slate-600">▶</span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-y-2 text-center text-[10px] font-bold text-[#64748B]">
                {["S", "S", "M", "T", "W", "T", "F"].map((day, idx) => (
                  <span key={idx} className="text-[#94A3B8] font-medium">
                    {day}
                  </span>
                ))}
                {[...Array(35)].map((_, i) => {
                  const num =
                    i - 2 > 0 && i - 2 <= 31
                      ? i - 2
                      : i - 2 <= 0
                        ? 30 + (i - 2)
                        : i - 2 - 31;
                  return (
                    <span
                      key={i}
                      className={`py-1 rounded-lg font-bold text-center text-xs cursor-pointer ${
                        num === 2 && i === 4
                          ? "bg-[#5551FF] text-white font-black shadow-sm"
                          : "hover:bg-[#F8FAFC]"
                      } ${i < 3 || i > 33 ? "text-slate-300 font-normal" : "text-[#1E293B]"}`}
                    >
                      {num}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Allocated Contacts Submodule Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-[#1E293B]">People</h3>
              <div className="relative">
                <img
                  src="/assets/calenderSvgs/Calendar.svg"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-40"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="Search for People"
                  className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none"
                />
              </div>
              <div className="space-y-3.5">
                {peopleList.map((person, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img
                      src={`/assets/calenderSvgs/${person.pic}`}
                      className="w-8 h-8 rounded-full border border-[#F1F5F9] bg-slate-50 object-cover shrink-0"
                      alt=""
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-extrabold text-[#1E293B] truncate">
                        {person.name}
                      </h4>
                      <p className="text-[10px] text-[#64748B] font-semibold truncate mt-0.5">
                        {person.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FIXED INTERACTIVE ACTION LINK TO SWITCH SCREENS DYNAMICALLY */}
            <div className="text-center pt-2">
              <span
                onClick={() => setCurrentCalendarFilter("TaskPreview")}
                className="text-xs font-extrabold text-[#5551FF] cursor-pointer hover:underline underline-offset-2 tracking-wide block w-full"
              >
                My Schedule
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN AREA CONTAINER */}
          <div className="xl:col-span-8 bg-white border border-[#F1F5F9] rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.005)]">
            {/* VIEW STATE A: DAY HOURLY TIMELINE SCHEDULER VIEW (PIXEL MATCHES UPLOADED MOCKUP) */}
            {currentCalendarFilter === "Day" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-4">
                  <h2 className="text-xs font-black text-[#1E293B]">
                    December 2, 2021
                  </h2>
                  <div className="flex gap-4 text-slate-300 font-semibold text-xs select-none">
                    <span className="cursor-pointer hover:text-slate-800">
                      ◀
                    </span>
                    <span className="cursor-pointer hover:text-slate-800">
                      ▶
                    </span>
                  </div>
                </div>

                {/* Vertical Hour-Stream Block Rows */}
                <div className="space-y-0.5 divide-y divide-[#F1F5F9]/60 max-h-[600px] overflow-y-auto pr-1">
                  {hourlyTimeSlots.map((slot, index) => (
                    <div
                      key={index}
                      className="flex items-center min-h-[52px] relative py-1"
                    >
                      {/* Left Casing Time Scale */}
                      <span className="w-20 text-[10px] text-[#94A3B8] font-bold tracking-tight select-none">
                        {slot.time}
                      </span>

                      {/* Grid Line Visual Rule */}
                      <div className="flex-1 h-px bg-[#F1F5F9]/50 relative" />

                      {/* Event Color-Blocked Absolute Layer Block */}
                      {slot.event && (
                        <div
                          className={`absolute left-20 right-4 p-2.5 rounded-xl ${slot.bg} ${slot.margin} shadow-sm flex items-center z-10 animate-scaleUp`}
                        >
                          <span className="text-[11px] font-black tracking-wide truncate">
                            {slot.event}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW STATE B: STANDARD MONTH VIEW LAYER */}
            {currentCalendarFilter === "Month" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-4">
                  <h2 className="text-xs font-black text-[#1E293B]">
                    December 2, 2021
                  </h2>
                  <div className="flex gap-4 text-slate-400 font-semibold text-xs select-none">
                    <span className="cursor-pointer hover:text-slate-800">
                      ◀
                    </span>
                    <span className="cursor-pointer hover:text-slate-800">
                      ▶
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-center font-bold text-xs text-[#64748B] border-b border-[#F1F5F9] pb-2 select-none">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (d) => (
                      <span
                        key={d}
                        className="w-full text-slate-400 font-semibold"
                      >
                        {d}
                      </span>
                    ),
                  )}
                </div>
                <div className="grid grid-cols-7 border-l border-t border-slate-50/50 min-h-[500px]">
                  {monthDays.map((day, idx) => (
                    <div
                      key={idx}
                      className={`p-1.5 border-r border-b border-slate-50 flex flex-col items-center justify-start text-xs font-bold min-h-[96px] text-center relative ${day.isMuted ? "text-slate-300 font-normal" : "text-[#1E293B]"}`}
                    >
                      <span
                        className={`w-6 h-6 flex items-center justify-center rounded-full mt-1 ${day.isToday ? "border-b-2 border-[#FF5A79] rounded-none text-[#1E293B] font-black" : ""} ${day.isTarget ? "bg-[#FF5A79] text-white font-black" : ""}`}
                      >
                        {day.num}
                      </span>
                      {day.badges && (
                        <div className="w-full space-y-1 mt-2 px-0.5">
                          {day.badges.map((b, bI) => (
                            <span
                              key={bI}
                              className={`block rounded text-[9px] font-black py-0.5 px-1 truncate tracking-tight text-center ${b.bg}`}
                            >
                              {b.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW STATE C: YEAR MATRIX TILES GRID */}
            {currentCalendarFilter === "Year" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                {yearMonths.map((monthTitle, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 border border-[#F1F5F9] rounded-xl space-y-2 text-center"
                  >
                    <h4 className="text-[11px] font-black text-[#1E293B] border-b border-slate-50 pb-1">
                      {monthTitle}
                    </h4>
                    <div className="grid grid-cols-7 text-[8px] font-bold text-slate-400 gap-y-1">
                      {["S", "S", "M", "T", "W", "T", "F"].map((d, i) => (
                        <span key={i}>{d}</span>
                      ))}
                      {[...Array(35)].map((_, i) => {
                        const n = i + 1 - 2;
                        const isCurrentMonth = n > 0 && n <= 30;
                        return (
                          <span
                            key={i}
                            className={`py-0.5 ${n === 25 && mIdx === 11 ? "bg-[#00C3F8] text-white rounded-sm font-black" : isCurrentMonth ? "text-[#1E293B] font-medium" : "text-slate-200 font-normal"}`}
                          >
                            {isCurrentMonth ? (n < 10 ? `0${n}` : n) : ""}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* SCREEN VIEW 3: TASK PREVIEW PAGE */}
      {currentCalendarFilter === "TaskPreview" && (
        <div className="space-y-6 animate-fadeIn">
          {/* Dashboard List Header Area Controls */}
          <div className="flex justify-between items-center bg-[#F8FAFC] pb-1">
            <div className="flex bg-[#EEEDFF] p-1 rounded-xl text-xs font-bold text-[#5551FF]">
              <button className="bg-[#5551FF] text-white px-4 py-1.5 rounded-lg shadow-xs">
                List
              </button>
              <button className="px-4 py-1.5 text-[#64748B] hover:text-[#1E293B]">
                Board
              </button>
              <button className="px-4 py-1.5 text-[#64748B] hover:text-[#1E293B]">
                Timeline
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white border border-[#F1F5F9] rounded-xl pl-4 pr-10 py-2 text-xs font-medium focus:outline-none w-44 shadow-3xs"
                />
                <img
                  src="/assets/calenderSvgs/Calendar.svg"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-30"
                  alt=""
                />
              </div>
              <button className="bg-[#5551FF] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md">
                + Add Task
              </button>
            </div>
          </div>

          {/* Task Workflow Row-Groups Canvas */}
          <div className="space-y-6">
            {Object.entries(taskPreviewData).map(([sectionTitle, rows]) => (
              <div
                key={sectionTitle}
                className="bg-white border border-[#F1F5F9] rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.005)] space-y-4"
              >
                <div className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <h3 className="text-xs font-black text-[#1E293B] uppercase tracking-wide">
                    {sectionTitle === "ToDo"
                      ? "To Do"
                      : sectionTitle === "Doing"
                        ? "Doing"
                        : "Done"}
                  </h3>
                  <span className="text-[10px] text-[#5551FF] font-black cursor-pointer hover:underline">
                    See More
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[700px]">
                    <thead>
                      <tr className="text-[#94A3B8] font-bold border-b border-[#F1F5F9] select-none">
                        <th className="pb-3 w-20">Check Box</th>
                        <th className="pb-3">Task Name</th>
                        <th className="pb-3">Start Date</th>
                        <th className="pb-3">End Date</th>
                        <th className="pb-3">Member</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3 text-right pr-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F1F5F9]/50 font-bold text-[#1E293B]">
                      {rows.map((row, rI) => (
                        <tr
                          key={rI}
                          className="hover:bg-[#F8FAFC]/30 transition-colors"
                        >
                          <td className="py-4">
                            <input
                              type="checkbox"
                              defaultChecked={row.checked}
                              className="rounded border-slate-200 text-[#5551FF] focus:ring-[#5551FF] cursor-pointer"
                            />
                          </td>
                          <td className="py-4 flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-[#F8FAFC] border border-[#F1F5F9] flex items-center justify-center p-1 shrink-0">
                              <img
                                src={`/assets/calenderSvgs/${row.icon}`}
                                className="w-full h-full object-contain"
                                alt=""
                              />
                            </div>
                            <span className="font-extrabold tracking-tight text-[#5551FF]">
                              {row.name}
                            </span>
                          </td>
                          <td className="py-4 text-[#64748B] font-medium">
                            {row.start}
                          </td>
                          <td className="py-4 text-[#FF5A79] font-medium">
                            {row.end}
                          </td>
                          <td className="py-4 text-[#64748B] font-semibold">
                            {row.member}
                          </td>
                          <td className="py-4">
                            <span
                              className={`px-4 py-1.5 rounded-full text-[10px] font-black inline-block min-w-[74px] text-center ${row.bg}`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="py-4 text-right pr-4 space-x-3.5">
                            <img
                              src="/assets/calenderSvgs/Edit.svg"
                              className="w-4 h-4 opacity-30 cursor-pointer inline hover:opacity-70"
                              alt="Edit"
                            />
                            <img
                              src="/assets/calenderSvgs/Delete.svg"
                              className="w-4 h-4 opacity-30 cursor-pointer inline hover:opacity-70"
                              alt="Delete"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 text-left">
            <button
              onClick={() => setCurrentCalendarFilter("Day")}
              className="bg-white hover:bg-[#F8FAFC] text-[#5551FF] border border-[#F1F5F9] font-black text-xs px-6 py-2.5 rounded-xl shadow-xs transition-all active:scale-98"
            >
              &lt;&lt; Back
            </button>
          </div>
        </div>
      )}

      {/* CENTRAL FORM DRAWER POPUP MODAL: CREATE AN EVENT */}
      {showEventPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-xs"
            onClick={() => setShowEventPopup(false)}
          />
          <div className="bg-white rounded-2xl border border-[#F1F5F9] shadow-2xl max-w-lg w-full p-6 space-y-6 relative z-10 animate-scaleUp text-left">
            <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-4">
              <h3 className="font-black text-base text-[#1E293B]">
                Create an Event
              </h3>
              <button
                onClick={() => setShowEventPopup(false)}
                className="w-7 h-7 bg-[#FFF0F2] text-[#FF5A79] hover:opacity-90 rounded-full font-black text-xs flex items-center justify-center transition-opacity"
              >
                ✕
              </button>
            </div>

            <div className="flex gap-2 text-xs font-bold text-[#64748B]">
              {["Event", "Reminder", "Task"].map((type) => (
                <button
                  key={type}
                  onClick={() => setEventTypeFilter(type)}
                  className={`px-4 py-2 rounded-xl transition-all ${eventTypeFilter === type ? "bg-[#FF5A79] text-white shadow-xs" : "bg-[#F8FAFC] border border-[#F1F5F9] hover:text-[#1E293B]"}`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Add title"
                className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-3 text-xs font-semibold text-[#1E293B] focus:outline-none"
              />
              <div className="flex gap-3 items-center text-xs font-bold text-[#1E293B]">
                <div className="w-8 h-8 rounded-xl bg-[#FFF0F2] flex items-center justify-center shrink-0">
                  <img
                    src="/assets/calenderSvgs/Time Circle.svg"
                    className="w-4 h-4"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-extrabold text-[#1E293B]">
                    Thursday, December 5 &nbsp;&bull;&nbsp; 12:00pm - 1:00pm
                  </p>
                  <span className="text-[10px] text-[#94A3B8] font-bold block mt-0.5">
                    Time zone - Does not repeat
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2 border-t border-[#F1F5F9]/60 text-xs font-extrabold">
              <button
                onClick={() => setShowEventPopup(false)}
                className="px-5 py-2.5 rounded-xl hover:bg-slate-50 text-[#64748B] transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => setShowEventPopup(false)}
                className="bg-[#5551FF] text-white px-6 py-2.5 rounded-xl shadow-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
