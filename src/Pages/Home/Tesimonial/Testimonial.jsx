import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Quote, Star } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  // Static Testimonial Data (6 Users)
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Micro-Worker",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "EarnMinis has completely changed how I utilize my free time. The tasks are small, but the earnings are real. I love it!",
      stars: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Digital Marketer (Buyer)",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "Getting quick social media engagement has never been easier. The workers here are efficient and high quality.",
      stars: 5,
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Student Worker",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "A fantastic platform for students like me to earn pocket money during breaks. Highly recommended for quick tasks.",
      stars: 4,
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "SEO Specialist (Buyer)",
      photo: "https://randomuser.me/api/portraits/men/88.jpg",
      quote:
        "The SEO task quality exceeded my expectations. I found reliable workers who boosted my site rankings effectively.",
      stars: 5,
    },
    {
      id: 5,
      name: "Emily White",
      role: "Content Creator",
      photo: "https://randomuser.me/api/portraits/women/12.jpg",
      quote:
        "Simple, transparent, and rewarding. I was able to withdraw my earnings easily. A trustworthy platform!",
      stars: 5,
    },
    {
      id: 6,
      name: "Kevin Peterson",
      role: "Business Owner (Buyer)",
      photo: "https://randomuser.me/api/portraits/men/54.jpg",
      quote:
        "Great platform for cost-effective marketing. The Admin support is also very responsive when needed.",
      stars: 4,
    },
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-green-100"
          >
            <Quote size={16} />
            <span>Success Stories</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Feedback From Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-indigo-600">
              Community
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Hear from users who are successfully earning and growing with
            EarnMinis.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <motion.div
                initial={{ opacity: 0.5, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col h-full group transition-all duration-300 hover:border-indigo-100"
              >
                {/* Quote Icon & Stars */}
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-indigo-50 p-3 rounded-xl text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Quote
                      size={24}
                      fill="currentColor"
                      className="rotate-180"
                    />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < item.stars
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-200"
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow italic">
                  "{item.quote}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-slate-50 shadow-inner"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-indigo-600 font-medium bg-indigo-50 px-3 py-0.5 rounded-full inline-block">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
