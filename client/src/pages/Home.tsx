import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import BinaryRain from "@/components/BinaryRain";
import { scrollToElement } from "@/lib/utils";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <BinaryRain density={30} speed={1.2} opacity={0.1} />
      
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <i className="fas fa-microchip text-4xl text-accent"></i>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master A Level <span className="gradient-text glow-text">Computer Science</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Expert guidance, comprehensive resources, and a supportive
              community to help you excel in your studies.
            </p>
            <p className="italic text-lg text-muted-foreground mb-10">
              "The best way to predict the future is to invent it."
              <span className="block text-sm mt-1">- Alan Kay</span>
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                className="bg-accent hover:bg-accent-hover text-white font-medium py-3 px-8 h-auto pulse-button"
                onClick={() => scrollToElement("downloads")}
                asChild
              >
                <Link href="/downloads">
                  <span className="flex items-center">
                    Get Started <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-600 hover:border-gray-400 py-3 px-8 h-auto"
                onClick={() => scrollToElement("about")}
                asChild
              >
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              className="flex justify-center gap-12 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-file-alt text-accent text-xl"></i>
                </div>
                <p className="text-muted-foreground">Past Papers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-code text-accent text-xl"></i>
                </div>
                <p className="text-muted-foreground">Programming</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-graduation-cap text-accent text-xl"></i>
                </div>
                <p className="text-muted-foreground">Career Guidance</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
