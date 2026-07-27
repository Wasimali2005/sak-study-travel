export default function Navbar() {
  return (
    <nav className="bg-surface-container-lowest shadow-sm fixed top-0 w-full z-50 transition-all duration-300 group hover:shadow-md">
      <div className="max-w-container-max mx-auto flex justify-between items-center px-8 h-20">
        <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          {/* We will use the exact HTML structure for the logo */}
          <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
          <span className="font-display-lg text-headline-md font-extrabold text-primary">
            SAK Study & Travel
          </span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-primary border-b-2 border-primary font-bold pb-1 font-body-md transition-all duration-300 hover:-translate-y-0.5"
            href="#"
          >
            Destinations
          </a>
          <a
            className="text-on-surface font-medium hover:text-primary transition-all duration-300 font-body-md hover:-translate-y-0.5"
            href="#"
          >
            Programs
          </a>
          <a
            className="text-on-surface font-medium hover:text-primary transition-all duration-300 font-body-md hover:-translate-y-0.5"
            href="#"
          >
            Visa Services
          </a>
          <a
            className="text-on-surface font-medium hover:text-primary transition-all duration-300 font-body-md hover:-translate-y-0.5"
            href="#"
          >
            Scholarships
          </a>
          <a
            className="text-on-surface font-medium hover:text-primary transition-all duration-300 font-body-md hover:-translate-y-0.5"
            href="#"
          >
            About Us
          </a>
        </div>
        <button className="hidden md:block bg-primary-container text-on-primary px-6 py-2 rounded font-label-bold hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
          Consult Now
        </button>
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-on-surface hover:text-primary transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
