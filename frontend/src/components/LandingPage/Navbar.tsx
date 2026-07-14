import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--primary-color)]/10 bg-[var(--background-color)]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black tracking-wide text-[var(--primary-color)] transition hover:opacity-90"
        >
          Order<span className="text-[var(--text-color)]">Sphere</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-[var(--text-color)] transition duration-200 hover:text-[var(--primary-color)]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* <Link
            to="/login"
            className="rounded-xl border border-[var(--primary-color)]/20 px-5 py-2.5 font-medium text-[var(--text-color)] transition hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
          >
            Login
          </Link> */}


          <a
            key="Contact"
            href="#contact"
            className="font-medium text-[var(--text-color)] transition duration-200 hover:text-[var(--primary-color)]"
          >
            <button className="rounded-xl bg-[var(--button-color)] px-6 py-2.5 font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]">
              Book Call
            </button>
          </a>




        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-[var(--text-color)] transition hover:bg-[var(--card-color)] lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t min-h-[90vh] border-[var(--primary-color)]/10 bg-[var(--card-color)] lg:hidden">
          <nav className="flex flex-col px-5 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 font-medium text-[var(--text-color)] transition hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)]"
              >
                {link.name}
              </a>
            ))}

            {/* <Link
              to="/login"
              className="mt-4 rounded-xl border border-[var(--primary-color)]/20 py-3 text-center font-medium text-[var(--text-color)] transition hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
            >
              Login
            </Link> */}

            <a
              key="Contact"
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="font-medium text-[var(--text-color)] transition duration-200 hover:text-[var(--primary-color)]"
            >
              <button className="mx-3 mt-3 p-10 rounded-xl bg-[var(--button-color)] py-3 font-semibold text-[var(--button-text-color)] shadow-lg transition hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]">
                Book Call
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;