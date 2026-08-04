import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import {
  Home,
  Info,
  Mail,
  ShoppingCart,
  User,
  UtensilsCrossed,
  Menu, X
} from "lucide-react";

import { CartContext } from "../context/CartContext";
import type { FC } from "react";
import type { NavbarProps } from "../types/HomePageTypes";

const Navbar: FC<NavbarProps> = ({ restaurnatName }) => {
  const { cart } = useContext(CartContext)!;

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const navLinks = [
    {
      title: "Home",
      path: "/",
      icon: Home,
    },
    {
      title: "Menu",
      path: "/menu",
      icon: UtensilsCrossed,
    },
    {
      title: "About",
      path: "/about",
      icon: Info,
    },
    {
      title: "Contact",
      path: "/contact",
      icon: Mail,
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--primary-color)]/10 bg-[var(--background-color)]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-3 sm:px-6">

        {/* ---------------- Logo ---------------- */}

        <Link
          to="/"
          className="group flex items-center gap-2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-color)] text-[var(--background-color)] shadow-lg transition-all duration-300 group-hover:scale-105">
            🍔
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tight text-[var(--text-color)]">
              {restaurnatName}
            </h1>

            <span className="hidden sm:block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--text-color)]/55">
              Restaurant Platform
            </span>
          </div>
        </Link>

        {/* ---------------- Navigation ---------------- */}

        <nav className="hidden items-center gap-2 rounded-full border border-[var(--primary-color)]/10 bg-[var(--card-color)]/70 px-2 py-2 lg:flex">

          {navLinks.map(({ title, path, icon: Icon }) => (
            <NavLink
              key={title}
              to={path}
              className={({ isActive }) =>
                `group relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${isActive
                  ? "bg-[var(--primary-color)] text-[var(--background-color)] shadow-md"
                  : "text-[var(--text-color)]/70 hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)]"
                }`
              }
            >
              <Icon size={16} />
              {title}
            </NavLink>
          ))}
        </nav>

        {/* ---------------- Right ---------------- */}

        <div className="flex items-center gap-3">

          <Link to="/cart">
            <button className="group relative flex h-12 items-center gap-2 rounded-2xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary-color)] hover:shadow-xl">

              <ShoppingCart
                size={18}
                className="text-[var(--primary-color)]"
              />

              <span className="hidden font-medium text-[var(--text-color)] sm:block">
                Cart
              </span>

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-[var(--primary-color)] px-1 text-xs font-bold text-[var(--background-color)] ring-4 ring-[var(--background-color)]">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>

          <Link to="/login">
            <button className="hidden lg:flex p-3 sm:h-12 sm:px-6 items-center gap-2 rounded-2xl bg-[var(--button-color)]  font-semibold text-[var(--button-text-color)] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-2xl">
              <User size={18} />
              <span className="hidden sm:block">
                Login
              </span>
            </button>
          </Link>


          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--primary-color)]/10 bg-[var(--card-color)] text-[var(--text-color)] transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>


      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--primary-color)]/10 bg-[var(--background-color)]/95 backdrop-blur-xl">

          <div className="h-dvh flex flex-col px-4 py-5 gap-2">

            {navLinks.map(({ title, path, icon: Icon }) => (
              <NavLink
                key={title}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${isActive
                    ? "bg-[var(--primary-color)] text-[var(--background-color)]"
                    : "text-[var(--text-color)] hover:bg-[var(--primary-color)]/10"
                  }`
                }
              >
                <Icon size={18} />
                {title}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="mt-3 w-fit rounded-xl bg-[var(--button-color)] py-3 px-16 font-semibold text-[var(--button-text-color)]">
                Login
              </button>
            </Link>

          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;