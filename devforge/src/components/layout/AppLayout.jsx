import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FolderKanban, 
  Inbox, 
  CheckSquare, 
  MessageSquare, 
  Bell, 
  User, 
  Settings,
  Search,
  Plus
} from "lucide-react";

export default function AppLayout({ children, user, notificationsCount = 0 }) {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Projects", path: "/projects", icon: FolderKanban },
    { label: "Applications", path: "/applications", icon: Inbox },
    { label: "My Tasks", path: "/workspace/1/tasks", icon: CheckSquare },
    { label: "Messages", path: "/messages", icon: MessageSquare },
    { label: "Notifications", path: "/notifications", icon: Bell, badge: notificationsCount },
    { label: "Profile", path: "/profile", icon: User },
    { label: "Settings", path: "/settings", icon: Settings },
  ];

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase()
    : "G";

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] text-amber-950 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#FCD34D]/20 border-r border-amber-200/60 h-screen sticky top-0 flex flex-col justify-between p-4">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2.5 px-3 py-1">
            <div className="bg-amber-950 text-amber-400 font-black rounded-xl w-9 h-9 flex items-center justify-center text-sm shadow-sm">
              SC
            </div>
            <span className="text-xl font-extrabold tracking-tight text-amber-950">SkillConnect</span>
          </Link>

          <Link 
            to="/create-project"
            className="flex items-center justify-center gap-2 w-full bg-amber-950 hover:bg-amber-900 text-amber-300 text-sm font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all"
          >
            <Plus className="w-4 h-4 stroke-[3]" /> Create Project
          </Link>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-amber-400/40 text-amber-950 shadow-sm"
                      : "text-amber-900/70 hover:bg-amber-300/30 hover:text-amber-950"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge > 0 && (
                    <span className="bg-amber-950 text-amber-300 text-xs font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Info Footer */}
        <div className="border-t border-amber-200/60 pt-3 flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-amber-400 text-amber-950 font-bold flex items-center justify-center text-sm border border-amber-500/30 shadow-xs">
            {initials}
          </div>
          <div className="truncate text-left">
            <p className="text-sm font-bold text-amber-950 truncate leading-tight">
              {user?.name || "Guest User"}
            </p>
            <p className="text-xs text-amber-900/60 truncate font-medium">
              {user?.email || "Sign in to manage projects"}
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-amber-200/50 px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-900/40" />
            <input
              type="text"
              placeholder="Search projects, skills, contributors..."
              className="w-full pl-10 pr-4 py-2 bg-amber-100/40 border border-amber-200/60 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:bg-white transition-all text-amber-950 placeholder:text-amber-900/40"
            />
          </div>
        </header>

        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}