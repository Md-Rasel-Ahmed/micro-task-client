import React from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  CheckCircle2,
  Clock,
  TrendingUp,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";

const WorkerHome = () => {
  // স্ট্যাটিক পরিসংখ্যান ডাটা
  const stats = [
    {
      id: 1,
      title: "Total Earnings",
      value: "$450.00",
      icon: <Wallet size={24} />,
      color: "bg-emerald-500",
      trend: "+12.5%",
    },
    {
      id: 2,
      title: "Completed Tasks",
      value: "128",
      icon: <CheckCircle2 size={24} />,
      color: "bg-blue-500",
      trend: "+5.2%",
    },
    {
      id: 3,
      title: "Pending Approval",
      value: "14",
      icon: <Clock size={24} />,
      color: "bg-orange-500",
      trend: "In Progress",
    },
    {
      id: 4,
      title: "Success Rate",
      value: "98%",
      icon: <TrendingUp size={24} />,
      color: "bg-purple-500",
      trend: "Excellent",
    },
  ];

  // রিসেন্ট টাস্কের ডামি ডাটা
  const recentTasks = [
    {
      id: 1,
      title: "YouTube Video Like & Sub",
      category: "Social Media",
      reward: "$0.05",
      status: "Pending",
    },
    {
      id: 2,
      title: "Website SEO Visit",
      category: "SEO/Web",
      reward: "$0.10",
      status: "Approved",
    },
    {
      id: 3,
      title: "Mobile App Download",
      category: "App Install",
      reward: "$0.50",
      status: "Approved",
    },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-black text-slate-800">
            Welcome Back, Ariful! 👋
          </h1>
          <p className="text-slate-500 font-medium">
            Here's what's happening with your earnings today.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-100 self-start"
        >
          <Briefcase size={20} /> Browse New Tasks
        </motion.button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`${stat.color} p-3 rounded-2xl text-white shadow-lg`}
              >
                {stat.icon}
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                {stat.trend}
              </span>
            </div>
            <h3 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">
              {stat.title}
            </h3>
            <p className="text-2xl font-black text-slate-800 tracking-tight">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Middle Section: Task Management & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-black text-slate-800 text-lg">
              Recent Submissions
            </h3>
            <button className="text-indigo-600 font-bold text-sm hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                <tr>
                  <th className="px-6 py-4">Task Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Reward</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentTasks.map((task) => (
                  <tr
                    key={task.id}
                    className="hover:bg-slate-50 transition-colors group"
                  >
                    <td className="px-6 py-4 font-bold text-slate-700 text-sm">
                      {task.title}
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-500">
                      {task.category}
                    </td>
                    <td className="px-6 py-4 font-black text-indigo-600 text-sm">
                      {task.reward}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-[10px] font-black px-2.5 py-1 rounded-lg uppercase ${
                          task.status === "Approved"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Right Card: Quick Withdraw / Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-indigo-900 rounded-[32px] p-8 text-white relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Withdraw Earnings</h3>
            <p className="text-indigo-200 text-sm mb-6">
              You have reached the minimum payout threshold!
            </p>
            <div className="text-4xl font-black mb-8">$450.00</div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white text-indigo-900 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-indigo-950/20 transition-all"
          >
            Withdraw Now <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkerHome;
