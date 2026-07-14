import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--background-color)]"
    >
      {/* Background Blur */}
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[var(--primary-color)]/10 blur-[120px]" />

      <div className="absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-[var(--button-color)]/10 blur-[140px]" />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">

        {/* LEFT */}
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary-color)]/20 bg-[var(--card-color)] px-4 py-2 shadow-lg">
            <CheckCircle2
              size={18}
              className="text-[var(--primary-color)]"
            />

            <span className="text-sm font-medium text-[var(--text-color)]">
              Trusted by Restaurants Across Pakistan
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-5xl font-black leading-tight text-[var(--text-color)] md:text-6xl">

            Build Your

            <span className="block text-[var(--primary-color)]">
              Restaurant Website
            </span>

            In Days, Not Months
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--text-color)]/75">

            Launch a beautiful restaurant website with online ordering,
            QR menus, delivery management, admin dashboard,
            and complete branding—all without the hassle of
            building everything from scratch.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="flex items-center justify-center gap-2 rounded-xl bg-[var(--button-color)] px-8 py-4 font-semibold text-[var(--button-text-color)] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]">

              Book Free Demo

              <PhoneCall size={18} />

            </button>

            <Link to="/demo">

              <button className="flex items-center justify-center gap-2 rounded-xl border border-[var(--primary-color)] px-8 py-4 font-semibold text-[var(--primary-color)] transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]">

                Live Demo

                <ArrowRight size={18} />

              </button>

            </Link>

          </div>

          {/* Statistics */}

          <div className="mt-14 grid grid-cols-3 gap-5">

            <div className="rounded-2xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] p-5 shadow-lg">

              <h2 className="text-3xl font-black text-[var(--primary-color)]">
                100+
              </h2>

              <p className="mt-2 text-sm text-[var(--text-color)]/70">
                Restaurants
              </p>

            </div>

            <div className="rounded-2xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] p-5 shadow-lg">

              <h2 className="text-3xl font-black text-[var(--primary-color)]">
                50K+
              </h2>

              <p className="mt-2 text-sm text-[var(--text-color)]/70">
                Orders Processed
              </p>

            </div>

            <div className="rounded-2xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] p-5 shadow-lg">

              <h2 className="text-3xl font-black text-[var(--primary-color)]">
                99.9%
              </h2>

              <p className="mt-2 text-sm text-[var(--text-color)]/70">
                Uptime
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex w-full justify-center lg:w-1/2">

          {/* Dashboard */}

          <div className="relative overflow-hidden rounded-3xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-3 shadow-2xl">

            <img
              src="/dashboard-preview.png"
              alt="Dashboard Preview"
              className="rounded-2xl"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -left-8 top-10 hidden rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-4 shadow-2xl lg:block">

            <p className="text-xs uppercase tracking-wide text-[var(--text-color)]/60">
              New Order
            </p>

            <h3 className="mt-2 font-bold text-[var(--text-color)]">
              Zinger Burger
            </h3>

            <p className="text-sm text-[var(--primary-color)]">
              Rs. 1,250
            </p>

          </div>

          {/* Floating Card */}

          <div className="absolute -right-6 bottom-12 hidden rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-4 shadow-2xl lg:block">

            <p className="text-xs uppercase tracking-wide text-[var(--text-color)]/60">
              Customer Rating
            </p>

            <h2 className="mt-2 text-3xl font-black text-[var(--primary-color)]">
              ★ 4.9
            </h2>

            <p className="text-sm text-[var(--text-color)]/70">
              Based on 2,500+ Reviews
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;