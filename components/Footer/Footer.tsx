export default function Footer() {
  return (
    <footer className="bg-deep-navy text-primary-fixed w-full py-section-padding">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter px-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4 group cursor-pointer">
            <span className="material-symbols-outlined text-white text-3xl transition-transform duration-300 group-hover:scale-110">flight_takeoff</span>
            <span className="font-display-lg text-headline-md font-extrabold text-on-primary">
              SAK Study & Travel
            </span>
          </div>
          <p className="font-body-md text-surface-variant/80 text-sm mb-6">
            Your trusted partner in global education and travel consultancy.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-surface-variant/80 hover:text-white hover:bg-primary-container transition-all duration-300 hover:-translate-y-1"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-surface-variant/80 hover:text-white hover:bg-primary-container transition-all duration-300 hover:-translate-y-1"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">language</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-surface-variant/80 hover:text-white hover:bg-primary-container transition-all duration-300 hover:-translate-y-1"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">
                alternate_email
              </span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-label-bold text-on-primary mb-6 uppercase tracking-wider relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-container"></span>
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                className="text-surface-variant/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-[12px]">
                  chevron_right
                </span>{" "}
                Destinations
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-[12px]">
                  chevron_right
                </span>{" "}
                Programs
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-[12px]">
                  chevron_right
                </span>{" "}
                Visa Services
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-[12px]">
                  chevron_right
                </span>{" "}
                Scholarships
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-bold text-on-primary mb-6 uppercase tracking-wider relative inline-block">
            Support
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-container"></span>
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                className="text-surface-variant/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-[12px]">
                  chevron_right
                </span>{" "}
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-[12px]">
                  chevron_right
                </span>{" "}
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-surface-variant/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2"
                href="#"
              >
                <span className="material-symbols-outlined text-[12px]">
                  chevron_right
                </span>{" "}
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-bold text-on-primary mb-6 uppercase tracking-wider relative inline-block">
            Contact
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-container"></span>
          </h4>
          <ul className="space-y-4 text-surface-variant/80 text-sm">
            <li className="flex items-start gap-3 hover:text-white transition-colors duration-300 group">
              <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform mt-0.5">
                location_on
              </span>
              123 Global Edu Street, NY 10001
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
              <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">
                call
              </span>
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
              <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">
                mail
              </span>
              info@sakstudytravel.com
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-8 mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-surface-variant/50 text-sm">
          © 2024 SAK Study & Travel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
