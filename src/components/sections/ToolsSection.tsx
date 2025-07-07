import { cn } from "@/lib/utils";

const tools = [
  {
    id: 1,
    name: "Java",
    icon: "/Img_Java.svg",
    color: "#efefef"
  },
  {
    id: 2,
    name: "Spring/Spring Boot",
    icon: "/Img_Spring.svg",
    color: "#FFFFFF"
  },
  {
    id: 3,
    name: "Kotlin",
    icon: "/Img_Kotlin.svg",
    color: "#000000"
  },
  {
    id: 4,
    name: "React",
    icon: "/Img_React.svg",
    color: "#FFFFFF"
  },
  {
    id: 5,
    name: "NextJs",
    icon: "/Img_NextJs.svg",
    color: "#FFFFFF"
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: "/Img_Tailwind.svg",
    color: "#FFFFFF"
  },
  {
    id: 7,
    name: "Js",
    icon: "/Img_Js.svg",
    color: "#fff700"
  },
  {
    id: 8,
    name: "Html",
    icon: "/Img_Html.svg",
    color: "#FFFFFF"
  },
  {
    id: 9,
    name: "Sql server",
    icon: "/Img_Sql.svg",
    color: "#efefef"
  },
  {
    id: 10,
    name: "Python",
    icon: "/Img_Python.svg",
    color: "#efefef"
  },
  {
    id: 11,
    name: "Rest API",
    icon: "/Img_Rest.svg",
    color: "#ff7800"
  },
  {
    id: 12,
    name: "Ms Azure",
    icon: "/Img_Azure.svg",
    color: "#efefef"
  },
  {
    id: 13,
    name: "Git",
    icon: "/Img_Git.svg",
    color: "#FFFFFF"
  },
  {
    id: 14,
    name: "OpenAI",
    icon: "/Img_OpenAI.svg",
    color: "#FFFFFF"
  },
  {
    id: 15,
    name: "Anthropic",
    icon: "/anthropic.svg",
    color: "#ce9178"
  },
  {
    id: 16,
    name: "CrewAI",
    icon: "/crewai-color.svg",
    color: "#FFFFFF"
  },
  {
    id: 17,
    name: "LangChain",
    icon: "/langchain.svg",
    color: "#FFFFFF"
  },
  {
    id: 18,
    name: "LangGraph",
    icon: "/langgraph.svg",
    color: "#FFFFFF"
  },
  {
    id: 19,
    name: "MCP",
    icon: "/mcp.svg",
    color: "#FFFFFF"
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-24 bg-[#151515]">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
           <span className="text-teal">Tools & Technologies </span> I work With
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="flex flex-col items-center">
              <div 
                className={cn(
                  "w-24 h-24 rounded-2xl bg-dark flex items-center justify-center mb-4",
                  "border border-gray-800 hover:border-teal/50 transition-all duration-300",
                  "hover:shadow-lg hover:shadow-teal/10"
                )}
              >
                <div 
                  className="w-12 h-12 rounded-full" 
                  style={{ backgroundColor: tool.color, display:"flex", justifyContent:"center"}}>
                  <img src={tool.icon} alt={tool.name} style={{width:"80%"}}/>
                </div>
              </div>
              <span className="text-light font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
