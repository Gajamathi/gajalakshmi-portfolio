import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const InkFlow: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const path = ref.current.querySelector('path');
    if (!path) return;
    const ctx = gsap.context(() => gsap.to(path, { strokeDashoffset: 0, scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:1} }), ref);
    return () => ctx.revert();
  }, []);
  return <svg ref={ref} className="ink-flow" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true"><path d="M72 0 C35 90 82 160 48 250 S76 420 42 520 S72 700 38 820 S55 940 30 1000" /></svg>;
};
export default InkFlow;
