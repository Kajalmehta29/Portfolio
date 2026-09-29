import React, { useRef, useState } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  glowColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(99, 102, 241, 0.12)",
  borderColor = "rgba(99, 102, 241, 0.4)",
  glowColor,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-3xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.06),0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_16px_36px_-6px_rgba(99,102,241,0.12)] hover:-translate-y-1 overflow-hidden ${className}`}
      {...props}
    >
      {/* Background radial spotlight that follows cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />

      {/* Dynamic glowing border that catches light near cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          border: `1.5px solid ${borderColor}`,
          maskImage: `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, black, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, black, transparent 75%)`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
