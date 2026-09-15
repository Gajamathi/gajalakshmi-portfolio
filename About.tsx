import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css';

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
          <span className="quote-line" style={{ color: 'var(--gold, #F2B84B)' }}>&quot;I wrote for fun in my teens and discovered in my twenties</span>
          <span className="quote-line">&nbsp;that it was a skill worth building a career on.</span>
          <span className="quote-line">My teenage self wrote poems about trees; today, I'm building structured documentation.</span>
          <span className="quote-line" style={{ color: 'var(--gold, #F2B84B)' }}>Turns out, whether it's a poem or a product, I'm still trying to help someone make sense of what's in front of them.&quot;</span>
        </blockquote>

        <div className="about-story about-reveal">
          <div className="about-story-copy">
            <p>
              At <strong>vAudit</strong>, that meant going beyond documenting what the product did. I owned the documentation for the logistics platform end-to-end, which meant understanding the product across its features, users, and workflows.
            </p>
            <p>
              That understanding helped me spot something that wasn’t obvious from the documentation alone: <strong>two features were solving the same problem.</strong> I flagged the redundancy to the product team, and they fixed it.
            </p>
            <p>
              That experience shaped how I approach technical writing. Good documentation requires more than knowing how to explain a product. <strong>It requires understanding the product well enough to question it.</strong>
            </p>
            <p>
              I’ve since consolidated legacy documentation across three products, using single-sourcing to make updates faster and onboarding clearer. I also work with developers to document APIs in formats that make sense for the people using them—not simply document what already exists.
            </p>
            <p>
              This site reflects that same instinct through the projects, tools, and process behind my work.
            </p>
          </div>

          <aside className="about-result" aria-label="Results from vAudit documentation work">
            <span className="about-result-label">The Result</span>
            <strong>Fewer docs to maintain.<br />Reduced cloud overhead.<br />A clearer product.</strong>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
