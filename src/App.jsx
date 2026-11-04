import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import DashboardLayout from "./layouts/DashboardLayout";

// View Page Imports
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Recover from "./pages/Recover";
import AuthSuccess from "./pages/AuthSuccess";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import Analytics from "./pages/Analytics";
import Schedule from "./pages/Schedule";
import Calendar from "./pages/Calendar";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Routes>
          {/* Public Auth Flow Routes Matrix */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="recover" element={<Recover />} />
          <Route path="/auth-success" element={<AuthSuccess />} />

          {/* Secure App Shell Dashboard Enclosure */}
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Fallback Catch-All Redirect */}
          <Route path="*" element={<Navigate to="/signup" replace />} />
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  );
}
