import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X } from "lucide-react";

export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/#dashboard" },
    { label: "Pricing", href: "/#pricing" },
    { label: "About", href: "/#about" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all
      ${
        scrolled
          ? "shadow-md border-b bg-white/70 dark:bg-neutral-900/70"
          : "border-b bg-white/50 dark:bg-neutral-900/50"
      } border-neutral-200 dark:border-neutral-800 px-6 py-4 flex justify-between items-center`}
    >
      {/* LOGO */}
      <a
        href="/#dashboard"
        className="flex items-center gap-2 cursor-pointer group"
      >
        <img
          src="/logo/logos.png"
          alt="Garuda Fiber Logo"
          className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          style={{ transform: "scale(1.4)", transformOrigin: "left center" }}
          // scale memperbesar logo TANPA menaikkan tinggi navbar
        />
      </a>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-6">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium hover:text-success transition"
          >
            {item.label}
          </a>
        ))}

        <ThemeToggle />

        <NavLink to="/login">
          <Button size="sm" className="shadow-sm">
            Login
          </Button>
        </NavLink>

        <NavLink to="/register">
          <Button variant="outline" size="sm" className="shadow-sm">
            Register
          </Button>
        </NavLink>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-neutral-900 shadow-md border-t border-neutral-200 dark:border-neutral-800 md:hidden flex flex-col p-4 gap-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition"
              onClick={() => setMobileOpen(false)} // auto close menu
            >
              {item.label}
            </a>
          ))}

          <ThemeToggle />

          <NavLink to="/login" onClick={() => setMobileOpen(false)}>
            <Button size="sm" className="w-full shadow-sm">
              Login
            </Button>
          </NavLink>

          <NavLink to="/register" onClick={() => setMobileOpen(false)}>
            <Button variant="outline" size="sm" className="w-full shadow-sm">
              Register
            </Button>
          </NavLink>
        </div>
      )}
    </nav>
  );
}
