import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Engineer",
    company: "Pinpointeye, Remote",
    period: "May 2024 - Present",
    description: "Engineered enterprise mobile and web applications with a focus on scalability, cross-platform performance, and secure user experiences.",
    achievements: [
      "Built and maintained Android apps using Java and Kotlin, and developed modular front-end features with React and Next.js",
      "Developed RESTful APIs and backend services using PHP/YII, integrating with MySQL and microservice infrastructure",
      "Integrated Google Maps API for real-time location sharing, and implemented 2FA with Twilio alongside a secure subscription model with recurring payments via Stripe."
    ],
    img: `${import.meta.env.BASE_URL}/Img_PPE.jpeg`
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Bizmatics: A Harris Computer Company, Mumbai",
    period: "Sep 2019 - Aug 2022",
    description: "Developed scalable web applications, optimized performance, and integrated front-end with robust Java-based backends",
    achievements: [
      "Built healthcare web apps using Java, Spring, JSP, and MySQL",
      "Ensured quality and UI integration through testing and cross-team collaboration",
      "Boosted performance with caching, query tuning, and audit trails (15% faster issue resolution)",
      "Revamped portals and created dynamic forms with JotForm for smoother workflows",
      "Resolved hundreds of client issues promptly, often within the same day, by adhering to SLAs"
    ],
    img:`${import.meta.env.BASE_URL}/Img_Biz.jpeg`
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    company: "Bizmatics: A Harris Computer Company, Mumbai",
    period: "Mar 2019 - Sep 2019",
    description: "Prototyped internal tools, collaborated on feature development, and supported onboarding through codebase knowledge sharing",
    achievements: [
      "Created mock designs for internal portals using HTML, Bootstrap, jQuery, and JavaScript",
      "Contributed to feature enhancements in collaboration with senior developers",
      "Led onboarding for new interns and shared codebase knowledge and best practices"
    ],
    img:`${import.meta.env.BASE_URL}/Img_Biz.jpeg`
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-[#151515]">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            My <span className="text-teal">Experience</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gray-700" />
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={cn(
                  "relative mb-16 last:mb-0 md:flex",
                  index % 2 === 0 ? "md:justify-end" : ""
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  {/* <Briefcase className="w-5 h-5 text-dark" /> */}
                  <img className="text-dark rounded-full" src={exp.img} alt={exp.company} style={{width:"80%"}}/>
                </div>
                
                {/* Content */}
                <div className={cn(
                  "ml-16 md:ml-0 md:w-[45%]",
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                )}>
                  <div className="bg-dark/50 rounded-lg p-6 border border-gray-700 hover:border-teal/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal/10">
                    <div className="mb-2 text-teal font-medium">{exp.period}</div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-gray-400 mb-4">{exp.company}</div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex">
                          <span className="text-teal mr-2">•</span>
                          <span className="text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;