import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import QuoteRotator from "./QuoteRotator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Hero = () => {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="absolute inset-0 animate-pulse-slow">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                animation: `float ${Math.random() * 10 + 5}s infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-grid-white/10 bg-grid animate-grid" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
          Master A Level Computer Science
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Expert guidance, comprehensive resources, and career support to help you excel in tech.
        </p>

        <QuoteRotator />

        <div className="space-x-4 animate-slide-up mt-8">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => navigate("/about")}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white border-white"
            onClick={() => setShowDialog(true)}
          >
            Learn More
          </Button>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">Why Choose Computer Science?</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <p>
              Computer Science is more than just programming – it's about solving real-world problems
              through computational thinking and innovative solutions. In today's digital age,
              understanding computer science is becoming increasingly crucial for success in almost
              any field.
            </p>
            <h3 className="font-semibold text-lg">Why Join Us?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expert guidance from experienced educators</li>
              <li>Comprehensive study materials and resources</li>
              <li>Hands-on programming practice</li>
              <li>Career guidance and industry insights</li>
              <li>Supportive community of learners</li>
              <li>Access to past papers and detailed solutions</li>
            </ul>
            <p>
              By joining A Level Computer Science Experts, you're not just preparing for an exam –
              you're investing in your future in the ever-growing tech industry. Our proven track
              record of success and comprehensive approach to teaching ensures you'll have the best
              possible foundation for your computer science journey.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* YouTube Tutorials Section */}
      <div className="absolute bottom-8 left-0 right-0 bg-background/80 backdrop-blur-sm py-6">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-4">Featured Tutorials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="https://www.youtube.com/playlist?list=PLEiEAq2VkUUKQQgE3wYk3qCxuQV8DYZm6" 
              target="_blank" 
              className="p-4 rounded-lg bg-card hover:bg-accent/5 transition-colors"
            >
              <h4 className="font-semibold mb-2">A Level Computer Science</h4>
              <p className="text-sm text-muted-foreground">Complete course covering theory and practical</p>
            </a>
            <a 
              href="https://www.youtube.com/playlist?list=PLEiEAq2VkUULlNtIFhEQHo8gacvme35rY" 
              target="_blank" 
              className="p-4 rounded-lg bg-card hover:bg-accent/5 transition-colors"
            >
              <h4 className="font-semibold mb-2">Programming in Python</h4>
              <p className="text-sm text-muted-foreground">Learn Python programming from basics to advanced</p>
            </a>
            <a 
              href="https://www.youtube.com/playlist?list=PLEiEAq2VkUUKwwxwK1IGF9UE5ZfGaVzJr" 
              target="_blank" 
              className="p-4 rounded-lg bg-card hover:bg-accent/5 transition-colors"
            >
              <h4 className="font-semibold mb-2">Visual Basic Programming</h4>
              <p className="text-sm text-muted-foreground">Complete Visual Basic tutorials for beginners</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;