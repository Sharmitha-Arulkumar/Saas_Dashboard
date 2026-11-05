import React, { useState } from "react";

export default function Messages() {
  // Main data matrix
  const [threads, setThreads] = useState([
    {
      id: 1,
      name: "Shelby Goode",
      text: "Lorem Ipsum is simply dummy text of the printing",
      time: "1 min ago",
      pic: "Person1.svg",
    },
    {
      id: 2,
      name: "Robert Bacins",
      text: "Lorem Ipsum is simply dummy text of the printing",
      time: "3 min ago",
      pic: "Person2.svg",
    },
    {
      id: 3,
      name: "John Carlio",
      text: "Lorem Ipsum is simply dummy text of the printing",
      time: "15 min ago",
      pic: "Person3.svg",
    },
    {
      id: 4,
      name: "Adriene Watson",
      text: "Lorem Ipsum is simply dummy text of the printing",
      time: "21 min ago",
      pic: "Person4.svg",
    },
    {
      id: 5,
      name: "Jhon Deo",
      text: "Lorem Ipsum is simply dummy text of the printing",
      time: "29 min ago",
      pic: "Person5.svg",
    },
    {
      id: 6,
      name: "Mark Ruffalo",
      text: "Lorem Ipsum is simply dummy text of the printing",
      time: "45 min ago",
      pic: "Person6.svg",
    },
    {
      id: 7,
      name: "Bethany Jackson",
      text: "Lorem Ipsum is simply dummy text of the printing",
      time: "1h ago",
      pic: "Person7.svg",
    },
  ]);

  const [activeThreadId, setActiveThreadId] = useState(3); // Defaulting directly to 'John Carlio'
  const [messageText, setMessageText] = useState("");

  const activeUser = threads.find((t) => t.id === activeThreadId) || threads;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 bg-white border border-[#F1F5F9] rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.005)] h-100vh text-left animate-fadeIn">
      {/* LEFT COLUMN PANEL: INBOX USER */}
      <div className="xl:col-span-4 border-r border-[#F1F5F9] flex flex-col h-100vh bg-[#F8FAFC]/20">
        {/* Panel Header Summary Block */}
        <div className="p-5 space-y-4 shrink-0 border-b border-[#F1F5F9]/40">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-black text-[#1E293B]">Message</h2>
            <button className="w-7 h-7 bg-[#5551FF] hover:bg-[#5551FF]/95 text-white font-extrabold rounded-full flex items-center justify-center shadow-sm text-sm transition-all active:scale-95">
              +
            </button>
          </div>

          {/* Local Search Tool Input Container */}
          <div className="relative">
            <img
              src="/assets/messagesSvgs/Search.svg"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-40 select-none"
              alt=""
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-white border border-[#F1F5F9] rounded-xl pl-9 pr-4 py-2 text-xs font-semibold text-[#1E293B] focus:outline-none shadow-[0_2px_6px_rgba(0,0,0,0.005)]"
            />
          </div>

          {/* Group Classification Context Filters */}
          <div className="flex justify-around gap-5 text-xs font-black text-[#94A3B8] pt-1 select-none">
            <button className="pb-1 hover:text-[#1E293B] transition-colors">
              All
            </button>
            <button className="pb-1 border-b-2 border-[#5551FF] text-[#5551FF]">
              Personal
            </button>
            <button className="pb-1 hover:text-[#1E293B] transition-colors">
              Teams
            </button>
          </div>
        </div>

        {/* Scrollable User Message Stream Row Items */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 bg-white">
          {threads.map((thread) => (
            <div
              key={thread.id}
              onClick={() => setActiveThreadId(thread.id)}
              className={`flex items-start gap-4 p-3.5 rounded-xl cursor-pointer transition-all border border-transparent ${
                activeThreadId === thread.id
                  ? "bg-white border-[#F1F5F9] shadow-[0_4px_15px_rgba(0,0,0,0.01)]"
                  : "hover:bg-[#F8FAFC]/50"
              }`}
            >
              <div className="w-10 h-8 rounded-full border border-[#F1F5F9] bg-slate-50 relative shrink-0">
                <img
                  src={`/assets/messagesSvgs/${thread.pic}`}
                  className="w-full h-full object-cover rounded-full"
                  alt=""
                />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#00C3F8] rounded-full ring-2 ring-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="text-xs font-extrabold text-[#1E293B] truncate tracking-tight">
                    {thread.name}
                  </h4>
                  <span className="text-[9px] text-[#94A3B8] font-bold shrink-0">
                    {thread.time}
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] font-semibold truncate leading-relaxed">
                  {thread.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN PANEL: ACTIVE CHAT STREAMS */}
      <div className="xl:col-span-8 flex flex-col h-full bg-white relative">
        {/* Upper User Context Title Toolbar Strip */}
        <div className="p-4 border-b border-[#F1F5F9] flex justify-between items-center shrink-0 select-none">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full border border-[#F1F5F9] bg-slate-50 shrink-0">
              <img
                src={`/assets/messagesSvgs/${activeUser.pic}`}
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-xs font-black text-[#1E293B] tracking-tight">
                {activeUser.name}
              </h3>
              <span className="text-[10px] text-[#00C3F8] font-bold block mt-0.5">
                Online
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button className="p-2 hover:bg-[#F8FAFC] rounded-xl transition-colors">
              <img
                src="/assets/messagesSvgs/Call.svg"
                className="w-4 h-4 opacity-50"
                alt="Call"
              />
            </button>
            <button className="p-2 hover:bg-[#F8FAFC] rounded-xl transition-colors">
              <img
                src="/assets/messagesSvgs/Video.svg"
                className="w-4 h-4 opacity-50"
                alt="Video"
              />
            </button>
            <button className="p-2 hover:bg-[#F8FAFC] rounded-xl transition-colors">
              <img
                src="/assets/messagesSvgs/More.svg"
                className="w-4 h-4 opacity-50"
                alt="Options"
              />
            </button>
          </div>
        </div>

        {/* Message Bubble Feed Canvas Content Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-[#F8FAFC]/10 flex flex-col justify-end">
          {/* Blue Message Bubble with profile picture at the bottom left corner */}
          <div className="flex items-end gap-3 max-w-sm self-start">
            <div className="bg-[#5551FF] text-white text-xs font-semibold ml-4 px-4 py-3 rounded-2xl rounded-bl-none shadow-[0_2px_8px_rgba(85,81,255,0.1)] leading-relaxed">
              Lorem Ipsum is simply
            </div>
          </div>

          {/* Secondary Blue Message Bubble */}
          <div className="flex items-end gap-3 max-w-md self-start relative group">
            <div className="space-y-1 text-left">
              <div className="bg-[#5551FF] text-white text-xs font-semibold ml-4 px-4 py-3 rounded-2xl rounded-bl-none shadow-[0_2px_8px_rgba(85,81,255,0.1)] leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <span className="text-[9px] text-[#94A3B8] font-bold block ml-77 px-1 pt-0.5 select-none">
                  09:32 PM
                </span>
              </div>
              <img
                src={`/assets/messagesSvgs/${activeUser.pic}`}
                className="w-7 h-7 rounded-full object-cover shrink-0 mb-5"
                alt=""
              />
            </div>
            {/* Absolute positioning */}
            <button className="opacity-100 ml-2 self-center">
              <img
                src="/assets/messagesSvgs/3dots.svg"
                className="w-3.5 h-3.5"
                alt="options"
              />
            </button>
          </div>

          {/* Image Grid Container */}
          <div className="grid grid-cols-12 items-end gap-3.5 w-full">
            <div className="col-span-4" />
            <div className="col-span-8 flex justify-end gap-3 animate-scaleUp select-none">
              <button className="opacity-100 ml-2 self-center">
                <img
                  src="/assets/messagesSvgs/3dots.svg"
                  className="w-3.5 h-3.5 mt-20"
                  alt="options"
                />
              </button>
              <div className="w-36 h-24 bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl overflow-hidden shadow-sm hover:opacity-95 transition-opacity cursor-pointer">
                <img
                  src="/assets/messagesSvgs/SendImg1.svg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-36 h-24 bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl overflow-hidden shadow-sm hover:opacity-95 transition-opacity cursor-pointer">
                <img
                  src="/assets/messagesSvgs/SendImg2.svg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Third Blue Message Bubble */}
          <div className="flex items-end gap-3 max-w-md self-start relative group pt-2">
            <div className="space-y-1 text-left">
              <div className="bg-[#5551FF] text-white text-xs font-semibold ml-4 px-4 py-3 rounded-2xl rounded-bl-none shadow-[0_2px_8px_rgba(85,81,255,0.1)] leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <span className="text-[9px] text-[#94A3B8] font-bold block ml-77 px-1 pt-0.5 select-none">
                  09:34 PM
                </span>
              </div>
              <img
                src={`/assets/messagesSvgs/${activeUser.pic}`}
                className="w-7 h-7 rounded-full object-cover shrink-0 mb-5"
                alt=""
              />
            </div>
            <button className="opacity-100 shrink-0 ml-2 self-center">
              <img
                src="/assets/messagesSvgs/3dots.svg"
                className="w-3.5 h-3.5"
                alt="options"
              />
            </button>
          </div>
        </div>

        {/* Input Text Input Tray Composition Box Panel */}
        <div className="p-4 border-t border-[#F1F5F9] bg-white shrink-0">
          <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl px-4 py-1.5 focus-within:border-slate-300 transition-colors">
            <button className="focus:outline-none transform active:scale-90 transition-transform shrink-0">
              <img
                src="/assets/messagesSvgs/Paperclip.svg"
                className="w-4 h-4 opacity-50 hover:opacity-80"
                alt="Attach"
              />
            </button>
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-xs text-[#1E293B] focus:outline-none font-semibold h-8"
            />
            <button className="focus:outline-none transform active:scale-90 transition-transform shrink-0">
              <img
                src="/assets/messagesSvgs/Smile.svg"
                className="w-4 h-4 opacity-50 hover:opacity-80"
                alt="Emoji"
              />
            </button>
            <button className="w-8 h-8 bg-[#5551FF] hover:bg-[#5551FF]/95 transition-all shadow-sm rounded-xl flex items-center justify-center shrink-0 active:scale-95">
              <img
                src="/assets/messagesSvgs/Send icon.svg"
                className="w-3.5 h-3.5 brightness-0 invert"
                alt="Send"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
