import { ArrowRight, PhoneCall } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-20 text-center shadow-2xl md:px-20">

          {/* Badge */}
          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            🚀 Ready to Grow Your Restaurant?
          </span>

          {/* Heading */}
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Launch Your Restaurant Website
            <br />
            in Just a Few Days
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Join hundreds of restaurants already using our platform to
            accept online orders, manage customers, and increase revenue.
            Your professional restaurant website is just one click away.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <button className="flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
              Start Free Trial
              <ArrowRight size={20} />
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition duration-300 hover:bg-white hover:text-blue-600">
              <PhoneCall size={20} />
              Book a Demo
            </button>

          </div>

          {/* Trust Line */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">

            <span>✓ No Credit Card Required</span>

            <span>✓ Free Setup Assistance</span>

            <span>✓ Cancel Anytime</span>

            <span>✓ 24/7 Support</span>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;