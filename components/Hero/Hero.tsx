export default function Hero() {
  return (
    <section className="relative pt-20 bg-deep-navy text-on-primary min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-deep-navy/80 z-10 mix-blend-multiply transition-opacity duration-1000"></div>
        <img
          alt="Hero Image"
          className="w-full h-full object-cover transition-transform duration-[10s] ease-out hover:scale-110"
          src="/images/hero-bg.jpg"
        />
      </div>
      <div className="max-w-container-max mx-auto px-8 relative z-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary-fixed-dim rounded font-label-bold uppercase tracking-wider text-sm border border-primary/30 animate-fade-in-up">
            Your Global Education Journey Starts Here
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg animate-fade-in-up animate-delay-100">
            Trusted <span className="text-primary-container">Pathways</span> To
            Your Global Future
          </h1>
          <p className="font-body-lg text-surface-variant max-w-lg animate-fade-in-up animate-delay-200">
            Expert guidance for university admissions, student visas, and
            scholarships to help you study at top institutions worldwide.
          </p>
          <div className="flex gap-4 pt-4 animate-fade-in-up animate-delay-300">
            <button className="bg-primary-container text-on-primary px-8 py-3 rounded font-label-bold hover:bg-primary transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_10px_30px_rgba(225,36,36,0.3)] hover:shadow-[0_15px_40px_rgba(225,36,36,0.5)] active:scale-95">
              Get Started
            </button>
          </div>
        </div>
        {/* Hero Decorative Graphic */}
        <div className="hidden md:block relative animate-fade-in-up animate-delay-300">
          {/* Placeholder for decorative element if needed, keeping layout consistent with reference */}
          <div className="w-full aspect-square bg-gradient-to-tr from-primary-container/20 to-transparent rounded-full absolute -right-1/4 -top-1/4 blur-3xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
