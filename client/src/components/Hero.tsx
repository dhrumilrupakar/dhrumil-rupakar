import { motion } from "framer-motion";
import { ChevronDown, Briefcase, Code } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-darker-bg to-dark-bg"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          className="animate-float"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-poppins font-bold mb-6">
            <span className="gradient-text">Dhrumil Rupakar</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-poppins font-medium mb-8 overflow-hidden">
            <motion.span 
              className="inline-block"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, delay: 1 }}
              style={{ whiteSpace: "nowrap" }}
            >
              Cybersecurity <span className="gradient-text mx-2">|</span> Networking <span className="gradient-text mx-2">|</span> Cloud
            </motion.span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-neon-green mr-2">&gt;_</span>Engineering zero-trust architectures, hunting APTs, and orchestrating scalable cloud-native security operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              onClick={() => scrollToSection("experience")}
              className="bg-darker-bg/80 border-2 border-neon-green/50 text-neon-green px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300 flex items-center backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View Experience
            </motion.button>
            
            <motion.button 
              onClick={() => scrollToSection("projects")}
              className="bg-darker-bg/80 border-2 border-electric-blue/50 text-electric-blue px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300 flex items-center backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Code className="w-5 h-5 mr-2" />
              View Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-neon-green text-2xl" />
      </motion.div>
    </section>
  );
}
