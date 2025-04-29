import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-in">About Us</h1>

          <div className="prose prose-lg mb-12 animate-fade-in">
            <p className="text-lg text-foreground mb-6">
              We are dedicated to bringing quality Computer Science education to students across Zimbabwe. 
              Our platform specializes in A Level Computer Science, making complex programming concepts 
              accessible and engaging for all students.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm mb-12 animate-fade-in">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
            <p className="text-card-foreground">
              A Level Computer Science Experts started as a WhatsApp group in Zimbabwe,
              evolving into the country's premier destination for computer science education
              and career guidance. Under the mentorship of Tinodaishe Chibi, we've helped
              countless students excel in their studies and pursue successful careers in technology.
            </p>
          </div>

          <div className="mt-12 bg-card rounded-lg p-8 shadow-sm animate-fade-in">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-card-foreground">
              To empower Zimbabwean students with the knowledge and skills needed to excel in 
              Computer Science, fostering innovation and technological advancement across the nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;