import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Layers, Zap, Rocket } from "lucide-react";

const tracks = [
  {
    icon: Layers,
    title: "Foundation Track",
    duration: "18–24 Months",
    audience: "2nd–3rd year MBBS students",
    description: "Building strong conceptual foundations with comprehensive subject coverage from early years.",
    color: "navy",
  },
  {
    icon: Clock,
    title: "Core Track",
    duration: "12 Months",
    audience: "4th–Final year students",
    description: "Consolidating knowledge and developing strategic exam orientation for advanced preparation.",
    color: "teal",
  },
  {
    icon: Zap,
    title: "Intensive Track",
    duration: "6 Months",
    audience: "Final-year or internship students",
    description: "Focused, intensive preparation for students approaching their FMGE examination date.",
    color: "gold",
  },
  {
    icon: Rocket,
    title: "Crash Revision",
    duration: "3 Months",
    audience: "Exam-ready graduates",
    description: "Rapid revision and final polish for graduates seeking targeted last-mile preparation.",
    color: "secondary",
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    navy: {
      bg: "bg-navy-100",
      icon: "bg-navy-700",
      border: "border-navy-200",
      badge: "bg-navy-50 text-navy-700",
    },
    teal: {
      bg: "bg-teal-100",
      icon: "bg-teal-600",
      border: "border-teal-200",
      badge: "bg-teal-50 text-teal-700",
    },
    gold: {
      bg: "bg-gold-100",
      icon: "bg-gold-500",
      border: "border-gold-200",
      badge: "bg-gold-50 text-gold-700",
    },
    secondary: {
      bg: "bg-teal-50",
      icon: "bg-teal-500",
      border: "border-teal-100",
      badge: "bg-teal-50 text-teal-600",
    },
  };
  return colors[color as keyof typeof colors] || colors.navy;
};

const ProgramStructureSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Program Structure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Flexible Tracks Aligned With
            <span className="block text-navy-600">Student Progression</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Universities may adopt one or multiple tracks based on batch structure and
            student needs. Each track is designed for optimal learning outcomes at different stages.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-navy-200 via-teal-200 to-gold-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {tracks.map((track, index) => {
              const colorClasses = getColorClasses(track.color);
              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className={`h-full p-6 rounded-2xl bg-card border ${colorClasses.border} shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2`}>
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${colorClasses.icon} flex items-center justify-center mb-4 shadow-md`}>
                      <track.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    
                    {/* Duration Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full ${colorClasses.badge} text-sm font-semibold mb-3`}>
                      {track.duration}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {track.title}
                    </h3>
                    
                    {/* Audience */}
                    <p className="text-sm font-medium text-navy-600 mb-3">
                      For: {track.audience}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {track.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStructureSection;
