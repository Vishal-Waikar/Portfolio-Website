import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from '@emailjs/browser';


const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   await new Promise(resolve => setTimeout(resolve, 1000));
    
  //   toast({
  //     title: "Message sent!",
  //     description: "Thanks for reaching out. I'll get back to you soon.",
  //   });
    
  //   setFormData({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: ""
  //   });
  //   setIsSubmitting(false);
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
  
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
  
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
  
    } catch (error) {
      console.error(error);
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    }
  
    setIsSubmitting(false);
  };
  

  return (
    <section id="contact" className="py-24 bg-[#151515]">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Get In <span className="text-teal">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out if you're looking for a designer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-dark/50 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-teal" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:vwaikar007@outlook.com" className="text-gray-300 hover:text-teal transition-colors">
                   vwaikar007@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dark/50 p-3 rounded-full mr-4">
                  <Linkedin className="h-6 w-6 text-teal" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/vishal-waikar/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal transition-colors">
                   /Vishal-waikar
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dark/50 p-3 rounded-full mr-4">
                  <Github className="h-6 w-6 text-teal" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a href="https://github.com/TechieWakie" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal transition-colors">
                    /TechieWakie
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark p-6 md:p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-gray-900 border-gray-700 focus:border-teal"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-gray-900 border-gray-700 focus:border-teal"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-gray-900 border-gray-700 focus:border-teal"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="bg-gray-900 border-gray-700 focus:border-teal min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-teal hover:bg-teal/90 text-white py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
