import { motion } from "framer-motion";
import { Network, Shield, Cloud, Wrench } from "lucide-react";
import SkillBar from "./SkillBar";

export default function Skills() {
  const skillCategories = [
    {
      icon: Network,
      title: "Networking",
      color: "text-neon-green",
      borderColor: "border-neon-green/20",
      skills: [
        { name: "TCP/IP", level: 95, color: "from-neon-green to-electric-blue" },
        { name: "Cisco R&S", level: 90, color: "from-electric-blue to-neon-green" },
        { name: "VPN/Firewalls", level: 88, color: "from-neon-green to-electric-blue" },
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      color: "text-electric-blue",
      borderColor: "border-electric-blue/20",
      skills: [
        { name: "Threat Detection", level: 92, color: "from-electric-blue to-neon-green" },
        { name: "Incident Response", level: 87, color: "from-neon-green to-electric-blue" },
        { name: "Vuln Management", level: 85, color: "from-electric-blue to-neon-green" },
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      color: "text-neon-green",
      borderColor: "border-neon-green/20",
      skills: [
        { name: "AWS", level: 89, color: "from-neon-green to-electric-blue" },
        { name: "Azure", level: 84, color: "from-electric-blue to-neon-green" },
        { name: "Security Automation", level: 82, color: "from-neon-green to-electric-blue" },
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Languages",
      color: "text-electric-blue",
      borderColor: "border-electric-blue/20",
      skills: [
        { name: "Python", level: 91, color: "from-electric-blue to-neon-green" },
        { name: "Bash/PowerShell", level: 88, color: "from-neon-green to-electric-blue" },
        { name: "Wireshark/Nmap", level: 93, color: "from-electric-blue to-neon-green" },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-4">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-electric-blue mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className={`bg-darker-bg/50 p-6 rounded-2xl border ${category.borderColor} cursor-pointer`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                filter: categoryIndex % 2 === 0 
                  ? "drop-shadow(0 0 15px rgba(34, 197, 94, 0.3))" 
                  : "drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))"
              }}
            >
              <div className="flex items-center mb-6">
                <category.icon className={`${category.color} text-2xl mr-3`} />
                <h3 className="text-xl font-poppins font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    delay={(categoryIndex * 0.1) + (skillIndex * 0.2)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
