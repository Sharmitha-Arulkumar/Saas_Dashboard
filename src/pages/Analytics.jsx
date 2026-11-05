import React, { useState } from "react";

export default function Analytics() {
  // Master Customer List Data Matrix
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Deo",
      email: "johndoe2211@gmail.com",
      phone: "+33757005467",
      gender: "Male",
      pic: "Person1.svg",
    },
    {
      id: 2,
      name: "Shelby Goode",
      email: "shelbygoode481@gmail.com",
      phone: "+33757005467",
      gender: "Female",
      pic: "Person2.svg",
    },
    {
      id: 3,
      name: "Robert Bacins",
      email: "robertbacins4182@.com",
      phone: "+33757005467",
      gender: "Male",
      pic: "Person3.svg",
    },
    {
      id: 4,
      name: "John Carilo",
      email: "john carilo182@.com",
      phone: "+33757805467",
      gender: "Male",
      pic: "Person4.svg",
    },
    {
      id: 5,
      name: "Adriene Watson",
      email: "adrienewatson82@.com",
      phone: "+83757305467",
      gender: "Female",
      pic: "Person5.svg",
    },
    {
      id: 6,
      name: "Jhon Deo",
      email: "jhondeo24823@.com",
      phone: "+63475700546 tracking",
      gender: "Male",
      pic: "Person6.svg",
    },
    {
      id: 7,
      name: "Mark Ruffalo",
      email: "markruffalo3735@.com",
      phone: "+33757005467",
      gender: "Male",
      pic: "Person7.svg",
    },
    {
      id: 8,
      name: "Bethany Jackson",
      email: "bethanyjackson5@.com",
      phone: "+33757005467",
      gender: "Female",
      pic: "Person8.svg",
    },
    {
      id: 9,
      name: "Christine Huston",
      email: "christinehuston4@.com",
      phone: "+33757005467",
      gender: "Male",
      pic: "Person9.svg",
    },
    {
      id: 10,
      name: "Anne Jacob",
      email: "annejacob2@ummoh.com",
      phone: "+33757005467",
      gender: "Male",
      pic: "Person10.svg",
    },
    {
      id: 11,
      name: "James Mullican",
      email: "jamesmullican5346@.com",
      phone: "+33757005467",
      gender: "Male",
      pic: "Person11.svg",
    },
  ]);

  // View state metrics
  const [selectedCustomerId, setSelectedCustomerId] = useState(1);
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [showAddPanel, setShowAddPanel] = useState(false);

  // Active highlighted preview entity block reference
  const activeCustomer =
    customers.find((c) => c.id === selectedCustomerId) || customers[0];

  const genderBadgeStyles = {
    Male: "bg-[#EBF3FF] text-[#5551FF]",
    Female: "bg-[#FFF0F2] text-[#FF5A79]",
  };

  return (
    <div className="space-y-6 text-left relative min-h-[calc(100vh-120px)] animate-fadeIn">
      {/* MASTER PANEL HEADER STRIP CONTROLS */}
      <div className="flex justify-between items-center pb-2">
        <h1 className="text-xl font-black text-[#1E293B] tracking-tight">
          Customer List
        </h1>
        <button
          onClick={() => setShowAddPanel(true)}
          className="bg-[#5551FF] hover:bg-[#5551FF]/95 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md shadow-[#5551FF]/10 transition-all flex items-center gap-2"
        >
          <span>+ Add Customer</span>
        </button>
      </div>
      {/* CORE WORKSPACE TWO-COLUMN SPLIT GRID GRID FRAME */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: CUSTOMER DATA ROWS MATRIX */}
        <div className="xl:col-span-8 bg-white rounded-2xl border border-[#F1F5F9] shadow-[0_4px_25px_rgba(0,0,0,0.005)] overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[700px] border-collapse">
            <thead>
              <tr className="text-[#94A3B8] border-b border-[#F1F5F9] font-bold select-none">
                <th className="py-4 pl-6 font-bold text-slate-400">
                  Name <span className="text-[10px] ml-0.5">▼</span>
                </th>
                <th className="py-4 font-bold text-slate-400">
                  Email <span className="text-[10px] ml-0.5">▼</span>
                </th>
                <th className="py-4 font-bold text-slate-400">
                  Phone number <span className="text-[10px] ml-0.5">▼</span>
                </th>
                <th className="py-4 font-bold text-slate-400">
                  Gender <span className="text-[10px] ml-0.5">▼</span>
                </th>
                <th className="py-4 pr-6 text-right w-16"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9]/40 font-bold text-[#1E293B]">
              {customers.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => setSelectedCustomerId(row.id)}
                  className={`transition-colors cursor-pointer ${selectedCustomerId === row.id ? "bg-[#F4F4FF]/40" : "hover:bg-[#F8FAFC]/40"}`}
                >
                  {/* Name cell with picture */}
                  <td className="py-3 pl-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={`/assets/analyticsSvgs/${row.pic}`}
                        className="w-8 h-8 rounded-full border border-[#F1F5F9] object-cover bg-slate-50 shrink-0"
                        alt=""
                      />
                      <span className="font-extrabold text-[#1E293B] tracking-tight">
                        {row.name}
                      </span>
                    </div>
                  </td>

                  {/* Email address cell */}
                  <td className="py-3 font-medium text-[#64748B]">
                    {row.email}
                  </td>

                  {/* Phone cell */}
                  <td className="py-3 font-medium text-[#64748B]">
                    {row.phone}
                  </td>

                  {/* Gender pill capsule */}
                  <td className="py-3">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[11px] font-black inline-block min-w-[76px] text-center ${genderBadgeStyles[row.gender]}`}
                    >
                      {row.gender}
                    </span>
                  </td>

                  {/* Context menu drop toggle cell */}
                  <td
                    className="py-3 pr-6 text-right relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() =>
                        setActiveDropdownId(
                          activeDropdownId === row.id ? null : row.id,
                        )
                      }
                      className="p-1 rounded-lg hover:bg-slate-100 transition-colors inline-block focus:outline-none"
                    >
                      <img
                        src="/assets/analyticsSvgs/3dots.svg"
                        className="w-4 h-4 opacity-40"
                        alt=""
                      />
                    </button>

                    {/* Dynamic edit delete list popover box overlay */}
                    {activeDropdownId === row.id && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setActiveDropdownId(null)}
                        />
                        <div className="absolute right-6 top-10 bg-white border border-[#F1F5F9] rounded-xl shadow-lg py-1.5 w-24 text-left z-20 animate-scaleUp">
                          <button
                            onClick={() => setActiveDropdownId(null)}
                            className="w-full px-3 py-2 hover:bg-[#F8FAFC] text-[11px] font-bold text-[#64748B] flex items-center gap-2"
                          >
                            <img
                              src="/assets/analyticsSvgs/Edit.svg"
                              className="w-3 h-3 opacity-60"
                              alt=""
                            />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => {
                              setCustomers(
                                customers.filter((c) => c.id !== row.id),
                              );
                              setActiveDropdownId(null);
                            }}
                            className="w-full px-3 py-2 hover:bg-rose-50 text-[11px] font-bold text-rose-500 flex items-center gap-2 border-t border-[#F1F5F9]/50"
                          >
                            <img
                              src="/assets/analyticsSvgs/Delete.svg"
                              className="w-3 h-3"
                              alt=""
                            />
                            <span>Delete</span>
                          </button>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT COLUMN: DETAIL PREVIEW METRICS COMPONENT */}
        <div className="xl:col-span-4 space-y-5">
          {/* Card Frame Context Container Wrapper */}
          <div className="bg-white border border-[#F1F5F9] rounded-2xl p-6 text-center shadow-[0_4px_25px_rgba(0,0,0,0.005)] flex flex-col items-center space-y-5">
            <img
              src={`/assets/analyticsSvgs/${activeCustomer.pic}`}
              className="w-20 h-20 rounded-full border-2 border-[#F1F5F9] shadow-sm object-cover bg-slate-50"
              alt=""
            />
            <div>
              <h2 className="text-base font-black text-[#1E293B] tracking-tight">
                {activeCustomer.name}
              </h2>
              <p className="text-[11px] text-[#94A3B8] font-bold mt-0.5">
                UI/UX Designer
              </p>
            </div>

            {/* Profile Field Meta Listing Grid Rows */}
            <div className="w-full space-y-4 text-xs font-bold pt-3 border-t border-[#F1F5F9]/80 text-left">
              <h3 className="text-xs font-black text-[#1E293B]">
                Contact Info
              </h3>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9] flex items-center justify-center shrink-0">
                  <img
                    src="/assets/analyticsSvgs/Mail.svg"
                    className="w-3.5 h-3.5 opacity-50"
                    alt=""
                  />
                </div>
                <span className="text-[#64748B] font-semibold truncate">
                  {activeCustomer.email}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9] flex items-center justify-center shrink-0">
                  <img
                    src="/assets/analyticsSvgs/Call.svg"
                    className="w-3.5 h-3.5 opacity-50"
                    alt=""
                  />
                </div>
                <span className="text-[#64748B] font-semibold">
                  {activeCustomer.phone}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9] flex items-center justify-center shrink-0 mt-0.5">
                  <img
                    src="/assets/analyticsSvgs/Location.svg"
                    className="w-3.5 h-3.5 opacity-50"
                    alt=""
                  />
                </div>
                <p className="text-[#64748B] font-semibold leading-relaxed text-[11px]">
                  2239 Hog Camp Road
                  <br />
                  Schaumburg
                </p>
              </div>
            </div>

            {/* Performance Graphical Submodule Container */}
            <div className="w-full pt-4 border-t border-[#F1F5F9]/80 text-left space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-black text-[#1E293B]">
                  Performance
                </h3>
                <img
                  src="/assets/analyticsSvgs/3dots.svg"
                  className="w-3.5 h-3.5 opacity-30 cursor-pointer"
                  alt=""
                />
              </div>

              {/* Vector Bar Height Matrices Chart Graphic Block Frame */}
              <div className="h-32 w-full flex items-end justify-between relative px-2 pb-1 pt-6 text-[9px] font-bold text-[#94A3B8]">
                {/* Popover Bubble Callout Indicator node locked on February column axis */}
                <div className="absolute top-0 left-[12%] bg-[#FF5A79] text-white font-black text-[9px] px-2 py-0.5 rounded-md shadow-md shadow-[#FF5A79]/20 z-10">
                  2.35%
                  <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF5A79] rotate-45" />
                </div>

                {[
                  { m: "Jan", h: "h-12", bg: "bg-[#FF5A79]/10" },
                  { m: "Feb", h: "h-20", bg: "bg-[#FF5A79]" },
                  { m: "Mar", h: "h-16", bg: "bg-[#FF5A79]/10" },
                  { m: "Apr", h: "h-14", bg: "bg-[#FF5A79]/10" },
                  { m: "May", h: "h-22", bg: "bg-[#FF5A79]/10" },
                  { m: "Jun", h: "h-24", bg: "bg-[#FF5A79]/10" },
                ].map((bar, bIdx) => (
                  <div
                    key={bIdx}
                    className="flex flex-col items-center gap-1.5 w-6"
                  >
                    <div
                      className={`w-2.5 ${bar.h} ${bar.bg} rounded-full transition-all duration-300`}
                    />
                    <span className="text-[10px] tracking-tight">{bar.m}</span>
                  </div>
                ))}
              </div>

              {/* Radial Gauges Indicators Bottom Double Pane */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center relative mb-1.5">
                    <svg
                      className="absolute inset-0 w-full h-full transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="14.5"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="14.5"
                        fill="none"
                        stroke="#FFB020"
                        strokeWidth="2.5"
                        strokeDasharray="70 100"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-xs font-black text-[#1E293B]">
                      70%
                    </span>
                  </div>
                  <span className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider">
                    Target
                  </span>
                </div>

                <div className="bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center relative mb-1.5">
                    <svg
                      className="absolute inset-0 w-full h-full transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="14.5"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="14.5"
                        fill="none"
                        stroke="#5551FF"
                        strokeWidth="2.5"
                        strokeDasharray="60 100"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-xs font-black text-[#1E293B]">
                      60%
                    </span>
                  </div>
                  <span className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider">
                    Metrics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDE-OVER SHEET DRAWER: ADD CUSTOMER (image_Xk4l0V.png) */}

      {showAddPanel && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
          {/* Back shading area glass dismissal trigger */}
          <div
            className="absolute inset-0 bg-slate-900/15 backdrop-blur-3xs"
            onClick={() => setShowAddPanel(false)}
          />

          {/* Main Vertical Card Sheet Enclosure Form */}
          <div className="w-full max-w-sm bg-white h-full relative z-10 border-l border-[#F1F5F9] shadow-2xl p-6 flex flex-col justify-between animate-slideIn">
            <div className="space-y-6 flex-1 overflow-y-auto pr-1">
              {/* Header Title Close Row */}
              <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-4">
                <h3 className="font-bold text-[#1E293B] text-base">
                  Add Customer
                </h3>
                <button
                  onClick={() => setShowAddPanel(false)}
                  className="w-7 h-7 bg-[#FFF0F2] text-[#FF5A79] hover:opacity-90 rounded-full font-black text-xs flex items-center justify-center transition-opacity"
                >
                  ✕
                </button>
              </div>

              {/* Core Composition Input Input Grids */}
              <div className="space-y-4">
                {/* Visual Avatar Placeholder Box target */}
                <div className="flex justify-center py-2">
                  <div className="w-20 h-20 bg-[#F8FAFC] border-2 border-dashed border-[#E2E8F0] rounded-full flex flex-col items-center justify-center text-slate-400 hover:bg-[#F1F5F9] cursor-pointer transition-colors relative group">
                    <img
                      src="/assets/analyticsSvgs/Camera.svg"
                      className="w-5 h-5 opacity-40 group-hover:opacity-70"
                      alt=""
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-black text-[#64748B] uppercase block mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-black text-[#64748B] uppercase block mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Deo"
                    className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-black text-[#64748B] uppercase block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-black text-[#64748B] uppercase block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+33757005467"
                    className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-black text-[#64748B] uppercase block mb-1">
                    Gender
                  </label>
                  <select className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none appearance-none cursor-pointer">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Submit Trigger Footer Bottom Button */}
            <button
              onClick={() => setShowAddPanel(false)}
              className="w-full bg-[#5551FF] hover:bg-[#5551FF]/95 text-white font-extrabold py-3.5 rounded-xl text-xs shadow-md shadow-[#5551FF]/10 mt-4 transition-all active:scale-98"
            >
              Add Customer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
