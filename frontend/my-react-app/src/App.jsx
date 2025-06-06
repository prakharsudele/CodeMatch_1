import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './pages/Navbar';
import AboutSection from './pages/AboutSection';
import Footer from './pages/Footer';
import DashboardLayout from './pages/DashboardLayout';
import Dashboard from './pages/Dashboard';
import LeetCodeLogin from './pages/LeetCodeLogin'; // ✅ new component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
              <AboutSection />
              <Footer />
            </>
          }
        />

        {/* LeetCode Login */}
        <Route
          path="/leetcode"
          element={
            <>
              <Navbar />
              <LeetCodeLogin /> {/* ✅ new component */}
              <Footer />
            </>
          }
        />

        {/* Dashboard + Protected layout */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
