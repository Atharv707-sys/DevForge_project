import React, { useState } from "react";
import { MessageSquare, Check, X, Info, ExternalLink } from "lucide-react";

const INITIAL_APPLICATIONS = [
  {
    id: "app-1",
    name: "Rahul Sharma",
    role: "Backend Developer",
    projectsCount: 4,
    score: "92%",
    availability: "15 hrs/week",
    skills: ["Node.js", "Express", "MongoDB", "Python"],
    status: "Pending",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "app-2",
    name: "Priya Patel",
    role: "Frontend Developer",
    projectsCount: 3,
    score: "88%",
    availability: "20 hrs/week",
    skills: ["React", "Next.js", "Tailwind", "JavaScript"],
    status: "Pending",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "app-3",
    name: "Aditya Verma",
    role: "ML Engineer",
    projectsCount: 5,
    score: "95%",
    availability: "18 hrs/week",
    skills: ["Python", "TensorFlow", "OpenCV", "Pandas"],
    status: "Shortlisted",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "app-4",
    name: "Neha Singh",
    role: "UI/UX Designer",
    projectsCount: 2,
    score: "85%",
    availability: "12 hrs/week",
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    status: "Accepted",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "app-5",
    name: "Karan Mehta",
    role: "Backend Developer",
    projectsCount: 2,
    score: "78%",
    availability: "10 hrs/week",
    skills: ["Node.js", "Express", "MySQL", "Docker"],
    status: "Rejected",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
  }
];

export default function ApplicationPage() {
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [activeTab, setActiveTab] = useState("All Applications");

  const handleStatusChange = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  const counts = {
    all: applications.length,
    shortlisted: applications.filter((a) => a.status === "Shortlisted").length,
    accepted: applications.filter((a) => a.status === "Accepted").length,
    rejected: applications.filter((a) => a.status === "Rejected").length,
  };

  const tabs = [
    { label: `All Applications (${counts.all})`, value: "All Applications" },
    { label: `Shortlisted (${counts.shortlisted})`, value: "Shortlisted" },
    { label: `Accepted (${counts.accepted})`, value: "Accepted" },
    { label: `Rejected (${counts.rejected})`, value: "Rejected" },
  ];

  const filteredList = applications.filter((app) => {
    if (activeTab === "Shortlisted") return app.status === "Shortlisted";
    if (activeTab === "Accepted") return app.status === "Accepted";
    if (activeTab === "Rejected") return app.status === "Rejected";
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Title */}
        <div>
          <h1 className="text-xl md:text-2xl font-black text-slate-900">
            6. Applications (Owner View)
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Review applicant profiles, evaluate skill fits, and manage team recruitment.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200 flex items-center gap-6 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`pb-3 text-xs font-bold transition-all shrink-0 relative ${
                activeTab === tab.value
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Applications List */}
        <div className="space-y-3">
          {filteredList.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center text-xs font-semibold text-slate-500 shadow-xs">
              No applicants found in this category.
            </div>
          ) : (
            filteredList.map((app) => (
              <div
                key={app.id}
                className="bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs hover:border-indigo-200 transition-all"
              >
                {/* Profile Meta */}
                <div className="flex items-center gap-3.5 min-w-[240px]">
                  <img
                    src={app.avatar}
                    alt={app.name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0"
                  />
                  <div className="space-y-0.5">
                    <h2 className="text-sm font-bold text-slate-900">{app.name}</h2>
                    <p className="text-xs font-semibold text-slate-500">{app.role}</p>
                    <p className="text-[11px] font-medium text-slate-400">
                      {app.projectsCount} Projects •{" "}
                      <span className="text-indigo-600 font-bold">{app.score} Match</span>
                    </p>
                  </div>
                </div>

                {/* Tech Skills & Availability */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {app.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-600 rounded-md border border-slate-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] font-medium text-slate-500">
                    Availability: <span className="text-slate-800 font-bold">{app.availability}</span>
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
                  <button className="px-3 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl text-xs font-bold transition-all flex items-center gap-1">
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    Profile
                  </button>

                  <button className="px-3 py-2 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl text-xs font-bold transition-all flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                    Message
                  </button>

                  <button
                    onClick={() => handleStatusChange(app.id, "Accepted")}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                      app.status === "Accepted"
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-500 hover:bg-emerald-600 text-white"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {app.status === "Accepted" ? "Accepted" : "Accept"}
                  </button>

                  <button
                    onClick={() => handleStatusChange(app.id, "Rejected")}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                      app.status === "Rejected"
                        ? "bg-rose-600 text-white"
                        : "bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100"
                    }`}
                  >
                    <X className="w-3.5 h-3.5" />
                    {app.status === "Rejected" ? "Rejected" : "Reject"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Guidance Banner */}
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-3.5 flex items-center gap-2 text-xs font-medium text-indigo-900">
          <Info className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>
            <strong>Tip:</strong> Check applicant's portfolio, past projects, and contribution score before accepting.
          </span>
        </div>

      </div>
    </div>
  );
}