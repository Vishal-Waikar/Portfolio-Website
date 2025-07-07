import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "InsightFlow (Personal)",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "A web-based plagiarism detection tool that helps educators compare student code submissions with detailed file-level and overall similarity percentages. Featuring clustering algorithms and an intuitive interface, it streamlines assessment and has reduced professors’ review time by 50%.",
    demoUrl: "https://example.com",
    caseStudyUrl: "https://example.com/case-study"
  },
  {
    id: 2,
    title: "PinpointEye",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80",
    description: "A health and wellness tracking application designed to help users monitor their daily habits and achieve their goals.",
    demoUrl: "https://play.google.com/store/apps/details?id=pinpointeye.app",
  },
  {
    id: 3,
    title: "My Health Records",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80",
    description: "A health and wellness tracking application designed to help users monitor their daily habits and achieve their goals.",
    demoUrl: "https://play.google.com/store/apps/details?id=med.prognocis.patientportal",
  },
  {
    id: 4,
    title: "E-commerce Redesign",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    description: "A complete redesign of an e-commerce platform focusing on improved user experience and conversion optimization.",
    demoUrl: "https://example.com",
    caseStudyUrl: "https://example.com/case-study"
  },
  {
    id: 5,
    title: "Travel Companion",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=80",
    description: "An all-in-one travel companion app helping users plan their trips, discover local attractions, and manage their itineraries.",
    demoUrl: "https://example.com",
    caseStudyUrl: "https://example.com/case-study"
  },
  {
    id: 6,
    title: "Learning Management System",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    description: "A modern learning management system designed for educational institutions to facilitate remote learning.",
    demoUrl: "https://example.com",
    caseStudyUrl: "https://example.com/case-study"
  },
  {
    id: 7,
    title: "Smart Home Control",
    category: "IoT Interface",
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d1?auto=format&fit=crop&w=800&q=80",
    description: "An intuitive interface for controlling smart home devices, focusing on accessibility and ease of use.",
    demoUrl: "https://example.com",
    caseStudyUrl: "https://example.com/case-study"
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
       <span className="text-teal">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 h-[350px]"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className={cn(
                "absolute inset-0 bg-dark/80 backdrop-blur-sm flex flex-col justify-end p-6 transition-all duration-300",
                hoveredProject === project.id ? "opacity-100" : "opacity-0"
              )}>
                <div className="mb-2 text-teal font-medium">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <Button 
                    className="bg-teal hover:bg-teal/90 text-white"
                    size="sm"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-teal text-teal hover:bg-teal/10"
                    size="sm"
                    onClick={() => window.open(project.caseStudyUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
