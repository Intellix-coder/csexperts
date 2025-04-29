import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  FiServer, FiDatabase, FiCpu, FiCode, FiGlobe, 
  FiHardDrive, FiTerminal, FiBriefcase, FiPower, FiHash
} from "react-icons/fi";

interface GradientCircle {
  id: number;
  size: number;
  color: string;
  x: number;
  y: number;
}

interface CodeLine {
  id: number;
  text: string;
  x: number;
  y: number;
  delay: number;
}

// Create tech icons array
const techIconComponents = [
  FiCpu, FiServer, FiDatabase, FiCode, FiGlobe, 
  FiHardDrive, FiTerminal, FiBriefcase, FiPower, FiHash
];

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [circles, setCircles] = useState<GradientCircle[]>([]);
  const [floatingIcons, setFloatingIcons] = useState<{
    id: number;
    Icon: React.ElementType;
    size: number;
    x: number;
    y: number;
    rotation: number;
    delay: number;
    duration: number;
  }[]>([]);
  const [codeLines, setCodeLines] = useState<CodeLine[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create gradient circles with more variation
    const colors = [
      "rgba(99, 102, 241, 0.5)", // indigo
      "rgba(139, 92, 246, 0.5)", // purple
      "rgba(59, 130, 246, 0.5)", // blue
      "rgba(255, 87, 34, 0.3)", // orange (accent)
      "rgba(0, 200, 83, 0.3)",  // green
      "rgba(236, 72, 153, 0.3)" // pink
    ];
    
    // Randomize the number of circles (between 4-8)
    const circleCount = Math.floor(Math.random() * 5) + 4;
    
    const newCircles = Array.from({ length: circleCount }).map((_, i) => {
      // Random size with more variation
      const size = Math.random() * 350 + 150;
      
      // Random position, ensuring some circles are near corners/edges
      let x = 0, y = 0;
      
      // For some circles, position them strategically
      if (i < 4) {
        // Position near corners
        switch (i) {
          case 0: // Top left
            x = Math.random() * 30;
            y = Math.random() * 30;
            break;
          case 1: // Top right
            x = 70 + Math.random() * 30;
            y = Math.random() * 30;
            break;
          case 2: // Bottom left
            x = Math.random() * 30;
            y = 70 + Math.random() * 30;
            break;
          case 3: // Bottom right
            x = 70 + Math.random() * 30;
            y = 70 + Math.random() * 30;
            break;
        }
      } else {
        // Random position for remaining circles
        x = Math.random() * 100;
        y = Math.random() * 100;
      }
      
      return {
        id: i,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        x,
        y,
      };
    });
    
    setCircles(newCircles);

    // Create tech icons with more variety
    // Randomize the number of icons between 10-18
    const iconCount = Math.floor(Math.random() * 9) + 10;
    
    const newIcons = Array.from({ length: iconCount }).map((_, i) => {
      const randomIndex = Math.floor(Math.random() * techIconComponents.length);
      
      // More size variation
      const size = Math.floor(Math.random() * 24) + 12;
      
      // More deliberate positioning for visual interest
      let x = 0, y = 0;
      
      // Position some icons along the edges
      if (i < 4) {
        switch (i % 4) {
          case 0: // Left edge
            x = Math.random() * 10;
            y = Math.random() * 100;
            break;
          case 1: // Right edge
            x = 90 + Math.random() * 10;
            y = Math.random() * 100;
            break;
          case 2: // Top edge
            x = Math.random() * 100;
            y = Math.random() * 10;
            break;
          case 3: // Bottom edge
            x = Math.random() * 100;
            y = 90 + Math.random() * 10;
            break;
        }
      } else {
        // Random position for remaining icons
        x = 10 + Math.random() * 80;
        y = 10 + Math.random() * 80;
      }
      
      // More rotation and duration variation
      const rotation = Math.random() * 45 - 22.5;
      const delay = Math.random() * 8;
      const duration = Math.random() * 25 + 12;
      
      return {
        id: i,
        Icon: techIconComponents[randomIndex],
        size,
        x, y,
        rotation,
        delay,
        duration,
      };
    });
    setFloatingIcons(newIcons);

    // Create code snippets with more programming languages
    const codeSamples = [
      // JavaScript/TypeScript snippets
      "function algorithm() { /* ... */ }", 
      "class DataStructure { constructor() { /* ... */ } }", 
      "if (condition) { return true; } else { return false; }", 
      "for (let i = 0; i < array.length; i++) { /* ... */ }",
      "const result = data.map(item => item.value);",
      "return new Promise((resolve, reject) => { /* ... */ })",
      "try { await fetchData(); } catch (error) { console.error(error); }",
      "import { useState, useEffect } from 'react'",
      
      // SQL snippets
      "SELECT * FROM students WHERE grade > 75 ORDER BY grade DESC",
      "INSERT INTO users (name, email) VALUES ('John', 'john@example.com')",
      "CREATE TABLE products (id INT, name VARCHAR(255))",
      
      // Python snippets
      "def factorial(n): return 1 if n <= 1 else n * factorial(n-1)",
      "if __name__ == '__main__': main()",
      "try: x = data[0] except IndexError: x = None",
      "class Node: def __init__(self, val=0): self.val = val",
      
      // Java snippets
      "public static void main(String[] args) { /* ... */ }",
      "for (String arg : args) { System.out.println(arg); }",
      "try (FileReader fr = new FileReader(file)) { /* ... */ }",
      
      // C/C++ snippets
      "#include <iostream>",
      "int main(int argc, char** argv) { return 0; }",
      "template<typename T> void swap(T& a, T& b) { T tmp = a; a = b; b = tmp; }",
      
      // Computer Science concepts
      "// Quick Sort Implementation",
      "// Binary Search Tree",
      "// Dijkstra's Algorithm",
      "// Hash Table Implementation"
    ];

    // Randomize number of code snippets between 7-12
    const snippetCount = Math.floor(Math.random() * 6) + 7;
    
    const newCodeLines = Array.from({ length: snippetCount }).map((_, i) => {
      // Get unique code samples to avoid repetition
      const availableSamples = [...codeSamples];
      const randomIndex = Math.floor(Math.random() * availableSamples.length);
      const text = availableSamples[randomIndex];
      
      // More specific positioning to avoid overlap
      const sectionWidth = 100 / Math.ceil(Math.sqrt(snippetCount));
      const sectionHeight = 100 / Math.ceil(Math.sqrt(snippetCount));
      
      const sectionX = (i % Math.ceil(Math.sqrt(snippetCount))) * sectionWidth;
      const sectionY = Math.floor(i / Math.ceil(Math.sqrt(snippetCount))) * sectionHeight;
      
      const x = sectionX + Math.random() * (sectionWidth * 0.8);
      const y = sectionY + Math.random() * (sectionHeight * 0.8);
      
      return {
        id: i,
        text,
        x, y,
        delay: Math.random() * 8,
      };
    });
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
      {floatingIcons.map((iconData) => {
        const IconComponent = iconData.Icon;
        return (
          <motion.div
            key={iconData.id}
            className="absolute text-primary/25"
            style={{
              left: `${iconData.x}%`,
              top: `${iconData.y}%`,
            }}
            initial={{ opacity: 0, rotate: iconData.rotation }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -50, -100],
              rotate: [iconData.rotation, iconData.rotation + 10, iconData.rotation - 10]
            }}
            transition={{
              duration: iconData.duration,
              repeat: Infinity,
              delay: iconData.delay,
              ease: "linear",
            }}
          >
            <IconComponent size={iconData.size} />
          </motion.div>
        );
      })}

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
          {/* Random individual lines */}
          {Array.from({ length: 15 }).map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = x1 + (Math.random() * 40 - 20);
            const y2 = y1 + (Math.random() * 40 - 20);
            
            return (
              <motion.line
                key={`line-${i}`}
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
          
          {/* Circuit nodes (dots) */}
          {Array.from({ length: 8 }).map((_, i) => {
            const cx = Math.random() * 100;
            const cy = Math.random() * 100;
            const radius = Math.random() * 2 + 1;
            
            return (
              <motion.circle
                key={`node-${i}`}
                cx={`${cx}%`}
                cy={`${cy}%`}
                r={radius}
                fill="currentColor"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: Math.random() * 8,
                  ease: "easeInOut",
                }}
              />
            );
          })}
          
          {/* Connected circuit paths */}
          {Array.from({ length: 3 }).map((_, pathIndex) => {
            // Create a polyline path with multiple segments
            const points = [];
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            let currentX = startX;
            let currentY = startY;
            
            // Create 3-5 segments for each path
            const segmentCount = Math.floor(Math.random() * 3) + 3;
            for (let i = 0; i < segmentCount; i++) {
              // Control direction - horizontal or vertical movements
              if (i % 2 === 0) {
                // Horizontal movement
                currentX += (Math.random() * 30) * (Math.random() > 0.5 ? 1 : -1);
                currentX = Math.max(0, Math.min(100, currentX));
              } else {
                // Vertical movement
                currentY += (Math.random() * 30) * (Math.random() > 0.5 ? 1 : -1);
                currentY = Math.max(0, Math.min(100, currentY));
              }
              points.push(`${currentX},${currentY}`);
            }
            
            const pathString = `M${startX},${startY} L${points.join(' L')}`;
            return (
              <motion.path
                key={`circuit-${pathIndex}`}
                d={pathString}
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  delay: Math.random() * 5,
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
