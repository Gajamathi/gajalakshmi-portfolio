import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from './profile.png';

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
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(portraitRef.current, {
        yPercent: -7,
        scale: 1.03,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="hero scene" aria-labelledby="hero-name">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-name" ref={nameRef} className="hero-name">
            GAJALAKSHMI
            <br />
            MATHI
          </h1>
          <p className="eyebrow hero-role">TECHNICAL WRITER</p>

          <div className="hero-statement">
            <p className="hero-headline">
              I don't just document what was built.
              <br />
              I ask the right questions to help build a better product.
            </p>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View My Work
            </a>
            <a
              className="button button-secondary"
              href="/Gajalakshmi_Mathi_Technical_Writer_Resume.pdf"
              download="Gajalakshmi_Mathi_Technical_Writer_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div ref={portraitRef} className="hero-portrait-wrap" aria-hidden="true">
          <img src={heroImage} alt="" className="hero-portrait" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
