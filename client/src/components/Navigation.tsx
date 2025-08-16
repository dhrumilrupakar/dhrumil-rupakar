import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import resume from "@assets/Dhrumil_Rupakar_Resume_1755067537815.pdf";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const openResume = () => {
    window.open(resume, '_blank');
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", type: "scroll" },
    { id: "about", label: "About", type: "scroll" },
    { id: "experience", label: "Experience", type: "scroll" },
    { id: "projects", label: "Projects", type: "scroll" },
    { id: "resume", label: "Resume", type: "action" },
    { id: "contact", label: "Contact", type: "scroll" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-dark-bg/90 backdrop-blur-md" : "bg-dark-bg/90"
    } border-b border-neon-green/20`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-poppins font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            DR
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => item.type === "action" ? openResume() : scrollToSection(item.id)}
                className="hover:text-neon-green transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neon-green/20">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => item.type === "action" ? openResume() : scrollToSection(item.id)}
                  className="text-left hover:text-neon-green transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
