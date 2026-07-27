import Image from "next/image";
import { countries } from "@/data/countries";

export default function Countries() {
  return (
    <section className="py-20 bg-[--color-surface-container-low] relative scroll-reveal">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[--color-primary-container] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">map</span>{" "}
            Global Reach
          </span>
          <h2 className="text-3xl font-bold">More Countries We Offer</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((country) => (
            <div
              key={country.id}
              className="relative group overflow-hidden rounded shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="h-40 overflow-hidden">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-deep-navy]/90 via-[--color-deep-navy]/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg">{country.name}</h3>
                <p className="text-[--color-surface-variant] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {country.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
