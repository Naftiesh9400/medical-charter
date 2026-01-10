import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ProgramOverviewSection from "@/components/sections/ProgramOverviewSection";
import ProgramStructureSection from "@/components/sections/ProgramStructureSection";
import SubjectCoverageSection from "@/components/sections/SubjectCoverageSection";
import MethodologySection from "@/components/sections/MethodologySection";
import AssessmentSection from "@/components/sections/AssessmentSection";
import IntegrationSection from "@/components/sections/IntegrationSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import MentorSection from "@/components/sections/MentorSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import LeadFormsSection from "@/components/sections/LeadFormsSection";
import FooterSection from "@/components/sections/FooterSection";
import CarouselSection from "@/components/sections/CarouselSection";
import WhatsAppAIBot from "@/components/WhatsAppAIBot";
import HeroComponent from "@/components/sections/HeroComponent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div id="problem">
          <ProblemSection />
        </div>
        
    
        <div id="program">
          <ProgramOverviewSection />
        </div>
        <ProgramStructureSection />
        <SubjectCoverageSection />
        <div id="methodology">
          <MethodologySection />
        </div>
        <AssessmentSection />
        <MentorSection />
        <IntegrationSection />
        <RoadmapSection />
        <CarouselSection />
        <ValuePropositionSection />
        <LeadFormsSection />
        
       
        
      </main>
      <FooterSection />
      <WhatsAppAIBot />
    </div>
    
    
  );
};

export default Index;
