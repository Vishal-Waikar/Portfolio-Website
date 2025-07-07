import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      window.scrollTo({
        top: experienceSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-teal">Vishal Waikar</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-8">
                A Full-Stack Developer with years of experience crafting intuitive and engaging digital experiences.
            </h2>
            <Button 
              onClick={scrollToExperience}
              className="bg-teal hover:bg-teal/90 text-white px-8 py-6 rounded-md text-lg flex items-center gap-2 transition-all"
            >
              Explore My Work
              <ArrowDown size={18} />
            </Button>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal flex items-center justify-center bg-gray-800">
                <img
                  src={`${import.meta.env.BASE_URL}/dp.jpeg`}
                  alt="Vishal Waikar"
                  className="w-full h-full object-cover object-[center_-74px]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =`${import.meta.env.BASE_URL}/dp.jpeg`;
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-dark p-3 rounded-full border border-gray-700">
                <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-dark font-bold">
                  4+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
