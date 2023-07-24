import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  ReactGA.initialize('G-VX9X4V94K0'); // Use your actual Tracking ID here
  
  return (
    <Router>
      <GAListener>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <></>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </GAListener>
    </Router>
  );
}

const GAListener = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  
  return <>{children}</>;
};

export default App;
