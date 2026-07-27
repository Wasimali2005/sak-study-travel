export default function Blog() {
  return (
    <section className="py-section-padding bg-surface-container-low relative">
      <div className="max-w-container-max mx-auto px-8 scroll-reveal">
        <div className="text-center mb-12">
          <span className="text-primary-container font-label-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">article</span>{" "}
            Insights
          </span>
          <h2 className="font-headline-md text-3xl font-bold">
            Latest Blog & News
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
            <div className="relative overflow-hidden h-48">
              <img
                alt="Blog Post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/blog-1.jpg"
              />
              <div className="absolute top-4 left-4 bg-primary-container text-white text-xs font-label-bold px-2 py-1 rounded">
                Study Tips
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-secondary mb-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    calendar_today
                  </span>{" "}
                  Oct 12, 2023
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    person
                  </span>{" "}
                  Admin
                </span>
              </div>
              <h3 className="font-label-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                How to Write a Winning Statement of Purpose
              </h3>
              <p className="text-sm text-secondary mb-4 flex-1 line-clamp-3">
                A compelling SOP can make or break your university application.
                Learn the key elements to include...
              </p>
              <a
                className="inline-flex items-center text-primary-container font-label-bold text-sm hover:text-primary transition-colors gap-1"
                href="#"
              >
                Read More{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          {/* Blog Card 2 */}
          <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col border-b-4 border-primary-container">
            <div className="relative overflow-hidden h-48">
              <img
                alt="Blog Post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/blog-2.jpg"
              />
              <div className="absolute top-4 left-4 bg-primary-container text-white text-xs font-label-bold px-2 py-1 rounded">
                Visa Updates
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-secondary mb-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    calendar_today
                  </span>{" "}
                  Oct 05, 2023
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    person
                  </span>{" "}
                  Admin
                </span>
              </div>
              <h3 className="font-label-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                Recent Changes in UK Student Visa Policies
              </h3>
              <p className="text-sm text-secondary mb-4 flex-1 line-clamp-3">
                Stay informed about the latest regulations and requirements for
                international students planning to study in the UK.
              </p>
              <a
                className="inline-flex items-center text-primary-container font-label-bold text-sm hover:text-primary transition-colors gap-1"
                href="#"
              >
                Read More{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          {/* Blog Card 3 */}
          <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
            <div className="relative overflow-hidden h-48">
              <img
                alt="Blog Post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/blog-3.jpg"
              />
              <div className="absolute top-4 left-4 bg-primary-container text-white text-xs font-label-bold px-2 py-1 rounded">
                Scholarships
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-secondary mb-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    calendar_today
                  </span>{" "}
                  Sep 28, 2023
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    person
                  </span>{" "}
                  Admin
                </span>
              </div>
              <h3 className="font-label-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                Top Fully Funded Scholarships for 2024
              </h3>
              <p className="text-sm text-secondary mb-4 flex-1 line-clamp-3">
                Explore a curated list of prestigious scholarships that cover full
                tuition and living expenses for international students.
              </p>
              <a
                className="inline-flex items-center text-primary-container font-label-bold text-sm hover:text-primary transition-colors gap-1"
                href="#"
              >
                Read More{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
