import { useEffect, useRef } from 'react';

interface BinaryRainProps {
  density?: number;
  speed?: number;
  opacity?: number;
}

const BinaryRain: React.FC<BinaryRainProps> = ({
  density = 50,
  speed = 1,
  opacity = 0.1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const binaryChars = "01";

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

    // Initialize drop positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height);
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

      // Set text style
      ctx.fillStyle = `rgba(255, 87, 34, ${opacity})`;
      ctx.font = `${fontSize}px monospace`;

      // Loop through drops
      for (let i of columnsToUse) {
        // Get random binary character
        const char = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
        
        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Move drop down
        drops[i] += speed;
        
        // Send the drop back to the top when it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
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
  }, [density, speed, opacity, binaryChars]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default BinaryRain;