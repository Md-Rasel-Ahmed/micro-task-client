import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Users,
  CircleDollarSign,
  Eye,
  CheckCircle,
  XCircle,
  ExternalLink,
} from "lucide-react";
import useTask from "../../../Hooks/useTask";

const BuyerHome = () => {
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, buyerTask, , , reviewTask] = useTask();
  // Mock Data - In a real app, these would come from your Backend/API
  const stats = {
    totalTasks: buyerTask?.length, // Total tasks added by user
    pendingTasks: 45, // Sum of all required_workers count
    totalPayment: 1250, // Total coins/amount paid
  };

  const [submissions, setSubmissions] = useState([
    {
      id: 101,
      worker_name: "John Doe",
      task_title: "YouTube Subscribe",
      payable_amount: 15,
      detail: "Subscribed and liked. Channel name: JohnVlogs",
    },
    {
      id: 102,
      worker_name: "Sarah Smith",
      task_title: "App Review",
      payable_amount: 50,
      detail: "Reviewed on PlayStore with 5 stars.",
    },
  ]);

  const handleApprove = (id) => {
    // Logic: Increase worker coins & change status to 'approve'
    console.log(`Approved submission ${id}. Worker paid.`);
    setSubmissions(submissions.filter((s) => s.id !== id));
    setIsModalOpen(false);
  };

  const handleReject = (id) => {
    // Logic: Change status to 'rejected' & Increase required_workers by 1
    console.log(`Rejected submission ${id}. Required workers increased.`);
    setSubmissions(submissions.filter((s) => s.id !== id));
    setIsModalOpen(false);
  };

  const openModal = (submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 bg-[#F8FAFC] min-h-screen space-y-8 font-sans">
      {/* 1. STATS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Tasks"
          value={stats.totalTasks}
          icon={<ClipboardList />}
          color="bg-indigo-600"
        />
        <StatCard
          title="Pending Workers"
          value={stats.pendingTasks}
          icon={<Users />}
          color="bg-orange-500"
          subtitle="Required across all tasks"
        />
        <StatCard
          title="Total Paid"
          value={`${stats.totalPayment} Coins`}
          icon={<CircleDollarSign />}
          color="bg-emerald-600"
        />
      </div>

      {/* 2. TASK TO REVIEW TABLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">Tasks to Review</h3>
          <p className="text-slate-500 text-xs">
            Review submissions from workers to release payments.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[11px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4">Worker Name</th>
                <th className="px-6 py-4">Task Title</th>
                <th className="px-6 py-4">Payable</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reviewTask?.map((sub) => (
                <tr
                  key={sub._id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {sub.worker_name}
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-sm">
                    {sub.task_title}
                  </td>
                  <td className="px-6 py-4 font-bold text-indigo-600">
                    {sub.payable_amount} Coins
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => openModal(sub)}
                      className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all"
                    >
                      <Eye size={14} /> View Submission
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {submissions.length === 0 && (
            <div className="p-10 text-center text-slate-400 italic text-sm">
              No pending submissions to review.
            </div>
          )}
        </div>
      </motion.div>

      {/* 3. SUBMISSION DETAIL MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/30">
                <h4 className="font-bold text-slate-800">Submission Details</h4>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Work Description
                  </label>
                  <p className="text-slate-700 mt-1 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                    "{selectedSubmission?.submission_details}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleApprove(selectedSubmission.id)}
                    className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-xl font-bold hover:bg-emerald-600 shadow-lg shadow-emerald-100 transition-all"
                  >
                    <CheckCircle size={18} /> Approve
                  </button>
                  <button
                    onClick={() => handleReject(selectedSubmission.id)}
                    className="flex items-center justify-center gap-2 bg-rose-500 text-white py-3 rounded-xl font-bold hover:bg-rose-600 shadow-lg shadow-rose-100 transition-all"
                  >
                    <XCircle size={18} /> Reject
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, value, icon, color, subtitle }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5"
  >
    <div
      className={`${color} p-4 rounded-2xl text-white shadow-lg shadow-indigo-100`}
    >
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
        {title}
      </p>
      <h3 className="text-2xl font-black text-slate-800">{value}</h3>
      {subtitle && (
        <p className="text-[10px] text-slate-400 italic mt-0.5">{subtitle}</p>
      )}
    </div>
  </motion.div>
);

export default BuyerHome;
