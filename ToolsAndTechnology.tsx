import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ToolCategory = {
  number: string;
  title: string;
  tools: string[];
};

const categories: ToolCategory[] = [
  { number: '01', title: 'Authoring & Documentation', tools: ['MadCap Flare', 'MS Word', 'Markdown'] },
  { number: '02', title: 'Structured Content', tools: ['DITA XML', 'Oxygen XML'] },
  { number: '03', title: 'API & Data Documentation', tools: ['JSON', 'XML', 'REST APIs', 'Postman'] },
  { number: '04', title: 'Version Control', tools: ['Git', 'GitHub', 'GitLab'] },
  { number: '05', title: 'Supporting Tools', tools: [] },
];

const ToolsAndTechnology: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const triggers = categories.map((_, index) =>
        ScrollTrigger.create({
          trigger: ref.current,
          start: () => `top top-=${index * 120 + 120}`,
          end: 'bottom bottom',
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        }),
      );

      return () => triggers.forEach((trigger) => trigger.kill());
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="tools" className="tools scene" aria-labelledby="tools-heading">
      <div className="section-frame tools-frame">
        <div className="section-kicker">03 / WORKFLOW</div>
        <h2 id="tools-heading" className="section-title">Tools &amp; Technology</h2>
        <p className="section-intro">
          Tools and technologies I use to research, write, structure, manage, and build better documentation.
        </p>

        <div className="tool-flow" aria-label="Documentation workflow">
          <div className="tool-progress" aria-hidden="true">
            <span style={{ transform: `scaleY(${(active + 1) / categories.length})` }} />
          </div>

          {categories.map((category, index) => (
            <button
              type="button"
              className={`tool-node ${index === active ? 'is-active' : ''} ${index < active ? 'is-complete' : ''}`}
              key={category.number}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span className="tool-number">{category.number}</span>
              <span className="tool-content">
                <span className="tool-heading-row">
                  <strong>{category.title}</strong>
                  <small>{index === active ? 'Current stage' : index < active ? 'Connected' : 'Next stage'}</small>
                </span>
                {category.tools.length > 0 ? (
                  <span className="tool-list">
                    {category.tools.map((tool) => <span key={tool}>{tool}</span>)}
                  </span>
                ) : (
                  <span className="empty-node" aria-label="No supporting tools listed" />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTechnology;
