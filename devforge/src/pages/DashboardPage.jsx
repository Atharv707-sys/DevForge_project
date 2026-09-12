import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { useProjects } from "../context/ProjectContext";
import { Users, Clock, ArrowRight, FolderPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const { user, projects, calculateProgress, notifications } = useProjects();

  const activeProjects = projects.filter((p) => p.status === "DEVELOPMENT" || p.status === "RECRUITING");
  const recruitingProjects = projects.filter((p) => p.status === "RECRUITING");

  const totalTasks = projects.reduce((acc, p) => acc + p.tasks.length, 0);
  const completedTasks = projects.reduce(
    (acc, p) => acc + p.tasks.filter((t) => t.status === "DONE").length,
    0
  );

  const stats = [
    { title: "Active Projects", value: activeProjects.length.toString() },
    { title: "Tasks Total", value: totalTasks.toString() },
    { title: "Tasks Completed", value: completedTasks.toString() },
    { title: "Contribution Score", value: "92%" },
  ];

  return (
    <AppLayout user={user} notificationsCount={notifications.length}>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl font-black text-amber-950 tracking-tight">
            Welcome back, {user.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-amber-900/70 text-sm font-medium">
            Let's build something amazing today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/80 backdrop-blur border border-amber-200/60 p-5 rounded-2xl shadow-xs">
              <p className="text-xs text-amber-900/60 font-semibold uppercase tracking-wider">{stat.title}</p>
              <p className="text-3xl font-black text-amber-950 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-extrabold text-amber-950 text-lg">Recommended Projects</h2>
              <Link to="/discover" className="text-amber-950 hover:text-amber-700 text-sm font-bold flex items-center gap-1 transition-colors">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {recruitingProjects.length === 0 ? (
              <div className="bg-white/60 border border-dashed border-amber-300 rounded-2xl p-8 text-center space-y-3">
                <FolderPlus className="w-8 h-8 text-amber-500 mx-auto" />
                <p className="text-sm font-semibold text-amber-950">No recommended projects available right now.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recruitingProjects.map((project) => (
                  <div key={project.id} className="bg-white border border-amber-200/60 p-5 rounded-2xl shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-400/80 transition-all">
                    <div>
                      <span className="text-[11px] font-bold text-amber-900 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-md inline-block">
                        {project.status}
                      </span>
                      <h3 className="font-extrabold text-amber-950 text-base mt-2">{project.title}</h3>
                      <p className="text-xs text-amber-900/60 font-medium">by {project.owner}</p>

                      <div className="flex flex-wrap gap-1 mt-3">
                        {project.tags.map((t) => (
                          <span key={t} className="bg-amber-50 text-amber-900 border border-amber-200/50 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-amber-100 pt-3 space-y-3">
                      <div className="flex justify-between text-xs font-semibold text-amber-900/60">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {project.duration}</span>
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {project.currentMembers}/{project.teamSize}</span>
                      </div>
                      <Link to="/discover" className="block text-center w-full bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs font-bold py-2 rounded-xl shadow-xs transition-colors">
                        View & Apply
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white border border-amber-200/60 p-5 rounded-2xl shadow-xs space-y-4 h-fit">
            <div className="flex justify-between items-center border-b border-amber-100 pb-3">
              <h2 className="font-extrabold text-amber-950 text-base">Your Active Projects</h2>
            </div>

            {projects.length === 0 ? (
              <p className="text-xs text-amber-900/60 font-medium py-4 text-center">
                You haven't joined or created any projects yet.
              </p>
            ) : (
              <div className="space-y-4">
                {projects.map((project) => {
                  const progress = calculateProgress(project.tasks);
                  return (
                    <div key={project.id}>
                      <div className="flex justify-between text-xs font-bold mb-1.5 text-amber-950">
                        <span>{project.title}</span>
                        <span className="text-amber-900">{progress}%</span>
                      </div>
                      <div className="w-full bg-amber-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}