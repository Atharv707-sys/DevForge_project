import React, { useState, useEffect, useMemo } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  CheckSquare,
  MessageSquare,
  Bell,
  User,
  Settings,
  Search,
  Users,
  Clock,
  ArrowRight
} from "lucide-react";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Dynamic User State
  const [currentUser, setCurrentUser] = useState({
    name: "Atharv",
    initials: "AP"
  });

  // Dynamic Projects State
  const [recommendedProjects, setRecommendedProjects] = useState([
    { id: "1", title: "AI Attendance System", category: "Backend • ML", status: "Recruiting", duration: "2 Months", teamSize: 5 },
    { id: "2", title: "Smart Parking", category: "Full Stack", status: "Recruiting", duration: "1.5 Months", teamSize: 4 },
    { id: "3", title: "Campus Connect", category: "Frontend", status: "Recruiting", duration: "2 Months", teamSize: 3 },
  ]);

  const [activeProjects, setActiveProjects] = useState([
    { id: "p1", title: "AI Attendance System", progress: 62, dueDate: "15 Aug 2026" },
    { id: "p2", title: "Smart Waste Management", progress: 40, dueDate: "28 Aug 2026" },
    { id: "p3", title: "StudyBuddy", progress: 75, dueDate: "10 Aug 2026" },
  ]);

  const [pendingApplications, setPendingApplications] = useState([
    { id: "a1", title: "Smart Parking", status: "Under Review" },
    { id: "a2", title: "Campus Connect", status: "Under Review" },
  ]);

  const [recentActivities, setRecentActivities] = useState([
    { id: "act1", text: "Your application for AI Attendance System was accepted", time: "10 min ago", highlight: "AI Attendance System" },
    { id: "act2", text: "New task Login API assigned to you", time: "1 hr ago", highlight: "Login API" },
  ]);

  // Dynamic Search Filtering
  const filteredProjects = useMemo(() => {
    return recommendedProjects.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, recommendedProjects]);

  return (
    <div className="min-h-screen bg-amber-50/30 font-sans flex text-slate-800">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-amber-200/80 p-5 flex flex-col justify-between hidden md:flex shrink-0">
        <div className="space-y-6">
          <div className="flex items-center gap-2 px-2">
            <div className="w-8 h-8 rounded-xl bg-amber-400 flex items-center justify-center text-amber-950 font-bold shadow-xs">
              SC
            </div>
            <span className="text-xl font-black text-amber-950 tracking-tight">Skill Connect</span>
          </div>

          <nav className="space-y-1">
            <a href="#dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-amber-400 text-amber-950 font-bold text-sm transition-all shadow-xs">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </a>
            <a href="#projects" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-amber-50 font-medium text-sm transition-all">
              <FolderKanban className="w-4 h-4" />
              <span>Projects</span>
            </a>
            <a href="#applications" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-amber-50 font-medium text-sm transition-all">
              <FileText className="w-4 h-4" />
              <span>Applications</span>
            </a>
            <a href="#tasks" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-amber-50 font-medium text-sm transition-all">
              <CheckSquare className="w-4 h-4" />
              <span>My Tasks</span>
            </a>
            <a href="#messages" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-amber-50 font-medium text-sm transition-all">
              <MessageSquare className="w-4 h-4" />
              <span>Messages</span>
            </a>
            <a href="#notifications" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-amber-50 font-medium text-sm transition-all">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4" />
                <span>Notifications</span>
              </div>
              <span className="bg-amber-100 text-amber-800 font-bold text-xs px-2 py-0.5 rounded-full">3</span>
            </a>
            <a href="#profile" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-amber-50 font-medium text-sm transition-all">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </a>
          </nav>
        </div>

        <div>
          <a href="#settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-amber-50 font-medium text-sm transition-all">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Dynamic Header Search */}
        <header className="h-16 bg-white border-b border-amber-200/80 px-6 flex items-center justify-between gap-4">
          <div className="relative max-w-sm w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by name or skill..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:border-amber-400 transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 text-slate-600 hover:bg-amber-50 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center font-bold text-xs text-amber-950">
                {currentUser.initials}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body Grid */}
        <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-y-auto">
          
          <div className="lg:col-span-2 space-y-6">
            
            <div>
              <h1 className="text-2xl font-black text-slate-900">Welcome back, {currentUser.name}! 👋</h1>
              <p className="text-xs text-slate-500 font-medium mt-1">Let's build something amazing today!</p>
            </div>

            {/* Overview Stats (Dynamic Counts) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border border-amber-200/80 rounded-2xl p-4 space-y-1 shadow-xs">
                <span className="text-xs text-slate-500 font-medium">Active Projects</span>
                <p className="text-2xl font-black text-slate-900">{activeProjects.length}</p>
              </div>
              <div className="bg-white border border-amber-200/80 rounded-2xl p-4 space-y-1 shadow-xs">
                <span className="text-xs text-slate-500 font-medium">Tasks Assigned</span>
                <p className="text-2xl font-black text-slate-900">8</p>
              </div>
              <div className="bg-white border border-amber-200/80 rounded-2xl p-4 space-y-1 shadow-xs">
                <span className="text-xs text-slate-500 font-medium">Tasks Completed</span>
                <p className="text-2xl font-black text-slate-900">24</p>
              </div>
              <div className="bg-white border border-amber-200/80 rounded-2xl p-4 space-y-1 shadow-xs">
                <span className="text-xs text-slate-500 font-medium">Contribution Score</span>
                <p className="text-2xl font-black text-slate-900">92%</p>
              </div>
            </div>

            {/* Dynamic Recommended Projects List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-slate-900 text-sm">Recommended Projects</h2>
                <a href="#projects" className="text-xs text-amber-600 font-bold hover:underline">View All</a>
              </div>

              {filteredProjects.length === 0 ? (
                <div className="bg-white border border-amber-200/80 rounded-2xl p-6 text-center text-xs text-slate-500 font-medium">
                  No projects match "{searchQuery}"
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-white border border-amber-200/80 rounded-2xl p-4 space-y-3 flex flex-col justify-between shadow-xs">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-full">{project.status}</span>
                          <span className="text-[10px] text-slate-400 flex items-center gap-1 font-medium">
                            <Clock className="w-3 h-3" /> {project.duration}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-sm">{project.title}</h3>
                          <p className="text-[11px] text-slate-500 font-medium">{project.category}</p>
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1 text-[11px] font-medium"><Users className="w-3 h-3" /> Team: {project.teamSize}</span>
                        <button className="text-amber-600 font-bold hover:underline text-xs flex items-center gap-0.5">
                          View & Apply <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Dynamic Activity Stream */}
            <div className="bg-white border border-amber-200/80 rounded-2xl p-5 space-y-4 shadow-xs">
              <h2 className="font-bold text-slate-900 text-sm">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivities.map((act) => (
                  <div key={act.id} className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <p className="text-slate-700">{act.text}</p>
                    <span className="text-slate-400 text-[10px] font-medium">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Dynamic Active Projects Progress */}
            <div className="bg-white border border-amber-200/80 rounded-2xl p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-slate-900 text-sm">Your Active Projects</h2>
                <a href="#projects" className="text-xs text-amber-600 font-bold hover:underline">View All</a>
              </div>

              <div className="space-y-4">
                {activeProjects.map((proj) => (
                  <div key={proj.id} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800">{proj.title}</span>
                      <span className="font-bold text-amber-600">{proj.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full rounded-full" style={{ width: `${proj.progress}%` }}></div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium block">Due: {proj.dueDate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Applications List */}
            <div className="bg-white border border-amber-200/80 rounded-2xl p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-slate-900 text-sm">Pending Applications</h2>
                <a href="#applications" className="text-xs text-amber-600 font-bold hover:underline">View All</a>
              </div>

              <div className="space-y-3">
                {pendingApplications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between text-xs p-2.5 bg-slate-50 rounded-xl">
                    <span className="text-slate-700 font-bold">{app.title}</span>
                    <span className="px-2 py-0.5 text-[10px] bg-amber-100 text-amber-900 font-bold rounded-md">{app.status}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}