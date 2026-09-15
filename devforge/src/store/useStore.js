import { create } from 'zustand';

export const useStore = create((set, get) => ({
  // --- USER / AUTH STATE ---
  currentUser: {
    id: "usr-1",
    name: "Atharv Patil",
    email: "atharv@devforge.com",
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    skills: ["React", "Tailwind CSS", "Node.js", "Express", "Firebase"],
  },

  // --- PROJECTS STATE ---
  projects: [
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
      rolesNeeded: [
        { id: "r1", title: "Backend Developer", experience: "Intermediate", count: 1, filled: 0 },
        { id: "r2", title: "ML Engineer", experience: "Intermediate", count: 1, filled: 0 },
        { id: "r3", title: "Frontend Developer", experience: "Beginner - Intermediate", count: 2, filled: 1 },
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
      rolesNeeded: [
        { id: "r4", title: "Full Stack Developer", experience: "Intermediate", count: 2, filled: 1 },
        { id: "r5", title: "IoT Engineer", experience: "Beginner", count: 2, filled: 0 }
      ],
      ownerMessage: "Join us to bring smart sustainability solutions to modern smart cities!"
    }
  ],

  // --- APPLICATIONS STATE ---
  applications: [
    {
      id: "app-1",
      projectId: "1",
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
      projectId: "1",
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
      projectId: "1",
      name: "Aditya Verma",
      role: "ML Engineer",
      projectsCount: 5,
      score: "95%",
      availability: "18 hrs/week",
      skills: ["Python", "TensorFlow", "OpenCV", "Pandas"],
      status: "Shortlisted",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
    }
  ],

  // --- ACTIONS (MUTATIONS) ---
  
  // Create Project Action
  addProject: (newProject) =>
    set((state) => ({
      projects: [
        { ...newProject, id: String(state.projects.length + 1) },
        ...state.projects,
      ],
    })),

  // Apply to Project Action
  applyToProject: (projectId, role) =>
    set((state) => {
      const user = state.currentUser;
      const newApp = {
        id: `app-${Date.now()}`,
        projectId,
        name: user.name,
        role: role || "Contributor",
        projectsCount: 3,
        score: "90%",
        availability: "15 hrs/week",
        skills: user.skills,
        status: "Pending",
        avatar: user.avatar,
      };
      return { applications: [newApp, ...state.applications] };
    }),

  // Update Application Status Action (Accept / Reject / Shortlist)
  updateApplicationStatus: (appId, newStatus) =>
    set((state) => ({
      applications: state.applications.map((app) =>
        app.id === appId ? { ...app, status: newStatus } : app
      ),
    })),
}));