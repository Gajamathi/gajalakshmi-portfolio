import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AUDITX_URL = 'https://github.com/Gajamathi/AuditX-Dita-Project.git';
const SMART_TV_URL = 'https://github.com/Gajamathi/Technicalwriting-_Portfolio_SmartTV_App.git';

const auditSteps = [
  'Product Information',
  'Administrator Guide · Supervisor Guide · Operator Guide',
  'Reports · Troubleshooting · Glossary',
];

const tvSteps = ['About', 'Getting Started', 'Using SmartTV', 'Troubleshooting'];

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
        <h2 id="work-heading" className="section-title">What I Document</h2>
        <p className="section-intro">
          A selection of documentation samples that demonstrate how I structure content for different products, users, and documentation needs.
        </p>

        <article className="project-scene project-scene-interactive auditx-scene">
          <div className="project-intro project-sticky">
            <p className="project-type">01 — AUDITX</p>
            <h3>Logistics Packaging &amp; Audit Platform</h3>
            <p className="project-description">
              A DITA-based documentation project for an audit and verification platform, structured around the needs of different user roles.
            </p>
            <div className="project-visual audit-visual" aria-hidden="true">
              <span className="visual-order">AUDIT &amp; VERIFICATION</span>
              <span className="visual-node node-one" />
              <span className="visual-node node-two" />
              <span className="visual-node node-three" />
              <span className="visual-line" />
            </div>
            <div className="project-meta">
              <p><span>Tool</span>Oxygen XML Editor</p>
              <p><span>Technology</span>DITA XML · DITA Maps</p>
            </div>
            <a href={AUDITX_URL} target="_blank" rel="noopener noreferrer" className="text-link">View Project →</a>
          </div>

          <div className="architecture-board interactive-board" aria-label="AuditX content architecture">
            <p className="architecture-label">CONTENT ARCHITECTURE</p>
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
                <span className="step-state">{index < auditActive ? 'Built' : index === auditActive ? 'Current' : 'Next'}</span>
              </button>
            ))}
          </div>
        </article>

        <article className="project-scene project-scene-interactive smarttv-scene">
          <div className="project-intro project-intro-alt project-sticky">
            <p className="project-type">02 — SMARTTV MONITOR APP</p>
            <h3>Smart TV Monitoring Application</h3>
            <p className="project-description">
              User-focused documentation for a streaming application, covering onboarding, key features, and troubleshooting.
            </p>
            <div className="project-visual tv-visual" aria-hidden="true">
              <div className="tv-screen">
                <span className="tv-glow" />
                <span className="tv-title">SMARTTV</span>
                <span className="tv-bar one" />
                <span className="tv-bar two" />
                <span className="tv-bar three" />
              </div>
              <div className="tv-stand" />
            </div>
            <div className="project-meta">
              <p><span>Tool</span>MadCap Flare</p>
              <p><span>Features Used</span>Snippets · Variables</p>
              <p><span>Output</span>HTML5</p>
            </div>
            <a href={SMART_TV_URL} target="_blank" rel="noopener noreferrer" className="text-link">View Project →</a>
          </div>

          <div className="journey-board interactive-board" aria-label="SmartTV content architecture">
            <p className="architecture-label">CONTENT ARCHITECTURE</p>
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
                <em>{index === tvActive ? 'Current' : 'Topic'}</em>
              </button>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhatIDocument;
