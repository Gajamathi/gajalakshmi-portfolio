import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        y: 28, opacity: 0, stagger: 0.14,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about scene" aria-labelledby="about-heading">
      <div className="section-frame about-frame">
        <div className="section-kicker about-reveal">01 / PERSONAL CONTEXT</div>
        <h2 id="about-heading" className="section-title about-reveal">About Me</h2>
        <blockquote className="about-quote about-reveal">"I wrote for fun in my teens and discovered in my twenties that it was a skill worth building a career on. My teenage self wrote poems about trees; today, I'm building structured documentation. Turns out, whether it's a poem or a product, I'm still trying to help someone make sense of what's in front of them."</blockquote>
        <div className="about-copy about-reveal">
          <p>My journey into technical writing began with a love for writing and grew into a career where I get to work with technology, people, and ideas every day.</p>
          <p>I'm a technical writer who enjoys turning complex information into clear, structured and user-friendly documentation.</p>
        </div>
        <div className="about-transition" aria-hidden="true"><span>INK</span><i></i><span>LINE</span><i></i><span>STRUCTURE</span></div>
      </div>
    </section>
  );
};
export default About;
