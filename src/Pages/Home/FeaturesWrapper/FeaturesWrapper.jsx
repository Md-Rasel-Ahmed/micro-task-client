import React from "react";
import { motion } from "framer-motion";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import HowItWorks from "../HowItWorks/HowItWorks";

const FeaturesWrapper = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background Elements for the entire wrapper */}
      <div className="absolute top-[10%] -left-20 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] -right-20 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* 1. How It Works Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HowItWorks />
      </motion.div>

      {/* Divider with subtle gradient */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* 2. Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <WhyChooseUs />
      </motion.div>

      {/* Final Call to Action inside Wrapper (Optional but recommended) */}
      <section className="py-20 flex justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-indigo-600 w-[90%] md:w-[70%] rounded-[40px] p-12 text-center text-white shadow-2xl shadow-indigo-200 relative overflow-hidden"
        >
          {/* Animated background shape inside CTA */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 border-4 border-white/10 rounded-full"
          />

          <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">
            Ready to Start Earning Today?
          </h3>
          <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto relative z-10">
            Join thousands of workers and buyers globally. Create your free
            account and start your micro-tasking journey.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors relative z-10 shadow-lg">
            Get Started Now
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default FeaturesWrapper;
