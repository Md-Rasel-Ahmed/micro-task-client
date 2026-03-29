import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, LifeBuoy, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Instant Approval",
      description:
        "Tasks are reviewed quickly, and rewards are distributed instantly upon approval.",
      icon: <Zap size={30} />,
    },
    {
      title: "Secure Transactions",
      description:
        "Our platform uses top-notch security for safe and secure payments.",
      icon: <ShieldCheck size={30} />,
    },
    {
      title: "24/7 Dedicated Support",
      description:
        "Our support team is always available to assist with any issues or questions.",
      icon: <LifeBuoy size={30} />,
    },
    {
      title: "Growth Opportunities",
      description:
        "Enhance your skills, complete complex tasks, and earn higher rewards.",
      icon: <TrendingUp size={30} />,
    },
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-green-50 px-4 py-1.5 rounded-full text-sm font-bold text-green-600 mb-3 border border-green-100"
          >
            {" "}
            Key Advantages{" "}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            {" "}
            Why Choose{" "}
            <span className="text-green-600">Our Platform?</span>{" "}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {" "}
            We offer a superior experience for both workers and buyers.{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:border-green-100 transition-all flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100 mb-6">
                {" "}
                {feature.icon}{" "}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {" "}
                {feature.title}{" "}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {" "}
                {feature.description}{" "}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
