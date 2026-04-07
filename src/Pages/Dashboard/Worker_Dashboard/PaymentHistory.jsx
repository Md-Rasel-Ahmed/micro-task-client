import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Search,
  Filter,
  Download,
  Coins,
} from "lucide-react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useUsers from "../../../Hooks/useUsers";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/withdraw/${user?.email}`).then((res) => {
      setTransactions(res.data);
    });
  }, [axiosPublic, user?.email]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-[#F8FAFC] min-h-screen font-sans"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Payment History</h1>
          <p className="text-slate-500 text-sm">
            View and manage all your coin transactions.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-all shadow-sm text-sm">
          <Download size={16} /> Export CSV
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-2.5 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by Transaction ID..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-100 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[11px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-6 py-5">Transaction ID</th>
                <th className="px-6 py-5">Type</th>
                <th className="px-6 py-5">Amount</th>
                <th className="px-6 py-5">Method</th>
                <th className="px-6 py-5">Date</th>
                <th className="px-6 py-5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions?.map((txn, index) => (
                <motion.tr
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={txn._id}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-6 py-4 font-mono text-xs text-slate-500">
                    {txn._id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-1.5 rounded-lg ${txn.type === "purchase" ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"}`}
                      >
                        {txn.type === "purchase" ? (
                          <ArrowDownLeft size={14} />
                        ) : (
                          <ArrowUpRight size={14} />
                        )}
                      </div>
                      <span className="text-sm font-semibold text-slate-700 capitalize">
                        {txn.type}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 font-bold text-slate-800">
                      <Coins size={14} className="text-amber-500" />
                      {txn.withdrawCoins}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">{txn.method}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    {txn.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                        txn.status === "completed"
                          ? "bg-emerald-50 text-emerald-600"
                          : txn.status === "pending"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-rose-50 text-rose-600"
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="p-6 border-t border-slate-50 flex justify-between items-center bg-white">
          <p className="text-xs text-slate-400 text-italic">
            Showing 1-4 of 24 transactions
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-100 rounded-lg text-xs disabled:opacity-50">
              Prev
            </button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs">
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentHistory;
