import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, BarChart3, Brain, Users, MessageCircle, Compass } from "lucide-react";

const assessmentFeatures = [
  {
    icon: ClipboardCheck,
    title: "Continuous Evaluation",
    items: ["Weekly MCQ tests", "Monthly subject-wise assessments", "Quarterly cumulative exams"],
  },
  {
    icon: BarChart3,
    title: "Full-Length Mock Exams",
    items: ["FMGE pattern (300 MCQs)", "Online proctored environment", "Detailed performance analytics"],
  },
  {
    icon: Brain,
    title: "EMS Readiness Index",
    items: ["Subject-wise strengths and gaps", "Accuracy and time management", "Comparative performance benchmarks"],
  },
];

const mentorshipFeatures = [
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Monthly mentorship by Indian MD/MS faculty with subject-wise doubt resolution",
  },
  {
    icon: MessageCircle,
    title: "Clinical Discussions",
    description: "India-centric clinical case discussions and exam strategy sessions",
  },
  {
    icon: Compass,
    title: "Personalized Support",
    description: "Stress-management sessions and personalized learning path recommendations",
  },
];

const AssessmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Assessment & Mentorship
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Continuous Evaluation With
            <span className="block text-teal-600">Predictive Readiness</span>
          </h2>
          <div className="section-divider mb-6" />
        </motion.div>

        {/* Assessment Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {assessmentFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6 shadow-md">
                  <feature.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentorship Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-center text-navy-700 mb-8">
            Mentorship Excellence
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentorshipFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="h-full p-6 rounded-xl bg-gradient-to-br from-navy-50 to-teal-50 border border-navy-100">
                <div className="w-12 h-12 rounded-lg bg-navy-700 flex items-center justify-center mb-4 shadow-md">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
