import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/LandingPage";
import About from "./pages/About";
import Features from "./pages/Feature";
import Contact from "./pages/Contact"; // Import the Contact component
import { AnimatePresence } from 'framer-motion';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className={location.pathname === "/" ? "overflow-hidden h-screen" : ""}>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
        </Routes>
      </AnimatePresence>
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