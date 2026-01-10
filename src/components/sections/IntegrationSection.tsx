import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, BookOpenCheck, Award, FileBarChart } from "lucide-react";

const integrationPoints = [
  {
    icon: Calendar,
    title: "Non-Intrusive Scheduling",
    description: "EMS sessions conducted outside university lecture hours with no conflicts",
  },
  {
    icon: BookOpenCheck,
    title: "No Curriculum Changes Required",
    description: "Optional academic coordination without syllabus modification",
  },
  {
    icon: Award,
    title: "Professional Certification",
    description: "EMS Certificate of FMGE Preparedness with optional co-branded certification",
  },
  {
    icon: FileBarChart,
    title: "Performance Reporting",
    description: "Batch-wise anonymized reports with optional parent communication support",
  },
];

const IntegrationSection = () => {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
            University Integration
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Seamless Integration &
            <span className="block text-navy-600">Certification</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-xl text-teal-600 font-semibold">
            Zero Disruption. High Academic Value.
          </p>
        </motion.div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {integrationPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy-600 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <point.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
