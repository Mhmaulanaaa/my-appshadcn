import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all
      ${
        scrolled
          ? "shadow-md border-b bg-white/70 dark:bg-neutral-900/70"
          : "border-b bg-white/50 dark:bg-neutral-900/50"
      }
      border-neutral-200 dark:border-neutral-800 px-6 py-4 flex justify-between items-center`}
    >
      {/* LEFT LOGO */}
      <h1 className="text-xl font-bold tracking-tight">My App</h1>

      {/* RIGHT MENU */}
      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className="text-sm font-medium hover:text-primary transition"
        >
          Home
        </NavLink>

        <NavLink
          to="/pricing"
          className="text-sm font-medium hover:text-primary transition"
        >
          Pricing
        </NavLink>

        <NavLink
          to="/about"
          className="text-sm font-medium hover:text-primary transition"
        >
          About
        </NavLink>

        {/* Theme Button */}
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
    </nav>
  );
}
