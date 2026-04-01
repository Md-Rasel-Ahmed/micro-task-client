import React from "react";
import { motion } from "framer-motion";
import {
  Edit3,
  Trash2,
  Users,
  DollarSign,
  Calendar,
  ExternalLink,
  MoreVertical,
  Coins,
} from "lucide-react";
import useTask from "../../../Hooks/useTask";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const MyTasks = () => {
  const [, buyerTask, refetch] = useTask();
  const axiosPublic = useAxiosPublic();
  const dollar = 1 / 10;
  const handleTaskDelete = async (id) => {
    const res = await axiosPublic.delete(`/tasks/${id}`);
    if (res.data.deletedCount == 1) {
      refetch();
    }
  };
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            My Posted Tasks
          </h1>
          <p className="text-slate-500 font-medium">
            Manage and track the progress of your active tasks.
          </p>
        </div>
        <Link to={"/dashboard/addNewTask"}>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-indigo-100 flex items-center gap-2 self-start hover:bg-indigo-700 transition-all">
            Post New Task
          </button>
        </Link>
      </div>

      {/* Tasks Table Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  Task Details
                </th>
                <th className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  Progress
                </th>
                <th className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  Total Cost
                </th>
                <th className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  Deadline
                </th>
                <th className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {buyerTask?.map((task, index) => (
                <motion.tr
                  key={task._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group hover:bg-slate-50/80 transition-colors"
                >
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {task.task_title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase mt-1">
                        ID: {task._id}
                      </span>
                    </div>
                  </td>

                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-2 w-32">
                      <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase">
                        <span>
                          {2}/{task.required_workers}
                        </span>
                        <span>
                          {Math.round((2 / task.required_workers) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${(2 / task.required_workers) * 100}%`,
                          }}
                          className={`h-full rounded-full bg-indigo-600`}
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-slate-800">
                        ${(dollar * task.payable_amount).toFixed(2)}
                      </span>
                      <span className="text-[10px] flex gap-1 justify-center items-center text-slate-400 font-bold">
                        <Coins size={10}></Coins> {task.payable_amount} / worker
                      </span>
                    </div>
                  </td>

                  <td className="px-8 py-6 text-sm font-bold text-slate-500">
                    {task.completion_date}
                  </td>

                  <td className="px-8 py-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all shadow-sm border border-transparent hover:border-indigo-100">
                        <Edit3 size={18} />
                      </button>
                      <button
                        onClick={() => handleTaskDelete(task._id)}
                        className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all shadow-sm border border-transparent hover:border-red-100"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default MyTasks;
