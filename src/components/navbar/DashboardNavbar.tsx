import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// Update the import path to where ModeToggle is actually exported
import ThemeProvider from "@/components/theme/ThemeProvider";

export default function DashboardNavbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-neutral-900 dark:border-neutral-800">
      <Input placeholder="Search..." className="max-w-sm" />

      <div className="flex items-center gap-4">
        <ThemeProvider children={""} />

        <Avatar>
          <AvatarFallback>MH</AvatarFallback>
        </Avatar>

        <Button variant="outline" size="sm">
          Logout
        </Button>
      </div>
    </header>
  );
}
