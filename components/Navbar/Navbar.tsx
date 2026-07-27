"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Destinations");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#ffffff] fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-8 h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <span className="material-symbols-outlined text-[--color-primary-container] text-3xl">
            flight_takeoff
          </span>
          <span className="text-2xl font-extrabold text-[--color-primary]">
            SAK Study &amp; Travel
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`font-medium transition-all duration-300 hover:-translate-y-0.5 text-sm ${
                activeLink === link.label
                  ? "text-[--color-primary] border-b-2 border-[--color-primary] font-bold pb-1"
                  : "text-[--color-on-surface] hover:text-[--color-primary]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-[--color-primary-container] text-white px-6 py-2 rounded text-sm font-bold tracking-wide hover:bg-[--color-primary] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
        >
          Consult Now
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[--color-on-surface] hover:text-[--color-primary] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[--color-border-subtle] px-8 py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setMenuOpen(false);
              }}
              className="text-[--color-on-surface] hover:text-[--color-primary] font-medium transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[--color-primary-container] text-white px-6 py-2 rounded text-sm font-bold text-center hover:bg-[--color-primary] transition-all duration-300 mt-2"
          >
            Consult Now
          </a>
        </div>
      )}
    </nav>
  );
}
