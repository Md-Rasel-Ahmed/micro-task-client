import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MessageSquare, CheckCheck } from "lucide-react";
import useNotification from "../Hooks/useNotification";
import moment from "moment";

const NotificationUi = () => {
  const [notifications] = useNotification();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="relative p-2 rounded-full hover:bg-slate-100 transition-all focus:outline-none"
      >
        <span className="text-2xl">🔔</span>
        {/* Unread Badge */}
        <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute -right-30 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-slate-50 flex justify-between items-center bg-white">
                <span className="font-bold text-slate-800">Notifications</span>
                <button className="text-[10px] font-bold text-indigo-600 hover:underline uppercase">
                  Mark all read
                </button>
              </div>

              <div className="max-h-87.5 overflow-y-auto">
                {notifications?.length > 0 ? (
                  notifications?.map((n, idx) => (
                    <div
                      key={n._id}
                      className={`p-4 border-b border-slate-50 flex gap-3  cursor-pointer transition-colors ${!n.isRead ? "bg-gray-200" : ""}`}
                    >
                      <div className="shrink-0 h-9 w-9 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                        <MessageSquare size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 leading-snug">
                          {n.message}
                        </p>
                        <div className="flex items-center gap-1 mt-1.5 text-[10px] text-slate-400">
                          <Clock size={12} />
                          <span>{moment(n.time).fromNow()}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-slate-400 text-sm italic">
                      No new Messages
                    </p>
                  </div>
                )}
              </div>

              <div className="p-3 bg-slate-50 text-center">
                <button className="text-xs font-semibold text-slate-500 hover:text-indigo-600">
                  See all notifications
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationUi;
