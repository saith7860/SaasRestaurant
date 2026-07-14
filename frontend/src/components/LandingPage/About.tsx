import {
  Target,
  Rocket,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            About Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Helping Restaurants Build Their Digital Presence
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We build modern restaurant websites that help businesses receive
            online orders, manage customers, and grow faster with powerful
            digital tools.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>

            <h3 className="text-3xl font-bold text-slate-900">
              More Than Just a Website
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              Our platform is designed specifically for restaurants. Instead of
              hiring expensive developers every time you need an update, you get
              a complete system where you can manage your menu, receive online
              orders, monitor sales, and provide an exceptional experience for
              your customers.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Whether you own a single restaurant or multiple branches, our
              solution grows with your business and keeps everything in one
              place.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-4xl font-bold text-blue-600">
                  500+
                </h4>

                <p className="mt-2 text-slate-600">
                  Restaurants
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-4xl font-bold text-blue-600">
                  50K+
                </h4>

                <p className="mt-2 text-slate-600">
                  Orders Processed
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-4xl font-bold text-blue-600">
                  99.9%
                </h4>

                <p className="mt-2 text-slate-600">
                  Uptime
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-4xl font-bold text-blue-600">
                  24/7
                </h4>

                <p className="mt-2 text-slate-600">
                  Support
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="grid gap-6">

            <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <Target className="text-blue-600" size={28} />
              </div>

              <h4 className="text-2xl font-bold text-slate-900">
                Our Mission
              </h4>

              <p className="mt-4 leading-7 text-slate-600">
                Empower every restaurant with a professional online presence
                that attracts more customers and increases revenue.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <Rocket className="text-blue-600" size={28} />
              </div>

              <h4 className="text-2xl font-bold text-slate-900">
                Fast Growth
              </h4>

              <p className="mt-4 leading-7 text-slate-600">
                Launch your restaurant website in days instead of months with
                our ready-to-use platform.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <ShieldCheck className="text-blue-600" size={28} />
              </div>

              <h4 className="text-2xl font-bold text-slate-900">
                Secure & Reliable
              </h4>

              <p className="mt-4 leading-7 text-slate-600">
                Your restaurant data is protected with modern security
                practices and reliable cloud infrastructure.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <BadgeCheck className="text-blue-600" size={28} />
              </div>

              <h4 className="text-2xl font-bold text-slate-900">
                Trusted Platform
              </h4>

              <p className="mt-4 leading-7 text-slate-600">
                Hundreds of restaurant owners trust our platform to manage
                orders, menus, customers, and daily operations.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;