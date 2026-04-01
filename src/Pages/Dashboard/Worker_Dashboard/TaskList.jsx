import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  User,
  Calendar,
  DollarSign,
  Users,
  ExternalLink,
  ArrowRight,
  Coins,
} from "lucide-react";
import useTask from "../../../Hooks/useTask";
import TaskDetailsModal from "./TaskDetailsModal";
import { AuthContext } from "../../../Providers/AuthProvider";

const TaskList = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, , refetch, workerRefetch] = useTask();
  const { user } = useContext(AuthContext);

  // ডামি ডাটা (আপনার API থেকে আসা ডাটার ফরম্যাট এমন হতে পারে)
  const allTasks = [
    {
      _id: "t1",
      task_title: "YouTube Subscribe & Like",
      buyer_name: "John Doe",
      completion_date: "2026-04-10",
      payable_amount: 0.15,
      required_workers: 50,
    },
    {
      _id: "t2",
      task_title: "Website SEO Visit",
      buyer_name: "Sarah Smith",
      completion_date: "2026-04-05",
      payable_amount: 0.1,
      required_workers: 20,
    },
    {
      _id: "t3",
      task_title: "App Download & Review",
      buyer_name: "Alex Dev",
      completion_date: "2026-04-12",
      payable_amount: 0.5,
      required_workers: 3, // এটি লিস্টে দেখাবে না
    },
    {
      _id: "t4",
      task_title: "Join Telegram Group",
      buyer_name: "Crypto King",
      completion_date: "2026-03-30",
      payable_amount: 0.05,
      required_workers: 100,
    },
  ];

  const availableTasks = allTasks.filter((task) => task.required_workers > 0);
  const handleViewDetails = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };
  return (
    <div className="space-y-10 pb-12">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">
          Available Tasks ({tasks?.length})
        </h1>
        <p className="text-slate-500 font-medium">
          Choose a task, complete it, and get paid instantly.
        </p>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasks?.map((task, index) => (
          <motion.div
            key={task._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[35px] border border-slate-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Task Title */}
              <h3 className="text-xl font-black text-slate-800 mb-5 group-hover:text-indigo-600 transition-colors leading-tight">
                {task.task_title}
              </h3>

              {/* Task Info List */}
              <div className="space-y-4 mb-8">
                {/* Buyer Name */}
                <div className="flex items-center gap-3 text-slate-500">
                  <div className="bg-slate-50 p-2 rounded-xl">
                    <User size={16} className="text-indigo-500" />
                  </div>
                  <span className="text-sm font-bold">
                    Buyer:{" "}
                    <span className="text-slate-700">
                      {task.email.slice(0, 5)}
                    </span>
                  </span>
                </div>

                {/* Completion Date */}
                <div className="flex items-center gap-3 text-slate-500">
                  <div className="bg-slate-50 p-2 rounded-xl">
                    <Calendar size={16} className="text-orange-500" />
                  </div>
                  <span className="text-sm font-bold">
                    Deadline:{" "}
                    <span className="text-slate-700">
                      {task.completion_date}
                    </span>
                  </span>
                </div>

                {/* Required Workers Badge */}
                <div className="flex items-center gap-3 text-slate-500">
                  <div className="bg-slate-50 p-2 rounded-xl">
                    <Users size={16} className="text-blue-500" />
                  </div>
                  <span className="text-sm font-bold">
                    Vacancies:{" "}
                    <span className="text-slate-700">
                      {task.required_workers}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Section: Amount & Action */}
            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600">
                  <Coins size={18} strokeWidth={3} />
                </div>
                <span className="text-xl font-black text-slate-800">
                  {task.payable_amount}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleViewDetails(task)}
                className="text-indigo-600 font-bold text-sm flex items-center gap-2 hover:text-indigo-600 transition-all "
              >
                View Details <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* If No Tasks Available */}
      {availableTasks.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-slate-100">
          <p className="text-slate-400 font-bold">
            No active tasks available right now. Check back later!
          </p>
        </div>
      )}
      {selectedTask && (
        <TaskDetailsModal
          task={selectedTask}
          isOpen={isModalOpen}
          refetch={refetch}
          workerRefetch={workerRefetch}
          onClose={() => setIsModalOpen(false)}
          currentUser={{ name: user?.email.slice(0, 5), email: user?.email }} // আপনার অথেনটিকেটেড ইউজার
        />
      )}
    </div>
  );
};

export default TaskList;
