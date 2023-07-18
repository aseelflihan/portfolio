import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-VX9X4V94K0');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
