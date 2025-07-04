import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
  // Add Chatbase chatbot widget
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="IXjT5IwIfE7gCo2_carEd";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`;
    document.body.appendChild(script);

    // Add custom CSS to lift the chatbot above footer icons
    const style = document.createElement('style');
    style.textContent = `
      #chatbase-bubble-window {
        bottom: 80px !important;
        z-index: 9999 !important;
      }
      #chatbase-bubble-button {
        bottom: 80px !important;
        z-index: 9999 !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;