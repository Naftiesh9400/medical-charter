import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Shield, Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Star,
    title: "Premium Quality",
    description: "Delivering the highest standard of educational content for medical professionals."
  },
  {
    icon: Shield,
    title: "Trusted Platform",
    description: "Secure and reliable infrastructure for seamless learning experiences."
  },
  {
    icon: Zap,
    title: "Fast Learning",
    description: "Optimized curriculum designed for quick retention and application."
  }
];

const NareshSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-navy-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Exclusive Content
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Welcome to <span className="text-teal-600">Naresh's Page</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Hi, to see my portfolio just click the button below.
          </p>
          <Button 
            onClick={() => window.open("https://naftiesh9400.github.io/Portfolio/", "_blank")}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            See Portfolio <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-navy-100 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-6 text-navy-700">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NareshSection;