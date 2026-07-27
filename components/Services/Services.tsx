import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-white relative scroll-reveal"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive Education Services
          </h2>
          <p className="text-[--color-secondary] max-w-2xl mx-auto">
            We provide end-to-end support for your international education
            journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-[--color-surface] rounded shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-[--color-border-subtle] hover:border-[--color-primary-container]"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[--color-primary-container] mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-[--color-secondary]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
