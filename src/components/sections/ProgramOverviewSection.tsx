import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MonitorPlay, BookOpen, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Who This Program Is For",
    items: [
      "Indian MBBS students (2nd year onwards)",
      "Final-year students and interns",
      "Graduates preparing for FMGE / NExT",
    ],
  },
  {
    icon: MonitorPlay,
    title: "Delivery Model",
    items: [
      "Online live classes + recorded lectures",
      "Accessible across time zones",
      "Designed for consistency over multiple academic years",
    ],
  },
  {
    icon: BookOpen,
    title: "Core Philosophy",
    items: [
      "Parallel learning",
      "Non-intrusive scheduling",
      "Academic rigor with student well-being focus",
    ],
  },
  {
    icon: Heart,
    title: "Key Benefits",
    items: [
      "No disruption to university curriculum",
      "Systematic preparation from early years",
      "Supportive academic community",
    ],
  },
];

const ProgramOverviewSection = () => {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Program Overview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            EMS Medical Charter
          </h2>
          <p className="text-xl text-navy-600 font-medium mb-4">
            A Supportive Academic Layer, Not a Disruption
          </p>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The EMS Integrated FMGE / NMC Preparation Program is designed to run
            alongside university education, strengthening India-oriented exam readiness
            without interfering with institutional systems.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <feature.icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground pt-2">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverviewSection;
