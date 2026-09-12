import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const categories = [
  ['01', 'Authoring & Documentation', ['MadCap Flare', 'MS Word', 'Markdown']],
  ['02', 'Structured Content', ['DITA XML', 'Oxygen XML']],
  ['03', 'API & Data Documentation', ['JSON', 'XML', 'REST APIs', 'Postman']],
  ['04', 'Version Control', ['Git', 'GitHub', 'GitLab']],
  ['05', 'Supporting Tools', []],
];
const ToolsAndTechnology: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => gsap.from('.tool-node', { opacity: 0, x: -28, stagger: 0.12, scrollTrigger: { trigger: ref.current, start: 'top 72%', once: true } }), ref);
    return () => ctx.revert();
  }, []);
  return <section ref={ref} id="tools" className="tools scene" aria-labelledby="tools-heading"><div className="section-frame tools-frame"><div className="section-kicker">03 / WORKFLOW</div><h2 id="tools-heading" className="section-title">Tools &amp; Technology</h2><p className="section-intro">Tools and technologies I use to research, write, structure, manage, and build better documentation.</p><div className="tool-flow">{categories.map(([number, title, tools], i) => <div className="tool-node" key={number}><div className="tool-number">{number}</div><div className="tool-content"><h3>{title}</h3>{tools.length ? <div className="tool-list">{tools.map(tool => <span key={tool}>{tool}</span>)}</div> : <p className="empty-node" aria-label="No supporting tools listed"></p>}</div>{i < categories.length - 1 && <div className="flow-connector" aria-hidden="true"/>}</div>)}</div></div></section>;
};
export default ToolsAndTechnology;
