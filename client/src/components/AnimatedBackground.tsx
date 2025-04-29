import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface GradientCircle {
  id: number;
  size: number;
  color: string;
  x: number;
  y: number;
}

interface TechIcon {
  id: number;
  icon: string;
  size: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  duration: number;
}

interface CodeLine {
  id: number;
  text: string;
  x: number;
  y: number;
  delay: number;
}

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [circles, setCircles] = useState<GradientCircle[]>([]);
  const [techIcons, setTechIcons] = useState<TechIcon[]>([]);
  const [codeLines, setCodeLines] = useState<CodeLine[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create gradient circles
    const colors = [
      "rgba(99, 102, 241, 0.5)", // indigo
      "rgba(139, 92, 246, 0.5)", // purple
      "rgba(59, 130, 246, 0.5)", // blue
      "rgba(255, 87, 34, 0.3)", // orange (accent)
    ];

    const newCircles = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      size: Math.random() * 300 + 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setCircles(newCircles);

    // Create tech icons
    const icons = [
      "laptop-code", "server", "database", "microchip", 
      "code", "network-wired", "code-branch", "bug", 
      "robot", "file-code", "brain"
    ];
    
    const newIcons = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      size: Math.floor(Math.random() * 20) + 14,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 30 - 15,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 15,
    }));
    setTechIcons(newIcons);

    // Create code snippets
    const codeSamples = [
      "function algorithm() { ... }", 
      "class DataStructure { ... }", 
      "if (condition) { ... }", 
      "for (let i = 0; i < n; i++) { ... }",
      "const result = data.map(item => { ... })",
      "return new Promise((resolve, reject) => { ... })",
      "try { ... } catch (error) { ... }",
      "import { useState, useEffect } from 'react'",
      "SELECT * FROM students WHERE grade > 75",
      "public static void main(String[] args) { ... }"
    ];

    const newCodeLines = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      text: codeSamples[Math.floor(Math.random() * codeSamples.length)],
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      delay: Math.random() * 5,
    }));
    setCodeLines(newCodeLines);

  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]"
    >
      <div className="tech-grid bg-grid opacity-10"></div>
      
      {/* Gradient Circles */}
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="gradient-circle absolute rounded-full blur-3xl"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            opacity: 0.6,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Tech Icons */}
      {techIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-primary/25"
          style={{
            fontSize: `${icon.size}px`,
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
          initial={{ opacity: 0, rotate: icon.rotation }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: [0, -50, -100],
            rotate: [icon.rotation, icon.rotation + 10, icon.rotation - 10]
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            delay: icon.delay,
            ease: "linear",
          }}
        >
          <i className={`fas fa-${icon.icon}`} />
        </motion.div>
      ))}

      {/* Code Snippets */}
      {codeLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute font-mono text-xs text-primary/30"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: line.delay,
          }}
        >
          {line.text}
        </motion.div>
      ))}

      {/* Circuit Board Lines */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <g className="text-primary/10">
          {Array.from({ length: 10 }).map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = x1 + (Math.random() * 40 - 20);
            const y2 = y1 + (Math.random() * 40 - 20);
            
            return (
              <motion.line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="currentColor"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.8, 0.8, 0] 
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "linear",
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
