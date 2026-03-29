import React from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Landmark,
  ArrowRight,
  AlertCircle,
  Coins,
  DollarSign,
  ArrowDownCircle,
} from "lucide-react";

const Withdrawals = () => {
  // এই ভ্যালুগুলো আপনি আপনার লজিক দিয়ে ডাইনামিক করবেন
  const hasEnoughCoins = true;

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      {/* --- STATS SECTION --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Coins Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-[35px] border border-slate-100 shadow-sm flex items-center gap-6"
        >
          <div className="bg-amber-100 p-4 rounded-2xl text-amber-600">
            <Coins size={30} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
              Current Coins
            </p>
            <h2 className="text-3xl font-black text-slate-800">350</h2>
          </div>
        </motion.div>

        {/* Withdrawal Value Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-indigo-600 p-8 rounded-[35px] text-white shadow-xl shadow-indigo-100 flex items-center gap-6"
        >
          <div className="bg-white/20 p-4 rounded-2xl text-white">
            <DollarSign size={30} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-[0.2em] mb-1">
              Withdrawal Value
            </p>
            <h2 className="text-3xl font-black">$17.50</h2>
          </div>
        </motion.div>

        {/* Exchange Rate Card (Business Logic Hint) */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-slate-900 p-8 rounded-[35px] text-white flex items-center gap-6 md:col-span-2 lg:col-span-1"
        >
          <div className="bg-slate-800 p-4 rounded-2xl text-indigo-400">
            <ArrowDownCircle size={30} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">
              Exchange Rate
            </p>
            <h2 className="text-xl font-black">
              20 Coins = <span className="text-indigo-400">$1.00</span>
            </h2>
          </div>
        </motion.div>
      </div>

      {/* --- WITHDRAWAL FORM --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-14 rounded-[45px] border border-slate-100 shadow-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -mr-32 -mt-32" />

        <div className="relative z-10">
          <div className="mb-10">
            <h3 className="text-3xl font-black text-slate-800 mb-2">
              Request Withdrawal
            </h3>
            <p className="text-slate-400 font-medium">
              Fill in the details to transfer your earnings to your account.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {/* Input: Coins */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1 text-indigo-600">
                Coin To Withdraw
              </label>
              <div className="relative">
                <Coins
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
                  size={20}
                />
                <input
                  type="number"
                  placeholder="Enter amount (Min. 200)"
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-[22px] py-5 pl-14 pr-6 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold text-slate-700 text-lg shadow-sm"
                />
              </div>
            </div>

            {/* Input: Amount (Read Only) */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
                Withdraw Amount ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
                  size={20}
                />
                <input
                  type="text"
                  readOnly
                  placeholder="0.00"
                  className="w-full bg-slate-100 border-2 border-slate-100 rounded-[22px] py-5 pl-14 pr-6 font-black text-slate-400 text-lg cursor-not-allowed"
                />
              </div>
            </div>

            {/* Select: Payment System */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
                Select Payment System
              </label>
              <div className="relative">
                <Landmark
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
                  size={20}
                />
                <select className="w-full bg-slate-50 border-2 border-slate-50 rounded-[22px] py-5 pl-14 pr-6 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold text-slate-700 appearance-none cursor-pointer text-lg shadow-sm">
                  <option value="">Choose Method</option>
                  <option value="bkash">bKash</option>
                  <option value="nagad">Nagad</option>
                  <option value="rocket">Rocket</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ArrowRight size={18} className="rotate-90 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Input: Account Number */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
                Account Number / Phone
              </label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 font-bold">
                  #
                </div>
                <input
                  type="text"
                  placeholder="017XXXXXXXX"
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-[22px] py-5 pl-14 pr-6 outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold text-slate-700 text-lg shadow-sm"
                />
              </div>
            </div>

            {/* Action Section */}
            <div className="md:col-span-2 pt-6">
              {hasEnoughCoins ? (
                <motion.button
                  whileHover={{ scale: 1.01, backgroundColor: "#4338ca" }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full bg-indigo-600 text-white py-6 rounded-[25px] font-black text-xl shadow-2xl shadow-indigo-200 transition-all flex items-center justify-center gap-4 group"
                >
                  Withdraw Now
                  <ArrowRight
                    size={24}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </motion.button>
              ) : (
                <div className="w-full py-6 bg-red-50 border-2 border-dashed border-red-200 rounded-[25px] flex flex-col items-center justify-center gap-2 group">
                  <div className="flex items-center gap-3 text-red-600">
                    <AlertCircle size={24} strokeWidth={3} />
                    <span className="font-black text-xl uppercase tracking-tighter italic">
                      Insufficient coin
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
                    Minimum 200 coins required for withdrawal
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Withdrawals;
