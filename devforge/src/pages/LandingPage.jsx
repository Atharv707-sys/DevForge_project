import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

export default function LandingPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-amber-50/50 font-sans p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Section: Hero Landing (2 Columns) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 border border-amber-200/60 shadow-xs flex flex-col justify-between space-y-8">
          
          {/* Top Navbar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-amber-950 shadow-xs">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-amber-950 tracking-tight">DevForge</span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-xs font-bold text-amber-900/70">
              <a href="#home" className="text-amber-950 font-extrabold">Home</a>
              <a href="#projects" className="hover:text-amber-950 transition-colors">Projects</a>
              <a href="#features" className="hover:text-amber-950 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-amber-950 transition-colors">Pricing</a>
              <a href="#about" className="hover:text-amber-950 transition-colors">About</a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsLogin(true)}
                className="text-xs font-bold text-amber-950 hover:text-amber-700 px-3 py-2 rounded-xl transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className="text-xs font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-xl shadow-xs transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Hero Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-4">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-black text-amber-950 tracking-tight leading-tight">
                Build Ideas. <br />
                Find Teammates. <br />
                <span className="text-amber-600">Create Impact.</span>
              </h1>
              <p className="text-xs text-amber-900/70 font-medium leading-relaxed">
                DevForge helps students and developers find the right teammates, build amazing projects, and grow their reputation.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  to="/dashboard"
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

            {/* Illustration Placeholder Card */}
            <div className="bg-amber-100/40 border border-amber-200/60 rounded-2xl p-6 text-center space-y-3">
              <div className="w-16 h-16 bg-amber-200/60 rounded-2xl flex items-center justify-center mx-auto text-amber-950">
                <Code2 className="w-8 h-8" />
              </div>
              <p className="text-xs font-extrabold text-amber-950">Collaborative Workspace</p>
              <p className="text-[11px] text-amber-900/70 font-medium">Real-time team matching and dynamic project portfolio buildout.</p>
            </div>
          </div>

          {/* Stat Banner */}
          <div className="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-lg font-black text-amber-950">10K+</p>
              <p className="text-[10px] font-bold text-amber-900/60">Projects Posted</p>
            </div>
            <div>
              <p className="text-lg font-black text-amber-950">25K+</p>
              <p className="text-[10px] font-bold text-amber-900/60">Developers</p>
            </div>
            <div>
              <p className="text-lg font-black text-amber-950">5K+</p>
              <p className="text-[10px] font-bold text-amber-900/60">Teams Formed</p>
            </div>
            <div>
              <p className="text-lg font-black text-amber-950">98%</p>
              <p className="text-[10px] font-bold text-amber-900/60">Satisfaction</p>
            </div>
          </div>

        </div>

        {/* Right Section: Register / Login Card */}
        <div className="bg-white rounded-3xl p-8 border border-amber-200/60 shadow-xs flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Tab Switcher */}
            <div className="flex border-b border-amber-200/60">
              <button
                onClick={() => setIsLogin(true)}
                className={`w-1/2 py-2 text-xs font-bold transition-all border-b-2 ${
                  isLogin
                    ? "border-amber-500 text-amber-950 font-extrabold"
                    : "border-transparent text-amber-900/40 hover:text-amber-900"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`w-1/2 py-2 text-xs font-bold transition-all border-b-2 ${
                  !isLogin
                    ? "border-amber-500 text-amber-950 font-extrabold"
                    : "border-transparent text-amber-900/40 hover:text-amber-900"
                }`}
              >
                Register
              </button>
            </div>

            {/* Auth Title */}
            <div>
              <h2 className="text-lg font-black text-amber-950">
                {isLogin ? "Welcome Back! 👋" : "Create an Account 🚀"}
              </h2>
              <p className="text-xs text-amber-900/70 font-medium mt-1">
                {isLogin ? "Login to continue your journey" : "Join thousands of builders today"}
              </p>
            </div>

            {/* Form inputs */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1 uppercase">Full Name</label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    className="w-full bg-amber-50/50 border border-amber-200/80 rounded-xl px-3.5 py-2 text-xs font-medium text-amber-950 focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-amber-950 mb-1 uppercase">Email</label>
                <input
                  type="email"
                  defaultValue="rahul@example.com"
                  className="w-full bg-amber-50/50 border border-amber-200/80 rounded-xl px-3.5 py-2 text-xs font-medium text-amber-950 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-950 mb-1 uppercase">Password</label>
                <input
                  type="password"
                  defaultValue="••••••••"
                  className="w-full bg-amber-50/50 border border-amber-200/80 rounded-xl px-3.5 py-2 text-xs font-medium text-amber-950 focus:outline-none focus:border-amber-400"
                />
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-1.5 text-amber-900/70 font-semibold cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-amber-300 text-amber-600 focus:ring-amber-400" />
                    Remember me
                  </label>
                  <a href="#forgot" className="text-amber-950 font-bold hover:underline">
                    Forgot Password?
                  </a>
                </div>
              )}

              <Link
                to="/dashboard"
                className="block text-center w-full bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs font-bold py-2.5 rounded-xl shadow-xs transition-colors"
              >
                {isLogin ? "Login" : "Register Account"}
              </Link>
            </form>

            <div className="relative text-center my-4">
              <span className="bg-white px-2 text-[11px] font-bold text-amber-900/40 relative z-10">
                or continue with
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-amber-200/60"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="bg-amber-50/60 hover:bg-amber-100 border border-amber-200/60 text-xs font-bold text-amber-950 py-2 rounded-xl transition-colors">
                Google
              </button>
              <button className="bg-amber-50/60 hover:bg-amber-100 border border-amber-200/60 text-xs font-bold text-amber-950 py-2 rounded-xl transition-colors">
                GitHub
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-amber-900/70 font-medium mt-6">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-amber-950 font-black hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>

        </div>

      </div>
    </div>
  );
}