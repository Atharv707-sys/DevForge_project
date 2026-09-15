import React, { useState, useMemo } from "react";
import { 
  Search, 
  SlidersHorizontal, 
  Users, 
  Clock, 
  ArrowRight, 
  RotateCcw, 
  Heart, 
  Calendar, 
  Tag, 
  BarChart2, 
  ChevronRight, 
  Send,
  ArrowLeft
} from "lucide-react";

const CATEGORIES = ["All", "Web Dev", "AI/ML", "Mobile", "Blockchain", "Design", "IoT"];

const TABS = ["Overview", "Requirements", "Team", "Timeline", "FAQs"];

const PROJECTS_DATA = [
  {
    id: "1",
    title: "AI Attendance System",
    author: "Amit Sharma",
    college: "MIT WPU",
    status: "Recruiting",
    description: "AI powered attendance system using face recognition and QR code to mark attendance automatically.",
    problemStatement: "Manual attendance takes time and proxy attendance is common. We want to build a system that's fast, secure and easy to integrate.",
    tags: ["AI/ML", "Python", "OpenCV", "Django"],
    techStack: ["Python", "Django", "OpenCV", "PostgreSQL", "React"],
    domain: "AI/ML",
    teamSize: 5,
    duration: "2 Months",
    startedOn: "15 July 2026",
    recruitmentEnds: "10 Aug 2026",
    projectType: "Web Application",
    difficulty: "Intermediate",
    roles: "Backend, ML Engineer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    rolesNeeded: [
      { title: "Backend Developer", experience: "Intermediate", count: 1, avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" },
      { title: "ML Engineer", experience: "Intermediate", count: 1, avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" },
      { title: "Frontend Developer", experience: "Beginner - Intermediate", count: 2, avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80" },
      { title: "UI/UX Designer", experience: "Beginner", count: 1, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" }
    ],
    ownerMessage: "Looking for passionate people who want to build something impactful. Let's create real change together! 💪"
  },
  {
    id: "2",
    title: "Smart Waste Management",
    author: "Priya Verma",
    college: "VIT Pune",
    status: "Recruiting",
    description: "Smart waste detection and alert system for cleaner cities.",
    problemStatement: "Improper waste disposal leads to unhygienic conditions. Real-time bin monitoring reduces overflow risk.",
    tags: ["IoT", "Web", "Node.js", "MongoDB"],
    techStack: ["Node.js", "Express", "MongoDB", "C++", "React"],
    domain: "IoT",
    teamSize: 4,
    duration: "1.5 Months",
    startedOn: "01 August 2026",
    recruitmentEnds: "25 Aug 2026",
    projectType: "IoT System",
    difficulty: "Beginner - Intermediate",
    roles: "Full Stack, IoT",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    rolesNeeded: [
      { title: "Full Stack Developer", experience: "Intermediate", count: 2, avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" },
      { title: "IoT Engineer", experience: "Beginner", count: 2, avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80" }
    ],
    ownerMessage: "Join us to bring smart sustainability solutions to modern smart cities!"
  }
];

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  
  // Track selected project for Detail View
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [isSaved, setIsSaved] = useState(false);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  const isFilterActive = selectedCategory !== "All";

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        project.domain === selectedCategory ||
        project.tags.includes(selectedCategory);

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Render Project Detail View
  if (selectedProject) {
    return (
      <div className="min-h-screen bg-amber-50/30 p-6 md:p-10 font-sans text-slate-800">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Breadcrumb & Back Action */}
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <button onClick={() => setSelectedProject(null)} className="text-amber-700 hover:underline">
                Home
              </button>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <button onClick={() => setSelectedProject(null)} className="text-amber-700 hover:underline">
                Projects
              </button>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-800">{selectedProject.title}</span>
            </nav>

            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-amber-200 text-slate-700 hover:bg-amber-50 rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Discover
            </button>
          </div>

          {/* Top Header Card */}
          <div className="bg-white border border-amber-200/80 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={selectedProject.avatar}
                alt={selectedProject.author}
                className="w-14 h-14 rounded-full object-cover border border-amber-200 shrink-0"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-xl md:text-2xl font-black text-slate-900">{selectedProject.title}</h1>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-full">
                    {selectedProject.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  by <span className="text-slate-700 font-bold">{selectedProject.author}</span> • {selectedProject.college}
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

          {/* Tab Content Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white border border-amber-200/80 rounded-2xl p-6 space-y-5 shadow-xs">
                <div className="space-y-2">
                  <h2 className="text-sm font-bold text-slate-900">About the Project</h2>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-sm font-bold text-slate-900">Problem Statement</h2>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {selectedProject.problemStatement}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <h2 className="text-sm font-bold text-slate-900">Tech Stack</h2>
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedProject.techStack.map((tech) => (
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

              <div className="bg-white border border-amber-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
                <h2 className="text-sm font-bold text-slate-900">Roles Needed</h2>
                <div className="space-y-3">
                  {selectedProject.rolesNeeded.map((role, idx) => (
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

            <div className="space-y-6">
              <div className="bg-white border border-amber-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
                <h2 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">Project Info</h2>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> Duration
                    </span>
                    <span className="font-bold text-slate-800">{selectedProject.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-slate-400" /> Team Size
                    </span>
                    <span className="font-bold text-slate-800">{selectedProject.teamSize}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" /> Started On
                    </span>
                    <span className="font-bold text-slate-800">{selectedProject.startedOn}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" /> Recruitment Ends
                    </span>
                    <span className="font-bold text-slate-800">{selectedProject.recruitmentEnds}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-slate-400" /> Project Type
                    </span>
                    <span className="font-bold text-slate-800">{selectedProject.projectType}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium flex items-center gap-2">
                      <BarChart2 className="w-3.5 h-3.5 text-slate-400" /> Difficulty
                    </span>
                    <span className="font-bold text-slate-800">{selectedProject.difficulty}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-amber-200/80 rounded-2xl p-6 space-y-3 shadow-xs">
                <h2 className="text-sm font-bold text-slate-900">Owner's Message</h2>
                <blockquote className="text-xs text-slate-600 font-medium italic leading-relaxed border-l-2 border-amber-400 pl-3 py-1">
                  "{selectedProject.ownerMessage}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Discover List View
  return (
    <div className="min-h-screen bg-amber-50/30 p-6 md:p-10 font-sans text-slate-800 relative">
      <div className="max-w-5xl mx-auto space-y-6">
        
        <div>
          <h1 className="text-2xl font-black text-amber-950">4. Discover Projects</h1>
          <p className="text-xs text-slate-500 font-medium mt-1">Explore open projects, find teams, and collaborate.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, tech, domains..."
              className="w-full bg-white border border-amber-200/80 rounded-2xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-amber-400 transition-all shadow-xs"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 border rounded-2xl text-xs font-bold transition-all shadow-xs shrink-0 ${
              showFilters || isFilterActive
                ? "bg-amber-400 text-amber-950 border-amber-400"
                : "bg-white text-slate-700 border-amber-200/80 hover:bg-amber-50"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
            {isFilterActive && <span className="w-2 h-2 rounded-full bg-amber-950"></span>}
          </button>
        </div>

        {showFilters && (
          <div className="bg-white border border-amber-200/80 rounded-2xl p-5 shadow-xs space-y-3 animate-in fade-in duration-150">
            <div className="flex items-center justify-between pb-2 border-b border-amber-100">
              <h3 className="text-xs font-bold text-amber-950">Tech Domains</h3>
              {isFilterActive && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-amber-700"
                >
                  <RotateCcw className="w-3 h-3" /> Reset Filter
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap pt-1">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === category
                      ? "bg-amber-400 text-amber-950 shadow-xs"
                      : "bg-amber-50/50 text-slate-600 border border-amber-200/60 hover:bg-amber-100/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {filteredProjects.length === 0 ? (
            <div className="bg-white border border-amber-200/80 rounded-2xl p-10 text-center text-xs font-semibold text-slate-500">
              No projects found matching your criteria.
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-amber-200/80 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs hover:border-amber-300 transition-all"
              >
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={project.avatar}
                    alt={project.author}
                    className="w-12 h-12 rounded-full object-cover border border-amber-200 shrink-0"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-base font-bold text-slate-900">{project.title}</h2>
                      <span className="px-2.5 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-full">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 font-medium">
                      by <span className="text-slate-700 font-semibold">{project.author}</span> • {project.college}
                    </p>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-semibold bg-slate-100 text-slate-600 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-4 w-full md:w-auto shrink-0 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
                  <div className="text-left md:text-right space-y-1">
                    <div className="flex items-center md:justify-end gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" /> Size: <strong className="text-slate-800">{project.teamSize}</strong>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> {project.duration}
                      </span>
                    </div>
                    
                    <p className="text-xs text-slate-500 font-medium">
                      Roles Needed: <span className="font-semibold text-slate-800">{project.roles}</span>
                    </p>
                  </div>

                  {/* Clicking this button triggers the detail view */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}