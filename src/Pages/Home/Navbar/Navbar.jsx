import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CircleDollarSign,
  Coins,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useUsers from "../../../Hooks/useUsers";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [users] = useUsers();

  // user logout
  const handleLogout = () => {
    logout()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
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
            <NavLink
              to={"/"}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {" "}
                Home
              </motion.p>
            </NavLink>

            <NavLink
              to={"/developer"}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Join as Developer
              </motion.p>
            </NavLink>

            {/* {["Home", "Find Tasks", "How it Works", "Join As a Developer"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href="/"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {item}
                </motion.a>
              ),
            )} */}
          </div>
          <span>{user?.email}</span>
          {/* Action Buttons   */}
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-0"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 -top-2  w-64 bg-white rounded-[28px] shadow-2xl shadow-indigo-200/50 border border-slate-100 p-3 z-[100]"
                  >
                    {/* User Quick Info */}
                    <div className="p-4 mb-2 bg-slate-50 rounded-[22px] flex items-center gap-3">
                      <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                        <Coins size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">
                          Total Balance
                        </p>
                        <p className="text-sm font-black text-slate-800">
                          ${users?.coins} Coins
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      {/* Menu Links */}
                      <Link
                        to="/dashboard/workerHome"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-all font-bold text-sm group"
                      >
                        <LayoutDashboard
                          size={18}
                          className="group-hover:scale-110 transition-transform"
                        />{" "}
                        Dashboard
                      </Link>

                      <Link
                        to="/dashboard/profile"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-all font-bold text-sm group"
                      >
                        <User
                          size={18}
                          className="group-hover:scale-110 transition-transform"
                        />{" "}
                        Profile
                      </Link>

                      <Link
                        to="/dashboard/settings"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-all font-bold text-sm group"
                      >
                        <Settings
                          size={18}
                          className="group-hover:scale-110 transition-transform"
                        />{" "}
                        Settings
                      </Link>

                      {/* Divider */}
                      <div className="h-px bg-slate-100 mx-2 my-2" />

                      {/* Logout Button */}
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 p-3 w-full rounded-xl hover:bg-red-50 text-slate-600 hover:text-red-600 transition-all font-bold text-sm group text-left"
                      >
                        <LogOut
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />{" "}
                        Logout
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </ul>
            </div>
          ) : (
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
          )}

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
