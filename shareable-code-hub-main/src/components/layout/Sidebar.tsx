
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Menu, 
  Home, 
  FileText, 
  BarChart2, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Github,
  Mail,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  collapsed?: boolean;
}

const NavItem = ({ to, icon: Icon, label, collapsed }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2 rounded-md transition-all",
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          isActive 
            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
            : "text-sidebar-foreground"
        )
      }
    >
      <Icon className="h-5 w-5" />
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
};

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/assessment", icon: FileText, label: "Assessment" },
    { to: "/results", icon: BarChart2, label: "Results" },
    { to: "/chat", icon: MessageSquare, label: "Chat" },
    { to: "/resume-analyzer", icon: FileText, label: "Resume Analyzer" },
    { to: "/project-recommendations", icon: Lightbulb, label: "Project Ideas" },
    { to: "/cover-letter-generator", icon: Mail, label: "Cover Letters" },
    { to: "/github-analyzer", icon: Github, label: "GitHub Analysis" },
  ];

  return (
    <aside
      className={cn(
        "bg-sidebar border-r border-sidebar-border h-screen sticky top-0 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full p-3">
        <div className="flex items-center justify-between mb-6">
          {!collapsed && <h1 className="font-bold text-xl">Career AI</h1>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto"
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>

        <nav className="space-y-1 flex-1">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export const MobileNavbar = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/assessment", icon: FileText, label: "Assessment" },
    { to: "/results", icon: BarChart2, label: "Results" },
    { to: "/chat", icon: MessageSquare, label: "Chat" },
    { to: "/resume-analyzer", icon: FileText, label: "Resume Analyzer" },
    { to: "/project-recommendations", icon: Lightbulb, label: "Project Ideas" },
    { to: "/cover-letter-generator", icon: Mail, label: "Cover Letters" },
    { to: "/github-analyzer", icon: Github, label: "GitHub Analysis" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-background border-b p-3 flex items-center justify-between md:hidden">
      <h1 className="font-bold text-xl">Career AI</h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] p-0">
          <div className="p-6">
            <h2 className="font-bold text-xl mb-6">Menu</h2>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md transition-all",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive 
                        ? "bg-accent text-accent-foreground font-medium" 
                        : "text-foreground"
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
