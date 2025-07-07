import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ToolsSection from "@/components/sections/ToolsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import CertificationSection from "@/components/sections/Certifications";
import { useScrollAnimation } from "@/utils/animation";

const Index = () => {
  // useEffect(() => {
  //   // Set up animation observer
  //   const cleanup = setupIntersectionObserver();
    
  //   // Add animation classes to elements
  //   const sections = document.querySelectorAll('section > div');
  //   sections.forEach(section => {
  //     if (!section.classList.contains('animate-fade-in')) {
  //       section.classList.add('animate-on-scroll');
  //     }
  //   });
    
  //   return cleanup;
  // }, []);

  // useEffect(() => {
  //   // Set up animation observer
  //   const cleanup = setupIntersectionObserver();
  
  //   // Select all relevant sections
  //   const sections = document.querySelectorAll('section > div');
  //   sections.forEach(section => {
  //     if (!section.classList.contains('animate-fade-in')) {
  //       section.classList.add('animate-on-scroll');
        
  //       // Check if the section is already in the viewport
  //       const rect = section.getBoundingClientRect();
  //       if (rect.top < window.innerHeight && rect.bottom >= 0) {
  //         // If it's visible, add the "visible" class immediately.
  //         section.classList.add("visible");
  //       }
  //     }
  //   });
  
  //   return cleanup;
  // }, []);

  useEffect(() => {
    // First, add animation classes to elements
    const sections = document.querySelectorAll('section > div');
    sections.forEach(section => {
      if (!section.classList.contains('animate-fade-in')) {
        section.classList.add('animate-on-scroll');
      }
    });
  
    // Then, set up the Intersection Observer so that it observes all updated elements
    const { setupIntersectionObserver } = useScrollAnimation();
    const cleanup = setupIntersectionObserver();
    
    return cleanup;
  }, []);
  
  

  return (
    <div className="min-h-screen bg-dark text-light overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <ExperienceSection />
        {/* <ProjectsSection /> */}
        <ToolsSection />
        <AboutSection />
        <CertificationSection/>
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
