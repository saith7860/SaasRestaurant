import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for small restaurants starting online.",
    button: "Get Started",
    popular: false,
    features: [
      "1 Restaurant Website",
      "Online Ordering",
      "Menu Management",
      "Customer Accounts",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    description: "Everything needed to grow your restaurant.",
    button: "Start Free Trial",
    popular: true,
    features: [
      "Unlimited Menu Items",
      "Online Ordering",
      "Multiple Branches",
      "Admin Dashboard",
      "Sales Analytics",
      "Priority Support",
      "Custom Branding",
      "Payment Integration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For restaurant chains and franchises.",
    button: "Contact Sales",
    popular: false,
    features: [
      "Unlimited Restaurants",
      "Unlimited Branches",
      "Dedicated Manager",
      "API Access",
      "Advanced Reports",
      "Custom Integrations",
      "Training",
      "24/7 Premium Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Simple & Transparent Pricing
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Choose the perfect plan for your restaurant. Upgrade anytime as
            your business grows.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-blue-600 bg-blue-600 text-white shadow-2xl scale-105"
                  : "border-slate-200 bg-white"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-5 py-2 text-sm font-bold text-slate-900 shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Plan */}
              <h3
                className={`text-2xl font-bold ${
                  plan.popular ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`mt-3 ${
                  plan.popular ? "text-blue-100" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-8">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.popular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (
                  <span
                    className={`ml-2 ${
                      plan.popular ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    /month
                  </span>
                )}
              </div>

              {/* CTA */}
              <button
                className={`mt-8 w-full rounded-xl py-4 font-semibold transition ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-slate-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.button}
              </button>

              {/* Divider */}
              <div
                className={`my-8 border-t ${
                  plan.popular
                    ? "border-blue-400"
                    : "border-slate-200"
                }`}
              />

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        plan.popular
                          ? "bg-white/20"
                          : "bg-blue-100"
                      }`}
                    >
                      <Check
                        size={14}
                        className={
                          plan.popular
                            ? "text-white"
                            : "text-blue-600"
                        }
                      />
                    </div>

                    <span
                      className={
                        plan.popular
                          ? "text-blue-50"
                          : "text-slate-700"
                      }
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-slate-600">
            Need something custom? We can build a tailored solution for your
            restaurant business.
          </p>

          <button className="mt-6 rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;