import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";

export default function Stats() {
  return (
    <section className="py-16 bg-deep-navy text-white relative overflow-hidden">
      {/* Background Map Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      <div className="max-w-container-max mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {/* Stat 1 */}
          <div className="px-4 scroll-reveal">
            <div className="font-display-lg text-4xl md:text-5xl font-bold text-primary-container mb-2 flex justify-center">
              <AnimatedCounter target={10000} suffix="+" />
            </div>
            <p className="font-label-bold uppercase tracking-wide text-sm text-white/80">
              Successful Students
            </p>
          </div>
          {/* Stat 2 */}
          <div className="px-4 scroll-reveal delay-100">
            <div className="font-display-lg text-4xl md:text-5xl font-bold text-primary-container mb-2 flex justify-center">
              <AnimatedCounter target={500} suffix="+" />
            </div>
            <p className="font-label-bold uppercase tracking-wide text-sm text-white/80">
              Partner Universities
            </p>
          </div>
          {/* Stat 3 */}
          <div className="px-4 scroll-reveal delay-200">
            <div className="font-display-lg text-4xl md:text-5xl font-bold text-primary-container mb-2 flex justify-center">
              <AnimatedCounter target={30} suffix="+" />
            </div>
            <p className="font-label-bold uppercase tracking-wide text-sm text-white/80">
              Countries
            </p>
          </div>
          {/* Stat 4 */}
          <div className="px-4 scroll-reveal delay-300">
            <div className="font-display-lg text-4xl md:text-5xl font-bold text-primary-container mb-2 flex justify-center">
              <AnimatedCounter target={98} suffix="%" />
            </div>
            <p className="font-label-bold uppercase tracking-wide text-sm text-white/80">
              Visa Success Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
