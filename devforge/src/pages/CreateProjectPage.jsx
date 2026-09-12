import React, { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { useProjects } from "../context/ProjectContext";
import { useNavigate } from "react-router-dom";
import { Calendar, Plus, X } from "lucide-react";

export default function CreateProjectPage() {
  const { user, addProject, notifications } = useProjects();
  const navigate = useNavigate();

  // Form states matching UI screenshot
  const [projectTitle, setProjectTitle] = useState("AI Attendance System");
  const [projectDuration, setProjectDuration] = useState("2 Months");
  const [problemStatement, setProblemStatement] = useState(
    "Manual attendance takes time and proxy attendance is common. We want to build a system that's fast, secure and easy to integrate."
  );
  const [recruitmentDeadline, setRecruitmentDeadline] = useState("2024-08-25");
  const [description, setDescription] = useState(
    "An AI powered attendance system using face recognition and QR code to mark attendance automatically. It will generate reports and analytics for faculty."
  );
  const [projectType, setProjectType] = useState("Web Application");
  const [difficultyLevel, setDifficultyLevel] = useState("Intermediate");
  const [visibility, setVisibility] = useState("Public");
  const [whatYouWillProvide, setWhatYouWillProvide] = useState(
    "Real world experience, mentorship, certificate, and strong portfolio."
  );
  const [teamSize, setTeamSize] = useState("5");
  const [termsAgreed, setTermsAgreed] = useState(true);

  // Dynamic Tags and Roles
  const [techStack, setTechStack] = useState(["React", "Node.js", "MongoDB", "Python", "OpenCV"]);
  const [newTechInput, setNewTechInput] = useState("");
  const [showTechInput, setShowTechInput] = useState(false);

  const [rolesNeeded, setRolesNeeded] = useState([
    "Backend Developer",
    "Frontend Developer",
    "ML Engineer",
    "UI/UX Designer",
    "Tester",
  ]);
  const [newRoleInput, setNewRoleInput] = useState("");
  const [showRoleInput, setShowRoleInput] = useState(false);

  const handleAddTech = () => {
    if (newTechInput.trim() && !techStack.includes(newTechInput.trim())) {
      setTechStack([...techStack, newTechInput.trim()]);
      setNewTechInput("");
      setShowTechInput(false);
    }
  };

  const handleRemoveTech = (techToRemove) => {
    setTechStack(techStack.filter((t) => t !== techToRemove));
  };

  const handleAddRole = () => {
    if (newRoleInput.trim() && !rolesNeeded.includes(newRoleInput.trim())) {
      setRolesNeeded([...rolesNeeded, newRoleInput.trim()]);
      setNewRoleInput("");
      setShowRoleInput(false);
    }
  };

  const handleRemoveRole = (roleToRemove) => {
    setRolesNeeded(rolesNeeded.filter((r) => r !== roleToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!termsAgreed) {
      alert("Please agree to DevForge terms and conditions.");
      return;
    }

    addProject({
      title: projectTitle,
      description,
      problem: problemStatement,
      duration: projectDuration,
      recruitmentDeadline,
      projectType,
      difficultyLevel,
      visibility,
      whatYouWillProvide,
      teamSize: Number(teamSize),
      tags: techStack,
      lookingFor: rolesNeeded.map((role) => ({ role, count: 1, status: "Vacant" })),
    });

    navigate("/");
  };

  return (
    <AppLayout user={user} notificationsCount={notifications.length}>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 border border-slate-100 shadow-sm font-sans">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Create New Project</h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Fill in the details to publish your project and start recruiting.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column (2 Span) */}
            <div className="lg:col-span-2 space-y-5">
              {/* Project Title */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Project Title</label>
                <input
                  type="text"
                  required
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Problem Statement */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Problem Statement</label>
                <textarea
                  rows={3}
                  value={problemStatement}
                  onChange={(e) => setProblemStatement(e.target.value)}
                  className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                />
              </div>

              {/* Tech Stack */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tech Stack</label>
                <div className="flex flex-wrap items-center gap-2 p-2.5 bg-slate-50/50 border border-slate-200/80 rounded-xl min-h-[46px]">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold px-3 py-1 rounded-lg"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => handleRemoveTech(tech)}
                        className="text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}

                  {showTechInput ? (
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        autoFocus
                        placeholder="Add tag"
                        value={newTechInput}
                        onChange={(e) => setNewTechInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTech())}
                        className="bg-white border border-slate-300 rounded-md px-2 py-0.5 text-xs text-slate-800 focus:outline-none w-24"
                      />
                      <button
                        type="button"
                        onClick={handleAddTech}
                        className="text-xs text-indigo-600 font-bold px-1"
                      >
                        Add
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowTechInput(true)}
                      className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 w-7 h-7 rounded-lg text-xs font-bold transition-colors"
                    >
                      +
                    </button>
                  )}
                </div>
              </div>

              {/* Roles Needed */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Roles Needed</label>
                <div className="flex flex-wrap items-center gap-2">
                  {rolesNeeded.map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg"
                    >
                      {role}
                      <button
                        type="button"
                        onClick={() => handleRemoveRole(role)}
                        className="text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}

                  {showRoleInput ? (
                    <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-2 py-1">
                      <input
                        type="text"
                        autoFocus
                        placeholder="New role"
                        value={newRoleInput}
                        onChange={(e) => setNewRoleInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddRole())}
                        className="text-xs text-slate-800 focus:outline-none w-28"
                      />
                      <button
                        type="button"
                        onClick={handleAddRole}
                        className="text-xs text-indigo-600 font-bold px-1"
                      >
                        Add
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowRoleInput(true)}
                      className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 w-8 h-8 rounded-lg text-xs font-bold transition-colors"
                    >
                      +
                    </button>
                  )}
                </div>
              </div>

              {/* Team Size */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Team Size</label>
                <input
                  type="number"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Right Column (1 Span) */}
            <div className="space-y-5">
              {/* Project Duration */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Project Duration</label>
                <input
                  type="text"
                  value={projectDuration}
                  onChange={(e) => setProjectDuration(e.target.value)}
                  className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Recruitment Deadline */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Recruitment Deadline</label>
                <div className="relative">
                  <input
                    type="date"
                    value={recruitmentDeadline}
                    onChange={(e) => setRecruitmentDeadline(e.target.value)}
                    className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Project Type</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                >
                  <option value="Web Application">Web Application</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="AI / Machine Learning">AI / Machine Learning</option>
                  <option value="DevOps / Cloud">DevOps / Cloud</option>
                </select>
              </div>

              {/* Difficulty Level */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Difficulty Level</label>
                <select
                  value={difficultyLevel}
                  onChange={(e) => setDifficultyLevel(e.target.value)}
                  className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Visibility */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Visibility</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="visibility"
                      value="Public"
                      checked={visibility === "Public"}
                      onChange={(e) => setVisibility(e.target.value)}
                      className="text-indigo-600 focus:ring-indigo-500 border-slate-300"
                    />
                    <span className="text-xs font-medium text-slate-700">Public (Anyone can view)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="visibility"
                      value="Private"
                      checked={visibility === "Private"}
                      onChange={(e) => setVisibility(e.target.value)}
                      className="text-indigo-600 focus:ring-indigo-500 border-slate-300"
                    />
                    <span className="text-xs font-medium text-slate-700">Private (Only invited)</span>
                  </label>
                </div>
              </div>

              {/* What you will provide Card */}
              <div className="bg-slate-50/80 border border-slate-200/70 p-4 rounded-xl space-y-2">
                <label className="block text-xs font-bold text-slate-800">What you will provide</label>
                <textarea
                  rows={3}
                  value={whatYouWillProvide}
                  onChange={(e) => setWhatYouWillProvide(e.target.value)}
                  className="w-full bg-transparent text-xs text-slate-600 border-none p-0 focus:outline-none resize-none leading-relaxed"
                />
              </div>
            </div>
          </div>

          {/* Bottom Controls: Terms & Submit Button */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
              />
              <span className="text-xs font-semibold text-indigo-600 hover:underline">
                I agree to DevForge terms and conditions
              </span>
            </label>

            <button
              type="submit"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-8 py-3 rounded-xl shadow-md shadow-indigo-200 transition-all duration-200"
            >
              Publish Project
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}