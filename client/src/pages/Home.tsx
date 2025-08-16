import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Volunteer from "@/components/Volunteer";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-dark-bg text-white overflow-x-hidden">
      {/* Matrix Background Effect */}
      <div className="fixed inset-0 matrix-bg pointer-events-none"></div>
      
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Volunteer />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-neon-green/20 bg-darker-bg/50 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; 2025 Dhrumil Rupakar. Defending the digital realm, one byte at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
