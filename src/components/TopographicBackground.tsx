import React, { useEffect, useRef } from "react";

interface Leaf {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  swayFreq: number;
  swayAmp: number;
  phase: number;
  paletteIdx: number;
}

interface TopographicBackgroundProps {
  isDark?: boolean;
}

export const TopographicBackground: React.FC<TopographicBackgroundProps> = ({ isDark = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth interpolation
    let mouse = {
      x: width * 0.5,
      y: height * 0.3,
      targetX: width * 0.5,
      targetY: height * 0.3,
    };

    // Color palettes for organic leaves in LIGHT MODE
    const lightLeafPalettes = [
      {
        fill: "rgba(15, 81, 50, 0.075)",
        stroke: "rgba(15, 81, 50, 0.18)",
        vein: "rgba(15, 81, 50, 0.12)",
      },
      {
        fill: "rgba(16, 185, 129, 0.08)",
        stroke: "rgba(5, 150, 105, 0.2)",
        vein: "rgba(5, 150, 105, 0.14)",
      },
      {
        fill: "rgba(180, 83, 9, 0.065)",
        stroke: "rgba(180, 83, 9, 0.18)",
        vein: "rgba(180, 83, 9, 0.12)",
      },
      {
        fill: "rgba(217, 119, 6, 0.06)",
        stroke: "rgba(217, 119, 6, 0.16)",
        vein: "rgba(217, 119, 6, 0.11)",
      },
    ];

    // Color palettes for organic leaves in DARK MODE
    const darkLeafPalettes = [
      {
        fill: "rgba(16, 185, 129, 0.12)",
        stroke: "rgba(52, 211, 153, 0.35)",
        vein: "rgba(52, 211, 153, 0.22)",
      },
      {
        fill: "rgba(5, 150, 105, 0.14)",
        stroke: "rgba(16, 185, 129, 0.38)",
        vein: "rgba(16, 185, 129, 0.24)",
      },
      {
        fill: "rgba(245, 158, 11, 0.12)",
        stroke: "rgba(251, 191, 36, 0.35)",
        vein: "rgba(251, 191, 36, 0.22)",
      },
      {
        fill: "rgba(217, 119, 6, 0.12)",
        stroke: "rgba(245, 158, 11, 0.35)",
        vein: "rgba(245, 158, 11, 0.22)",
      },
    ];

    // Initialize 26 organic drifting leaves
    const leavesCount = 26;
    const leaves: Leaf[] = [];

    for (let i = 0; i < leavesCount; i++) {
      leaves.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 13 + Math.random() * 11,
        speedY: 0.25 + Math.random() * 0.45,
        speedX: -0.15 + Math.random() * 0.3,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.018,
        swayFreq: 0.008 + Math.random() * 0.012,
        swayAmp: 0.4 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        paletteIdx: i % 4,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.003;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const isDarkActive = isDarkRef.current;
      const palettes = isDarkActive ? darkLeafPalettes : lightLeafPalettes;

      // ── 1. DRAW TOPOGRAPHIC CONTOUR WAVES ──
      const linesCount = 14;
      const step = height / (linesCount - 1);

      for (let i = 0; i < linesCount; i++) {
        const baseY = i * step;
        ctx.beginPath();

        const isBronze = i % 2 === 0;
        if (isDarkActive) {
          ctx.strokeStyle = isBronze
            ? "rgba(245, 158, 11, 0.095)" // Luminous Warm Amber
            : "rgba(52, 211, 153, 0.11)"; // Luminous Mint
        } else {
          ctx.strokeStyle = isBronze
            ? "rgba(180, 83, 9, 0.065)" // Warm Bronze
            : "rgba(15, 81, 50, 0.075)"; // Forest Emerald
        }

        ctx.lineWidth = isDarkActive ? 1.4 : 1.25;

        for (let x = 0; x <= width; x += 16) {
          const dx = x - mouse.x;
          const dy = baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, 1 - dist / 380);

          const wave1 = Math.sin(x * 0.0025 + time + i * 0.45) * 28;
          const wave2 = Math.cos(x * 0.006 - time * 0.8 + i * 0.3) * 14;
          const mouseWave = Math.sin(dist * 0.03 - time * 4) * 22 * mouseInfluence;

          const y = baseY + wave1 + wave2 + mouseWave;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      // ── 2. DRAW & ANIMATE NATURAL DRIFTING BOTANICAL LEAVES ──
      for (let i = 0; i < leaves.length; i++) {
        const leaf = leaves[i];
        const p = palettes[leaf.paletteIdx];

        const sway = Math.sin(time * 350 * leaf.swayFreq + leaf.phase) * leaf.swayAmp;
        leaf.x += leaf.speedX + sway;
        leaf.y += leaf.speedY;
        leaf.angle += leaf.angularSpeed + sway * 0.01;

        // Subtle air draft displacement near mouse
        const mdx = leaf.x - mouse.x;
        const mdy = leaf.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 180) {
          const force = (1 - mDist / 180) * 1.8;
          leaf.x += (mdx / (mDist || 1)) * force;
          leaf.y += (mdy / (mDist || 1)) * force;
          leaf.angle += 0.02 * force;
        }

        // Screen boundary wrapping
        if (leaf.y > height + 40) {
          leaf.y = -30;
          leaf.x = Math.random() * width;
        }
        if (leaf.x > width + 40) {
          leaf.x = -30;
        } else if (leaf.x < -40) {
          leaf.x = width + 30;
        }

        // Draw leaf
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.angle);

        const s = leaf.size;

        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo(s * 0.72, -s * 0.45, s * 0.68, s * 0.52, 0, s);
        ctx.bezierCurveTo(-s * 0.68, s * 0.52, -s * 0.72, -s * 0.45, 0, -s);
        ctx.closePath();

        ctx.fillStyle = p.fill;
        ctx.fill();

        ctx.strokeStyle = p.stroke;
        ctx.lineWidth = isDarkActive ? 1.0 : 0.9;
        ctx.stroke();

        // Central stem vein
        ctx.beginPath();
        ctx.strokeStyle = p.vein;
        ctx.lineWidth = 0.75;
        ctx.moveTo(0, -s * 0.82);
        ctx.lineTo(0, s * 0.85);
        ctx.stroke();

        // Lateral veins
        ctx.beginPath();
        ctx.lineWidth = 0.6;
        ctx.moveTo(0, -s * 0.35);
        ctx.lineTo(s * 0.32, -s * 0.15);
        ctx.moveTo(0, -s * 0.35);
        ctx.lineTo(-s * 0.32, -s * 0.15);

        ctx.moveTo(0, s * 0.15);
        ctx.lineTo(s * 0.3, s * 0.35);
        ctx.moveTo(0, s * 0.15);
        ctx.lineTo(-s * 0.3, s * 0.35);
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-85 transition-opacity duration-500"
    />
  );
};
