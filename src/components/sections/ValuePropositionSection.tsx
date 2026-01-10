import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, ShieldCheck, DollarSign, Handshake } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Improved FMGE Success Rates",
    description: "Stronger student outcomes and satisfaction leading to better career prospects",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Institutional Reputation",
    description: "Greater trust among Indian parents and aspirants seeking quality education",
  },
  {
    icon: DollarSign,
    title: "Zero Infrastructure Cost",
    description: "No faculty hiring or operational burden on the institution",
  },
  {
    icon: Handshake,
    title: "Long-Term Academic Partnership",
    description: "Sustainable collaboration beyond exam cycles with continuous support",
  },
];

const ValuePropositionSection = () => {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Value Proposition
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Partner With
            <span className="block text-navy-600">EMS Medical Charter</span>
          </h2>
          <div className="section-divider mb-6" />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-navy-50 to-card border border-navy-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-navy-700 via-navy-600 to-teal-600"
        >
          <p className="text-lg md:text-xl text-primary-foreground leading-relaxed">
            This collaboration positions your institution as a{" "}
            <span className="font-semibold text-gold-300">student-centric, globally aware medical university</span>,
            actively supporting Indian students in achieving professional success in their home country.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
