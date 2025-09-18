import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'; // Tailwind CSS
import "./assets/css/style.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Component
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Introduction from "./pages/Introduction.jsx";
import Leadership from "./pages/Leadership";
import LeadershipProfile from "./pages/LeadershipProfile";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import BlendedLearning from "./pages/BlendedLearning";
import DiscourseOrientedPedagogy from "./pages/DiscourseOrientedPedagogy";
import ApplicationOfTechnology from "./pages/ApplicationOfTechnology";
import PartneringInstitutions from "./pages/PartneringInstitutions";
import RemoteLearning from "./pages/RemoteLearning";
import Gallery from "./pages/Gallery";
import ReportsFinancials from "./pages/ReportsFinancials";
import PartnersJoin from "./pages/PartnersJoin";
import PartnerInstitutions from "./pages/PartnerInstitutions";
import GlobalPartners from "./pages/GlobalPartners";
import TeachersTraining from "./pages/TeachersTraining";
import SkillsTraining from "./pages/SkillsTraining";
import AdultEducation from "./pages/AdultEducation";
import GlobalEducation from "./pages/GlobalEducation";
import ElementaryMiddleSchool from "./pages/ElementaryMiddleSchool";
import SlumChildren from "./pages/SlumChildren";
import PublicGovernmentSchool from "./pages/PublicGovernmentSchool";
import GirlsEducation from "./pages/GirlsEducation";
import OutOfSchoolDropout from "./pages/OutOfSchoolDropout";
import Madrasa from "./pages/Madrasa";
import NeiUsaIntroduction from "./pages/NeiUsaIntroduction";
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
    <div className={`App scrollbar-show ${isHomePage ? 'home' : ''}`}>
      {!isAdminRoute && <Header />}
      <main className="scrollbar-show">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About Us Routes */}
          <Route path="/about-us/introduction" element={<Introduction />} />
          <Route path="/about-us/leadership" element={<Leadership />} />
          <Route path="/about-us/leadership/:memberSlug" element={<LeadershipProfile />} />
          <Route path="/about-us/testimonials" element={<Testimonials />} />
          <Route path="/about-us/contact" element={<Contact />} />

          {/* Working Model Routes */}
          <Route path="/about-us/working-model/blended-learning" element={<BlendedLearning />} />
          <Route path="/about-us/working-model/blended-learning/discourse-oriented-pedagogy" element={<DiscourseOrientedPedagogy />} />
          <Route path="/about-us/working-model/blended-learning/application-of-technology" element={<ApplicationOfTechnology />} />
          <Route path="/about-us/working-model/partnering-institutions" element={<PartneringInstitutions />} />
          <Route path="/about-us/working-model/remote-learning" element={<RemoteLearning />} />

          {/* Media and Events */}
          <Route path="/about-us/media-events/gallery" element={<Gallery />} />
          <Route path="/about-us/reports-financials" element={<ReportsFinancials />} />

          {/* Our Work Routes */}
          <Route path="/our-works/teachers-training" element={<TeachersTraining />} />
          <Route path="/our-works/skills-training" element={<SkillsTraining />} />
          <Route path="/our-works/adult-education" element={<AdultEducation />} />
          <Route path="/our-works/global-education" element={<GlobalEducation />} />

          {/* Education Routes */}
          <Route path="/our-works/education/elementary-middle-school" element={<ElementaryMiddleSchool />} />
          <Route path="/our-works/education/slum-children" element={<SlumChildren />} />
          <Route path="/our-works/education/public-government-school" element={<PublicGovernmentSchool />} />
          <Route path="/our-works/education/girls-education" element={<GirlsEducation />} />
          <Route path="/our-works/education/out-of-school-dropout" element={<OutOfSchoolDropout />} />
          <Route path="/our-works/education/madrasa" element={<Madrasa />} />



          {/* Partners Routes */}
          <Route path="/partners/join" element={<PartnersJoin />} />
          <Route path="/partners/institutions" element={<PartnerInstitutions />} />
          <Route path="/partners/global" element={<GlobalPartners />} />


          {/* NEI USA Routes */}
          <Route path="/nei-usa/introduction" element={<NeiUsaIntroduction />} />

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

