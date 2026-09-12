import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ToolCategory = {
  number: string;
  title: string;
  tools: string[];
};

const categories: ToolCategory[] = [
  {
    number: '01',
    title: 'Authoring & Documentation',
    tools: ['MadCap Flare', 'MS Word', 'Markdown'],
  },
  {
    number: '02',
    title: 'Structured Content',
    tools: ['DITA XML', 'Oxygen XML'],
  },
  {
    number: '03',
    title: 'API & Data Documentation',
    tools: ['JSON', 'XML', 'REST APIs', 'Postman'],
  },
  {
    number: '04',
    title: 'Version Control',
    tools: ['Git', 'GitHub', 'GitLab'],
  },
  {
    number: '05',
    title: 'Supporting Tools',
    tools: [],
  },
];

const ToolsAndTechnology: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.tool-node', {
        opacity: 0,
        x: -28,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 72%',
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="tools"
      className="tools scene"
      aria-labelledby="tools-heading"
    >
      <div className="section-frame tools-frame">
        <div className="section-kicker">03 / WORKFLOW</div>
        <h2 id="tools-heading" className="section-title">
          Tools &amp; Technology
        </h2>
        <p className="section-intro">
          Tools and technologies I use to research, write, structure, manage, and build better documentation.
        </p>

        <div className="tool-flow">
          {categories.map((category, index) => (
            <div className="tool-node" key={category.number}>
              <div className="tool-number">{category.number}</div>

              <div className="tool-content">
                <h3>{category.title}</h3>

                {category.tools.length > 0 ? (
                  <div className="tool-list">
                    {category.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                ) : (
                  <p className="empty-node" aria-label="No supporting tools listed" />
                )}
              </div>

              {index < categories.length - 1 && (
                <div className="flow-connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTechnology;
