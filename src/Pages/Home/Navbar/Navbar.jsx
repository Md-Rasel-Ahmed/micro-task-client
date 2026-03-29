import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircleDollarSign, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Animation */}

          <Link to={"/"}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
                <CircleDollarSign size={24} />
              </div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">
                EarnMinis
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Find Tasks", "How it Works", "Join As a Developer"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {item}
                </motion.a>
              ),
            )}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to={"/login"}>
              <button className="text-sm font-medium text-slate-600 hover:text-indigo-600">
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {["Home", "Find Tasks", "How it Works", "Leaderboard"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-4 text-base font-medium text-slate-600 border-b border-slate-50"
                >
                  {item}
                </a>
              ),
            )}
            <div className="pt-4 flex flex-col gap-3">
              <Link to={"/login"}>
                <button className="w-full py-3 text-center font-medium text-slate-600 bg-slate-50 rounded-xl">
                  Login
                </button>
              </Link>
              <Link
                to={"/signup"}
                className="w-full py-3 text-center  font-medium text-white bg-indigo-600 rounded-xl shadow-lg shadow-indigo-100"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
