import { motion } from "framer-motion";
import { Trophy, Shield, Cloud, Download, Award, Users, TrendingUp, Target } from "lucide-react";
import professionalPhoto from "@assets/image_1754971769733.png";
import resume from "@assets/Dhrumil_Rupakar_Resume_1755067537815.pdf";

export default function About() {
  const achievements = [
    {
      icon: Award,
      text: "President's Honor List x2",
      detail: "Academic Excellence (CGPA: 3.9/4.0)",
      color: "text-electric-blue"
    },
    {
      icon: Shield,
      text: "Mastercard Cybersecurity Program",
      detail: "30% improvement in phishing resilience",
      color: "text-neon-green"
    },
    {
      icon: TrendingUp,
      text: "Top 5% Performer at Amazon",
      detail: "98% accuracy, 1,200+ packages/shift",
      color: "text-electric-blue"
    },
    {
      icon: Target,
      text: "90% Critical Vulnerability Closure",
      detail: "50+ Nessus scans in homelab environment",
      color: "text-neon-green"
    }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Dhrumil_Rupakar_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-electric-blue mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Professional Photo Section */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-2xl blur-lg opacity-60"></div>
              <img 
                src={professionalPhoto}
                alt="Dhrumil Rupakar - Cybersecurity Professional" 
                className="relative w-full h-full object-cover rounded-2xl border border-neon-green/30 shadow-lg transition-all duration-300 hover:border-electric-blue/40"
              />
            </div>
          </motion.div>
          
          {/* About Content Section */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm an Information Technology student at{" "}
                <span className="text-neon-green font-medium">Seneca Polytechnic</span>{" "}
                with hands-on experience in threat detection, incident response, vulnerability management, and cloud infrastructure.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I have built enterprise-level homelabs, deployed secure network architectures, and worked on real-world simulations of cyberattacks. I thrive in solving complex technical challenges and continuously expanding my skills in cybersecurity, cloud computing, and networking.
              </p>
            </div>
          </motion.div>
          </div>
          
          {/* Key Achievements Section - Centered Column */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-poppins font-bold text-white text-center mb-12">Key Achievements</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="group bg-darker-bg/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: index % 2 === 0 
                      ? "0 20px 40px rgba(59, 130, 246, 0.15)" 
                      : "0 20px 40px rgba(34, 197, 94, 0.15)"
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${
                      index % 2 === 0 
                        ? 'from-electric-blue/20 to-electric-blue/10 border border-electric-blue/30' 
                        : 'from-neon-green/20 to-neon-green/10 border border-neon-green/30'
                    } group-hover:shadow-lg transition-all duration-300`}>
                      <achievement.icon className={`${achievement.color} text-2xl group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-lg mb-2 group-hover:text-neon-green/90 transition-colors duration-300">
                        {achievement.text}
                      </div>
                      <div className="text-gray-400 text-sm leading-relaxed">
                        {achievement.detail}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Resume Download Button - Centered Below Achievements */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={downloadResume}
              className="group relative px-8 py-4 bg-gradient-to-r from-darker-bg/80 to-darker-bg/60 backdrop-blur-sm border-2 border-neon-green/40 text-neon-green font-semibold text-lg rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-neon-green hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-neon-green/20 to-electric-blue/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3">
                <Download size={22} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">Download Resume</span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
