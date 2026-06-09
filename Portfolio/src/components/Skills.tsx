export default function Skills() {
  const categories = [
    {
      id: "01",
      label: "Daily",
      color: "bg-emerald-500",
      tech: ["Astro", "React", "TypeScript", "Go"],
    },
    {
      id: "02",
      label: "Usually",
      color: "bg-blue-500",
      tech: [
        "PostgreSQL",
        "Redis",
        "Tailwind CSS",
        "REST APIs",
        "Cloudflare",
      ],
    },
    {
      id: "03",
      label: "Exploring",
      color: "bg-violet-500",
      tech: ["Docker", "Kubernetes", "gRCP"],
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-15">
      <div className="max-w-5xl">

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">
            /skills & tools
          </h2>
        </div>

        <div className="mt-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`grid md:grid-cols-[80px_1fr] gap-6 py-10 ${index !== categories.length - 1
                  ? "border-b border-zinc-200"
                  : ""
                }`}
            >
              {/* Left Column - ID */}
              <div>
                <span className="text-sm text-zinc-400 font-mono">
                  {category.id}
                </span>
              </div>

              {/* Right Column - Content */}
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-2.5 h-2.5 rounded-full ${category.color} shadow-sm`} />
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    {category.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.tech.map((item) => (
                    <span
                      key={item}
                      className="
                                                px-4 py-2.5
                                                rounded-xl
                                                border border-zinc-200/80
                                                bg-zinc-50/50
                                                text-zinc-700
                                                text-sm font-medium
                                                hover:bg-white
                                                hover:text-zinc-900
                                                hover:border-zinc-300
                                                hover:shadow-sm
                                                hover:-translate-y-0.5
                                                transition-all duration-200
                                                cursor-default
                                            "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}