import { motion } from "framer-motion";
import { Server, Bug, Plus, Terminal, Shield, Search, Zap, HardDrive, Globe, Lock, Eye, Code, Key } from "lucide-react";

export default function Projects() {
  const getTechIcon = (tech: string) => {
    switch(tech.toLowerCase()) {
      case 'pfsense': return Shield;
      case 'splunk': return Search;
      case 'nessus': return Eye;
      case 'vmware': return HardDrive;
      case 'dvwa': return Globe;
      case 'suricata': return Zap;
      case 'linux': return Terminal;
      case 'pentesting': return Lock;
      case 'python': return Code;
      case 'cryptography': return Lock;
      case 'security': return Shield;
      case 'random generation': return Zap;
      default: return Code;
    }
  };

  const getTechDescription = (tech: string) => {
    switch(tech.toLowerCase()) {
      case 'pfsense': return 'Firewall & Router';
      case 'splunk': return 'SIEM & Log Analysis';
      case 'nessus': return 'Vulnerability Scanner';
      case 'vmware': return 'Virtualization Platform';
      case 'dvwa': return 'Web App Testing';
      case 'suricata': return 'Intrusion Detection';
      case 'linux': return 'Operating System';
      case 'pentesting': return 'Security Testing';
      case 'python': return 'Programming Language';
      case 'cryptography': return 'Secure Algorithms';
      case 'security': return 'Access Control';
      case 'random generation': return 'Entropy & Randomness';
      default: return 'Technology';
    }
  };

  const projects = [
    {
      icon: Server,
      title: "Cybersecurity Homelab",
      description: "Designed and deployed an enterprise-like virtual environment with Windows Server, Kali Linux, and Ubuntu to simulate real-world cyber threats and defenses.",
      metrics: [
        { label: "Networks Segmented", value: "Multiple VLANs", color: "text-neon-green" },
        { label: "Daily Log Monitoring", value: "10K+ Logs", color: "text-electric-blue" },
        { label: "Vulnerability Scans", value: "50+ Nessus Scans", color: "text-neon-green" },
        { label: "Critical Findings Closed", value: "90%", color: "text-electric-blue" },
      ],
      technologies: ["pfSense", "Splunk", "Nessus", "VMware"],
      borderColor: "border-neon-green/20"
    },
    {
      icon: Bug,
      title: "RFI to RCE Attack Simulation",
      description: "Executed a controlled RFI-to-RCE exploit in DVWA within a sandboxed Linux-Windows environment using real-time threat detection.",
      metrics: [
        { label: "Environment", value: "Sandboxed Multi-OS", color: "text-neon-green" },
        { label: "Detection System", value: "Suricata IDS", color: "text-electric-blue" },
        { label: "Attack Surface Reduction", value: "60%", color: "text-neon-green" },
      ],
      technologies: ["DVWA", "Suricata", "Linux", "Pentesting"],
      borderColor: "border-electric-blue/20"
    },
    {
      icon: Key,
      title: "Password Generator using Python",
      description: "A straightforward yet powerful password generator written in Python. This tool creates robust, random passwords incorporating letters, numbers, and special characters for improved security.",
      metrics: [
        { label: "Password Length", value: "18 Characters", color: "text-neon-green" },
        { label: "Character Types", value: "Letters, Numbers, Symbols", color: "text-electric-blue" },
        { label: "Complexity Level", value: "High Security", color: "text-neon-green" },
        { label: "Randomness", value: "Cryptographically Secure", color: "text-electric-blue" },
      ],
      technologies: ["Python", "Cryptography", "Security", "Random Generation"],
      borderColor: "border-neon-green/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-darker-bg/30 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-4" style={{ lineHeight: '1.2' }}>
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-electric-blue mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`bg-darker-bg/50 p-8 rounded-2xl border ${project.borderColor} glow-on-hover`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <project.icon className={`${index === 0 ? 'text-neon-green' : 'text-electric-blue'} text-2xl mr-4`} />
                <h3 className="text-2xl font-poppins font-semibold">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {project.metrics.map((metric, metricIndex) => (
                  <motion.div 
                    key={metricIndex}
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (metricIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm text-gray-400">{metric.label}</span>
                    <span className={`${metric.color} font-semibold`}>{metric.value}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {project.technologies.map((tech, techIndex) => {
                  const TechIcon = getTechIcon(tech);
                  const techDescription = getTechDescription(tech);
                  return (
                    <motion.div 
                      key={techIndex}
                      className={`p-3 rounded-lg border cursor-pointer ${
                        techIndex % 2 === 0 
                          ? 'bg-neon-green/10 border-neon-green/30 text-neon-green' 
                          : 'bg-electric-blue/10 border-electric-blue/30 text-electric-blue'
                      } transition-all duration-200`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        filter: techIndex % 2 === 0 
                          ? "drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))" 
                          : "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))",
                        y: -2
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <TechIcon className="w-4 h-4" />
                        <div>
                          <div className="font-semibold text-sm">{tech}</div>
                          <div className="text-xs opacity-75">{techDescription}</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* Future Projects Placeholder */}
          <motion.div 
            className="bg-darker-bg/30 p-8 rounded-2xl border border-gray-600/20 col-span-full lg:col-span-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <Plus className="text-gray-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-poppins font-semibold text-gray-500 mb-2">More Projects Coming Soon</h3>
              <p className="text-gray-400">Reserved space for future case studies and live demos, with project images and GitHub links.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
