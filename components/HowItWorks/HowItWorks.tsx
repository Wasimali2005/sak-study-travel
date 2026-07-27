export default function HowItWorks() {
  return (
    <section className="py-section-padding bg-white relative">
      <div className="max-w-container-max mx-auto px-8 scroll-reveal">
        <div className="text-center mb-16">
          <span className="text-primary-container font-label-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">route</span>{" "}
            Simple Process
          </span>
          <h2 className="font-headline-md text-3xl font-bold">
            How We Help You Get There
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border-subtle -translate-y-1/2 z-0"></div>
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest border-4 border-white flex items-center justify-center text-secondary font-headline-md shadow-md mb-4 transition-all duration-500 group-hover:bg-primary-container group-hover:text-white group-hover:scale-110 group-hover:-translate-y-2">
              1
            </div>
            <h3 className="font-label-bold text-lg mb-2">Free Counseling</h3>
            <p className="text-sm text-secondary">
              Discuss your goals and evaluate your profile with experts.
            </p>
          </div>
          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest border-4 border-white flex items-center justify-center text-secondary font-headline-md shadow-md mb-4 transition-all duration-500 group-hover:bg-primary-container group-hover:text-white group-hover:scale-110 group-hover:-translate-y-2 delay-100">
              2
            </div>
            <h3 className="font-label-bold text-lg mb-2">
              University Selection
            </h3>
            <p className="text-sm text-secondary">
              Shortlist the best fit universities based on your preferences.
            </p>
          </div>
          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest border-4 border-white flex items-center justify-center text-secondary font-headline-md shadow-md mb-4 transition-all duration-500 group-hover:bg-primary-container group-hover:text-white group-hover:scale-110 group-hover:-translate-y-2 delay-200">
              3
            </div>
            <h3 className="font-label-bold text-lg mb-2">
              Application & Admission
            </h3>
            <p className="text-sm text-secondary">
              Complete documentation and secure your offer letter.
            </p>
          </div>
          {/* Step 4 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest border-4 border-white flex items-center justify-center text-secondary font-headline-md shadow-md mb-4 transition-all duration-500 group-hover:bg-primary-container group-hover:text-white group-hover:scale-110 group-hover:-translate-y-2 delay-300">
              4
            </div>
            <h3 className="font-label-bold text-lg mb-2">Visa & Departure</h3>
            <p className="text-sm text-secondary">
              Visa assistance, flight booking, and pre-departure briefing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
