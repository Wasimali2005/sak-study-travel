import Image from "next/image";
import destinations from "@/data/destinations";

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="py-20 bg-[--color-surface] relative scroll-reveal"
    >
      {/* Decorative blur */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[--color-primary-container]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[--color-primary-container] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">public</span>{" "}
            Top Destinations
          </span>
          <h2 className="text-3xl font-bold">Explore Study Destinations</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className={`bg-white rounded shadow-[0_10px_30px_rgba(7,18,40,0.05)] overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-xl ${
                dest.popular ? "border-b-4 border-[--color-primary-container]" : ""
              }`}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-[--color-deep-navy]/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {dest.popular && (
                  <div className="absolute top-4 right-4 bg-[--color-primary] text-white text-xs font-bold px-2 py-1 rounded z-20">
                    Popular
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-bold">
                    {dest.universitiesCount} Universities
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[--color-primary] transition-colors duration-300">
                  {dest.title}
                </h3>
                <p className="text-[--color-secondary] text-sm mb-6">
                  {dest.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[--color-deep-navy] text-white py-2 px-4 rounded font-bold text-sm hover:bg-[--color-primary-container] transition-all duration-300 group-hover:shadow-md"
                >
                  Explore{" "}
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-[--color-primary-container] text-[--color-primary-container] px-8 py-3 rounded font-bold text-sm hover:bg-[--color-primary-container] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
