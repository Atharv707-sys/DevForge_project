import React from "react";
import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

export default function LandingPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="min-h-screen bg-amber-50/40 font-sans p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl p-6 md:p-10 border border-amber-200/60 shadow-xs flex flex-col justify-between space-y-8">
        
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-amber-950 shadow-xs">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-amber-950 tracking-tight">SkillConnect</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-bold text-amber-900/70">
            <button
              onClick={() => scrollToSection("home")}
              className="text-amber-950 font-extrabold cursor-pointer"
            >
              Home
            </button>
            <Link to="/discover" className="hover:text-amber-950 transition-colors">
              Projects
            </Link>
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-amber-950 transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-amber-950 transition-colors cursor-pointer"
            >
              About
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="text-xs font-bold text-amber-950 hover:text-amber-700 px-3 py-2 rounded-xl transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-xs font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-xl shadow-xs transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Hero Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-4">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-black text-amber-950 tracking-tight leading-tight">
              Build Ideas. <br />
              Find Teammates. <br />
              <span className="text-amber-600">Create Impact.</span>
            </h1>
            <p className="text-xs md:text-sm text-amber-900/70 font-medium leading-relaxed">
              SkillConnect helps developers and students find the right collaborators, build real-world software projects, and level up their portfolios.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                to="/register"
                className="bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/discover"
                className="bg-amber-50 hover:bg-amber-100 text-amber-950 text-xs font-bold px-5 py-2.5 rounded-xl border border-amber-200/80 transition-colors"
              >
                Explore Projects
              </Link>
            </div>
          </div>

          {/* Feature Highlight Card */}
          <div id="features" className="bg-amber-100/40 border border-amber-200/60 rounded-2xl p-8 text-center space-y-3">
            <div className="w-16 h-16 bg-amber-200/60 rounded-2xl flex items-center justify-center mx-auto text-amber-950">
              <Code2 className="w-8 h-8" />
            </div>
            <p className="text-sm font-extrabold text-amber-950">Role-Based Team Recruiting</p>
            <p className="text-xs text-amber-900/70 font-medium max-w-xs mx-auto">
              Specify exact tech stacks and developer roles needed for your project workflow.
            </p>
          </div>
        </div>

        {/* Workflow Steps Ribbon */}
        <div id="about" className="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-400/30 text-amber-950 font-black text-xs flex items-center justify-center shrink-0">01</div>
            <div>
              <p className="text-xs font-black text-amber-950">Post or Discover</p>
              <p className="text-[10px] font-medium text-amber-900/70">Share project ideas or browse builds.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-400/30 text-amber-950 font-black text-xs flex items-center justify-center shrink-0">02</div>
            <div>
              <p className="text-xs font-black text-amber-950">Find Skill Matches</p>
              <p className="text-[10px] font-medium text-amber-900/70">Filter candidates by tech stack.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-400/30 text-amber-950 font-black text-xs flex items-center justify-center shrink-0">03</div>
            <div>
              <p className="text-xs font-black text-amber-950">Collaborate Fast</p>
              <p className="text-[10px] font-medium text-amber-900/70">Onboard team members instantly.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-400/30 text-amber-950 font-black text-xs flex items-center justify-center shrink-0">04</div>
            <div>
              <p className="text-xs font-black text-amber-950">Ship & Portfolio</p>
              <p className="text-[10px] font-medium text-amber-900/70">Build real portfolio proof.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}