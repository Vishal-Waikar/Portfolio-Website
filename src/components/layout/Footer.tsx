import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-light">Vishal Waikar</h2>
            <p className="text-gray-400 mt-2">Full-stack Developer</p>
          </div>
          
          {/* <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 items-center">
            <div className="flex space-x-6">
              <a href="mailto:alex@example.com" aria-label="Email" className="text-gray-400 hover:text-teal transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-teal transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div> */}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Vishal Waikar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
