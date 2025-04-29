import { Card, CardContent } from "@/components/ui/card";
import AnimatedBackground from "@/components/AnimatedBackground";
import { theoryPapers, practicalPapers, programmingNotes, specialTopics } from "@/lib/utils";
import { motion } from "framer-motion";

const Downloads = () => {
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
            Study Resources
          </motion.h2>
          
          {/* Paper 1 (Theory) Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="bg-card/70 mb-12">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <i className="fas fa-file-alt text-xl mr-3 text-accent"></i>
                  <h3 className="text-2xl font-bold">Paper 1 (Theory) Past Papers</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {theoryPapers.map((paper) => (
                    <a
                      key={paper.id}
                      href={paper.url}
                      className="hover-card flex items-center bg-secondary rounded-lg p-4 transition duration-300 hover:bg-secondary/80"
                    >
                      <i className="fas fa-download mr-3 text-accent"></i>
                      <span>{paper.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Paper 2 (Practical) Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="bg-card/70">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <i className="fas fa-laptop-code text-xl mr-3 text-accent"></i>
                  <h3 className="text-2xl font-bold">Paper 2 (Practical) Past Papers</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {practicalPapers.map((paper) => (
                    <a
                      key={paper.id}
                      href={paper.url}
                      className="hover-card flex items-center bg-secondary rounded-lg p-4 transition duration-300 hover:bg-secondary/80"
                    >
                      <i className="fas fa-download mr-3 text-accent"></i>
                      <span>{paper.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Programming Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12"
          >
            <Card className="bg-card/70">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <i className="fas fa-code text-xl mr-3 text-accent"></i>
                  <h3 className="text-2xl font-bold">Programming Notes & Career Guides</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {programmingNotes.map((note) => (
                    <a
                      key={note.id}
                      href={note.url}
                      className="hover-card flex items-center bg-secondary rounded-lg p-4 transition duration-300 hover:bg-secondary/80"
                    >
                      <i className="fas fa-file-code mr-3 text-accent"></i>
                      <span>{note.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Special Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12"
          >
            <Card className="bg-card/70">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <i className="fas fa-book-open text-xl mr-3 text-accent"></i>
                  <h3 className="text-2xl font-bold">Special Topics & Advanced Resources</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {specialTopics.map((topic) => (
                    <a
                      key={topic.id}
                      href={topic.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-card flex flex-col bg-secondary rounded-lg p-4 transition duration-300 hover:bg-secondary/80"
                    >
                      <div className="flex items-center">
                        <i className="fas fa-file-alt mr-3 text-accent"></i>
                        <span className="font-medium">{topic.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground mt-2 ml-6">{topic.category}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
