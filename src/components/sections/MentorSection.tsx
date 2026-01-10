import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Stethoscope, GraduationCap, Award } from "lucide-react";

const mentors = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Lead Faculty - Medicine",
    qualification: "MD (General Medicine), AIIMS Delhi",
    experience: "15+ Years",
    image: User
  },
  {
    name: "Dr. Priya Sharma",
    role: "Senior Mentor - Pathology",
    qualification: "MD (Pathology), KEM Mumbai",
    experience: "12+ Years",
    image: Stethoscope
  },
  {
    name: "Dr. Amit Patel",
    role: "Faculty - Surgery",
    qualification: "MS (General Surgery), JIPMER",
    experience: "10+ Years",
    image: GraduationCap
  },
  {
    name: "Dr. Sneha Gupta",
    role: "Exam Strategy Expert",
    qualification: "FMGE Topper, DNB",
    experience: "8+ Years",
    image: Award
  }
];

const MentorSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-navy-50" id="mentors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Expert Guidance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Your <span className="text-teal-600">Mentors</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn from India's top medical faculty who have mastered the art of FMGE/NExT preparation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white border border-navy-100 shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-navy-100 to-teal-50 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
                  <mentor.image className="w-10 h-10 text-navy-700" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {mentor.name}
                </h3>
                <p className="text-teal-600 font-medium mb-2">{mentor.role}</p>
                <p className="text-sm text-muted-foreground mb-1">{mentor.qualification}</p>
                <p className="text-xs text-navy-400 font-medium uppercase tracking-wider">{mentor.experience} Exp</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSection;