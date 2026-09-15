import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AUDITX_URL = 'https://github.com/Gajamathi/AuditX-Dita-Project.git';
const SMART_TV_URL = 'https://github.com/Gajamathi/Technicalwriting-_Portfolio_SmartTV_App.git';

const AUDITX_IMAGE = 'data:image/webp;base64,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'
const SMART_TV_IMAGE = 'data:image/webp;base64,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'

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
            <h3
              className="project-title"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 2.5rem)', lineHeight: 1.05, letterSpacing: '-.04em', margin: '.5rem 0 .35rem', whiteSpace: 'nowrap' }}
            >
              01 — Logistics Packaging &amp; Audit Platform
            </h3>
            <p
              className="project-subtitle"
              style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.75rem)', lineHeight: 1.15, margin: '0 0 1.5rem', whiteSpace: 'nowrap', color: 'var(--gold, #F2B84B)' }}
            >
              Structured Product Documentation
            </p>
            <p className="project-description">
              A DITA-based documentation project for an audit and verification platform, structured around the needs of different user roles.
            </p>
            <div className="project-visual product-image-visual" style={{ minHeight: 0, background: '#171B20', display: 'flex', flexDirection: 'column' }}>
              <span
                className="product-visual-label"
                style={{ display: 'block', padding: '1rem 1.1rem .85rem', fontSize: '.72rem', letterSpacing: '.12em', fontWeight: 900, color: 'var(--gold, #F2B84B)', textTransform: 'none', background: '#171B20' }}
              >
                AuditX — Audit your packaging
              </span>
              <img
                src={AUDITX_IMAGE}
                alt="AuditX"
                style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '16 / 9', objectFit: 'cover' }}
              />
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
            <h3
              className="project-title"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 2.5rem)', lineHeight: 1.05, letterSpacing: '-.04em', margin: '.5rem 0 .35rem', whiteSpace: 'nowrap' }}
            >
              02 — Smart TV Monitoring Application
            </h3>
            <p
              className="project-subtitle"
              style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.75rem)', lineHeight: 1.15, margin: '0 0 1.5rem', whiteSpace: 'nowrap', color: 'var(--gold, #F2B84B)' }}
            >
              User &amp; Feature Documentation
            </p>
            <p className="project-description">
              User-focused documentation for a streaming application, covering onboarding, key features, and troubleshooting.
            </p>
            <div className="project-visual product-image-visual" style={{ minHeight: 0, background: '#171B20', display: 'flex', flexDirection: 'column' }}>
              <span
                className="product-visual-label"
                style={{ display: 'block', padding: '1rem 1.1rem .85rem', fontSize: '.72rem', letterSpacing: '.12em', fontWeight: 900, color: 'var(--gold, #F2B84B)', textTransform: 'none', background: '#171B20' }}
              >
                SmartView — Monitor your SmartTV
              </span>
              <img
                src={SMART_TV_IMAGE}
                alt="SmartTV Monitor App"
                style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '16 / 9', objectFit: 'cover' }}
              />
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
