import { motion } from "framer-motion";
import { Award, Shield, Lock, Network, Code, Clock } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      icon: Award,
      title: "CISSP Foundation",
      color: "text-neon-green",
      borderColor: "border-neon-green/20"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Cybercrime",
      color: "text-electric-blue",
      borderColor: "border-electric-blue/20"
    },
    {
      icon: Lock,
      title: "Security Awareness",
      color: "text-neon-green",
      borderColor: "border-neon-green/20"
    },
    {
      icon: Network,
      title: "Cisco Packet Tracer",
      color: "text-electric-blue",
      borderColor: "border-electric-blue/20"
    },
    {
      icon: Code,
      title: "Python Programming 3.x",
      color: "text-neon-green",
      borderColor: "border-neon-green/20"
    },
    {
      icon: Clock,
      title: "CompTIA Security+",
      subtitle: "In Progress",
      color: "text-amber-500",
      borderColor: "border-amber-500/20"
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-darker-bg/30 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-electric-blue mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className={`bg-darker-bg/50 p-6 rounded-xl border ${cert.borderColor} glow-on-hover cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: cert.color === "text-neon-green" 
                  ? "0 0 20px rgba(0, 255, 136, 0.3)" 
                  : cert.color === "text-electric-blue"
                  ? "0 0 20px rgba(0, 191, 255, 0.3)"
                  : "0 0 20px rgba(245, 158, 11, 0.3)"
              }}
            >
              <div className="flex items-center mb-3">
                <cert.icon className={`${cert.color} text-lg mr-3`} />
                <div>
                  <h3 className="font-poppins font-semibold">{cert.title}</h3>
                  {cert.subtitle && (
                    <span className={`text-sm ${cert.color}`}>{cert.subtitle}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
