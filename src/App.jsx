import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Tailwind CSS
import './assets/css/style.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Donate from './pages/Donate';
import DonationForm from './pages/DonationForm';
import Courses from './pages/Courses';
import ApplyCourse from './pages/ApplyCourse';
import ApplyCourseInstitution from './pages/ApplyCourseInstitution';
import AdminDashboard from './pages/dashboards/adminDashboard/AdminDashboard';
import EditCoursePage from './pages/dashboards/adminDashboard/EditCoursePage';
import ScrollToTop from './utils/ScrollToTop';

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAdminRoute = location.pathname.startsWith('/admin/');

  return (
    <div className={`App ${isHomePage ? 'home' : ''}`}>
      {!isAdminRoute && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donation/form" element={<DonationForm />} />
          <Route path="/courses/:category" element={<Courses />} />
          <Route path="/apply-course/:id" element={<ApplyCourse />} />
          <Route path="/apply-course-institution" element={<ApplyCourseInstitution />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/course/edit/:id" element={<EditCoursePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner richColors position="top-center" />
        <Router>
        <ScrollToTop />
          <AppContent />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
