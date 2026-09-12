import React, { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const initialProjects = [
  {
    id: "proj-1",
    title: "AI Attendance System",
    description: "An automated attendance tracking system using computer vision and facial recognition.",
    problem: "Manual attendance consumes lecture time and is prone to proxy marking.",
    goal: "Build an automated attendance system using QR/facial recognition with real-time reporting.",
    owner: "Atharv Patil",
    ownerRole: "Lead Developer",
    status: "RECRUITING", // RECRUITING | TEAM_LOCKED | DEVELOPMENT | COMPLETED
    tags: ["Python", "React", "Node.js", "PostgreSQL"],
    lookingFor: [
      { role: "ML Developer", count: 1, status: "Vacant" },
      { role: "Backend Developer", count: 1, status: "Vacant" },
      { role: "UI Designer", count: 1, status: "Vacant" }
    ],
    duration: "2 Months",
    teamSize: 5,
    currentMembers: 2,
    members: [
      { id: "u-1", name: "Atharv Patil", role: "Project Owner / Lead", tasksCompleted: 5 },
      { id: "u-2", name: "Priya Nair", role: "Frontend Developer", tasksCompleted: 3 }
    ],
    tasks: [
      { id: "t-1", title: "Database Schema Setup", status: "DONE", assignee: "Atharv Patil", priority: "High" },
      { id: "t-2", title: "Registration API", status: "DONE", assignee: "Atharv Patil", priority: "High" },
      { id: "t-3", title: "JWT Authentication", status: "DOING", assignee: "Priya Nair", priority: "Medium" },
      { id: "t-4", title: "QR Scanner Component", status: "DOING", assignee: "Priya Nair", priority: "High" },
      { id: "t-5", title: "Dashboard API", status: "REVIEW", assignee: "Atharv Patil", priority: "Medium" },
      { id: "t-6", title: "PDF Report Export", status: "TODO", assignee: "Unassigned", priority: "Low" }
    ],
    activities: [
      { id: "a-1", user: "Atharv Patil", action: "TASK_COMPLETED", text: "completed Database Schema Setup", timestamp: "2 hours ago" },
      { id: "a-2", user: "Priya Nair", action: "TASK_MOVED", text: "moved QR Scanner Component to DOING", timestamp: "4 hours ago" }
    ],
    resources: [
      { id: "r-1", category: "DOCUMENTATION", title: "Project Requirements", link: "https://docs.google.com", version: "v1.0", updatedBy: "Atharv Patil" },
      { id: "r-2", category: "DESIGN", title: "Figma UI Prototype", link: "https://figma.com", version: "v1.2", updatedBy: "Priya Nair" },
      { id: "r-3", category: "CODE", title: "GitHub Repository", link: "https://github.com", version: "v1.0", updatedBy: "Atharv Patil" }
    ]
  }
];

export const initialUser = {
  id: "u-dev",
  name: "Rahul Sharma",
  role: "Backend Developer",
  college: "Computer Science Engineering",
  skills: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
  completedProjectsCount: 6,
  tasksCompletedCount: 48,
  joinedProjectsCount: 8,
  averageRating: 4.7,
  reviews: [
    { id: "rev-1", author: "Atharv Patil", rating: 5, text: "Reliable backend developer with great communication." }
  ]
};

export function ProjectProvider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [projects, setProjects] = useState(initialProjects);
  const [applications, setApplications] = useState([]);
  const [notifications, setNotifications] = useState([
    { id: "n-1", message: "Welcome to DevForge! Start exploring or create a project.", read: false, date: "Just now" }
  ]);

  // Dynamically calculate project progress % from tasks
  const calculateProgress = (tasks) => {
    if (!tasks || tasks.length === 0) return 0;
    const completed = tasks.filter((t) => t.status === "DONE").length;
    return Math.round((completed / tasks.length) * 100);
  };

  // Add new project
  const addProject = (newProject) => {
    const created = {
      ...newProject,
      id: `proj-${Date.now()}`,
      owner: user.name,
      ownerRole: "Project Owner",
      status: "RECRUITING",
      currentMembers: 1,
      members: [{ id: user.id, name: user.name, role: "Project Owner", tasksCompleted: 0 }],
      tasks: [],
      activities: [{ id: `act-${Date.now()}`, user: user.name, action: "PROJECT_CREATED", text: "created the project", timestamp: "Just now" }],
      resources: []
    };
    setProjects((prev) => [created, ...prev]);
    addNotification(`Project "${created.title}" created successfully!`);
  };

  // Submit project application
  const applyToProject = (projectId, role, message, weeklyHours) => {
    const targetProject = projects.find((p) => p.id === projectId);
    const newApp = {
      id: `app-${Date.now()}`,
      projectId,
      projectTitle: targetProject?.title || "Project",
      applicantName: user.name,
      role,
      message,
      weeklyHours,
      status: "PENDING",
      appliedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setApplications((prev) => [newApp, ...prev]);
    addNotification(`Applied for ${role} on ${targetProject?.title}`);
  };

  // Update application status (Accept / Reject)
  const updateApplicationStatus = (appId, status, rejectionReason = "") => {
    setApplications((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, status, rejectionReason } : app))
    );

    const app = applications.find((a) => a.id === appId);
    if (status === "ACCEPTED" && app) {
      setProjects((prev) =>
        prev.map((p) => {
          if (p.id === app.projectId) {
            const updatedMembers = [...p.members, { id: `u-${Date.now()}`, name: app.applicantName, role: app.role, tasksCompleted: 0 }];
            const updatedCount = updatedMembers.length;
            return {
              ...p,
              currentMembers: updatedCount,
              members: updatedMembers,
              status: updatedCount >= p.teamSize ? "TEAM_LOCKED" : p.status,
              activities: [
                { id: `act-${Date.now()}`, user: app.applicantName, action: "MEMBER_JOINED", text: `joined as ${app.role}`, timestamp: "Just now" },
                ...p.activities
              ]
            };
          }
          return p;
        })
      );
    }
  };

  // Move task status & recalculate progress dynamically
  const updateTaskStatus = (projectId, taskId, newStatus) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === projectId) {
          const updatedTasks = proj.tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t));
          const task = proj.tasks.find((t) => t.id === taskId);
          return {
            ...proj,
            tasks: updatedTasks,
            activities: [
              {
                id: `act-${Date.now()}`,
                user: user.name,
                action: "TASK_MOVED",
                text: `moved "${task?.title}" to ${newStatus}`,
                timestamp: "Just now"
              },
              ...proj.activities
            ]
          };
        }
        return proj;
      })
    );
  };

  // Add new task to project
  const addTask = (projectId, taskTitle, priority, assignee) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === projectId) {
          const newTask = {
            id: `t-${Date.now()}`,
            title: taskTitle,
            status: "TODO",
            assignee: assignee || "Unassigned",
            priority
          };
          return {
            ...proj,
            tasks: [...proj.tasks, newTask],
            activities: [
              {
                id: `act-${Date.now()}`,
                user: user.name,
                action: "TASK_CREATED",
                text: `created task "${taskTitle}"`,
                timestamp: "Just now"
              },
              ...proj.activities
            ]
          };
        }
        return proj;
      })
    );
  };

  const addNotification = (message) => {
    setNotifications((prev) => [{ id: `n-${Date.now()}`, message, read: false, date: "Just now" }, ...prev]);
  };

  return (
    <ProjectContext.Provider
      value={{
        user,
        projects,
        applications,
        notifications,
        addProject,
        applyToProject,
        updateApplicationStatus,
        updateTaskStatus,
        addTask,
        calculateProgress
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  return useContext(ProjectContext);
}