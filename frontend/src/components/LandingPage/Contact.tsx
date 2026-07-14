import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[var(--background-color)]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="rounded-full border border-[var(--primary-color)]/20 bg-[var(--card-color)] px-4 py-1.5 text-sm font-medium text-[var(--primary-color)]">
            Contact Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[var(--text-color)] md:text-4xl">
            Let's Build Your Restaurant Website
          </h2>

          <p className="mt-3 text-base leading-7 text-[var(--text-color)]/70">
            Have a project in mind? Send us a message and we'll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Info */}
          <div className="space-y-4">

            <div className="flex items-start gap-4 rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-5">
              <div className="rounded-lg bg-[var(--primary-color)]/10 p-3 text-[var(--primary-color)]">
                <Phone size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[var(--text-color)]">
                  Phone
                </h3>

                <p className="mt-1 text-sm text-[var(--text-color)]/70">
                  +92 329 5308281
                </p>

                <p className="text-xs text-[var(--text-color)]/45">
                  Mon - Sat • 9AM - 8PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-5">
              <div className="rounded-lg bg-[var(--primary-color)]/10 p-3 text-[var(--primary-color)]">
                <Mail size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[var(--text-color)]">
                  Email
                </h3>

                <p className="mt-1 text-sm text-[var(--text-color)]/70">
                  devumair00@gmail.com
                </p>

                <p className="text-xs text-[var(--text-color)]/45">
                  Reply within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-5">
              <div className="rounded-lg bg-[var(--primary-color)]/10 p-3 text-[var(--primary-color)]">
                <MapPin size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[var(--text-color)]">
                  Office
                </h3>

                <p className="mt-1 text-sm text-[var(--text-color)]/70">
                  Lahore, Punjab, Pakistan
                </p>

                <p className="text-xs text-[var(--text-color)]/45">
                  Available worldwide
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-5">
              <div className="rounded-lg bg-[var(--primary-color)]/10 p-3 text-[var(--primary-color)]">
                <Clock size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[var(--text-color)]">
                  Working Hours
                </h3>

                <p className="mt-1 text-sm text-[var(--text-color)]/70">
                  Monday - Saturday
                </p>

                <p className="text-xs text-[var(--text-color)]/45">
                  9:00 AM - 8:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="rounded-2xl border border-[var(--primary-color)]/15 bg-[var(--card-color)] p-6 shadow-lg">

            <h3 className="mb-6 text-xl font-semibold text-[var(--text-color)]">
              Send Message
            </h3>

            <form className="space-y-5">

              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--text-color)]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-[var(--primary-color)]/15 bg-[var(--background-color)] px-4 py-2.5 text-sm text-[var(--text-color)] outline-none transition focus:border-[var(--primary-color)]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--text-color)]">
                    Phone
                  </label>

                  <input
                    type="text"
                    placeholder="+92 300 1234567"
                    className="w-full rounded-lg border border-[var(--primary-color)]/15 bg-[var(--background-color)] px-4 py-2.5 text-sm text-[var(--text-color)] outline-none transition focus:border-[var(--primary-color)]"
                  />
                </div>

              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-[var(--text-color)]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-[var(--primary-color)]/15 bg-[var(--background-color)] px-4 py-2.5 text-sm text-[var(--text-color)] outline-none transition focus:border-[var(--primary-color)]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-[var(--text-color)]">
                  Restaurant Name
                </label>

                <input
                  type="text"
                  placeholder="ABC Restaurant"
                  className="w-full rounded-lg border border-[var(--primary-color)]/15 bg-[var(--background-color)] px-4 py-2.5 text-sm text-[var(--text-color)] outline-none transition focus:border-[var(--primary-color)]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-[var(--text-color)]">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg border border-[var(--primary-color)]/15 bg-[var(--background-color)] px-4 py-3 text-sm text-[var(--text-color)] outline-none transition focus:border-[var(--primary-color)]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--button-color)] px-5 py-3 font-medium text-[var(--button-text-color)] transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;