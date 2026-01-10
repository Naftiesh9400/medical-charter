import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "FMGE Qualified, 2023",
    university: "Kazan State Medical University",
    content: "The EMS structured program helped me align my university studies with Indian requirements from the 3rd year itself. Clearing FMGE in the first attempt became a reality.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Final Year Student",
    university: "Tbilisi State Medical University",
    content: "The parallel curriculum approach is brilliant. It doesn't clash with my regular classes, and the faculty from India really understands what we need for NExT.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Intern",
    university: "Orenburg State Medical University",
    content: "The mentorship sessions were the game changer for me. Having guidance on clinical correlations while studying the theory made all the difference.",
    rating: 5
  }
];

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Student <span className="text-teal-600">Experiences</span>
          </h2>
          <div className="section-divider mb-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-navy-100">
            <div className="p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-navy-800 italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div>
                  <h4 className="text-lg font-bold text-navy-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-teal-600 font-medium">{testimonials[currentIndex].role}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonials[currentIndex].university}</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full hover:bg-teal-50 hover:text-teal-600 border-navy-200">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full hover:bg-teal-50 hover:text-teal-600 border-navy-200">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;