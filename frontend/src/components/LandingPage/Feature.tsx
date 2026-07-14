import {
  Smartphone,
  ShoppingCart,
  BarChart3,
  Users,
  CreditCard,
  Store,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Online Ordering",
    description:
      "Allow customers to place orders directly from your branded website.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Cart & Checkout",
    description:
      "Fast ordering experience with cart management and secure checkout.",
  },
  {
    icon: Store,
    title: "Branch Management",
    description:
      "Manage multiple restaurant branches from a single dashboard.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track orders, revenue, top-selling items, and customer trends.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Build customer relationships and keep track of order history.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description:
      "Accept cash on delivery and online payments with ease.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything Your Restaurant Needs
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A complete restaurant management platform designed to help
            restaurants grow online, manage operations, and increase revenue.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;