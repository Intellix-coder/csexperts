import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="bg-card/70 shadow-lg hover-card h-full">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              className="flex flex-col space-y-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="bg-card/70 shadow-lg hover-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-secondary p-3 rounded-lg mr-4">
                      <i className="fas fa-envelope text-accent"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Email</h4>
                      <p className="text-muted-foreground">tinodaishemchibi@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/70 shadow-lg hover-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-secondary p-3 rounded-lg mr-4">
                      <i className="fas fa-phone-alt text-accent"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+263 78 108 1816</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/70 shadow-lg hover-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-secondary p-3 rounded-lg mr-4">
                      <i className="fab fa-whatsapp text-accent"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground">+263 71 817 6525</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/70 shadow-lg hover-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-secondary p-3 rounded-lg mr-4">
                      <i className="fas fa-map-marker-alt text-accent"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Location</h4>
                      <a href="#" className="text-accent hover:underline">View on Google Maps</a>
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

export default Contact;
