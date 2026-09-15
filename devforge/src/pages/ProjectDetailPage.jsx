import React, { useState } from "react";
import { 
  Heart, 
  Calendar, 
  Users, 
  Clock, 
  Tag, 
  BarChart2, 
  ChevronRight, 
  Send 
} from "lucide-react";

const PROJECT_DETAILS = {
  id: "1",
  title: "AI Attendance System",
  status: "Recruiting",
  author: "Amit Sharma",
  college: "MIT WPU",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  about: "An AI powered attendance system using face recognition and QR code to mark attendance automatically.",
  problemStatement: "Manual attendance takes time and proxy attendance is common. We want to build a system that's fast, secure and easy to integrate.",
  techStack: ["Python", "Django", "OpenCV", "PostgreSQL", "React"],
  info: {
    duration: "2 Months",
    teamSize: "5",
    startedOn: "15 July 2026",
    recruitmentEnds: "10 Aug 2026",
    projectType: "Web Application",
    difficulty: "Intermediate"
  },
  rolesNeeded: [
    { title: "Backend Developer", experience: "Intermediate", count: 1, avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" },
    { title: "ML Engineer", experience: "Intermediate", count: 1, avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" },
    { title: "Frontend Developer", experience: "Beginner - Intermediate", count: 2, avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80" },
    { title: "UI/UX Designer", experience: "Beginner", count: 1, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" }
  ],
  ownerMessage: "Looking for passionate people who want to build something impactful. Let's create real change together! 💪"
};

const TABS = ["Overview", "Requirements", "Team", "Timeline", "FAQs"];

export default function ProjectDetailPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50/30 p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <a href="/dashboard" className="text-amber-700 hover:underline">Home</a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <a href="/discover" className="text-amber-700 hover:underline">Projects</a>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800">{PROJECT_DETAILS.title}</span>
        </nav>

        {/* Top Header Card */}
        <div className="bg-white border border-amber-200/80 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={PROJECT_DETAILS.avatar}
              alt={PROJECT_DETAILS.author}
              className="w-14 h-14 rounded-full object-cover border border-amber-200 shrink-0"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-xl md:text-2xl font-black text-slate-900">{PROJECT_DETAILS.title}</h1>
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-full">
                  {PROJECT_DETAILS.status}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                by <span className="text-slate-700 font-bold">{PROJECT_DETAILS.author}</span> • {PROJECT_DETAILS.college}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center gap-1.5 px-4 py-2.5 border rounded-xl text-xs font-bold transition-all ${
                isSaved
                  ? "bg-rose-50 border-rose-300 text-rose-600"
                  : "bg-white border-amber-200/80 text-slate-700 hover:bg-amber-50"
              }`}
            >
              <Heart className={`w-4 h-4 ${isSaved ? "fill-rose-500 text-rose-500" : ""}`} />
              <span>{isSaved ? "Saved" : "Save"}</span>
            </button>

            <button className="flex items-center gap-1.5 px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-xs rounded-xl shadow-xs transition-all">
              <Send className="w-3.5 h-3.5" />
              <span>Apply Now</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-amber-200/80 flex items-center gap-6 overflow-x-auto scrollbar-none">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-xs font-bold transition-all relative shrink-0 ${
                activeTab === tab
                  ? "text-amber-950 border-b-2 border-amber-500"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (2 Spans) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About & Problem Statement */}
            <div className="bg-white border border-amber-200/80 rounded-2xl p-6 space-y-5 shadow-xs">
              <div className="space-y-2">
                <h2 className="text-sm font-bold text-slate-900">About the Project</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {PROJECT_DETAILS.about}
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-bold text-slate-900">Problem Statement</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {PROJECT_DETAILS.problemStatement}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h2 className="text-sm font-bold text-slate-900">Tech Stack</h2>
                <div className="flex items-center gap-2 flex-wrap">
                  {PROJECT_DETAILS.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/60 rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Roles Needed Section */}
            <div className="bg-white border border-amber-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
              <h2 className="text-sm font-bold text-slate-900">Roles Needed</h2>
              <div className="space-y-3">
                {PROJECT_DETAILS.rolesNeeded.map((role, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 bg-slate-50/80 rounded-xl border border-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={role.avatar}
                        alt={role.title}
                        className="w-9 h-9 rounded-full object-cover border border-amber-200"
                      />
                      <div>
                        <h3 className="text-xs font-bold text-slate-900">{role.title}</h3>
                        <p className="text-[11px] text-slate-500 font-medium">Experience: {role.experience}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-950 bg-amber-100 border border-amber-200 w-6 h-6 rounded-full flex items-center justify-center">
                      {role.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (1 Span) */}
          <div className="space-y-6">
            
            {/* Project Info Card */}
            <div className="bg-white border border-amber-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
              <h2 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">Project Info</h2>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> Duration
                  </span>
                  <span className="font-bold text-slate-800">{PROJECT_DETAILS.info.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-slate-400" /> Team Size
                  </span>
                  <span className="font-bold text-slate-800">{PROJECT_DETAILS.info.teamSize}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> Started On
                  </span>
                  <span className="font-bold text-slate-800">{PROJECT_DETAILS.info.startedOn}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> Recruitment Ends
                  </span>
                  <span className="font-bold text-slate-800">{PROJECT_DETAILS.info.recruitmentEnds}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-slate-400" /> Project Type
                  </span>
                  <span className="font-bold text-slate-800">{PROJECT_DETAILS.info.projectType}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium flex items-center gap-2">
                    <BarChart2 className="w-3.5 h-3.5 text-slate-400" /> Difficulty
                  </span>
                  <span className="font-bold text-slate-800">{PROJECT_DETAILS.info.difficulty}</span>
                </div>
              </div>
            </div>

            {/* Owner's Message Card */}
            <div className="bg-white border border-amber-200/80 rounded-2xl p-6 space-y-3 shadow-xs">
              <h2 className="text-sm font-bold text-slate-900">Owner's Message</h2>
              <blockquote className="text-xs text-slate-600 font-medium italic leading-relaxed border-l-2 border-amber-400 pl-3 py-1">
                "{PROJECT_DETAILS.ownerMessage}"
              </blockquote>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}