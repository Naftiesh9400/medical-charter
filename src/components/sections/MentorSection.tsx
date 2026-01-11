import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const mentors = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Lead Faculty - Medicine",
    qualification: "MD (General Medicine), AIIMS Delhi",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    bio: "Dr. Rajesh Kumar is a distinguished faculty member with over 15 years of experience in General Medicine. He has mentored thousands of students for FMGE and is known for his conceptual teaching style."
  },
  {
    name: "Dr. Priya Sharma",
    role: "Senior Mentor - Pathology",
    qualification: "MD (Pathology), KEM Mumbai",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww",
    bio: "Dr. Priya Sharma specializes in Pathology and has a unique approach to simplifying complex topics. Her visual teaching aids are highly appreciated by students preparing for competitive exams."
  },
  {
    name: "Dr. Amit Patel",
    role: "Faculty - Surgery",
    qualification: "MS (General Surgery), JIPMER",
    experience: "10+ Years",
    image: "https://st.depositphotos.com/58141582/52449/i/450/depositphotos_524490464-stock-photo-young-male-doctor-look-camera.jpg",
    bio: "Dr. Amit Patel brings practical surgical insights to the classroom. His case-based discussions help students understand clinical correlations effectively."
  },
  {
    name: "Dr. Sneha Gupta",
    role: "Exam Strategy Expert",
    qualification: "FMGE Topper, DNB",
    experience: "8+ Years",
    image: "https://t3.ftcdn.net/jpg/01/14/89/28/360_F_114892812_Va0KWhvmSUOoYNEoHCAOJ8uYXzBiD8vY.jpg",
    bio: "Dr. Sneha Gupta, an FMGE topper herself, guides students on exam strategies, time management, and high-yield topic selection."
  }
];

const MentorSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMentor, setSelectedMentor] = useState<typeof mentors[0] | null>(null);

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
              className="group cursor-pointer"
              onClick={() => setSelectedMentor(mentor)}
            >
              <div className="h-full p-6 rounded-2xl bg-white border border-navy-100 shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 shadow-md group-hover:scale-105 transition-transform border-4 border-white ring-1 ring-navy-100">
                  <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
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

      {/* Mentor Details Modal */}
      {selectedMentor && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedMentor(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative"
          >
            <button 
              onClick={() => setSelectedMentor(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img src={selectedMentor.image} alt={selectedMentor.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-navy-900 mb-1">{selectedMentor.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{selectedMentor.role}</p>
                
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600"><span className="font-semibold text-navy-700">Qualification:</span> {selectedMentor.qualification}</p>
                  <p className="text-gray-600"><span className="font-semibold text-navy-700">Experience:</span> {selectedMentor.experience}</p>
                  <p className="text-gray-600 leading-relaxed mt-4">{selectedMentor.bio}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default MentorSection;