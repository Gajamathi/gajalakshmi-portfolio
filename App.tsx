import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import WhatIDocument from './WhatIDocument';
import ToolsAndTechnology from './ToolsAndTechnology';
import MyJourney from './MyJourney';
import LetsConnect from './LetsConnect';
import Footer from './Footer';
import InkFlow from './InkFlow';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!media.matches) ScrollTrigger.refresh();
  }, []);

  return (
    <div className="site-shell">
      <Navigation />
      <InkFlow />
      <main>
        <Hero />
        <About />
        <WhatIDocument />
        <ToolsAndTechnology />
        <MyJourney />
        <LetsConnect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
