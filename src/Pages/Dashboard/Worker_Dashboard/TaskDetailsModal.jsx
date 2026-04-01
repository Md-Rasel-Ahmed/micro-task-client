import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Coins,
  User,
  Calendar,
  ClipboardCheck,
  Send,
  AlertCircle,
} from "lucide-react";
import moment from "moment";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const TaskDetailsModal = ({
  task,
  isOpen,
  onClose,
  currentUser,
  workerRefetch,
  refetch,
}) => {
  const [submissionDetails, setSubmissionDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const axiosPublic = useAxiosPublic();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      task_id: task._id,
      task_title: task.task_title,
      payable_amount: parseInt(task.payable_amount),
      worker_email: currentUser.email,
      worker_name: currentUser.name,
      buyer_name: task.email,
      buyer_email: task.email,
      submission_details: submissionDetails,
      submit_date: moment().format("ll"),
      status: "pending",
    };

    // console.log("Submitting to DB:", submissionData);

    // API Call logic here...
    const res = await axiosPublic.post("/submitedTask", submissionData);
    if (res.data.result.insertedId) {
      workerRefetch();
      refetch();
      setIsSubmitting(false);
      setSubmissionDetails("");
      onClose();
    }
    // setTimeout(() => {
    //   alert("Submission successful!");
    //   setIsSubmitting(false);
    //   setSubmissionDetails("");
    //   onClose(); // সাবমিট হয়ে গেলে মডাল বন্ধ হবে
    // }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <ClipboardCheck className="text-indigo-600" size={20} /> Task
                Details
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto custom-scrollbar">
              {/* Task Info Table-like Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-indigo-50 p-4 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold text-indigo-400">
                    Reward
                  </p>
                  <p className="text-lg font-black text-indigo-700 flex items-center gap-1">
                    <Coins size={18} /> {task.payable_amount} Coins
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold text-amber-500">
                    Deadline
                  </p>
                  <p className="text-lg font-black text-amber-700 flex items-center gap-1">
                    <Calendar size={18} /> {task.completion_date}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-slate-800 mb-2">
                  {task.task_title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl border border-dashed border-slate-200">
                  {task.task_detail}
                </p>
              </div>

              {/* Submission Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Submission Details
                  </label>
                  <textarea
                    required
                    value={submissionDetails}
                    onChange={(e) => setSubmissionDetails(e.target.value)}
                    placeholder="Enter proof of work (e.g. your username or screenshot link)..."
                    className="w-full p-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-indigo-500 outline-none transition-all min-h-[120px] text-sm"
                  />
                </div>

                <div className="flex items-start gap-2 text-blue-600 bg-blue-50 p-3 rounded-xl">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <p className="text-[10px] leading-tight">
                    By submitting, you confirm that you have completed the task
                    as per <strong>{task.buyer_name}</strong>'s instructions.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send size={18} /> Submit Proof
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TaskDetailsModal;
