import { NavLink } from "react-router-dom";
import { Home, User, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 h-screen p-4">
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

      <nav className="flex flex-col gap-2">
        <NavItem to="/dashboard" icon={<Home size={18} />}>
          Overview
        </NavItem>

        <NavItem to="/profile" icon={<User size={18} />}>
          Profile
        </NavItem>

        <NavItem to="/settings" icon={<Settings size={18} />}>
          Settings
        </NavItem>
      </nav>

      <Separator className="my-6" />
    </aside>
  );
}

function NavItem({
  to,
  icon,
  children,
}: {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
          isActive
            ? "bg-neutral-200 dark:bg-neutral-800 font-medium"
            : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}
