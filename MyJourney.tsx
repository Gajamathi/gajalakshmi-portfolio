import { useEffect, useRef, useState } from 'react';
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
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: '.timeline',
        start: 'top 65%',
        end: 'bottom 70%',
        scrub: true,
        onUpdate: (self) => setActive(Math.min(journey.length - 1, Math.floor(self.progress * journey.length))),
      });

      return () => trigger.kill();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="journey" className="journey scene" aria-labelledby="journey-heading">
      <div className="section-frame">
        <h2 id="journey-heading" className="section-title">My Journey</h2>
        <p className="section-intro">A timeline of my professional journey and the experiences that shaped me.</p>

        <div className="timeline">
          <div className="timeline-progress" aria-hidden="true">
            <span style={{ transform: `scaleY(${(active + 1) / journey.length})` }} />
          </div>

          {journey.map((entry, index) => (
            <article
              className={`journey-entry ${index === active ? 'is-active' : ''} ${index < active ? 'is-complete' : ''}`}
              key={entry.role + entry.company}
              onMouseEnter={() => setActive(index)}
            >
              <div className="timeline-marker"><span /></div>
              <div className="journey-date">{entry.date}</div>
              <div className="journey-role">
                <h3>{entry.role}</h3>
                <p>{entry.company}</p>

                {entry.products && (
                  <div className="journey-detail" style={{ display: 'block' }}>
                    <b style={{ display: 'block' }}>Products</b>
                    <span style={{ display: 'block' }}>{entry.products.join(' · ')}</span>
                  </div>
                )}

                <div className="journey-detail" style={{ display: 'block' }}>
                  <b style={{ display: 'block' }}>Skills</b>
                  <span style={{ display: 'block' }}>{entry.skills.join(' · ')}</span>
                </div>

                {entry.clients && (
                  <div className="journey-detail" style={{ display: 'block' }}>
                    <b style={{ display: 'block' }}>Clients</b>
                    <span style={{ display: 'block' }}>{entry.clients.join(' · ')}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
