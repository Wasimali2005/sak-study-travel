import { visaTypes } from "@/data/visaTypes";

export default function VisaTypes() {
  return (
    <section
      id="visa"
      className="py-20 bg-[--color-surface-container-low] relative scroll-reveal"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[--color-primary-container] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">
              description
            </span>{" "}
            Types of Visas
          </span>
          <h2 className="text-3xl font-bold">Varieties of Visas We Assist With</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaTypes.map((visa) => (
            <div
              key={visa.id}
              className="p-6 bg-white rounded shadow-[0_10px_30px_rgba(7,18,40,0.05)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-[--color-border-subtle] hover:border-[--color-primary-container]"
            >
              <div className="w-12 h-12 bg-[--color-surface-container-low] rounded-full flex items-center justify-center text-[--color-primary-container] mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">{visa.icon}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{visa.title}</h3>
              <p className="text-sm text-[--color-secondary]">
                {visa.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
