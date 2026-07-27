export default function Destinations() {
  return (
    <section className="py-section-padding bg-white">
      <div className="max-w-container-max mx-auto px-8 scroll-reveal">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-primary-container font-label-bold uppercase tracking-wider text-sm flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-sm">map</span> Top Choices
            </span>
            <h2 className="font-headline-md text-3xl font-bold">
              Popular Study Destinations
            </h2>
          </div>
          <a
            className="hidden md:inline-flex items-center text-primary font-label-bold hover:text-primary-container transition-colors gap-1"
            href="#"
          >
            View All <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Destination 1 */}
          <div className="group relative rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-[400px] cursor-pointer">
            <img
              alt="United Kingdom"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="/images/dest-uk.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-label-bold px-3 py-1 rounded-full border border-white/30">
              Popular
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-display-lg text-2xl text-white font-bold mb-2">
                United Kingdom
              </h3>
              <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Home to some of the world's oldest and most prestigious universities.
              </p>
              <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                <span className="text-primary-fixed font-label-bold text-sm">
                  150+ Universities
                </span>
                <span className="material-symbols-outlined text-white">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
          {/* Destination 2 */}
          <div className="group relative rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-[400px] cursor-pointer">
            <img
              alt="USA"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="/images/dest-usa.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-display-lg text-2xl text-white font-bold mb-2">
                United States
              </h3>
              <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Diverse programs and cutting-edge research opportunities.
              </p>
              <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                <span className="text-primary-fixed font-label-bold text-sm">
                  4000+ Institutions
                </span>
                <span className="material-symbols-outlined text-white">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
          {/* Destination 3 */}
          <div className="group relative rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-[400px] cursor-pointer">
            <img
              alt="Canada"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="/images/dest-canada.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-label-bold px-3 py-1 rounded-full border border-white/30">
              Trending
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-display-lg text-2xl text-white font-bold mb-2">
                Canada
              </h3>
              <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                High quality of life and excellent post-study work opportunities.
              </p>
              <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                <span className="text-primary-fixed font-label-bold text-sm">
                  90+ Universities
                </span>
                <span className="material-symbols-outlined text-white">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
