import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="bg-card/70 mb-12 hover-card">
                <CardContent className="p-6 md:p-8">
                  <p className="text-lg text-muted-foreground">
                    We are dedicated to bringing quality Computer Science education to students across Zimbabwe. Our team of
                    experienced educators specializes in A Level Computer Science, making complex programming concepts
                    accessible and engaging for all students.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Our Story
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="bg-card/70 mb-12 hover-card">
                <CardContent className="p-6 md:p-8">
                  <p className="text-lg text-muted-foreground">
                    A Level Computer Science Experts started as a humble WhatsApp group in Masvingo, initiated by Brave Machingura as
                    what began as a casual endeavor. What started as a simple idea soon blossomed into something much bigger,
                    expanding to serve students across the whole of Zimbabwe. Through the dedicated efforts of L Chenyika, J Mapesure,
                    and T Chibi, it has evolved into Zimbabwe's premier destination for computer science education and career guidance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Meet Our Founder
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Card className="bg-card/70 hover-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center overflow-hidden">
                      <i className="fas fa-user-graduate text-5xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Tinodaishe M Chibi</h4>
                      <p className="text-muted-foreground mb-4">Founder & Lead Mentor</p>
                      <p className="text-lg text-muted-foreground mb-4">
                        A software engineering student from Mutare who has tutored over 500 students in programming. 
                        With more than 3 years of experience in coding, Tinodaishe is passionate about making 
                        computer science education accessible to all Zimbabwean students.
                      </p>
                      <div className="flex gap-4 text-muted-foreground">
                        <a href="https://www.facebook.com/chibi.m.tinodaishe" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                          <i className="fab fa-facebook mr-2"></i>
                          <span>Chibi M Tinodaishe</span>
                        </a>
                        <a href="https://www.linkedin.com/in/tinodaishe-chibi" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                          <i className="fab fa-linkedin mr-2"></i>
                          <span>LinkedIn</span>
                        </a>
                        <a href="https://wa.me/+263781081816" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                          <i className="fab fa-whatsapp mr-2"></i>
                          <span>0781081816</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
