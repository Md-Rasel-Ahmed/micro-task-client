import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import {
  User,
  Mail,
  Lock,
  Image as ImageIcon,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, loading } = useContext(AuthContext);
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full bg-white rounded-[40px] shadow-2xl shadow-indigo-100 overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Side: Illustration & Branding */}
        <div className="md:w-5/12 bg-indigo-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6 italic tracking-tighter text-indigo-100">
              EarnMinis
            </h2>
            <h3 className="text-4xl font-bold leading-tight mb-4">
              Start Your <br />
              Journey With Us.
            </h3>
            <p className="text-indigo-100/80">
              Join thousands of workers and buyers globally in the micro-tasking
              revolution.
            </p>
          </div>

          <div className="space-y-4 relative z-10 mt-10">
            {["Secure Payments", "Verified Tasks", "24/7 Support"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-indigo-300" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ),
            )}
          </div>

          <div className="mt-12 text-xs text-indigo-200">
            © 2026 EarnMinis Platform. All rights reserved.
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="md:w-7/12 p-8 md:p-16 bg-white">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-slate-800 mb-2">
              Create Account
            </h2>
            <p className="text-slate-500 font-medium">
              Please fill in the details to register.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Full Name
                </label>
                <div className="relative group">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                    size={18}
                  />
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                    size={18}
                  />
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Profile Image URL */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Profile Image URL
                </label>
                <div className="relative group">
                  <ImageIcon
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                    size={18}
                  />
                  <input
                    type="file"
                    {...register("photo")}
                    placeholder="https://image.link"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                    size={18}
                  />
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Role Dropdown (Full Width) */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                I want to join as a
              </label>
              <div className="relative group">
                <Briefcase
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                  size={18}
                />
                <select
                  {...register("role")}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-sm appearance-none cursor-pointer font-medium text-slate-700"
                  defaultValue="worker"
                >
                  <option value="worker">
                    Worker (Complete tasks to earn)
                  </option>
                  <option value="buyer">Buyer (Post tasks for others)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              </div>
            </div>

            {/* Signup Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
            >
              {loading ? (
                <span className="loading loading-spinner loading-xl"></span>
              ) : (
                <span className="flex justify-self-center items-center gap-2">
                  Create My Account <ArrowRight size={20} />
                </span>
              )}
            </motion.button>

            <p className="text-center text-slate-500 text-sm font-medium">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-indigo-600 font-bold hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
