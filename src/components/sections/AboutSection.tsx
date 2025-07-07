import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            About <span className="text-teal">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* <div>
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-teal/30">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" 
                  alt="Vishal Waikar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
            
            <div>
              {/* <h3 className="text-2xl font-bold mb-4">Full-Stack Developer based in United Kingdom</h3>
              <p className="text-gray-300 mb-6">
              Full-Stack Developer with over 4 years of experience in designing, developing, and delivering high-availability, concurrent, fault-tolerant software systems. Proficient in Java and related technologies, including Spring Framework and Spring Boot, as well as modern
              front-end frameworks like React and Angular
              </p>
              <p className="text-gray-300 mb-8">
                Demonstrated expertise in applying test-driven development, design patterns, and agile best practices to build scalable and secure solutions. Strong collaborator in multi-office, multi-country teams, committed to inclusion, mentorship, and enhancing team productivity.
              </p>
              
              <div className="space-y-4 mb-8"> */}
                {/* <div className="flex">
                  <span className="w-32 font-semibold">Name:</span>
                  <span className="text-gray-300">Vishal Waikar</span>
                </div>
                <div className="flex">
                  <span className="w-32 font-semibold">Email:</span>
                  <span className="text-teal" style={{cursor:"pointer"}}>vwaikar007@outlook.com</span>
                </div> */}
                {/* <div className="flex">
                  <span className="w-32 font-semibold">Location:</span>
                  <span className="text-gray-300">Leicester, UK</span>
                </div>
                <div className="flex">
                  <span className="w-32 font-semibold">Availability:</span>
                  <span className="text-teal">Open to opportunities</span>
                </div>
              </div>
              
              <Button 
                className="bg-teal hover:bg-teal/90 text-white flex items-center gap-2"
                onClick={() => window.open('/V_W_CV.pdf', '_blank')}
              >
                Download Resume
                <ArrowDown className="h-4 w-4" />
              </Button> */}

              <p className="text-gray-300 mb-6">
              Hi there! I'm Vishal Waikar, a passionate <strong>Software Developer</strong> with years of experience crafting high-performance applications. 
              I love building intuitive user experiences and writing clean, efficient code that delivers real results.</p>

              <p className="text-gray-300 mb-6">While my core expertise lies in <strong>full-stack web development</strong>, encompassing technologies 
              like <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Java</strong>,and <strong>SQL Server</strong>, 
              I'm always exploring new areas to expand my craft. Currently, I'm enhancing my skills with certifications in <strong>LLM Engineering</strong>, 
              <strong>Agentic AI Engineering</strong>, <strong>Python</strong>, and <strong>DevOps</strong>, 
              ensuring I'm on top of the latest industry trends.</p>
              
              
              <p className="text-gray-300 mb-6">I've had the opportunity to work on diverse projects, from core Healthcare EHR systems, Travel mobile applications, 
              to AI-powered applications. My goal is always to deliver reliable, results-oriented solutions that make a difference. 
              Let's build something amazing together!</p>

              <div className="space-y-4 mb-8">
                {/* <div className="flex">
                  <span className="w-32 font-semibold">Name:</span>
                  <span className="text-gray-300">Vishal Waikar</span>
                </div>
                <div className="flex">
                  <span className="w-32 font-semibold">Email:</span>
                  <span className="text-teal" style={{cursor:"pointer"}}>vwaikar007@outlook.com</span>
                </div> */}
                <div className="flex">
                  <span className="w-32 font-semibold">Location:</span>
                  <span className="text-gray-300">Leicester, UK</span>
                </div>
                <div className="flex">
                  <span className="w-32 font-semibold">Availability:</span>
                  <span className="text-teal">Open to opportunities</span>
                </div>
              </div>
              
              <Button 
                className="bg-teal hover:bg-teal/90 text-white flex items-center gap-2"
                onClick={() => window.open('/Vishal_Waikar_Resume.pdf', '_blank')}
              >
                Download Resume
                <ArrowDown className="h-4 w-4" />
              </Button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
