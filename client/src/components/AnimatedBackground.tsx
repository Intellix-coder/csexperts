import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface GradientCircle {
  id: number;
  size: number;
  color: string;
  x: number;
  y: number;
}

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<GradientCircle[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create gradient circles
    const colors = [
      "rgba(99, 102, 241, 0.5)", // indigo
      "rgba(139, 92, 246, 0.5)", // purple
      "rgba(59, 130, 246, 0.5)", // blue
      "rgba(255, 87, 34, 0.3)", // orange (accent)
    ];

    circlesRef.current = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      size: Math.random() * 300 + 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]"
    >
      <div className="tech-grid"></div>
      
      {circlesRef.current.map((circle) => (
        <motion.div
          key={circle.id}
          className="gradient-circle"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
