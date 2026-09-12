import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AUDITX_URL = 'https://github.com/Gajamathi/AuditX-Dita-Project.git';
const SMART_TV_URL = 'https://github.com/Gajamathi/Technicalwriting-_Portfolio_SmartTV_App.git';

const WhatIDocument: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.audit-step', {
        opacity: 0, x: -36, stagger: 0.18,
        scrollTrigger: { trigger: '.auditx-scene', start: 'top 70%', once: true },
      });
      gsap.from('.tv-step', {
        opacity: 0, y: 24, stagger: 0.18,
        scrollTrigger: { trigger: '.smarttv-scene', start: 'top 70%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="work scene" aria-labelledby="work-heading">
      <div className="section-frame">
        <div className="section-kicker">02 / SAMPLE DOCUMENTATION</div>
        <h2 id="work-heading" className="section-title">What I Document</h2>
        <p className="section-intro">A selection of sample documentation projects that demonstrate how I structure content for different products, users, and documentation needs.</p>

        <article className="project-scene auditx-scene">
          <div className="project-intro">
            <p className="project-type">SAAS LOGISTICS PRODUCT</p>
            <h3>AuditX</h3>
            <p className="project-description">User and API documentation for a warehouse auditing and packaging solution.</p>
            <p className="project-context">AuditX is a SaaS logistics product that records and audits packaging in warehouses and stores the data directly against the customer order ID. It also sends notifications to the customer after successful packaging.</p>
            <div className="tool-row"><span>Oxygen XML</span><span>DITA XML</span><span>DITA Maps</span></div>
            <a href={AUDITX_URL} target="_blank" rel="noopener noreferrer" className="text-link">View Project ↗</a>
          </div>
          <div className="architecture-board" aria-label="AuditX content architecture">
            <p className="architecture-label">CONTENT ARCHITECTURE</p>
            {['PRODUCT INFORMATION', 'ADMIN · SUPERVISOR · OPERATOR', 'REPORTS / TROUBLESHOOTING', 'GLOSSARY'].map((item, index) => (
              <div className="audit-step architecture-step" key={item}>
                <span className="architecture-index">0{index + 1}</span><strong>{item}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="project-scene smarttv-scene">
          <div className="project-intro project-intro-alt">
            <p className="project-type">CONSUMER PRODUCT</p>
            <h3>Smart TV</h3>
            <p className="project-description">User documentation for a smart TV platform, covering setup, features and troubleshooting.</p>
            <div className="tool-row soft"><span>MadCap Flare</span><span>Snippets</span><span>Variables</span><span>Conditions</span></div>
            <a href={SMART_TV_URL} target="_blank" rel="noopener noreferrer" className="text-link">View Project ↗</a>
          </div>
          <div className="journey-board" aria-label="Smart TV documentation journey">
            <p className="architecture-label">DOCUMENTATION JOURNEY</p>
            {['ABOUT', 'GETTING STARTED', 'USING SMART TV', 'TROUBLESHOOTING'].map((item, index) => (
              <div className="tv-step journey-step" key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
export default WhatIDocument;
