import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "Seneca Polytechnic",
      location: "Toronto, Canada",
      degree: "Advanced Diploma in Computer Systems Technology",
      gpa: "CGPA: 3.9/4.0",
      duration: "May 2024 – Dec 2026",
      achievements: "President's Honor List x2 (Summer 2024, Winter 2025)",
      status: "current",
      color: "neon-green"
    },
    {
      institution: "VPMP Polytechnic",
      location: "Gandhinagar, India",
      degree: "Diploma in Computer Engineering",
      gpa: "CGPA: 9.10/10",
      duration: "June 2020 - June 2023",
      achievements: "First Class Distinction",
      status: "completed",
      color: "electric-blue"
    }
  ];

  return (
    <section id="education" className="py-20 bg-darker-bg/30 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-4" style={{ lineHeight: '1.2' }}>
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-electric-blue mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className={`bg-darker-bg/50 p-8 rounded-2xl border transition-all duration-300 ${
                edu.color === 'neon-green' 
                  ? 'border-neon-green/20 hover:border-neon-green/40' 
                  : 'border-electric-blue/20 hover:border-electric-blue/40'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl border ${
                    edu.color === 'neon-green' 
                      ? 'bg-neon-green/10 border-neon-green/30' 
                      : 'bg-electric-blue/10 border-electric-blue/30'
                  }`}>
                    <GraduationCap className={`text-2xl ${
                      edu.color === 'neon-green' ? 'text-neon-green' : 'text-electric-blue'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-lg text-gray-300 font-medium">
                      {edu.degree}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="flex items-center text-gray-400 mb-2 md:justify-end">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  {edu.status === 'current' && (
                    <span className="inline-block bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm font-medium">
                      Current
                    </span>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    edu.color === 'neon-green' ? 'bg-neon-green' : 'bg-electric-blue'
                  }`}></div>
                  <span className="text-gray-300">
                    <span className="font-semibold">GPA:</span> {edu.gpa}
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    edu.color === 'neon-green' ? 'text-neon-green' : 'text-electric-blue'
                  }`} />
                  <span className="text-gray-300 text-sm">
                    {edu.achievements}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}