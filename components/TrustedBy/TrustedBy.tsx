export default function TrustedBy() {
  return (
    <section className="py-8 bg-white border-b border-border-subtle scroll-reveal">
      <div className="max-w-container-max mx-auto px-8">
        <p className="text-center text-sm font-label-bold text-secondary uppercase tracking-wider mb-6">
          Trusted by Top Universities Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="font-display-lg text-xl font-bold text-secondary hover:text-primary transition-colors cursor-pointer hover:scale-110 duration-300">
            Oxford
          </div>
          <div className="font-display-lg text-xl font-bold text-secondary hover:text-primary transition-colors cursor-pointer hover:scale-110 duration-300">
            Harvard
          </div>
          <div className="font-display-lg text-xl font-bold text-secondary hover:text-primary transition-colors cursor-pointer hover:scale-110 duration-300">
            Stanford
          </div>
          <div className="font-display-lg text-xl font-bold text-secondary hover:text-primary transition-colors cursor-pointer hover:scale-110 duration-300">
            MIT
          </div>
          <div className="font-display-lg text-xl font-bold text-secondary hover:text-primary transition-colors cursor-pointer hover:scale-110 duration-300">
            Cambridge
          </div>
        </div>
      </div>
    </section>
  );
}
