import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Search,
  Filter,
} from "lucide-react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Providers/AuthProvider";

const MySubmissions = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    axiosPublic.get(`/submitedTask/${user?.email}`).then((res) => {
      setSubmissions(res.data);
    });
  }, [axiosPublic, user]);

  // স্ট্যাটাস অনুযায়ী ব্যাজ স্টাইল
  const getStatusStyle = (status) => {
    switch (status) {
      case "approved":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "rejected":
        return "bg-red-50 text-red-600 border-red-100";
      default:
        return "bg-amber-50 text-amber-600 border-amber-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 size={14} />;
      case "rejected":
        return <XCircle size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            My Submissions
          </h1>
          <p className="text-slate-500 font-medium text-sm">
            Track all your submitted tasks and payment status.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search submissions..."
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-indigo-600 transition-all shadow-sm"
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Submissions Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  Task Details
                </th>
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  Buyer
                </th>
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  Amount
                </th>
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  Status
                </th>
                <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400 text-right">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {submissions?.map((sub, index) => (
                <motion.tr
                  key={sub._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group hover:bg-slate-50/80 transition-colors"
                >
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {sub.task_title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">
                        ID: {sub.id}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-semibold text-slate-600">
                      {sub.buyer_name}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-black text-indigo-600 tracking-tight">
                      ${sub.payable_amount.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-wider ${getStatusStyle(sub.status)}`}
                    >
                      {getStatusIcon(sub.status)}
                      {sub.status}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-xs font-bold text-slate-400">
                      {sub.submitted_at}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State Illustration (Optional) */}
        {submissions.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400 font-bold">No submissions found.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MySubmissions;
