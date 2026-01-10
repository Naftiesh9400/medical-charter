import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Microscope, Pill, Stethoscope } from "lucide-react";

const categories = [
  {
    id: "preclinical",
    label: "Pre-Clinical",
    icon: Microscope,
    color: "navy",
    subjects: [
      { name: "Anatomy", description: "Comprehensive study of human body structure" },
      { name: "Physiology", description: "Understanding body functions and mechanisms" },
      { name: "Biochemistry", description: "Molecular basis of life processes" },
    ],
  },
  {
    id: "paraclinical",
    label: "Para-Clinical",
    icon: Pill,
    color: "teal",
    subjects: [
      { name: "Pathology", description: "Disease mechanisms and laboratory diagnosis" },
      { name: "Pharmacology", description: "Drug actions and therapeutic applications" },
      { name: "Microbiology", description: "Infectious agents and immune responses" },
      { name: "Forensic Medicine", description: "Legal aspects of medical practice" },
    ],
  },
  {
    id: "clinical",
    label: "Clinical",
    icon: Stethoscope,
    color: "gold",
    subjects: [
      { name: "Medicine & Surgery", description: "Core clinical disciplines" },
      { name: "Obstetrics & Gynecology", description: "Women's health and maternal care" },
      { name: "Pediatrics", description: "Child health and development" },
      { name: "Orthopedics, ENT, Ophthalmology", description: "Specialized clinical care" },
      { name: "Community Medicine (PSM)", description: "Public health and preventive medicine" },
    ],
  },
];

const SubjectCoverageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("preclinical");

  const activeCategory = categories.find((c) => c.id === activeTab);

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
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
            Academic Coverage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete FMGE-Aligned
            <span className="block text-teal-600">Subject Framework</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The curriculum aligns strictly with the FMGE blueprint, ensuring full
            coverage across all domains required for examination success.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? category.color === "navy"
                    ? "bg-navy-700 text-primary-foreground shadow-lg"
                    : category.color === "teal"
                    ? "bg-teal-600 text-secondary-foreground shadow-lg"
                    : "bg-gold-500 text-accent-foreground shadow-lg"
                  : "bg-card border border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.label} Subjects
            </button>
          ))}
        </motion.div>

        {/* Subject Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeCategory?.subjects.map((subject, index) => (
            <div
              key={subject.name}
              className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-3 h-3 rounded-full ${
                  activeCategory.color === "navy" ? "bg-navy-500" :
                  activeCategory.color === "teal" ? "bg-teal-500" :
                  "bg-gold-500"
                }`} />
                <h3 className="text-lg font-semibold text-foreground">
                  {subject.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {subject.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubjectCoverageSection;
