import Image from "next/image";
import blogPosts from "@/data/blog";

export default function Blog() {
  return (
    <section className="py-20 bg-[--color-surface-container-low] relative scroll-reveal">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[--color-primary-container] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">article</span>{" "}
            Insights
          </span>
          <h2 className="text-3xl font-bold">Latest Blog &amp; News</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col ${
                post.featured ? "border-b-4 border-[--color-primary-container]" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[--color-primary-container] text-white text-xs font-bold px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-[--color-secondary] mb-3">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      calendar_today
                    </span>{" "}
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      person
                    </span>{" "}
                    Admin
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-[--color-primary] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[--color-secondary] mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={post.href}
                  className="inline-flex items-center text-[--color-primary-container] font-bold text-sm hover:text-[--color-primary] transition-colors gap-1"
                >
                  Read More{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
