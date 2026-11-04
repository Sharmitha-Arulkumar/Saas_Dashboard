import React, { useState } from "react";

export default function Invoice() {
  // Main Data Matrix
  const [invoices, setInvoices] = useState([
    {
      id: "#876364",
      name: "Arrora gaur",
      email: "arroragaur@gmail.com",
      date: "12 Dec, 2020",
      status: "Complete",
      favorite: true,
      pic: "Person1.svg",
      selected: false,
    },
    {
      id: "#876123",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "Pending",
      favorite: true,
      pic: "Person2.svg",
      selected: false,
    },
    {
      id: "#876213",
      name: "Robert Bacins",
      email: "robertbacins@gmail.com",
      date: "09 Dec, 2020",
      status: "Complete",
      favorite: false,
      pic: "Person3.svg",
      selected: true,
    },
    {
      id: "#876987",
      name: "Bethany Jackson",
      email: "bethanyjackson@gmail.com",
      date: "09 Dec, 2020",
      status: "Cancel",
      favorite: false,
      pic: "Person4.svg",
      selected: true,
    },
    {
      id: "#871345",
      name: "Anne Jacob",
      email: "annejacob@gmail.com",
      date: "10 Dec, 2020",
      status: "Complete",
      favorite: false,
      pic: "Person5.svg",
      selected: false,
    },
    {
      id: "#872345",
      name: "Bethany jackson",
      email: "bethanyjackson@gmail.com",
      date: "10 Dec, 2020",
      status: "Pending",
      favorite: true,
      pic: "Person6.svg",
      selected: true,
    },
    {
      id: "#872346",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "Complete",
      favorite: false,
      pic: "Person7.svg",
      selected: false,
    },
    {
      id: "#873245",
      name: "Jhon Deo",
      email: "jhondeo32@gmail.com",
      date: "08 Dec, 2020",
      status: "Complete",
      favorite: true,
      pic: "Person8.svg",
      selected: false,
    },
    {
      id: "#876364",
      name: "Bethany jackson",
      email: "bethanyjackson@gmail.com",
      date: "02 Dec, 2020",
      status: "Cancel",
      favorite: true,
      pic: "Person9.svg",
      selected: false,
    },
    {
      id: "#878769",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "01 Dec, 2020",
      status: "Pending",
      favorite: false,
      pic: "Person10.svg",
      selected: true,
    },
  ]);

  // Unique open dropdown ID layer trigger
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleRowSelect = (index) => {
    const updated = [...invoices];
    updated[index].selected = !updated[index].selected;
    setInvoices(updated);
  };

  const statusPillStyles = {
    Complete: "bg-[#E6F4EA] text-green-600",
    Pending: "bg-[#FEF7E0] text-amber-500",
    Cancel: "bg-[#FCE8E6] text-rose-700",
  };

  return (
    <div className="space-y-6 text-left animate-fadeIn">
      {/* TOP HEADER CONTROLS BANNER MATRIX */}
      <div className="flex justify-between items-center bg-[#F8FAFC] pb-2">
        <h1 className="text-xl font-black text-[#1E293B] tracking-tight">
          Invoice List
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative max-w-xs">
            <img
              src="/src/assets/invoiceSvgs/Search.svg"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-40"
              alt="Search"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-white border border-[#F1F5F9] rounded-xl pl-10 pr-4 py-2 text-xs font-medium text-[#1E293B] focus:outline-none w-48 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
            />
          </div>
          <button className="bg-[#5551FF] hover:bg-[#5551FF]/95 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md shadow-[#5551FF]/10 transition-all flex items-center gap-2">
            <span>+ Add New</span>
          </button>
        </div>
      </div>

      {/* CORE DATA TABLE CONTAINER */}
      <div className="bg-white rounded-2xl border border-[#F1F5F9] shadow-[0_4px_25px_rgba(0,0,0,0.005)] overflow-x-auto">
        <table className="w-full text-left text-xs min-w-[900px] border-collapse">
          <thead>
            <tr className="text-[#94A3B8] border-b border-[#F1F5F9] font-bold select-none">
              <th className="py-4 pl-6 w-12">
                <input
                  type="checkbox"
                  className="rounded border-slate-200 text-[#5551FF] focus:ring-[#5551FF]"
                />
              </th>
              <th className="py-4 font-bold text-slate-400">
                Invoice Id <span className="text-[10px] ml-0.5">▼</span>
              </th>
              <th className="py-4 font-bold text-slate-400">
                Name <span className="text-[10px] ml-0.5">▼</span>
              </th>
              <th className="py-4 font-bold text-slate-400">
                Email <span className="text-[10px] ml-0.5">▼</span>
              </th>
              <th className="py-4 font-bold text-slate-400">
                Date <span className="text-[10px] ml-0.5">▼</span>
              </th>
              <th className="py-4 font-bold text-slate-400">
                Status <span className="text-[10px] ml-0.5">▼</span>
              </th>
              <th className="py-4 text-center font-bold text-slate-400 w-16"></th>
              <th className="py-4 pr-6 text-right font-bold text-slate-400 w-16">
                {" "}
                <img
                  src="/src/assets/invoiceSvgs/Delete.svg"
                  className="w-4 h-4 opacity-80 hover:opacity-100 cursor-pointer transition-opacity"
                  alt="Batch Delete"
                  title="Delete Selected"
                />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]/50 font-bold text-[#1E293B]">
            {invoices.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors ${row.selected ? "bg-[#F4F4FF]/30" : "hover:bg-[#F8FAFC]/40"}`}
              >
                {/* Row Checkbox Selector */}
                <td className="py-3.5 pl-6">
                  <input
                    type="checkbox"
                    checked={row.selected}
                    onChange={() => toggleRowSelect(idx)}
                    className="rounded border-slate-200 text-[#5551FF] focus:ring-[#5551FF] cursor-pointer"
                  />
                </td>

                {/* Invoice ID */}
                <td className="py-3.5 font-medium text-[#64748B]">{row.id}</td>

                {/* Profile Pic & Name */}
                <td className="py-3.5">
                  <div className="flex items-center gap-3">
                    <img
                      src={`/src/assets/invoiceSvgs/${row.pic}`}
                      className="w-8 h-8 rounded-full border border-[#F1F5F9] object-cover bg-slate-50 shrink-0"
                      alt=""
                    />
                    <span className="font-extrabold text-[#1E293B] tracking-tight">
                      {row.name}
                    </span>
                  </div>
                </td>

                {/* Email Address */}
                <td className="py-3.5">
                  <div className="flex items-center gap-2">
                    <img
                      src="/src/assets/invoiceSvgs/Mail.svg"
                      className="w-3.5 h-3.5 opacity-40 shrink-0"
                      alt=""
                    />
                    <span className="font-semibold text-[#64748B]">
                      {row.email}
                    </span>
                  </div>
                </td>

                {/* Date Created */}
                <td className="py-3.5">
                  <div className="flex items-center gap-2">
                    <img
                      src="/src/assets/invoiceSvgs/Calendar.svg"
                      className="w-3.5 h-3.5 shrink-0"
                      alt=""
                    />
                    <span className="font-medium text-[#64748B]">
                      {row.date}
                    </span>
                  </div>
                </td>

                {/* Status Badge Chips */}
                <td className="py-3.5">
                  <span
                    className={`px-4 py-1.5 rounded-full text-[11px] font-black inline-block min-w-[84px] text-center ${statusPillStyles[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>

                {/* Favorite Star Rating Flag Indicator */}
                <td className="py-3.5 text-center">
                  <button className="focus:outline-none transform active:scale-90 transition-transform">
                    <img
                      src={
                        row.favorite
                          ? "/src/assets/invoiceSvgs/Star.svg"
                          : "/src/assets/invoiceSvgs/Star.svg"
                      }
                      className={`w-3.5 h-3.5 mx-auto ${row.favorite ? "brightness-100" : "opacity-30"}`}
                      alt="Favorite"
                    />
                  </button>
                </td>
                {/* Interactive Action Menu Dropdown List */}
                <td className="py-3.5 pr-6 text-right relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(activeDropdown === idx ? null : idx);
                    }}
                    className="p-1 rounded-lg hover:bg-slate-100 transition-colors inline-block focus:outline-none"
                  >
                    <img
                      src="/src/assets/invoiceSvgs/3dots.svg"
                      className="w-4 h-4 opacity-40"
                      alt="Actions"
                    />
                  </button>

                  {/* Dropdown Box Matching your precise layout overlay */}
                  {activeDropdown === idx && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setActiveDropdown(null)}
                      />
                      <div className="absolute right-6 top-12 bg-white border border-[#F1F5F9] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-2 w-28 text-left z-20 animate-scaleUp">
                        <button
                          onClick={() => setActiveDropdown(null)}
                          className="w-full px-4 py-2 hover:bg-[#F8FAFC] text-[11px] font-bold text-indigo-400 flex items-center gap-2"
                        >
                          <img
                            src="/src/assets/invoiceSvgs/Edit.svg"
                            className="w-3 h-3 opacity-80"
                            alt="Edit"
                          />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => {
                            const filtered = invoices.filter(
                              (_, i) => i !== idx,
                            );
                            setInvoices(filtered);
                            setActiveDropdown(null);
                          }}
                          className="w-full px-4 py-2 hover:bg-rose-50 text-[11px] font-bold text-rose-500 flex items-center gap-2 border-t border-[#F1F5F9]/50"
                        >
                          <img
                            src="/src/assets/invoiceSvgs/Delete.svg"
                            className="w-3 h-3 fill-rose-500"
                            alt="Delete"
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
    </div>
  );
}
