import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useNavigation } from "../context/NavigationContext";

export default function DashboardLayout() {
  const { sidebarOpen, setSidebarOpen } = useNavigation();
  const navigate = useNavigate();

  const links = [
    { path: "/dashboard", label: "Dashboard", icon: "Dashboard.svg" },
    { path: "/analytics", label: "Analytics", icon: "Analytics.svg" },
    { path: "/invoice", label: "Invoice", icon: "Invoice.svg" },
    { path: "/schedule", label: "Schedule", icon: "Schedule.svg" },
    { path: "/calendar", label: "Calendar", icon: "Calendar.svg" },
    { path: "/messages", label: "Messages", icon: "Messages.svg", badge: 49 },
    { path: "/notification", label: "Notification", icon: "Notification.svg" },
    { path: "/settings", label: "Settings", icon: "Setting.svg" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans antialiased text-[#1E293B]">
      {/* NAVIGATION SIDEBAR */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 bg-white border-r border-[#F1F5F9] transition-all duration-300 flex flex-col ${sidebarOpen ? "w-[240px]" : "w-[88px]"}`}
      >
        {/* Workspace Brand Branding Header Area (Toggles state on click) */}
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="h-20 flex items-center gap-3 px-6 border-b border-[#F1F5F9] shrink-0 cursor-pointer select-none"
        >
          <img
            src="/assets/sideBarSvgs/Base.svg"
            className="w-8 h-8"
            alt="Base Logo"
          />
          {sidebarOpen && (
            <span className="font-black text-xl tracking-tight text-[#1E293B]">
              Base
            </span>
          )}
        </div>

        {/* Dynamic NavLink Render Engine Matrix */}
        <nav className="flex-1 py-6 px-5 space-y-1.5 overflow-y-auto">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `w-full flex items-center justify-between p-3.5 rounded-xl transition-all font-bold text-xs tracking-wide ${
                  isActive
                    ? "bg-[#5551FF] text-white shadow-[0_8px_20px_rgba(85,81,255,0.15)]"
                    : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#1E293B]"
                }`
              }
            >
              {/* Nested Functional Callback forces execution update on path changes */}
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-4">
                    <img
                      src={`/assets/sideBarSvgs/${link.icon}`}
                      className={`w-4 h-4 transition-all duration-200 ${
                        isActive
                          ? "brightness-0 invert scale-105 opacity-100"
                          : "opacity-70 group-hover:opacity-100"
                      }`}
                      alt={link.label}
                    />
                    {sidebarOpen && (
                      <span
                        className={`transition-colors duration-150 ${isActive ? "text-white" : "text-[#64748B]"}`}
                      >
                        {link.label}
                      </span>
                    )}
                  </div>
                  {sidebarOpen && link.badge && (
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full transition-all ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-[#FF5A79]/10 text-[#FF5A79]"
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Promo Plan Content Upgrade Section */}
        {sidebarOpen && (
          <div className="p-5 m-4 w-40 h-40 rounded-2xl bg-gradient-to-b from-[#5551FF]/5 to-[#5551FF]/10 border border-[#5551FF]/10 text-center relative overflow-hidden shrink-0">
            <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center">
              <img
                src="/assets/sideBarSvgs/object.svg"
                className="w-full h-full object-contain"
                alt="Upgrade Info"
              />
            </div>
            <button className="w-20 text-[10px] font-bold bg-[#5551FF] text-white py-2 rounded-xl hover:opacity-95 transition-opacity shadow-sm">
              Upgrade Now
            </button>
          </div>
        )}

        {/* User Card Element Footer Drawer with Logout Action */}
        <div className="p-4 border-t border-[#F1F5F9] flex items-center justify-between shrink-0 overflow-hidden bg-[#F8FAFC]/40">
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              src="/assets/sideBarSvgs/Profile photo.svg"
              className="w-10 h-10 rounded-xl object-cover border border-[#F1F5F9] shrink-0"
              alt="User Avatar"
            />
            {sidebarOpen && (
              <div className="text-left min-w-0">
                <p className="text-xs font-black text-[#1E293B] truncate">
                  Easin Arafat
                </p>
                <p className="text-[10px] text-[#64748B] font-bold truncate">
                  Free Account
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/login")}
            className="p-1.5 rounded-lg hover:bg-[#F1F5F9] transition-colors shrink-0 group"
            title="Log Out"
          >
            <img
              src="/assets/sideBarSvgs/Logout.svg"
              className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
              alt="Exit application"
            />
          </button>
        </div>
      </aside>

      {/* VIEWPORT CONTAINER */}
      <div
        className={`flex-1 min-w-0 transition-all duration-300 ${sidebarOpen ? "pl-[240px]" : "pl-[88px]"}`}
      >
        <main className="p-6 sm:p-8 max-w-[1400px] mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
