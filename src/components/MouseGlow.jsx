import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[940] opacity-90"
      style={{ left: position.x - 120, top: position.y - 120 }}
    >
      <div className="h-[240px] w-[240px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-transparent blur-3xl" />
    </div>
  );
}
