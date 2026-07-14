import { ArrowRight, PlayCircle } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        {/* Left Content */}
        <div className="flex-1">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Live Demo
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
            See Your Restaurant Website Before You Buy
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Experience a modern restaurant website with online ordering,
            responsive design, customer dashboard, and a powerful admin panel.
            Everything is ready for your restaurant.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
              View Live Demo
              <ArrowRight size={20} />
            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600">
              <PlayCircle size={20} />
              Watch Video
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">99%</h3>
              <p className="mt-2 text-sm text-slate-500">
                Mobile Responsive
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="mt-2 text-sm text-slate-500">
                Online Ordering
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">100%</h3>
              <p className="mt-2 text-sm text-slate-500">
                Custom Branding
              </p>
            </div>
          </div>
        </div>

        {/* Right Demo Mockup */}
        <div className="flex-1">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>

              <div className="ml-4 flex-1 rounded-lg bg-white px-4 py-2 text-sm text-slate-400">
                yourrestaurant.yourdomain.com
              </div>
            </div>

            {/* Demo Screen */}
            <div className="bg-slate-50 p-6">
              {/* Hero */}
              <div className="mb-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <h3 className="text-2xl font-bold">
                  Delicious Food Delivered
                </h3>

                <p className="mt-2 text-blue-100">
                  Fresh meals, delivered to your doorstep.
                </p>

                <button className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-blue-600">
                  Order Now
                </button>
              </div>

              {/* Menu Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="h-28 rounded-xl bg-slate-200"></div>

                    <div className="mt-4 h-4 w-3/4 rounded bg-slate-300"></div>

                    <div className="mt-3 h-3 w-1/2 rounded bg-slate-200"></div>

                    <div className="mt-5 flex items-center justify-between">
                      <div className="h-4 w-12 rounded bg-blue-200"></div>

                      <div className="h-9 w-9 rounded-lg bg-blue-600"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;