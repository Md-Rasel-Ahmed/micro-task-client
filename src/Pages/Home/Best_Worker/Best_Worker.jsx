import React from "react";
import { motion } from "framer-motion";
import { Trophy, Coins, Award, ExternalLink } from "lucide-react";

const Best_Worker = () => {
  // 6 Top Workers Data
  const topWorkers = [
    {
      id: 1,
      name: "Ariful Islam",
      coins: 5240,
      image: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      coins: 4890,
      image: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      name: "Tanvir Hasan",
      coins: 4560,
      image: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 4,
      name: "Nabila Akter",
      coins: 4200,
      image: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 5,
      name: "Rakibul Hossain",
      coins: 3950,
      image: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 6,
      name: "Mitu Khandakar",
      coins: 3720,
      image: "https://i.pravatar.cc/150?u=6",
    },
  ];

  return (
    <section className="py-24 bg-[#fcfdff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-100"
          >
            <Trophy size={16} />
            <span>Leaderboard</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Top Earners
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Recognizing the hard work and dedication of our most active
            community members.
          </p>
        </div>

        {/* Workers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {topWorkers.map((worker, index) => (
            <motion.div
              key={worker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className="group relative p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300"
            >
              {/* Badge for Top 3 */}
              <div className="absolute -top-5 -right-2 bg-gradient-to-br from-indigo-600 to-purple-600 shadow-xl w-14 h-14 rounded-2xl flex items-center justify-center text-white border-4 border-white">
                {index < 3 ? (
                  <Award size={28} />
                ) : (
                  <span className="font-bold text-lg">{index + 1}</span>
                )}
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Profile Image with Ring Effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-indigo-200 rounded-3xl blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={worker.image}
                    alt={worker.name}
                    className="relative w-24 h-24 rounded-3xl object-cover ring-4 ring-slate-50 group-hover:ring-indigo-100 transition-all shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-sm" />
                </div>

                {/* Name & Stats */}
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {worker.name}
                </h3>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-2xl border border-yellow-100 shadow-sm shadow-yellow-50">
                    <Coins size={18} className="text-yellow-600" />
                    <span className="text-lg font-black text-slate-700">
                      {worker.coins.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-bold text-yellow-700 uppercase tracking-tighter">
                      Available Coins
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 hover:shadow-indigo-200"
                >
                  View Profile <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Best_Worker;
