import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        y: 24,
        opacity: 0,
        stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', once: true },
      });

      gsap.fromTo(
        quoteRef.current,
        { opacity: 0.18, y: 24 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 82%',
            end: 'top 42%',
            scrub: 0.45,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about scene" aria-labelledby="about-heading">
      <div className="section-frame about-frame">
        <h2 id="about-heading" className="section-title about-reveal">About Me</h2>

        <blockquote ref={quoteRef} className="about-quote">
          "I wrote for fun in my teens and discovered in my twenties that it was a skill worth building a career on. </br>
          My teenage self wrote poems about trees; today, I'm building structured documentation. </br>
          Turns out, whether it's a poem or a product, I'm still trying to help someone make sense of what's in front of them."
        </blockquote>

        <div className="about-copy about-reveal">
          <p>
            But here's what I learned: when you're deep in documentation, you see what's broken. At vAudit, I owned the documentation for a logistics platform end-to-end. While building it, I found two features solving the same problem. I flagged it to the product team. They fixed it. That reduction in redundancy meant fewer docs to maintain, less cloud overhead, and a clearer product.
          </p>
          <p>
            I've consolidated legacy documentation across three products. Single-sourcing made updates faster and onboarding clearer. I write API documentation by working with developers on formats that actually make sense, not just documenting what exists.
          </p>
          <p>
            This site reflects that same instinct through the projects, tools, and process behind my work.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
