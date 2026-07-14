import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Owner",
    restaurant: "Spice Garden",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Our online orders increased by nearly 45% within the first month. The website looks premium and customers love how easy it is to order.",
  },
  {
    name: "Ali Hassan",
    role: "Manager",
    restaurant: "Burger House",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "Managing menu items, orders and customers has become incredibly simple. Everything is available from one dashboard.",
  },
  {
    name: "Emily Johnson",
    role: "Founder",
    restaurant: "Bella Italia",
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "The design is beautiful, fast and mobile-friendly. It gives our restaurant a professional online presence that our customers trust.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Loved by Restaurant Owners
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Hundreds of restaurants trust our platform to manage orders,
            increase sales, and provide an exceptional customer experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Stars */}
              <div className="mb-6 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mb-8 leading-8 text-slate-600">
                "{testimonial.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>

                  <p className="text-sm font-medium text-blue-600">
                    {testimonial.restaurant}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-8 rounded-3xl bg-blue-600 px-8 py-10 text-center text-white md:grid-cols-4">

          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="mt-2 text-blue-100">
              Restaurants
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">50K+</h3>
            <p className="mt-2 text-blue-100">
              Orders Processed
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">99.9%</h3>
            <p className="mt-2 text-blue-100">
              Uptime
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">4.9/5</h3>
            <p className="mt-2 text-blue-100">
              Customer Rating
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;