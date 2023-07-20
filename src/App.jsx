import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

ReactGA.initialize('G-VX9X4V94K0'); 

const PageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <PageView />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </>
      </div>
    </Router>
  );
}

export default App;
