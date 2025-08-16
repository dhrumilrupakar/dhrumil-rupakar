import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

export default function SkillBar({ name, level, color, delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getColorByLevel = (level: number): string => {
    if (level >= 90) return "text-neon-green";
    if (level >= 85) return "text-electric-blue";
    return "text-neon-green";
  };

  return (
    <motion.div 
      ref={ref}
      className="cursor-pointer"
      whileHover={{ 
        scale: 1.02,
        filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))"
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm">{name}</span>
        <span className={`text-sm font-semibold ${getColorByLevel(level)}`}>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div 
          className={`bg-gradient-to-r ${color} h-2 rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: delay,
            ease: "easeOut"
          }}
          whileHover={{
            boxShadow: "0 0 12px rgba(34, 197, 94, 0.6)"
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "100%" } : { x: "-100%" }}
            transition={{ 
              duration: 1.5, 
              delay: delay + 0.5,
              ease: "easeOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
