import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AUDITX_URL = 'https://github.com/Gajamathi/AuditX-Dita-Project.git';
const SMART_TV_URL = 'https://github.com/Gajamathi/Technicalwriting-_Portfolio_SmartTV_App.git';

const auditSteps = [
  'PRODUCT INFORMATION',
  'ADMIN · SUPERVISOR · OPERATOR',
  'REPORTS / TROUBLESHOOTING',
  'GLOSSARY',
];

const tvSteps = ['ABOUT', 'GETTING STARTED', 'USING SMART TV', 'TROUBLESHOOTING'];

const WhatIDocument: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [auditActive, setAuditActive] = useState(0);
  const [tvActive, setTvActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const auditTriggers = auditSteps.map((_, index) =>
        ScrollTrigger.create({
          trigger: '.auditx-scene',
          start: () => `top top-=${index * 90 + 80}`,
          end: () => `bottom bottom-=${(auditSteps.length - index - 1) * 90}`,
          onEnter: () => setAuditActive(index),
          onEnterBack: () => setAuditActive(index),
        }),
      );

      const tvTriggers = tvSteps.map((_, index) =>
        ScrollTrigger.create({
          trigger: '.smarttv-scene',
          start: () => `top top-=${index * 90 + 80}`,
          end: () => `bottom bottom-=${(tvSteps.length - index - 1) * 90}`,
          onEnter: () => setTvActive(index),
          onEnterBack: () => setTvActive(index),
        }),
      );

      return () => {
        auditTriggers.forEach((trigger) => trigger.kill());
        tvTriggers.forEach((trigger) => trigger.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="work scene" aria-labelledby="work-heading">
      <div className="section-frame">
        <div className="section-kicker">02 / SAMPLE DOCUMENTATION</div>
        <h2 id="work-heading" className="section-title">What I Document</h2>
        <p className="section-intro">
          A selection of sample documentation projects that demonstrate how I structure content for different products, users, and documentation needs.
        </p>

        <article className="project-scene project-scene-interactive auditx-scene">
          <div className="project-intro project-sticky">
            <p className="project-type">SAAS LOGISTICS PRODUCT</p>
            <h3>AuditX</h3>
            <p className="project-description">User and API documentation for a warehouse auditing and packaging solution.</p>
            <p className="project-context">
              AuditX is a SaaS logistics product that records and audits packaging in warehouses and stores the data directly against the customer order ID. It also sends notifications to the customer after successful packaging.
            </p>
            <div className="project-visual audit-visual" aria-hidden="true">
              <span className="visual-order">ORDER ID</span>
              <span className="visual-node node-one" />
              <span className="visual-node node-two" />
              <span className="visual-node node-three" />
              <span className="visual-line" />
            </div>
            <div className="tool-row"><span>Oxygen XML</span><span>DITA XML</span><span>DITA Maps</span></div>
            <a href={AUDITX_URL} target="_blank" rel="noopener noreferrer" className="text-link">View Project ↗</a>
          </div>

          <div className="architecture-board interactive-board" aria-label="AuditX content architecture">
            <p className="architecture-label">BUILDING THE CONTENT ARCHITECTURE</p>
            <div className="board-progress" aria-hidden="true">
              <span style={{ transform: `scaleY(${(auditActive + 1) / auditSteps.length})` }} />
            </div>
            {auditSteps.map((item, index) => (
              <button
                type="button"
                className={`audit-step architecture-step ${index === auditActive ? 'is-active' : ''} ${index < auditActive ? 'is-complete' : ''}`}
                key={item}
                onMouseEnter={() => setAuditActive(index)}
                onFocus={() => setAuditActive(index)}
                onClick={() => setAuditActive(index)}
              >
                <span className="architecture-index">0{index + 1}</span>
                <strong>{item}</strong>
                <span className="step-state">{index < auditActive ? 'Built' : index === auditActive ? 'Building' : 'Queued'}</span>
              </button>
            ))}
          </div>
        </article>

        <article className="project-scene project-scene-interactive smarttv-scene">
          <div className="project-intro project-intro-alt project-sticky">
            <p className="project-type">CONSUMER PRODUCT</p>
            <h3>Smart TV</h3>
            <p className="project-description">User documentation for a smart TV platform, covering setup, features and troubleshooting.</p>
            <div className="project-visual tv-visual" aria-hidden="true">
              <div className="tv-screen">
                <span className="tv-glow" />
                <span className="tv-title">SMART TV</span>
                <span className="tv-bar one" />
                <span className="tv-bar two" />
                <span className="tv-bar three" />
              </div>
              <div className="tv-stand" />
            </div>
            <div className="tool-row soft"><span>MadCap Flare</span><span>Snippets</span><span>Variables</span><span>Conditions</span></div>
            <a href={SMART_TV_URL} target="_blank" rel="noopener noreferrer" className="text-link">View Project ↗</a>
          </div>

          <div className="journey-board interactive-board" aria-label="Smart TV documentation journey">
            <p className="architecture-label">MOVE THROUGH THE DOCUMENTATION</p>
            <div className="tv-progress" aria-hidden="true">
              <span style={{ width: `${((tvActive + 1) / tvSteps.length) * 100}%` }} />
            </div>
            {tvSteps.map((item, index) => (
              <button
                type="button"
                className={`tv-step journey-step ${index === tvActive ? 'is-active' : ''}`}
                key={item}
                onMouseEnter={() => setTvActive(index)}
                onFocus={() => setTvActive(index)}
                onClick={() => setTvActive(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
                <em>{index === tvActive ? 'Current topic' : 'Open topic'}</em>
              </button>
            ))}
            <p className="journey-hint">Scroll or select a topic to move through the journey.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhatIDocument;
