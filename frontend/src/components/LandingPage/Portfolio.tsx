import { ArrowUpRight, Globe } from "lucide-react";

const portfolio = [
  {
    name: "Bella Italia",
    category: "Italian Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
    description:
      "Premium restaurant website with online ordering, reservations and delivery.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Burger House",
    category: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80",
    description:
      "Modern fast-food ordering platform with real-time cart and checkout.",
    tech: ["React", "Express", "Stripe"],
  },
  {
    name: "Spice Garden",
    category: "Asian Cuisine",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
    description:
      "Elegant multi-branch restaurant system with dashboard analytics.",
    tech: ["React", "Spring Boot", "MySQL"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Restaurants Powered By Our Platform
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Discover beautiful restaurant websites created using our restaurant
            management platform.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 lg:grid-cols-3">

          {portfolio.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Category Badge */}
                <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  {project.category}
                </span>

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {project.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">

                  <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                    <Globe size={18} />
                    Live Demo
                  </button>

                  <button className="flex items-center justify-center rounded-xl border border-slate-300 px-4 transition hover:border-blue-600 hover:text-blue-600">
                    <ArrowUpRight size={20} />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold text-slate-900">
            Want Your Restaurant Here?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Join hundreds of restaurants already growing their business with
            their own branded restaurant website.
          </p>

          <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
            Start Your Restaurant Website
          </button>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;