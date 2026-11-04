import React, { useState } from "react";

export default function Schedule() {
  // Navigation states between 'Schedule List' framework and 'Task Preview' view layers
  const [currentViewMode, setCurrentViewMode] = useState("ListShell"); // 'ListShell' or 'TaskPreview'
  const [activeKanbanTab, setActiveKanbanTab] = useState("Board");

  // 1. DATA CARD MATRICES MAPPING THE DESIGN TOKENS
  const scheduleRows = [
    {
      date: "12 Dec, 2021",
      time: "10.15AM",
      loc: "Office Meeting",
      bg: "bg-[#EEEDFF] text-[#5551FF]",
    },
    {
      date: "10 Dec, 2021",
      time: "11.20AM",
      loc: "Home",
      bg: "bg-[#E6F4EA] text-[#137333]",
    },
    {
      date: "09 Dec, 2021",
      time: "11.45AM",
      loc: "Friends Zone",
      bg: "bg-[#FEF7E0] text-[#B06000]",
    },
    {
      date: "08 Dec, 2021",
      time: "12.15PM",
      loc: "Office Meeting",
      bg: "bg-[#EEEDFF] text-[#5551FF]",
    },
    {
      date: "07 Dec, 2021",
      time: "01.20PM",
      loc: "Home",
      bg: "bg-[#E6F4EA] text-[#137333]",
    },
    {
      date: "05 Dec, 2021",
      time: "10.15AM",
      loc: "Meeting Outside",
      bg: "bg-[#FCE8E6] text-[#C5221F]",
    },
    {
      date: "04 Dec, 2021",
      time: "11.15AM",
      loc: "Office Meeting",
      bg: "bg-[#EEEDFF] text-[#5551FF]",
    },
    {
      date: "04 Dec, 2021",
      time: "01.25PM",
      loc: "Home",
      bg: "bg-[#E6F4EA] text-[#137333]",
    },
    {
      date: "02 Dec, 2021",
      time: "10.15AM",
      loc: "Friends",
      bg: "bg-[#FEF7E0] text-[#B06000]",
    },
    {
      date: "01 Dec, 2021",
      time: "04.30PM",
      loc: "Meeting Outside",
      bg: "bg-[#FCE8E6] text-[#C5221F]",
    },
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

  const kanbanColumns = {
    ToDo: [
      {
        title: "Dashboard Design",
        priority: "Low",
        priorityBg: "bg-[#FFEDED] text-[#FF5A79]",
        status: "On Track",
        statusBg: "bg-[#FFF7E6] text-[#FFB020]",
        desc: "Discussion for management dashboard ui design",
        people: "GroupPeople1.svg",
        completed: false,
      },
      {
        title: "Landing page Design",
        priority: "Medium",
        priorityBg: "bg-[#FFF7E6] text-[#FFB020]",
        status: "At risk",
        statusBg: "bg-[#FFEDED] text-[#FF5A79]",
        desc: "Discussion for management dashboard ui design",
        people: "GroupPeople2.svg",
        completed: false,
      },
      {
        title: "E-Shop Mobile App",
        priority: "High",
        priorityBg: "bg-[#EBF3FF] text-[#5551FF]",
        status: "",
        statusBg: "",
        desc: "Discussion for management dashboard ui design",
        people: "GroupPeople1.svg",
        completed: false,
      },
      {
        title: "Dashboard Design",
        priority: "Low",
        priorityBg: "bg-[#FFEDED] text-[#FF5A79]",
        status: "On Track",
        statusBg: "bg-[#FFF7E6] text-[#FFB020]",
        desc: "Discussion for management dashboard ui design",
        people: "GroupPeople2.svg",
        completed: false,
      },
    ],
    InProgress: [
      {
        title: "Dashboard Design",
        priority: "High",
        priorityBg: "bg-[#EBF3FF] text-[#5551FF]",
        status: "On Track",
        statusBg: "bg-[#FFF7E6] text-[#FFB020]",
        desc: "Discussion for management dashboard ui design",
        people: "GroupPeople2.svg",
        completed: true,
      },
      {
        title: "Landing page Design",
        priority: "Low",
        priorityBg: "bg-[#FFEDED] text-[#FF5A79]",
        status: "",
        statusBg: "",
        desc: "Discussion for management dashboard ui design",
        images: ["LandingPageImg1.svg", "LandingPageImg2.svg"],
        completed: true,
      },
      {
        title: "E-Shop Mobile App",
        priority: "Low",
        priorityBg: "bg-[#FFEDED] text-[#FF5A79]",
        status: "",
        statusBg: "",
        desc: "Discussion for management dashboard ui design",
        completed: false,
      },
    ],
    InReview: [
      {
        title: "Dashboard Design",
        priority: "Medium",
        priorityBg: "bg-[#FFF7E6] text-[#FFB020]",
        status: "On Track",
        statusBg: "bg-[#FFF7E6] text-[#FFB020]",
        desc: "Discussion for management dashboard ui design",
        image: "DashboardImg1.svg",
        completed: true,
      },
      {
        title: "E-Shop Mobile App",
        priority: "Low",
        priorityBg: "bg-[#FFEDED] text-[#FF5A79]",
        status: "",
        statusBg: "",
        desc: "Discussion for management dashboard ui design",
        images: ["DashboardImg1.svg", "DashboardImg2.svg"],
        completed: true,
      },
    ],
    Done: [
      {
        title: "Dashboard Design",
        priority: "High",
        priorityBg: "bg-[#EBF3FF] text-[#5551FF]",
        status: "On Track",
        statusBg: "bg-[#FFF7E6] text-[#FFB020]",
        desc: "Discussion for management dashboard ui design",
        images: ["DashboardImg1.svg", "DashboardImg2.svg"],
        completed: true,
      },
    ],
  };

  return (
    <div className="space-y-6 text-left animate-fadeIn">
      {/* VIEWPORT 1: SCHEDULE LIST */}
      {currentViewMode === "ListShell" && (
        <div className="space-y-5">
          {/* Top Header Row Controls */}
          <div className="flex justify-between items-center pb-2">
            <h1 className="text-xl font-black text-[#1E293B] tracking-tight">
              Schedule List
            </h1>
            <button className="bg-[#5551FF] hover:bg-[#5551FF]/95 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all">
              + Add New
            </button>
          </div>

          {/* Core Dashboard Split Grid layout */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Side Control Block Panel */}
            <div className="xl:col-span-4 bg-white border border-[#F1F5F9] rounded-2xl p-5 space-y-6 shadow-[0_4px_25px_rgba(0,0,0,0.005)]">
              <button className="w-full bg-[#5551FF] hover:bg-[#5551FF]/95 text-white text-xs font-extrabold py-3 rounded-xl shadow-md flex items-center justify-center gap-2">
                <span>+ Create Schedule</span>
              </button>

              {/* Mini Calendar Array Frame */}
              <div className="space-y-3 border-b border-[#F1F5F9] pb-5">
                <div className="flex justify-between items-center text-xs font-black text-[#1E293B]">
                  <span>December 2, 2021</span>
                  <div className="flex gap-3 text-slate-300 font-normal">
                    <span className="cursor-pointer hover:text-slate-600">
                      ◀
                    </span>
                    <span className="cursor-pointer hover:text-slate-600">
                      ▶
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-y-2 text-center text-[10px] font-bold text-[#64748B]">
                  {["S", "S", "M", "T", "W", "T", "F"].map((day, idx) => (
                    <span key={idx} className="text-[#94A3B8] font-medium">
                      {day}
                    </span>
                  ))}
                  {[
                    28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                    30, 31, 1, 2,
                  ].map((num, i) => (
                    <span
                      key={i}
                      className={`py-1 rounded-lg ${num === 2 && i === 4 ? "bg-[#5551FF] text-white font-black" : "hover:bg-[#F8FAFC]"} ${i < 3 || i > 33 ? "text-slate-300 font-normal" : "text-[#1E293B]"}`}
                    >
                      {num}
                    </span>
                  ))}
                </div>
              </div>

              {/* People Allocation Frame */}
              <div className="space-y-4">
                <h3 className="text-xs font-black text-[#1E293B]">People</h3>
                <div className="relative">
                  <img
                    src="/src/assets/scheduleSvgs/Search.svg"
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
                        src={`/src/assets/scheduleSvgs/${person.pic}`}
                        className="w-8 h-8 rounded-full border border-[#F1F5F9] bg-slate-50 object-cover"
                        alt=""
                      />
                      <div className="min-w-0 flex-1 text-left">
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

              {/* INTERACTIVE LINK TRIGGERS DYNAMIC KANBAN PANELS STATE SWITCH */}
              <div className="text-center pt-2">
                <span
                  onClick={() => setCurrentViewMode("TaskPreview")}
                  className="text-xs font-extrabold text-[#5551FF] cursor-pointer hover:underline underline-offset-2 tracking-wide"
                >
                  My Schedule
                </span>
              </div>
            </div>

            {/* Right Tabular Framework Listing Container */}
            <div className="xl:col-span-8 bg-white border border-[#F1F5F9] rounded-2xl overflow-x-auto shadow-[0_4px_25px_rgba(0,0,0,0.005)]">
              <table className="w-full text-left text-xs min-w-[600px] border-collapse">
                <thead>
                  <tr className="text-[#94A3B8] border-b border-[#F1F5F9] font-bold select-none">
                    <th className="py-4 pl-6 w-12">
                      <input
                        type="checkbox"
                        className="rounded text-[#5551FF]"
                      />
                    </th>
                    <th className="py-4 font-bold text-slate-400">
                      Date <span className="text-[10px] ml-0.5">▼</span>
                    </th>
                    <th className="py-4 font-bold text-slate-400">
                      Time <span className="text-[10px] ml-0.5">▼</span>
                    </th>
                    <th className="py-4 font-bold text-slate-400">
                      Location <span className="text-[10px] ml-0.5">▼</span>
                    </th>
                    <th className="py-4 w-12"></th>
                    <th className="py-4 pr-6 text-right w-12"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]/50 font-bold text-[#1E293B]">
                  {scheduleRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#F8FAFC]/40 transition-colors"
                    >
                      <td className="py-4 pl-6">
                        <input
                          type="checkbox"
                          className="rounded text-[#5551FF]"
                        />
                      </td>
                      <td className="py-4 flex items-center gap-2.5">
                        <img
                          src="/src/assets/scheduleSvgs/Calendar.svg"
                          className="w-4 h-4 opacity-40 shrink-0"
                          alt=""
                        />
                        <span className="text-[#64748B] font-medium">
                          {row.date}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <img
                            src="/src/assets/scheduleSvgs/Time Circle.svg"
                            className="w-4 h-4 opacity-40 shrink-0"
                            alt=""
                          />
                          <span className="text-[#64748B] font-medium">
                            {row.time}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div
                          className={`px-3 py-1 rounded-full text-[11px] font-extrabold inline-flex items-center gap-1.5 ${row.bg}`}
                        >
                          <img
                            src="/src/assets/scheduleSvgs/Location.svg"
                            className="w-3 h-3 current-color"
                            alt=""
                          />
                          {row.loc}
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        <img
                          src="/src/assets/scheduleSvgs/Edit.svg"
                          className="w-4 h-4 opacity-30 cursor-pointer mx-auto hover:opacity-60"
                          alt=""
                        />
                      </td>
                      <td className="py-4 pr-6 text-right">
                        <img
                          src="/src/assets/scheduleSvgs/Delete.svg"
                          className="w-4 h-4 opacity-30 cursor-pointer inline hover:opacity-60"
                          alt=""
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* LAYOUT 2: TASK PREVIEW KANBAN */}
      {currentViewMode === "TaskPreview" && (
        <div className="space-y-6">
          {/* Top Header Filter Control Matrix */}
          <div className="flex justify-between items-center bg-[#F8FAFC] pb-1">
            <h1 className="text-xl font-black text-[#1E293B] tracking-tight">
              Task Preview
            </h1>
            <button className="bg-[#5551FF] text-white text-xs font-black px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-sm">
              <span>Filter</span>{" "}
              <img
                src="/src/assets/scheduleSvgs/Filter.svg"
                className="w-3 h-3 brightness-0 invert opacity-100"
                alt=""
              />
            </button>
          </div>

          {/* View Tab Selector Strip */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-3 rounded-2xl border border-[#F1F5F9]">
            <div className="flex bg-[#F8FAFC] p-1 rounded-xl text-xs font-bold text-[#64748B]">
              {["List", "Board", "Timeline"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveKanbanTab(tab)}
                  className={`px-4 py-1.5 rounded-lg transition-all ${activeKanbanTab === tab ? "bg-[#5551FF] text-white shadow-xs" : "hover:text-[#1E293B]"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="relative w-48 max-w-full">
              <img
                src="/src/assets/scheduleSvgs/Search.svg"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-40"
                alt=""
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl pl-9 pr-3 py-1.5 text-xs font-medium"
              />
            </div>
          </div>

          {/* Primary Kanban Column Grid */}
          {activeKanbanTab === "Board" ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start overflow-x-auto pb-4">
                {Object.entries(kanbanColumns).map(([colName, cards]) => (
                  <div key={colName} className="space-y-4 min-w-[250px]">
                    {/* Column Header Title Text */}
                    <div className="flex justify-between items-center text-xs font-black text-[#1E293B] border-b border-slate-100 pb-2">
                      <span className="uppercase tracking-wide">
                        {colName === "ToDo"
                          ? "ToDo"
                          : colName === "InProgress"
                            ? "In Progress"
                            : colName === "InReview"
                              ? "In Review"
                              : "Done"}
                      </span>
                      <span className="bg-slate-100 text-[#64748B] px-2 py-0.5 rounded-md text-[10px]">
                        {cards.length}
                      </span>
                    </div>

                    {/* Vertical Stream of Project Cards */}
                    <div className="space-y-4">
                      {cards.map((card, cIdx) => (
                        <div
                          key={cIdx}
                          className="bg-white border border-[#F1F5F9] rounded-2xl p-4 space-y-3 shadow-[0_2px_12px_rgba(0,0,0,0.005)] relative text-left hover:border-slate-300 transition-colors"
                        >
                          {/* Card Title Row with Checked State Indicators */}
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2 min-w-0">
                              <span
                                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 cursor-pointer ${card.completed ? "bg-[#5551FF] border-[#5551FF]" : "border-slate-300 bg-white"}`}
                              >
                                {card.completed && (
                                  <span className="text-white text-[8px]">
                                    ✓
                                  </span>
                                )}
                              </span>
                              <h4 className="text-xs font-black text-[#1E293B] truncate">
                                {card.title}
                              </h4>
                            </div>
                            <img
                              src="/src/assets/scheduleSvgs/3dots.svg"
                              className="w-3.5 h-3.5 opacity-30 cursor-pointer shrink-0 mt-0.5"
                              alt=""
                            />
                          </div>

                          {/* Attribute Priority Tag Indicators */}
                          <div className="flex gap-2">
                            <span
                              className={`px-2.5 py-0.5 rounded-md text-[9px] font-black tracking-wide ${card.priorityBg}`}
                            >
                              {card.priority}
                            </span>
                            {card.status && (
                              <span
                                className={`px-2.5 py-0.5 rounded-md text-[9px] font-black tracking-wide ${card.statusBg}`}
                              >
                                {card.status}
                              </span>
                            )}
                          </div>

                          {/* Core Task Description */}
                          <p className="text-[11px] text-[#64748B] font-medium leading-relaxed">
                            {card.desc}
                          </p>

                          {/* Optional Inline Image Block Attachments */}
                          {card.image && (
                            <div className="w-full h-24 bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl overflow-hidden">
                              <img
                                src={`/src/assets/scheduleSvgs/${card.image}`}
                                className="w-full h-full object-cover"
                                alt=""
                              />
                            </div>
                          )}

                          {/* DOUBLE IMAGE BLOCK */}
                          {card.images && card.images.length > 0 && (
                            <div className="grid grid-cols-2 gap-2">
                              {card.images.map((imgAsset, imgIdx) => (
                                <div
                                  key={imgIdx}
                                  className="w-full h-20 bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl overflow-hidden shadow-2xs"
                                >
                                  <img
                                    src={`/src/assets/scheduleSvgs/${imgAsset}`}
                                    className="w-full h-full object-cover"
                                    alt=""
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Card Footer Meta Row */}
                          <div className="flex justify-between items-center pt-2 border-t border-[#F1F5F9]/60 shrink-0">
                            {card.people ? (
                              <img
                                src={`/src/assets/scheduleSvgs/${card.people}`}
                                className="h-5 object-contain"
                                alt=""
                              />
                            ) : (
                              <div className="flex -space-x-1.5 overflow-hidden">
                                <img
                                  className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                                  src="/src/assets/scheduleSvgs/Person1.svg"
                                  alt=""
                                />
                                <img
                                  className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                                  src="/src/assets/scheduleSvgs/Person2.svg"
                                  alt=""
                                />
                              </div>
                            )}
                            <div className="flex gap-3 text-[10px] text-[#94A3B8] font-bold">
                              <span className="flex items-center gap-1">
                                <img
                                  src="/src/assets/scheduleSvgs/Chat.svg"
                                  className="w-3 h-3 opacity-40"
                                  alt=""
                                />{" "}
                                112
                              </span>
                              <span className="flex items-center gap-1">
                                <img
                                  src="/src/assets/scheduleSvgs/Heart.svg"
                                  className="w-3 h-3 opacity-40"
                                  alt=""
                                />{" "}
                                12k
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* INTEGRATED BOTTOM BACK NAVIGATION ACTION BUTTON LINK */}
              <div className="pt-4 border-t border-[#F1F5F9]">
                <button
                  onClick={() => setCurrentViewMode("ListShell")}
                  className="bg-white hover:bg-[#F8FAFC] text-[#5551FF] border border-[#F1F5F9] font-black text-xs px-6 py-2.5 rounded-xl shadow-xs transition-all active:scale-98"
                >
                  &lt;&lt; Back
                </button>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-xs font-bold text-[#64748B] border border-dashed border-[#F1F5F9] rounded-2xl bg-white shadow-3xs">
              Task Preview state wrapper template for layer subcomponent view
              mode: <strong>"{activeKanbanTab}" Matrix</strong>.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
