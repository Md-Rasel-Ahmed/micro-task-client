import React from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login Attempted");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-[40px] shadow-2xl shadow-indigo-100/50 p-8 md:p-12 border border-slate-50"
      >
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="inline-block p-4 bg-indigo-50 rounded-3xl text-indigo-600 mb-6"
          >
            <Lock size={32} strokeWidth={2.5} />
          </motion.div>
          <h2 className="text-3xl font-black text-slate-800 mb-2">
            Welcome Back!
          </h2>
          <p className="text-slate-500 font-medium text-sm">
            Log in to manage your tasks and earnings.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
              Email Address
            </label>
            <div className="relative group">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                size={20}
              />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Password
              </label>
              <a
                href="#"
                className="text-xs font-bold text-indigo-600 hover:underline"
              >
                Forgot?
              </a>
            </div>
            <div className="relative group">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                size={20}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-sm"
                required
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#4338ca" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 transition-all flex items-center justify-center gap-3"
          >
            Login to Account <ArrowRight size={20} />
          </motion.button>

          <p className="text-center text-slate-500 text-sm font-medium pt-4">
            New to EarnMinis?{" "}
            <Link
              to="/signup"
              className="text-indigo-600 font-bold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
