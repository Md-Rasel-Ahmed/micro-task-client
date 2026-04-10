import React from "react";
import { motion } from "framer-motion";
import useUsers from "./../../../Hooks/useUsers";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import {
  Coins,
  CheckCircle2,
  Zap,
  CreditCard,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";

const PurchaseCoin = () => {
  const [loginUser, refetch] = useUsers();
  const axiosPublic = useAxiosPublic();
  const coinPackages = [
    {
      id: 1,
      coins: 10,
      price: 1,
      label: "Starter",
      icon: <Coins className="text-slate-400" />,
    },
    {
      id: 2,
      coins: 100,
      price: 10,
      label: "Standard",
      icon: <Zap className="text-indigo-500" />,
      popular: true,
    },
    {
      id: 3,
      coins: 500,
      price: 50,
      label: "Pro Buyer",
      icon: <Star className="text-amber-500" />,
    },
  ];

  const handlePurchaseCoins = (pkg) => {
    axiosPublic
      .post("/purchaseCoins", { coins: pkg.coins, email: loginUser?.email })
      .then((res) => {
        if (res.data.modifiedCount == 1) {
          refetch();
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest mb-6"
        >
          <Zap size={14} /> Refill Your Balance
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
          Purchase <span className="text-indigo-600">Coins</span> to Post Tasks
        </h1>
        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
          Choose a package that fits your needs. 1 Dollar equals 10 Coins.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coinPackages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative bg-white rounded-[40px] p-8 border-2 transition-all flex flex-col justify-between overflow-hidden shadow-sm
              ${pkg.popular ? "border-indigo-600 shadow-2xl shadow-indigo-100" : "border-slate-100 hover:border-indigo-200"}`}
          >
            {pkg.popular && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-5 py-1.5 rounded-bl-[20px] text-[10px] font-black uppercase tracking-widest">
                Most Popular
              </div>
            )}

            <div>
              <div className="mb-6 bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                {pkg.icon}
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-1">
                {pkg.label}
              </h3>
              <p className="text-slate-400 text-xs font-bold uppercase mb-6 tracking-widest">
                Coin Refill
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-slate-800 tracking-tighter">
                  {pkg.coins}
                </span>
                <span className="text-slate-400 font-bold">Coins</span>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500" />{" "}
                  Instant Delivery
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500" />{" "}
                  Priority Support
                </div>
              </div>
            </div>

            <button
              onClick={() => handlePurchaseCoins(pkg)}
              className={`w-full py-4 rounded-[22px] font-black text-lg flex items-center justify-center gap-3 transition-all shadow-lg
              ${
                pkg.popular
                  ? "bg-indigo-600 text-white shadow-indigo-100 hover:bg-indigo-700"
                  : "bg-slate-900 text-white shadow-slate-100 hover:bg-indigo-600"
              }`}
            >
              Pay ${pkg.price} <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Safe Payment Notice */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 bg-slate-50 border border-slate-100 rounded-[30px] p-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-6 text-center md:text-left">
          <div className="bg-white p-4 rounded-2xl shadow-sm text-indigo-600">
            <CreditCard size={32} />
          </div>
          <div>
            <h4 className="font-black text-slate-800 text-lg">
              Secure & Encrypted Payments
            </h4>
            <p className="text-slate-500 text-sm font-medium">
              We support Stripe, PayPal, bKash, and SSLCommerz for safe
              transactions.
            </p>
          </div>
        </div>
        <div className="flex gap-4 grayscale opacity-40">
          <div className="h-8 w-12 bg-slate-400 rounded-md"></div>
          <div className="h-8 w-12 bg-slate-400 rounded-md"></div>
          <div className="h-8 w-12 bg-slate-400 rounded-md"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default PurchaseCoin;
