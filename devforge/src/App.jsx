import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Placeholder component for Dashboard/Discover if not created yet
const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen bg-amber-50/40 p-8 flex flex-col items-center justify-center font-sans">
    <h1 className="text-2xl font-black text-amber-950 mb-2">{title}</h1>
    <p className="text-xs font-semibold text-amber-800/70">Page content coming next!</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Placeholder routes until components are built */}
        <Route path="/dashboard" element={<PlaceholderPage title="Dashboard" />} />
        <Route path="/discover" element={<PlaceholderPage title="Discover Projects" />} />

        {/* Catch-all redirect to home page to prevent blank screens */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}