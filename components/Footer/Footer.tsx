const quickLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Programs", href: "#how-it-works" },
  { label: "Visa Services", href: "#visa" },
  { label: "Scholarships", href: "#services" },
];

const supportLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[--color-deep-navy] text-[--color-primary-fixed] w-full py-20">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        {/* Column 1: Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4 group cursor-pointer">
            <span className="material-symbols-outlined text-[--color-primary-container] text-2xl transition-transform duration-300 group-hover:scale-110">
              flight_takeoff
            </span>
            <span className="text-xl font-extrabold text-white">
              SAK Study &amp; Travel
            </span>
          </div>
          <p className="text-[--color-surface-variant]/80 text-sm mb-6">
            Your trusted partner in global education and travel consultancy.
          </p>
          <div className="flex gap-4">
            {["share", "language", "alternate_email"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[--color-surface-variant]/80 hover:text-white hover:bg-[--color-primary-container] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-sm">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[--color-primary-container]" />
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[--color-surface-variant]/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[12px]">
                    chevron_right
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
            Support
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[--color-primary-container]" />
          </h4>
          <ul className="space-y-3">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[--color-surface-variant]/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[12px]">
                    chevron_right
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
            Contact
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[--color-primary-container]" />
          </h4>
          <ul className="space-y-4 text-[--color-surface-variant]/80 text-sm">
            <li className="flex items-start gap-3 hover:text-white transition-colors duration-300 group">
              <span className="material-symbols-outlined text-[--color-primary-container] group-hover:scale-110 transition-transform mt-0.5">
                location_on
              </span>
              123 Global Edu Street, NY 10001
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
              <span className="material-symbols-outlined text-[--color-primary-container] group-hover:scale-110 transition-transform">
                call
              </span>
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
              <span className="material-symbols-outlined text-[--color-primary-container] group-hover:scale-110 transition-transform">
                mail
              </span>
              info@sakstudy.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto px-8 mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-[--color-surface-variant]/50 text-sm">
          © 2024 SAK Study &amp; Travel Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
