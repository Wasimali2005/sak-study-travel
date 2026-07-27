import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 bg-[--color-deep-navy] text-white min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[--color-deep-navy]/80 z-10 mix-blend-multiply transition-opacity duration-1000" />
        <Image
          src="https://lh3.googleusercontent.com/aida/AP1WRLuwlMilr1JLcZ0FdAoocKg0thW9YNWbbsgCO8r8M1bv4Xb7ryPFvvjWmSzvHl5hpLiq8k1xL52i8anyqvaESXb6lF1hz53M7W3BSwMkgYWLREGu8jA-i3e7yFZOz3r3snQZLy0xU7BOfX_rqofr0KhjBIS-Z9DEIMr2tZKUz5pbY4nfm_yzDfLCar4YGY1i4x8TLlHAQpbivHxULKqFPdust8FY_Fp0MnwF1NBL7YdmXVcF6KDJ3tPTPl4"
          alt="Global education background"
          fill
          className="object-cover transition-transform duration-[10s] ease-out hover:scale-110"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-8 relative z-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full py-16">
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 bg-[--color-primary]/20 text-[--color-primary-fixed-dim] rounded text-sm font-bold uppercase tracking-wider border border-[--color-primary]/30 animate-fade-in-up">
            Your Global Education Journey Starts Here
          </span>
          <h1 className="text-4xl md:text-[48px] font-extrabold leading-tight animate-fade-in-up animate-delay-100">
            Trusted{" "}
            <span className="text-[--color-primary-container]">Pathways</span>{" "}
            To Your Global Future
          </h1>
          <p className="text-[--color-surface-variant] text-lg max-w-lg animate-fade-in-up animate-delay-200">
            Expert guidance for university admissions, student visas, and
            scholarships to help you study at top institutions worldwide.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animate-delay-300">
            <a
              href="#contact"
              className="bg-[--color-primary-container] text-white px-8 py-3 rounded text-sm font-bold hover:bg-[--color-primary] transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_10px_30px_rgba(225,36,36,0.3)] hover:shadow-[0_15px_40px_rgba(225,36,36,0.5)] active:scale-95"
            >
              Get Started
            </a>
            <a
              href="#destinations"
              className="border-2 border-white/50 text-white px-8 py-3 rounded text-sm font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              Explore Destinations
            </a>
          </div>
        </div>

        {/* Decorative blob (desktop only) */}
        <div className="hidden md:block relative animate-fade-in-up animate-delay-300">
          <div className="w-full aspect-square bg-gradient-to-tr from-[--color-primary-container]/20 to-transparent rounded-full absolute -right-1/4 -top-1/4 blur-3xl animate-pulse" />
        </div>
      </div>
    </section>
  );
}
