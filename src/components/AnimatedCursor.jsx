import { useEffect, useState } from 'react';

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[950] hidden sm:block"
      style={{ left: position.x - 10, top: position.y - 10 }}
    >
      <div className="h-5 w-5 rounded-full border border-cyan-400/80 bg-white/10 shadow-[0_0_20px_rgba(0,240,255,0.45)] transition-transform duration-150" />
    </div>
  );
}
