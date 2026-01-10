import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      
      {/* Medical Pattern Overlay */}
      <div className="absolute inset-0 medical-pattern opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-soft" />
            <span className="text-sm font-medium text-primary-foreground/90">
              EMS Medical Charter
            </span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Integrated FMGE / NMC Preparation
            <span className="block mt-2 text-gold-300">
              For Indian MBBS Students Studying Abroad
            </span>
          </motion.h1>
          
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            A structured, curriculum-aligned academic support program designed in
            partnership with medical universities—delivered parallel to existing
            teaching, without disruption.
          </motion.p>
          
          {/* Context Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base text-primary-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Indian MBBS students studying in Russia, Kazakhstan, CIS countries, Africa,
            and Southeast Asia face a mandatory regulatory milestone: clearing the FMGE /
            NMC Screening Test to practice medicine in India.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              variant="hero" 
              size="xl"
              className="group"
              onClick={() => document.getElementById('university-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Building2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              For Universities: Request Partnership
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              className="group"
              onClick={() => document.getElementById('student-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <GraduationCap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              For Students: Get Program Details
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
