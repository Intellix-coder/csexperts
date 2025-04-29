import { useEffect, useRef, useState } from 'react';

interface BinaryRainProps {
  density?: number;
  speed?: number;
  opacity?: number;
  colorScheme?: 'matrix' | 'blue' | 'purple' | 'orange' | 'random';
}

const BinaryRain: React.FC<BinaryRainProps> = ({
  density = 50,
  speed = 1,
  opacity = 0.1,
  colorScheme = 'orange'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [characters, setCharacters] = useState("01");
  const [randomRain, setRandomRain] = useState(false);

  // Generate random characters at startup
  useEffect(() => {
    // Determine characters based on a random chance
    const randomType = Math.random();
    
    if (randomType < 0.2) {
      // Pure binary (01)
      setCharacters("01");
    } else if (randomType < 0.4) {
      // Extended binary and hex
      setCharacters("01ABCDEF");
    } else if (randomType < 0.6) {
      // ASCII values
      setCharacters("!@#$%^&*()_+-=[]{}|;:,./<>?");
    } else if (randomType < 0.8) {
      // Programming symbols
      setCharacters("{}()<>[]+-*/=");
    } else {
      // Mix of numbers
      setCharacters("0123456789");
    }
    
    // Random chance for randomized rain
    setRandomRain(Math.random() > 0.5);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create binary rain drops
    const fontSize = 12;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops: number[] = [];
    const speeds: number[] = [];
    const colors: string[] = [];

    // Dynamic color selection based on colorScheme
    const getColor = () => {
      if (colorScheme === 'random') {
        const colorOptions = [
          `rgba(255, 87, 34, ${opacity})`, // orange
          `rgba(99, 102, 241, ${opacity})`, // indigo
          `rgba(139, 92, 246, ${opacity})`, // purple
          `rgba(59, 130, 246, ${opacity})`, // blue
          `rgba(0, 200, 83, ${opacity})`,   // green
        ];
        return colorOptions[Math.floor(Math.random() * colorOptions.length)];
      } else {
        switch (colorScheme) {
          case 'matrix':
            return `rgba(0, 200, 83, ${opacity})`;
          case 'blue':
            return `rgba(59, 130, 246, ${opacity})`;
          case 'purple':
            return `rgba(139, 92, 246, ${opacity})`;
          case 'orange':
          default:
            return `rgba(255, 87, 34, ${opacity})`;
        }
      }
    };

    // Initialize drop positions and speeds
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height);
      // Random speed variations
      speeds[i] = randomRain ? speed * (0.5 + Math.random()) : speed;
      colors[i] = getColor();
    }

    // Adjust how many columns are active based on density
    const activeColumns = Math.floor(columns * (density / 100));
    const columnsToUse: number[] = [];
    while (columnsToUse.length < activeColumns) {
      const randomCol = Math.floor(Math.random() * columns);
      if (!columnsToUse.includes(randomCol)) {
        columnsToUse.push(randomCol);
      }
    }

    // Drawing function
    const draw = () => {
      // Add semi-transparent black background to create fade effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Loop through drops
      for (let i of columnsToUse) {
        // Get random character
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Set text style - different color per column if random
        ctx.fillStyle = colors[i];
        ctx.font = `${fontSize}px monospace`;
        
        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Move drop down with its own speed
        drops[i] += speeds[i];
        
        // Randomly make some characters brighter for a highlight effect
        if (Math.random() > 0.99) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        }
        
        // Send the drop back to the top when it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
          // Sometimes change speed when resetting
          if (randomRain && Math.random() > 0.8) {
            speeds[i] = speed * (0.5 + Math.random());
          }
        }
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [density, speed, opacity, characters, randomRain, colorScheme]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default BinaryRain;