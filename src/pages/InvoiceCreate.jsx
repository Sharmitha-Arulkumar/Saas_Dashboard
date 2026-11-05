import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InvoiceCreate() {
  const navigate = useNavigate();

  // Dynamic state matrix tracking product descriptors seamlessly
  const [items, setItems] = useState([
    { name: "ipod 2021", rate: 1000, qty: 10, amount: 10000 },
    { name: "Apple Mackbook", rate: 1500, qty: 10, amount: 150000 },
    { name: "Iphone 12", rate: 885, qty: 10, amount: 8850 },
  ]);

  const [form, setForm] = useState({
    invoiceId: "#876370",
    date: "01/12/2021",
    name: "Alison G.",
    email: "Example@gmail.com",
    address: "Street",
  });

  const subtotal = items.reduce((acc, curr) => acc + curr.amount, 0);
  const discount = 57.0;
  const total = subtotal - discount;

  return (
    <div className="space-y-6 text-left animate-fadeIn">
      {/* 1. FORM CANVAS HEADER TITLE SUB-TOOLBAR */}
      <div className="flex justify-between items-center bg-[#F8FAFC] pb-1 select-none">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/invoice")}
            className="text-xs font-bold text-[#5551FF] hover:underline"
          >
            ◀ Back to List
          </button>
        </div>
      </div>

      {/* 2. TWO-COLUMN SPLIT DESCRIPTOR PANEL ROW GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COMPONENT PANEL: LIVE FORMS EDITOR GRID */}
        <div className="lg:col-span-6 bg-white border border-[#F1F5F9] rounded-2xl p-6 space-y-6 shadow-[0_4px_25_rgba(0,0,0,0.005)]">
          <h2 className="text-base font-black text-[#1E293B] tracking-tight">
            Create New Invoice
          </h2>

          {/* Centered Avatar Image Upload Anchor Section */}
          <div className="flex justify-center py-2 select-none">
            <div className="w-24 h-24 bg-[#F8FAFC] rounded-full flex flex-col items-center justify-center relative border border-[#F1F5F9]">
              <img
                src="/assets/invoiceSvgs/Camera.svg"
                className="w-5 h-5 opacity-40"
                alt=""
              />
              <span className="absolute bottom-1 right-1 w-6 h-6 bg-[#1E293B] rounded-full border-2 border-white flex items-center justify-center cursor-pointer text-white text-[10px]">
                📷
              </span>
            </div>
          </div>

          {/* Form Matrix Form Container Grid Inputs */}
          <div className="grid grid-cols-2 gap-4 text-xs font-bold text-[#64748B]">
            <div>
              <label className="block mb-1.5 font-bold text-slate-400">
                Invoice Id
              </label>
              <input
                type="text"
                readOnly
                value={form.invoiceId}
                className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1.5 font-bold text-slate-400">
                Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl pl-4 pr-10 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none"
                />
                <img
                  src="/assets/invoiceSvgs/Calendar.svg"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block mb-1.5 font-bold text-slate-400">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
              />
            </div>
            <div>
              <label className="block mb-1.5 font-bold text-slate-400">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
              />
            </div>
            <div>
              <label className="block mb-1.5 font-bold text-slate-400">
                Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl pl-4 pr-10 py-2.5 text-xs font-semibold text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#5551FF]"
                />
                <img
                  src="/assets/invoiceSvgs/Location.svg"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Product Items Table Layout */}
          <div className="space-y-3.5 pt-2">
            <div className="flex justify-between items-center select-none">
              <h3 className="text-xs font-black text-[#1E293B]">
                Product Description
              </h3>
              <button className="w-6 h-6 bg-[#5551FF] text-white font-extrabold rounded-full flex items-center justify-center text-sm shadow-sm hover:opacity-95">
                +
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[400px]">
                <thead>
                  <tr className="text-slate-400 font-bold border-b border-[#F1F5F9]">
                    <th className="pb-2 font-semibold">Product Name</th>
                    <th className="pb-2 font-semibold">Rate</th>
                    <th className="pb-2 font-semibold">QTY</th>
                    <th className="pb-2 font-semibold">Amount</th>
                    <th className="pb-2 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]/30 font-bold text-[#1E293B]">
                  {items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="py-3 text-[#5551FF] font-extrabold">
                        {item.name}
                      </td>
                      <td className="py-3 text-[#1E293B] font-extrabold">
                        ${item.rate}
                      </td>
                      <td className="py-3 text-[#64748B] font-medium">
                        {item.qty} Pcs
                      </td>
                      <td className="py-3 text-[#22C55E] font-black">
                        ${item.amount.toLocaleString()}
                      </td>
                      <td className="py-3 text-right">
                        <img
                          onClick={() =>
                            setItems(items.filter((_, i) => i !== idx))
                          }
                          src="/assets/invoiceSvgs/Delete.svg"
                          className="w-4 h-4 opacity-40 cursor-pointer hover:opacity-100 transition-opacity ml-auto"
                          alt="Remove line"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Submissions Control Strip Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F1F5F9] font-extrabold text-xs">
            <button className="bg-white border border-[#F1F5F9] text-[#5551FF] py-3 rounded-xl hover:bg-slate-50 transition-colors">
              Send Invoice
            </button>
            <button
              onClick={() => navigate("/invoice")}
              className="bg-[#5551FF] hover:bg-[#5551FF]/95 text-white py-3 rounded-xl shadow-md shadow-[#5551FF]/10 transition-all active:scale-98"
            >
              Create Invoice
            </button>
          </div>
        </div>

        {/* RIGHT COMPONENT PANEL: INVOICE PRINT PREVIEW SIMULATOR */}
        <div className="lg:col-span-6 bg-white border border-[#F1F5F9] rounded-2xl p-6 space-y-6 shadow-[0_4px_25px_rgba(0,0,0,0.005)] min-h-[600px] relative">
          {/* Action Row containing layout utilities */}
          <div className="flex justify-between items-center select-none border-b border-[#F1F5F9] pb-4">
            <h2 className="text-base font-black text-[#1E293B] tracking-tight">
              Preview
            </h2>
            <div className="flex items-center gap-3">
              <button className="p-2 bg-[#F4F4FF] rounded-xl text-[#5551FF] hover:opacity-90 transition-opacity">
                <img
                  src="/assets/invoiceSvgs/Download.svg"
                  className="w-4 h-4 brightness-0 saturate-100 invert-[31%] sepia-[86%] saturate-[4124%] hue-rotate-[235%] brightness-[99%] contrast-[105%]"
                  alt="Download layout"
                />
              </button>
              <button className="p-2 bg-[#F4F4FF] rounded-xl text-[#5551FF] hover:opacity-90 transition-opacity">
                <img
                  src="/assets/invoiceSvgs/Print.svg"
                  className="w-4 h-4 brightness-0 saturate-100 invert-[31%] sepia-[86%] saturate-[4124%] hue-rotate-[235%] brightness-[99%] contrast-[105%]"
                  alt="Print document link"
                />
              </button>
            </div>
          </div>

          {/* Internal Target Document Area Paper Canvas Wrapper */}
          <div className="space-y-6 text-xs text-[#64748B] font-bold">
            {/* Header Identity Layout Box */}
            <div className="flex justify-between items-start pt-2">
              <div className="w-10 h-10 rounded-xl bg-[#5551FF] flex items-center justify-center p-2">
                <img
                  src="/assets/invoiceSvgs/InvoiceLogo.svg"
                  className="w-full h-full object-contain brightness-0 invert"
                  alt=""
                />
              </div>
              <div className="text-right">
                <h3 className="text-base font-black text-[#1E293B] tracking-tight">
                  Invoice
                </h3>
                <p className="text-[10px] text-slate-400 font-semibold mt-1">
                  INVOICE NO. &nbsp;
                  <span className="text-[#1E293B] font-bold">301-76321</span>
                </p>
                <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                  INVOICE DATE. &nbsp;
                  <span className="text-[#1E293B] font-bold">
                    January 12, 2021
                  </span>
                </p>
              </div>
            </div>

            {/* Entity Address Columns */}
            <div className="grid grid-cols-2 gap-4 text-[11px] leading-relaxed pt-2">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-wide block mb-1">
                  Recipient
                </span>
                <p className="font-extrabold text-[#1E293B]">JHON SMITH</p>
                <p className="font-semibold text-slate-500 mt-0.5">
                  4024 Liberty Avenue
                  <br />
                  Schaumburg, IL, CA
                  <br />
                  VAT ID: 12345678
                </p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-wide block mb-1">
                  Sender
                </span>
                <p className="font-extrabold text-[#1E293B]">
                  companyname@gmail.com
                </p>
                <p className="font-semibold text-slate-500 mt-0.5">
                  companyname@gmail.com
                  <br />
                  m. +536 714 535 8382
                </p>
              </div>
            </div>

            {/* Line Items Framework Matrix Listing */}
            <div className="pt-4 border-t border-[#F1F5F9]/60">
              <table className="w-full text-left text-[11px]">
                <thead>
                  <tr className="text-slate-400 font-bold border-b border-[#F1F5F9] pb-2">
                    <th className="pb-2 font-semibold">TASK DESCRIPTION</th>
                    <th className="pb-2 font-semibold">HOURS</th>
                    <th className="pb-2 font-semibold">RATE</th>
                    <th className="pb-2 text-right font-semibold">AMOUNT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]/30 font-bold text-[#1E293B]">
                  <tr className="font-bold">
                    <td className="py-3 text-[#1E293B]">Website redesign</td>
                    <td className="py-3 text-slate-500 font-medium">03</td>
                    <td className="py-3 text-slate-500 font-medium">15 USD</td>
                    <td className="py-3 text-right text-[#1E293B] font-extrabold">
                      930.00 USD
                    </td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-3 text-[#1E293B]">
                      Newsletter template design
                    </td>
                    <td className="py-3 text-slate-500 font-medium">23</td>
                    <td className="py-3 text-slate-500 font-medium">12 USD</td>
                    <td className="py-3 text-right text-[#1E293B] font-extrabold">
                      240.00 USD
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Dynamic Calculations Summary Stack Column */}
            <div className="w-64 ml-auto space-y-2.5 text-[11px] font-bold border-t border-[#F1F5F9] pt-4 text-left">
              <div className="flex justify-between text-slate-400">
                <span>SUBTOTAL</span>
                <span className="text-[#1E293B] font-black">
                  ${subtotal.toLocaleString()}.00 USD
                </span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>DISCOUNT 5%</span>
                <span className="text-[#FF5A79] font-black">
                  -${discount.toLocaleString()}.00 USD
                </span>
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-[#F1F5F9]/60 font-black">
                <span className="text-[#1E293B]">TOTAL</span>
                <span className="text-[#5551FF] font-black text-base">
                  ${total.toLocaleString()}.00 USD
                </span>
              </div>
            </div>

            {/* Legal Footnote Disclaimer */}
            <div className="text-[10px] text-slate-400 font-medium leading-relaxed pt-6 border-t border-[#F1F5F9] text-left">
              <p className="font-black text-[#1E293B] text-[11px] mb-1">
                NOTES
              </p>
              All amounts are in USD lens. Please make full payment within 15
              days from the issue of date of this invoice. Tax is not charged on
              the basis of paragraph 1 of Article 14 of the Value Added Tax Act
              (turnover not liable for VAT).
              <p className="mt-4 font-bold text-[#64748B]">
                Thank you for your continuous framework!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
