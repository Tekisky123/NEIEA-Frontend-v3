import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Tailwind CSS
import './assets/css/style.css';

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

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className={`App ${isHomePage ? 'home' : ''}`}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donation/form" element={<DonationForm />} />
          <Route path="/courses/:category" element={<Courses />} />
          <Route path="/apply-course/:id" element={<ApplyCourse />} />
          <Route path="/apply-course-institution" element={<ApplyCourseInstitution />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;