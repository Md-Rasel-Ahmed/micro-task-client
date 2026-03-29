import React from "react";
import { motion } from "framer-motion";
import { CircleDollarSign, Mail, MapPin, Phone, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Find Tasks", href: "#" },
      { name: "Post a Job", href: "#" },
      { name: "Leaderboard", href: "#" },
      { name: "How it Works", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Community Rules", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-40 -mt-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-600 p-2 rounded-xl text-white">
                <CircleDollarSign size={28} />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                EarnMinis
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
              The world's leading micro-tasking platform. Connect with thousands
              of workers and buyers to get things done efficiently.
            </p>

            <div className="space-y-4">
              <h4 className="text-white font-bold">
                Subscribe to our Newsletter
              </h4>
              <div className="relative max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl py-4 pl-5 pr-14 outline-none focus:border-indigo-500 transition-all text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 p-2.5 rounded-xl text-white hover:bg-indigo-700 transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-2.5 rounded-lg text-indigo-400">
                  <MapPin size={20} />
                </div>
                <p className="text-sm leading-relaxed">
                  123 Digital Nomad Lane, <br /> Tech Hub, Silicon Valley, CA
                  94043
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-slate-800 p-2.5 rounded-lg text-indigo-400">
                  <Mail size={20} />
                </div>
                <p className="text-sm">support@earnminis.com</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-slate-800 p-2.5 rounded-lg text-indigo-400">
                  <Phone size={20} />
                </div>
                <p className="text-sm">+1 (555) 000-1234</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-medium">
            © {currentYear} EarnMinis. Built with passion for the micro-tasking
            community.
          </p>

          {/* <div className="flex items-center gap-4">
            {[
              { icon: <Twitter size={20} />, href: "#" },
              { icon: <Instagram size={20} />, href: "#" },
              { icon: <Linkedin size={20} />, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -3, color: "#818cf8" }}
                className="bg-slate-800 p-3 rounded-xl text-slate-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
