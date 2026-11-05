import React from "react";

export default function Dashboard() {
  const metrics = [
    {
      label: "Save Products",
      value: "178+",
      icon: "Heart.svg",
      bg: "bg-[#5551FF]/5",
      iconColor:
        "brightness-0 saturate-100 invert-[34%] sepia-[90%] saturate-[3240%] hue-rotate-[228%] brightness-[102%] contrast-[101%]",
    },
    {
      label: "Stock Products",
      value: "20+",
      icon: "Game.svg",
      bg: "bg-[#FFB020]/5",
    },
    {
      label: "Sales Products",
      value: "190+",
      icon: "Bag.svg",
      bg: "bg-[#FF5A79]/5",
    },
    {
      label: "Job Application",
      value: "12+",
      icon: "Work.svg",
      bg: "bg-[#7066F0]/5",
    },
  ];

  const recentOrders = [
    {
      id: "#976364",
      name: "Camera Lens",
      price: "$178",
      qty: "325",
      amount: "$1,46,660",
      icon: "Camera Lens.svg",
    },
    {
      id: "#976368",
      name: "Black Sleep Dress",
      price: "$14",
      qty: "53",
      amount: "$46,660",
      icon: "Black Dress.svg",
    },
    {
      id: "#976412",
      name: "Argan Oil",
      price: "$21",
      qty: "78",
      amount: "$3,46,676",
      icon: "Argan Oil.svg",
    },
    {
      id: "#976621",
      name: "EAU DE Parfum",
      price: "$32",
      qty: "98",
      amount: "$3,46,981",
      icon: "EAU DE Parfum.svg",
    },
  ];

  return (
    <div className="space-y-6 text-left animate-fadeIn">
      {/* INTEGRATED INTEGRAL MAIN TOPBAR DROPDOWN MATRIX */}
      <div className="flex justify-between items-center bg-[#F8FAFC] pb-4">
        <h1 className="text-xl font-black text-[#1E293B] tracking-tight">
          Dashboard
        </h1>
        <div className="flex items-center gap-3">
          <div className="bg-white px-4 py-2 rounded-xl border border-[#F1F5F9] shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-xs font-bold text-[#64748B] flex items-center gap-2 cursor-pointer select-none">
            <span>10-06-2021</span>{" "}
            <span className="text-[10px] text-slate-400 font-normal">▼</span>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border border-[#F1F5F9] shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-xs font-bold text-[#64748B] flex items-center gap-2 cursor-pointer select-none">
            <span>10-10-2021</span>{" "}
            <span className="text-[10px] text-slate-400 font-normal">▼</span>
          </div>
        </div>
      </div>

      {/* METRIC STRIPS CARD ROWS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-[#F1F5F9] shadow-[0_4px_25px_rgba(0,0,0,0.005)] flex items-center gap-4"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${card.bg}`}
            >
              <img
                src={`/assets/dashboardSvgs/${card.icon}`}
                className={`w-5 h-5 object-contain ${card.iconColor || ""}`}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#1E293B] tracking-tight">
                {card.value}
              </h3>
              <p className="text-[11px] text-[#64748B] font-bold mt-0.5">
                {card.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* PRIMARY GRAPHICS CHARTS GRID SCREEN FRAME */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COMPACT REPORTS SPLINE CHART */}
        <div className="bg-white p-6 rounded-2xl border border-[#F1F5F9] shadow-[0_4px_20px_rgba(0,0,0,0.005)] lg:col-span-2 relative flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-[#1E293B]">Reports</h3>
            <img
              src="/assets/analyticsSvgs/3dots.svg"
              className="w-4 h-4 cursor-pointer opacity-40"
              alt=""
            />
          </div>

          <div className="relative h-56 w-full flex flex-col justify-end">
            {/* Native Precision SVG Vector Graph Layer */}
            <div className="absolute inset-0 z-0">
              {/* Y-Axis Guideline Rules */}
              {[100, 80, 60, 40, 20, 0].map((val) => (
                <div
                  key={val}
                  className="absolute w-full border-t border-slate-100/60 flex items-center"
                  style={{ bottom: `${val}%` }}
                >
                  <span className="text-[9px] text-slate-300 font-bold -mt-2 absolute -left-1">
                    {val}
                  </span>
                </div>
              ))}

              {/* Double-Wave Continuous Spline Curve */}
              <svg
                className="absolute bottom-0 left-0 w-full h-[80%] overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A09EFF" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#A09EFF" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,55 C 10,25 20,60 30,35 C 40,10 50,85 60,65 C 70,45 80,10 90,40 C 95,55 100,20 100,20 L 100,100 L 0,100 Z"
                  fill="url(#areaGradient)"
                />
                <path
                  d="M 0,55 C 10,25 20,60 30,35 C 40,10 50,85 60,65 C 70,45 80,10 90,40 C 95,55 100,20 100,20"
                  fill="none"
                  stroke="#5551FF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                {/* Visual Intersect Indicator Nodes */}
                <circle
                  cx="11.5"
                  cy="39"
                  r="2.5"
                  fill="#5551FF"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle
                  cx="38"
                  cy="18"
                  r="2.5"
                  fill="#5551FF"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle
                  cx="56.5"
                  cy="71"
                  r="2.5"
                  fill="#5551FF"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle
                  cx="73"
                  cy="27"
                  r="2.5"
                  fill="#5551FF"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Sharp Centered Popover Tooltip Callout Node (Locked over 02am timestamp) */}
            <div className="absolute top-[22%] left-[34%] bg-[#1E293B] text-white px-3 py-1.5 rounded-xl shadow-xl font-bold text-center z-10 text-[11px]">
              <span className="text-slate-400 block text-[9px] font-medium mb-0.5">
                Sales
              </span>
              2,678
              <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#1E293B] rotate-45" />
            </div>

            {/* Bottom Timeline Scale Labels */}
            <div className="flex justify-between items-center text-[10px] text-[#64748B] font-bold z-10 pt-2 border-t border-[#F1F5F9] w-full px-1">
              {[
                "10am",
                "11am",
                "12am",
                "01am",
                "02am",
                "03am",
                "04am",
                "05am",
                "06am",
                "07am",
              ].map((t, idx) => (
                <span key={idx} className="w-full text-center">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ANALYTICS SEGMENT PROGRESS GAUGE FRAME */}
        <div className="bg-white p-6 rounded-2xl border border-[#F1F5F9] shadow-[0_4px_20px_rgba(0,0,0,0.005)] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-sm text-[#1E293B]">Analytics</h3>
            <img
              src="/assets/analyticsSvgs/3dots.svg"
              className="w-4 h-4 cursor-pointer opacity-40"
              alt=""
            />
          </div>

          <div className="flex justify-center items-center my-auto relative pt-4">
            <div className="w-44 h-44 flex flex-col items-center justify-center relative">
              {/* Balanced Multi-Segment Circle Arcs extracted from Design */}
              <svg
                className="absolute inset-0 w-full h-full transform -rotate-[100deg]"
                viewBox="0 0 36 36"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="14.5"
                  fill="none"
                  stroke="#F1F5F9"
                  strokeWidth="3"
                />
                {/* Sale Segment (Blue) */}
                <circle
                  cx="18"
                  cy="18"
                  r="14.5"
                  fill="none"
                  stroke="#4B49FF"
                  strokeWidth="3"
                  strokeDasharray="38 100"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />
                {/* Distribute Segment (Yellow) */}
                <circle
                  cx="18"
                  cy="18"
                  r="14.5"
                  fill="none"
                  stroke="#FFC120"
                  strokeWidth="3"
                  strokeDasharray="26 100"
                  strokeDashoffset="-42"
                  strokeLinecap="round"
                />
                {/* Return Segment (Coral) */}
                <circle
                  cx="18"
                  cy="18"
                  r="14.5"
                  fill="none"
                  stroke="#FF6B85"
                  strokeWidth="3"
                  strokeDasharray="20 100"
                  strokeDashoffset="-72"
                  strokeLinecap="round"
                />
              </svg>

              <h2 className="text-3xl font-black text-[#1E293B] tracking-tight">
                80%
              </h2>
              <span className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider mt-0.5">
                Transactions
              </span>
            </div>
          </div>

          {/* Color Indicators Map Legend */}
          <div className="flex justify-center gap-5 text-[11px] font-bold text-[#64748B] pt-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4B49FF]" /> Sale
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC120]" />{" "}
              Distribute
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B85]" /> Return
            </div>
          </div>
        </div>
      </div>

      {/* DATA ROW GRID BLOCK */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* RECENT ORDERS TABLE VIEW */}
        <div className="bg-white p-6 rounded-2xl border border-[#F1F5F9] shadow-[0_4px_20px_rgba(0,0,0,0.005)] lg:col-span-2 overflow-x-auto">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-sm text-[#1E293B]">Recent Orders</h3>
            <img
              src="/assets/analyticsSvgs/3dots.svg"
              className="w-4 h-4 cursor-pointer opacity-40"
              alt=""
            />
          </div>
          <table className="w-full text-left text-xs min-w-[550px]">
            <thead>
              <tr className="text-[#64748B] border-b border-[#F1F5F9] font-bold">
                <th className="pb-3.5 font-semibold text-slate-400">
                  Tracking no
                </th>
                <th className="pb-3.5 font-semibold text-slate-400">
                  Product Name
                </th>
                <th className="pb-3.5 font-semibold text-slate-400">Price</th>
                <th className="pb-3.5 font-semibold text-slate-400">
                  Total Order
                </th>
                <th className="pb-3.5 text-right font-semibold text-slate-400">
                  Total Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9]/40 font-bold text-[#1E293B]">
              {recentOrders.map((order, i) => (
                <tr key={i} className="hover:bg-[#F8FAFC]/40 transition-colors">
                  <td className="py-2 text-[#64748B] font-medium">
                    {order.id}
                  </td>
                  <td className="py-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#F1F5F9] flex items-center justify-center p-1.5 shrink-0">
                      <img
                        src={`/assets/dashboardSvgs/${order.icon}`}
                        className="w-full h-full object-contain"
                        alt=""
                      />
                    </div>
                    <span className="font-bold text-[#1E293B]">
                      {order.name}
                    </span>
                  </td>
                  <td className="py-2 text-[#64748B] font-semibold">
                    {order.price}
                  </td>
                  <td className="py-2">
                    <span className="bg-[#5551FF]/5 text-[#5551FF] px-3 py-1 rounded-md text-[10px] font-black">
                      {order.qty}
                    </span>
                  </td>
                  <td className="py-2 text-right font-black text-[#1E293B]">
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TOP SELLING PRODUCTS RATINGS MODULE */}
        <div className="bg-white p-6 rounded-2xl border border-[#F1F5F9] shadow-[0_4px_20px_rgba(0,0,0,0.005)]">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-sm text-[#1E293B]">
              Top selling Products
            </h3>
            <img
              src="/assets/analyticsSvgs/3dots.svg"
              className="w-4 h-4 cursor-pointer opacity-40"
              alt=""
            />
          </div>
          <div className="space-y-4">
            {[
              {
                name: "NIKE Shoes Black Pattern",
                price: "$87",
                img: "NIKE Shoe.svg",
              },
              { name: "iPhone 12", price: "$987", img: "iPhone-12.svg" },
            ].map((product, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-2.5 rounded-xl border border-[#F1F5F9] hover:bg-[#F8FAFC] transition-all"
              >
                <div className="w-18 h-18 bg-[#F8FAFC] rounded-xl border border-[#F1F5F9] flex items-center justify-center p-2 shrink-0">
                  <img
                    src={`/assets/dashboardSvgs/${product.img}`}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-black text-[#1E293B] truncate mb-0.5">
                    {product.name}
                  </h4>
                  <div className="flex gap-0.5 p-4 mb-1.5">
                    {[...Array(5)].map((_, s) => (
                      <img
                        key={s}
                        src="/assets/dashboardSvgs/Star.svg"
                        className="w-2.5 h-2.5"
                        alt=""
                      />
                    ))}
                  </div>
                  <p className="text-xs font-black text-[#1E293B]">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
