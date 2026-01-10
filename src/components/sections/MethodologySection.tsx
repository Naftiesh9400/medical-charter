import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, ListChecks, Target, HeartPulse, Clock, Video } from "lucide-react";

const methods = [
  {
    icon: Lightbulb,
    title: "Concept-Oriented Teaching",
    description: "Clear conceptual understanding with Indian exam relevance and clinical applications",
  },
  {
    icon: ListChecks,
    title: "MCQ-Based Learning",
    description: "Practice questions after every topic for immediate reinforcement and self-assessment",
  },
  {
    icon: Target,
    title: "Previous FMGE Mapping",
    description: "Strategic focus on frequently tested areas based on comprehensive pattern analysis",
  },
  {
    icon: HeartPulse,
    title: "Clinical Correlation",
    description: "Case-based learning aligned to Indian healthcare scenarios and clinical practice",
  },
  {
    icon: Clock,
    title: "Time-Zone Adjusted Live Classes",
    description: "Designed for international students with flexible scheduling across regions",
  },
  {
    icon: Video,
    title: "Recorded Lecture Library",
    description: "Unlimited access to comprehensive recordings for revision and reinforcement",
  },
];

const MethodologySection = () => {
  const ref = useRef(null);
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Teaching Methodology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            India-Focused. Concept-Driven.
            <span className="block text-navy-600">Exam-Oriented.</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            EMS combines academic depth with strategic exam preparation, ensuring students
            develop both understanding and exam-readiness.
          </p>
        </motion.div>

        {/* Method Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <method.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {method.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
