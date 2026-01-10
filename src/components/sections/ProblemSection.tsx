import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Users, GraduationCap, Building } from "lucide-react";

const impactCards = [
  {
    icon: GraduationCap,
    title: "Student Career Outcomes",
    description: "Inability to practice medicine in India after years of study and investment",
  },
  {
    icon: Users,
    title: "Parental Trust & Satisfaction",
    description: "Erosion of confidence when students face professional roadblocks",
  },
  {
    icon: TrendingDown,
    title: "Indian Student Recruitment",
    description: "Declining enrollment as word spreads about FMGE challenges",
  },
  {
    icon: Building,
    title: "Institutional Reputation",
    description: "Long-term impact on university standing in the Indian market",
  },
];

const ProblemSection = () => {
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
            The Context & Need
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Critical Academic Requirement for
            <span className="block text-navy-600">Indian Medical Graduates</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Indian students form a significant population in many international medical
            universities. While institutions provide strong medical education, the FMGE /
            NMC Screening Test remains a decisive requirement for professional practice
            in India.
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-lg font-semibold text-navy-700 mb-8"
          >
            Failure to clear this examination impacts:
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center mb-4 group-hover:bg-navy-200 transition-colors">
                    <card.icon className="w-6 h-6 text-navy-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-navy-50 to-teal-50 border border-navy-100"
        >
          <p className="text-lg md:text-xl text-navy-700 font-medium">
            EMS addresses this challenge through a{" "}
            <span className="text-teal-600 font-semibold">long-term academic enhancement model</span>,
            not short-term coaching.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
