import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  PlusCircle,
  Type,
  AlignLeft,
  Users,
  DollarSign,
  Calendar,
  Image as ImageIcon,
  FileText,
  Send,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    const task = {
      task_title: data.title,
      task_detail: data.description,
      required_workers: data.worker,
      payable_amount: data.amount,
      completion_date: data.date,
      submission_info: data.info,
      task_image_url: data.image,
      email: user?.email,
    };
    console.log(task);
  };
  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-slate-800 mb-2">
          Create New Task
        </h1>
        <p className="text-slate-500 font-medium">
          Fill in the details below to post a new micro-task for workers.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 md:p-12 relative overflow-hidden"
      >
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60"></div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 relative z-10"
        >
          {/* 1. Task Title */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
              Task Title
            </label>
            <div className="relative group">
              <Type
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors"
                size={20}
              />
              <input
                type="text"
                {...register("title")}
                placeholder="Ex: Watch my YouTube video and comment"
                className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold text-slate-700"
              />
            </div>
          </div>

          {/* 2. Task Detail */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
              Task Detail Description
            </label>
            <div className="relative group">
              <AlignLeft
                className="absolute left-4 top-5 text-slate-300 group-focus-within:text-indigo-600 transition-colors"
                size={20}
              />
              <textarea
                name="task_detail"
                rows="4"
                {...register("description")}
                placeholder="Describe exactly what the worker needs to do..."
                className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold text-slate-700 resize-none"
                required
              ></textarea>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 3. Required Workers */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                Required Workers
              </label>
              <div className="relative group">
                <Users
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors"
                  size={20}
                />
                <input
                  type="number"
                  name="required_workers"
                  {...register("worker")}
                  placeholder="Ex: 100"
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold text-slate-700"
                  required
                />
              </div>
            </div>

            {/* 4. Payable Amount */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                Payable Amount (Per Worker)
              </label>
              <div className="relative group">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors"
                  size={20}
                />
                <input
                  type="number"
                  step="0.01"
                  {...register("amount")}
                  placeholder="Ex: 0.50"
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold text-slate-700"
                  required
                />
              </div>
            </div>

            {/* 5. Completion Date */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                Completion Deadline
              </label>
              <div className="relative group">
                <Calendar
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors"
                  size={20}
                />
                <input
                  type="date"
                  {...register("date")}
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold text-slate-700"
                  required
                />
              </div>
            </div>

            {/* 6. Task Image URL */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                Task Image URL
              </label>
              <div className="relative group">
                <ImageIcon
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors"
                  size={20}
                />
                <input
                  type="url"
                  {...register("image")}
                  placeholder="https://image-link.com/photo.jpg"
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold text-slate-700"
                  required
                />
              </div>
            </div>
          </div>

          {/* 7. Submission Info */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
              Submission Proof Requirement
            </label>
            <div className="relative group">
              <FileText
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors"
                size={20}
              />
              <input
                type="text"
                name="submission_info"
                {...register("info")}
                placeholder="Ex: Submit a screenshot of the comment"
                className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold text-slate-700"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#4338ca" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-indigo-600 text-white py-5 rounded-[22px] font-black text-lg shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 mt-10 transition-all"
          >
            Publish This Task <Send size={20} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddTask;
