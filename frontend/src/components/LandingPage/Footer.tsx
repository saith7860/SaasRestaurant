import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";


import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="border-t border-[var(--primary-color)]/10 bg-[var(--card-color)]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">
              Order Sphere
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--text-color)]/70">
              We build modern restaurant websites with online ordering,
              digital menus, customer management and complete restaurant
              solutions to help businesses grow.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="rounded-lg border border-[var(--primary-color)]/15 p-2 text-[var(--text-color)] transition hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
              >
                <FaFacebookF size={18} />
              </a>
  
              <a
                href="#"
                className="rounded-lg border border-[var(--primary-color)]/15 p-2 text-[var(--text-color)] transition hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg border border-[var(--primary-color)]/15 p-2 text-[var(--text-color)] transition hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg border border-[var(--primary-color)]/15 p-2 text-[var(--text-color)] transition hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
              >
                <FaXTwitter size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-color)]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li>
                <a
                  href="#hero"
                  className="text-[var(--text-color)]/70 transition hover:text-[var(--primary-color)]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="text-[var(--text-color)]/70 transition hover:text-[var(--primary-color)]"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="text-[var(--text-color)]/70 transition hover:text-[var(--primary-color)]"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="text-[var(--text-color)]/70 transition hover:text-[var(--primary-color)]"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-[var(--text-color)]/70 transition hover:text-[var(--primary-color)]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-[var(--text-color)]/70 transition hover:text-[var(--primary-color)]"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-color)]">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li className="text-[var(--text-color)]/70">
                Restaurant Website
              </li>

              <li className="text-[var(--text-color)]/70">
                Online Ordering
              </li>

              <li className="text-[var(--text-color)]/70">
                QR Digital Menu
              </li>

              <li className="text-[var(--text-color)]/70">
                Admin Dashboard
              </li>

              <li className="text-[var(--text-color)]/70">
                Restaurant Branding
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-color)]">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 text-[var(--primary-color)]"
                />

                <span className="text-[var(--text-color)]/70">
                  +92 329 5308281
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 text-[var(--primary-color)]"
                />

                <span className="break-all text-[var(--text-color)]/70">
                  devumair00@gmail.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 text-[var(--primary-color)]"
                />

                <span className="text-[var(--text-color)]/70">
                  Lahore, Punjab, Pakistan
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--primary-color)]/10 pt-6 text-sm text-[var(--text-color)]/60 md:flex-row">

          <p>
            © {new Date().getFullYear()} Order Sphere. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition hover:text-[var(--primary-color)]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-[var(--primary-color)]"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;