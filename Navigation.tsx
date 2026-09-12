import { useEffect, useState } from 'react';

const links = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Tools', '#tools'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
] as const;

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = links
      .map(([, href]) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navigation" aria-label="Primary navigation">
      <a href="#hero" className="nav-mark" aria-label="Home">GM</a>

      <div className="nav-links">
        {links.map(([label, href]) => (
          <a key={label} href={href} className={active === href ? 'is-active' : ''}>{label}</a>
        ))}
        <button type="button" className="nav-resume" title="Resume link will be added soon">Download Resume</button>
      </div>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {open && (
        <div id="mobile-menu" className="mobile-menu">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <button type="button" className="nav-resume" title="Resume link will be added soon">Download Resume</button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
