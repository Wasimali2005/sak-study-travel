"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        if (intersectingEntry) {
          setActiveSection(intersectingEntry.target.id);
        }
      },
      { rootMargin: "-20% 0px -75% 0px" } 
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Visa Types", id: "visa-types" },
    { name: "Destinations", id: "destinations" },
    { name: "Countries", id: "countries" },
    { name: "Services", id: "services" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Blog", id: "blog" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-surface-container-lowest shadow-sm fixed top-0 w-full z-50 transition-all duration-300 group hover:shadow-md">
      <div className="max-w-container-max mx-auto flex justify-between items-center px-8 min-h-[5rem] py-4 md:py-0">
        <a href="#home" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 shrink-0">
          {/* We will use the exact HTML structure for the logo */}
          <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
          <span className="font-display-lg text-headline-md font-extrabold text-primary hidden sm:block">
            SAK Study & Travel
          </span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-8 gap-y-2 max-w-[60%]">
          {navLinks.map((link) => (
             <a
               key={link.id}
               className={activeSection === link.id 
                 ? "text-primary border-b-2 border-primary font-bold pb-1 font-body-md transition-all duration-300 hover:-translate-y-0.5" 
                 : "text-on-surface font-medium hover:text-primary transition-all duration-300 font-body-md hover:-translate-y-0.5"}
               href={`#${link.id}`}
             >
               {link.name}
             </a>
          ))}
        </div>
        
        <a href="#contact" className="hidden md:block bg-primary-container text-on-primary px-6 py-2 rounded font-label-bold hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 shrink-0">
          Consult Now
        </a>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-on-surface hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full flex flex-col py-4 border-t border-gray-100 max-h-[70vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-8 py-3 ${
                activeSection === link.id
                  ? "bg-primary/5 text-primary font-bold border-l-4 border-primary"
                  : "text-on-surface hover:bg-gray-50 border-l-4 border-transparent font-medium"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="px-8 mt-4 mb-4">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-center w-full bg-primary-container text-white px-6 py-3 rounded font-label-bold hover:bg-primary">
              Consult Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
