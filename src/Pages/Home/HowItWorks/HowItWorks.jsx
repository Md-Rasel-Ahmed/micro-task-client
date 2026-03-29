import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Briefcase, DollarSign } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create Your Account",
      description:
        "Register as a Worker or Buyer in seconds. It's free and easy.",
      icon: <UserPlus size={30} />,
    },
    {
      id: 2,
      title: "Complete or Post Tasks",
      description:
        "Workers can browse and complete micro-tasks. Buyers can post small tasks.",
      icon: <Briefcase size={30} />,
    },
    {
      id: 3,
      title: "Earn Rewards or Get Results",
      description:
        "Workers get coins upon task approval. Buyers get quick, reliable results.",
      icon: <DollarSign size={30} />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-indigo-50 px-4 py-1.5 rounded-full text-sm font-bold text-indigo-600 mb-3 border border-indigo-100"
          >
            {" "}
            Simple Process{" "}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            {" "}
            How <span className="text-indigo-600">EarnMinis</span> Works?{" "}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {" "}
            Follow these three easy steps to start your journey with us.{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-100 -translate-y-1/2 hidden md:block"></div>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              custom={index}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative z-10 hover:border-indigo-100 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 border border-slate-100 shadow-md mb-6 relative">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {" "}
                  {step.id}{" "}
                </span>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {" "}
                {step.title}{" "}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {" "}
                {step.description}{" "}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
