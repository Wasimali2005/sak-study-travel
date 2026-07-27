"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is currently intersecting with the highest intersection ratio
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

  const getLinkClasses = (id: string) => {
    const baseClasses = "font-medium font-body-md transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap text-[13px] xl:text-[14px]";
    if (activeSection === id) {
      return `${baseClasses} text-primary border-b-2 border-primary font-bold pb-1`;
    }
    return `${baseClasses} text-on-surface hover:text-primary pb-1`;
  };

  return (
    <nav className="bg-surface-container-lowest shadow-sm fixed top-0 w-full z-50 transition-all duration-300 group hover:shadow-md">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-8 h-20">
        <a href="#home" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 shrink-0">
          <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">flight_takeoff</span>
          <span className="font-display-lg text-lg md:text-xl lg:text-2xl font-extrabold text-primary whitespace-nowrap hidden sm:block">
            SAK Study & Travel
          </span>
          <span className="font-display-lg text-xl font-extrabold text-primary whitespace-nowrap sm:hidden">
            SAK
          </span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-3 2xl:gap-5 flex-1 justify-center overflow-hidden px-4">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={getLinkClasses(link.id)}>
              {link.name}
            </a>
          ))}
        </div>
        
        <a href="#contact" className="hidden lg:flex shrink-0 bg-primary-container text-on-primary px-4 py-2 rounded font-label-bold hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-sm whitespace-nowrap items-center justify-center">
          Consult Now
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-on-surface hover:text-primary transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white shadow-xl absolute top-20 left-0 w-full flex flex-col py-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
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
