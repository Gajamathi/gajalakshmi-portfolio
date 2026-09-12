import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const journey = [
  { role:'Technical Writer', company:'VisAI Labs', date:'May – Nov 2025', products:['vAudit','vMeasure'], skills:['DITA XML','Oxygen XML Editor','Markdown'] },
  { role:'Content Writer', company:'Ztrategize', date:'Jan – Apr 2025', skills:['SEO Content','Website Content','Product Content','Social Media Copy'] },
  { role:'Content Writing Intern', company:'Joy Technologies', date:'Nov 2024 – Jan 2025', skills:['Website Content','Social Media Copy','Guest Blog','Basic SEO'], clients:['Multiple Clients'] },
  { role:'Content Engineer', company:'GlobalLogic India', date:'May – Sept 2024', skills:['AI Content Evaluation','Technical Content Review','Quality & Clarity Assessment','Documentation QA'] },
  { role:'Content Writer (Volunteer)', company:'Biotikos, SASTRA', date:'2022 – 2023', skills:['Research Communication','Digital Content','Social Media Management'] },
];
const MyJourney: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const ctx = gsap.context(() => gsap.from('.journey-entry', { opacity:0, y:26, stagger:0.16, scrollTrigger:{trigger:ref.current,start:'top 72%',once:true} }), ref); return () => ctx.revert(); }, []);
  return <section ref={ref} id="journey" className="journey scene" aria-labelledby="journey-heading"><div className="section-frame"><div className="section-kicker">04 / PROFESSIONAL PROGRESSION</div><h2 id="journey-heading" className="section-title">My Journey</h2><p className="section-intro">A timeline of my professional journey and the experiences that shaped me.</p><div className="timeline">{journey.map((entry, i) => <article className="journey-entry" key={entry.role + entry.company}><div className="timeline-marker"><span></span></div><div className="journey-date">{entry.date}</div><div className="journey-role"><h3>{entry.role}</h3><p>{entry.company}</p>{entry.products && <div className="journey-detail"><b>Products</b><span>{entry.products.join(' · ')}</span></div>}<div className="journey-detail"><b>Skills</b><span>{entry.skills.join(' · ')}</span></div>{entry.clients && <div className="journey-detail"><b>Clients</b><span>{entry.clients.join(' · ')}</span></div>}</div>{i < journey.length-1 && <div className="timeline-stem" aria-hidden="true"/>}</article>)}</div></div></section>;
};
export default MyJourney;
