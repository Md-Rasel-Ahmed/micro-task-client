import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fdfdff]">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-indigo-600 text-sm font-semibold mb-6"
            >
              <Zap size={16} fill="currentColor" />
              <span>Join the Micro-Work Revolution</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Small Tasks, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Big Rewards.
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              আপনার অবসর সময়ে ছোট ছোট টাস্ক সম্পন্ন করে প্রতিদিন আয় করুন।
              বিশ্বাসযোগ্য বায়ারদের সাথে সরাসরি কাজ করার সহজ সুযোগ।
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-indigo-200"
              >
                Join as Worker <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold transition-colors"
              >
                Post a Job
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span className="text-sm font-medium">50K+ Workers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span className="text-sm font-medium">120K+ Tasks Done</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Illustration Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Floating Element 1: Task Completed Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 left-10 bg-white p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 border border-slate-50"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400">Task Completed</p>
                <p className="font-bold text-slate-800">Earned +10 Coins</p>
              </div>
            </motion.div>

            {/* Main Illustration Placeholder */}
            <div className="relative bg-gradient-to-tr from-indigo-100 to-purple-50 rounded-[40px] p-10 overflow-hidden">
              <img
                src="https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_23-2148612143.jpg"
                alt="Working"
                className="rounded-3xl shadow-lg mix-blend-multiply"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
