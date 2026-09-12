import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from './hero.png';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.to(nameRef.current, {
        yPercent: -12,
        letterSpacing: '0.02em',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(portraitRef.current, {
        yPercent: -7,
        scale: 1.03,
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="hero scene" aria-labelledby="hero-name">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">TECHNICAL WRITER</p>
          <h1 id="hero-name" ref={nameRef} className="hero-name">GAJALAKSHMI<br />MATHI</h1>
          <div className="hero-statement">
            <p className="hero-headline">I don’t just document what was built.<br />I ask the right questions to build a better product.</p>
            <p className="hero-support">Turning complex information into clear, structured and user-friendly documentation.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View My Work</a>
            <button className="button button-secondary" type="button" title="Resume link will be added soon">Download Resume</button>
          </div>
        </div>
        <div ref={portraitRef} className="hero-portrait-wrap" aria-hidden="true">
          <div className="hero-line"></div>
          <img src={heroImage} alt="" className="hero-portrait" />
          <span className="hero-caption">WRITING → STRUCTURE → DOCUMENTATION</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
