import { motion } from "framer-motion";
import { Heart, Users, Clock, Target, DollarSign, Flag } from "lucide-react";

export default function Volunteer() {
  const volunteerExperiences = [
    {
      icon: DollarSign,
      title: "Treasurer – Give Together",
      organization: "Give Together",
      location: "Toronto, Ontario, Canada",
      duration: "Jun 2025 – Present",
      description: "Executive team member directing finance, IT, and logistics for donor initiatives. Use data to optimize workflows and decision-making. Manage logistics and resources for high-impact blood drives.",
      impact: "Maintain transparency through precise documentation and coordination",
      color: "text-neon-green",
      status: "current"
    },
    {
      icon: Flag,
      title: "General Volunteer – Paddock Access Management & Communications",
      organization: "IndyCar Toronto 2025",
      location: "Toronto, Ontario, Canada",
      duration: "2025",
      description: "Assisted in coordinating paddock access, ensuring security protocols and entry permissions were followed. Supported event staff, teams, and guests with timely communication and logistical guidance.",
      impact: "Contributed to smooth operations in a high-paced, large-scale motorsport environment",
      color: "text-electric-blue",
      status: "completed"
    }
  ];

  return (
    <section id="volunteer" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-4" style={{ lineHeight: '1.2' }}>
            Volunteership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-electric-blue mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Contributing to the community through leadership and service excellence
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {volunteerExperiences.map((experience, index) => (
            <motion.div 
              key={index}
              className={`bg-darker-bg/50 p-8 rounded-2xl border transition-all duration-300 ${
                experience.color === 'text-neon-green' 
                  ? 'border-neon-green/20 hover:border-neon-green/40' 
                  : 'border-electric-blue/20 hover:border-electric-blue/40'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-3 rounded-xl border flex-shrink-0 ${
                    experience.color === 'text-neon-green' 
                      ? 'bg-neon-green/10 border-neon-green/30' 
                      : 'bg-electric-blue/10 border-electric-blue/30'
                  }`}>
                    <experience.icon className={`text-2xl ${
                      experience.color === 'text-neon-green' ? 'text-neon-green' : 'text-electric-blue'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-300 mb-1">{experience.organization}</p>
                    {experience.location && (
                      <p className="text-gray-400 text-sm mb-2">{experience.location}</p>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-0 lg:text-right flex-shrink-0">
                  <div className="flex items-center text-gray-400 mb-2 lg:justify-end">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  {experience.status === 'current' && (
                    <span className="inline-block bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm font-medium">
                      Current
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                {experience.description}
              </p>
              
              <div className="flex items-start space-x-3">
                <Target className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                  experience.color === 'text-neon-green' ? 'text-neon-green' : 'text-electric-blue'
                }`} />
                <span className="text-gray-400">
                  <span className="font-semibold">Impact:</span> {experience.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}