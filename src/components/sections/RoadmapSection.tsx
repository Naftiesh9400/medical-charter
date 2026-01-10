import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, FlaskConical, Rocket } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Academic Alignment",
    timeline: "Month 1",
    icon: Handshake,
    items: ["MoU finalization", "Batch identification", "Academic calendar mapping"],
    color: "navy",
  },
  {
    phase: "Phase 2",
    title: "Pilot Batch",
    timeline: "Months 2–4",
    icon: FlaskConical,
    items: ["30–50 students", "Performance benchmarking", "Feedback and optimization"],
    color: "teal",
  },
  {
    phase: "Phase 3",
    title: "Full Deployment",
    timeline: "Month 5 onwards",
    icon: Rocket,
    items: ["Multi-batch rollout", "Annual renewal model", "Continuous academic improvement"],
    color: "gold",
  },
];

const RoadmapSection = () => {
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
            Implementation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Implementation Roadmap
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Structured, phased deployment ensuring smooth integration with university systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-navy-300 via-teal-300 to-gold-300 transform -translate-x-1/2" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Card */}
                <div className="flex-1">
                  <div className={`p-6 rounded-2xl bg-card border shadow-card ${
                    phase.color === "navy" ? "border-navy-200" :
                    phase.color === "teal" ? "border-teal-200" :
                    "border-gold-200"
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        phase.color === "navy" ? "bg-navy-100 text-navy-700" :
                        phase.color === "teal" ? "bg-teal-100 text-teal-700" :
                        "bg-gold-100 text-gold-700"
                      }`}>
                        {phase.phase}
                      </span>
                      <span className="text-sm text-muted-foreground">{phase.timeline}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {phase.title}
                    </h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            phase.color === "navy" ? "bg-navy-500" :
                            phase.color === "teal" ? "bg-teal-500" :
                            "bg-gold-500"
                          }`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Icon */}
                <div className={`hidden md:flex w-16 h-16 rounded-full items-center justify-center shadow-lg z-10 ${
                  phase.color === "navy" ? "bg-navy-700" :
                  phase.color === "teal" ? "bg-teal-600" :
                  "bg-gold-500"
                }`}>
                  <phase.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
