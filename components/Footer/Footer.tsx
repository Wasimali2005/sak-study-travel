export default function Footer() {
  return (
    <footer className="bg-deep-navy text-primary-fixed w-full py-section-padding">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter px-8">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4 group cursor-pointer">
            <span className="material-symbols-outlined text-white text-3xl transition-transform duration-300 group-hover:scale-110">flight_takeoff</span>
            <span className="font-display-lg text-headline-md font-extrabold text-on-primary">
              SAK Study & Travel
            </span>
          </div>
          <p className="font-body-md text-surface-variant/80 text-sm mb-6">
            Your trusted partner in global education and travel consultancy.
          </p>
        </div>
        
        <div>
          <h4 className="font-label-bold text-on-primary mb-6 uppercase tracking-wider relative inline-block">
            Social Media
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-container"></span>
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="https://www.facebook.com/share/1857BNt9zY/" target="_blank" rel="noopener noreferrer" className="text-surface-variant/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2">
                <span className="material-symbols-outlined text-[12px]">chevron_right</span> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tech4edgesofficial?igsh=YzZoNnVubHkzMnlv" target="_blank" rel="noopener noreferrer" className="text-surface-variant/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2">
                <span className="material-symbols-outlined text-[12px]">chevron_right</span> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/tech4edges/" target="_blank" rel="noopener noreferrer" className="text-surface-variant/80 hover:text-white hover:pl-2 text-sm transition-all duration-300 flex items-center gap-2">
                <span className="material-symbols-outlined text-[12px]">chevron_right</span> LinkedIn
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
            <li>
              <a href="https://maps.app.goo.gl/CRy43GJPC4nXtCwo6?g_st=aw" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors duration-300 group">
                <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform mt-0.5">location_on</span>
                Office No. 322 (A), Block D, 3rd Floor, Sami Tower, Ring Road, Peshawar
              </a>
            </li>
            <li>
              <a href="https://wa.me/923374005515" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">forum</span>
                03374005515 (WhatsApp)
              </a>
            </li>
            <li>
              <a href="mailto:info@tech4edges.com" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">mail</span>
                info@tech4edges.com
              </a>
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
