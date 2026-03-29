import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  User,
  Settings,
  Menu,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Home,
} from "lucide-react";

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const menuItems = [
    {
      name: "Home",
      icon: <LayoutDashboard size={22} />,
      path: "/dashboard/workerHome",
    },
    { name: "TaskList", icon: <User size={22} />, path: "/dashboard/taskList" },
    {
      name: "My Submissions",
      icon: <Settings size={22} />,
      path: "/dashboard/mySubmision",
    },
    {
      name: "withdrawals",
      icon: <Settings size={22} />,
      path: "/dashboard/withdrawals",
    },
    { name: "Back to Home", icon: <Home size={22} />, path: "/" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- LEFT SIDEBAR --- */}
      <motion.aside
        animate={{ width: isExpanded ? "260px" : "80px" }}
        className="bg-indigo-700 text-white flex flex-col sticky top-0 h-screen shadow-xl z-50 transition-all duration-300"
      >
        {/* Logo Section */}
        <div className="p-6 flex items-center justify-between">
          {isExpanded && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-black italic"
            >
              Logo
            </motion.h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1.5 hover:bg-indigo-600 rounded-lg transition-colors"
          >
            {isExpanded ? <ChevronLeft size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-4 p-3 rounded-xl transition-all duration-200
                ${isActive ? "bg-white text-indigo-700 shadow-lg" : "hover:bg-indigo-600 text-indigo-100"}
              `}
            >
              <div className="min-w-5.5">{item.icon}</div>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-bold whitespace-nowrap text-sm"
                >
                  {item.name}
                </motion.span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Logout Section */}
        <div className="p-4 border-t border-indigo-600">
          <button className="flex items-center gap-4 p-3 w-full hover:bg-red-500 rounded-xl transition-all text-indigo-100 hover:text-white">
            <LogOut size={22} />
            {isExpanded && <span className="font-bold text-sm">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* --- RIGHT SIDE CONTENT --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TOP NAVBAR */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40 shadow-sm">
          {/* Right Side: User Stats & Info */}
          <div className="flex items-center gap-6">
            {/* 1. Available Coins */}
            <div className=" sm:flex items-center gap-3 bg-yellow-50 border border-yellow-100 px-4 py-2 rounded-2xl shadow-sm shadow-yellow-50">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-yellow-700 uppercase leading-none mb-1">
                  Available Coins
                </span>
                <span className="text-sm font-black text-slate-700 leading-none">
                  2,450.00
                </span>
              </div>
            </div>

            {/* 2. Notification Bell */}
            <button className="relative p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full group-hover:animate-ping"></span>
            </button>

            {/* Vertical Divider */}
            <div className="h-8 w-px bg-slate-200 "></div>

            {/* 3. User Profile Info */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="flex flex-col items-end hidden md:flex">
                <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  Ariful Islam
                </span>
                <span className="text-[10px] font-bold bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Worker
                </span>
              </div>

              {/* User Image */}
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/150?u=ariful"
                  alt="User Profile"
                  className="w-11 h-11 rounded-2xl object-cover ring-2 ring-transparent group-hover:ring-indigo-100 transition-all shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm"></div>
              </div>
            </div>
          </div>
        </header>

        {/* MIDDLE CONTENT AREA (OUTLET) */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#f1f5f9]">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>

        {/* BOTTOM FOOTER */}
        <footer className="h-12 bg-white border-t border-slate-200 flex items-center justify-center text-slate-400 text-xs font-medium">
          © 2026 Your Brand. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
