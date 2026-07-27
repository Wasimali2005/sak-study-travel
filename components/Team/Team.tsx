import Image from "next/image";
import teamMembers from "@/data/team";

export default function Team() {
  return (
    <section className="py-20 bg-[--color-surface-container-low] relative scroll-reveal">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[--color-primary-container] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">groups</span>{" "}
            Our Experts
          </span>
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay with social icons */}
                <div className="absolute inset-0 bg-[--color-deep-navy]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[--color-primary-container] hover:bg-[--color-primary-container] hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <span className="material-symbols-outlined text-sm">
                      mail
                    </span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[--color-primary-container] hover:bg-[--color-primary-container] hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                  >
                    <span className="material-symbols-outlined text-sm">
                      share
                    </span>
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-[--color-secondary]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
