import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight, Wifi } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Warehouse Associate | Learning Ambassador",
      company: "Amazon",
      location: "Toronto",
      period: "Nov 2024 – Present",
      achievements: [
        "Process over 1,200 packages per shift with 98% accuracy using automated systems, boosting operational efficiency",
        "Troubleshoot and resolve 15+ RF scanner device issues weekly, strengthening technical support skills",
        "Consistently ranked in the top 5% of the team for productivity during peak volume periods",
        "Identified and recommended layout optimizations contributing to a 20% improvement in workflow",
        "Support onboarding and training of new associates by teaching Amazon's standard working procedures and best practices as a Learning Ambassador"
      ],
      color: "neon-green",
      borderColor: "border-neon-green/20"
    },
    {
      title: "Cybersecurity Virtual Experience",
      company: "Mastercard",
      location: "Toronto | Remote",
      period: "Aug 2024",
      achievements: [
        "Analyzed multiple phishing simulations and developed mitigation strategies to reduce human risk factors",
        "Created a security awareness module that increased user resilience against phishing by 30% in simulations",
        "Evaluated breach response procedures and mapped incident response steps in SOC-style exercises",
        "Applied vulnerability assessment and threat detection techniques in cloud-based cybersecurity case studies"
      ],
      color: "electric-blue",
      borderColor: "border-electric-blue/20",
      isRemote: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-darker-bg/30 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-electric-blue mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`bg-darker-bg/50 p-8 rounded-2xl border ${exp.borderColor} glow-on-hover`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-poppins font-bold text-${exp.color} mb-2`}>
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-300 flex-wrap">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center">
                        {exp.isRemote ? (
                          <Wifi className="w-4 h-4 mr-2" />
                        ) : (
                          <MapPin className="w-4 h-4 mr-2" />
                        )}
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <motion.div 
                    key={achievementIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <ChevronRight className={`text-${exp.color} mr-3 mt-1 flex-shrink-0 w-4 h-4`} />
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}