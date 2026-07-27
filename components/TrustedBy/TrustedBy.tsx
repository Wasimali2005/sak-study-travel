const universities = ["Oxford", "Harvard", "Stanford", "MIT", "Cambridge"];

export default function TrustedBy() {
  return (
    <section className="py-8 bg-white border-b border-[--color-border-subtle] scroll-reveal">
      <div className="max-w-[1280px] mx-auto px-8">
        <p className="text-center text-sm font-bold text-[--color-secondary] uppercase tracking-wider mb-6">
          Trusted by Top Universities Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {universities.map((uni) => (
            <div
              key={uni}
              className="text-xl font-bold text-[--color-secondary] hover:text-[--color-primary] transition-colors cursor-pointer hover:scale-110 duration-300"
            >
              {uni}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
