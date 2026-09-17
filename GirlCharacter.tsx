import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './girl-character.css';

gsap.registerPlugin(ScrollTrigger);

const WALK_FRAMES = [
  '/character/walking-1.png',
  '/character/walking-2.png',
];

const GirlCharacter: React.FC = () => {
  const characterRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const section = document.getElementById('hero');
    if (!section || !characterRef.current) return;

    const ctx = gsap.context(() => {
      const character = characterRef.current;
      if (!character) return;

      gsap.fromTo(
        character,
        { x: 0 },
        {
          x: () => Math.max(0, window.innerWidth - 170),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.25,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    const frameTimer = window.setInterval(() => {
      setFrame((current) => (current + 1) % WALK_FRAMES.length);
    }, 180);

    return () => {
      window.clearInterval(frameTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div className="girl-character" ref={characterRef} aria-hidden="true">
      <img
        src={WALK_FRAMES[frame]}
        alt=""
        className="girl-character-image"
        draggable={false}
      />
    </div>
  );
};

export default GirlCharacter;
