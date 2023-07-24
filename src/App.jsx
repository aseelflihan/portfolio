import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
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
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const hashChangeHandler = () => setHash(window.location.hash);

    window.addEventListener('hashchange', hashChangeHandler);

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  useEffect(() => {
    console.log("Page viewed: ", hash);
    ReactGA.pageview(hash);
  }, [hash]);

  return <>{children}</>;
};

export default App;
