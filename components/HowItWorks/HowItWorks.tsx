const steps = [
  {
    number: 1,
    title: "Free Counseling",
    description: "Discuss your goals and evaluate your profile with experts.",
  },
  {
    number: 2,
    title: "University Selection",
    description: "Shortlist the best fit universities based on your preferences.",
  },
  {
    number: 3,
    title: "Application & Admission",
    description: "Complete documentation and secure your offer letter.",
  },
  {
    number: 4,
    title: "Visa & Departure",
    description: "Visa assistance, flight booking, and pre-departure briefing.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-white relative scroll-reveal"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[--color-primary-container] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">route</span>{" "}
            Simple Process
          </span>
          <h2 className="text-3xl font-bold">How We Help You Get There</h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-[--color-border-subtle] -translate-y-1/2 z-0" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[--color-surface-container-highest] border-4 border-white flex items-center justify-center text-[--color-secondary] text-2xl font-bold shadow-md mb-4 transition-all duration-500 group-hover:bg-[--color-primary-container] group-hover:text-white group-hover:scale-110 group-hover:-translate-y-2">
                {step.number}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-[--color-secondary]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
