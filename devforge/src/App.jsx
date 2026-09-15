import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import AppLayout from './components/layout/AppLayout';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import DiscoverPage from './pages/DiscoverPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import CreateProjectPage from './pages/CreateProjectPage';
import ApplicationPage from './pages/ApplicationPage';

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Main App Routes */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/projects/create" element={<CreateProjectPage />} />
        <Route path="/applications" element={<ApplicationPage />} />
        <Route path="/projects/:id/applications" element={<ApplicationPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
}