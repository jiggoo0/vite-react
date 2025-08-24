"use client";

import { FC } from "react";
import { motion } from "framer-motion";

export interface TimelineEvent {
  id: string | number;
  หัวข้อ: string;
  รายละเอียด?: string;
  เวลา: string;
  type?: "info" | "warning" | "success";
}

interface UserBehaviorTimelineProps {
  events: TimelineEvent[];
}

const eventColors = {
  info: "bg-blue-600 dark:bg-blue-400",
  warning: "bg-yellow-500 dark:bg-yellow-400",
  success: "bg-green-500 dark:bg-green-400",
};

const UserBehaviorTimeline: FC<UserBehaviorTimelineProps> = ({ events }) => {
  if (!events?.length) return null;

  return (
    <section className="relative w-full max-w-4xl mx-auto p-4">
      {/* เส้น timeline */}
      <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 rounded" />

      <ul className="space-y-4 pl-10 max-h-96 overflow-y-auto">
        {events.map((event, index) => {
          const dotColor = event.type ? eventColors[event.type] : eventColors.info;

          return (
            <motion.li
              key={event.id}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* จุดบน timeline */}
              <div
                className={`absolute -left-5 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 ${dotColor}`}
              />

              {/* card รายละเอียดเหตุการณ์ */}
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm break-words">
                  {event.หัวข้อ}
                </h3>

                {event.รายละเอียด && (
                  <p className="text-gray-600 dark:text-gray-300 text-xs mt-1 break-words">
                    {event.รายละเอียด}
                  </p>
                )}

                <time className="text-xs text-gray-400 dark:text-gray-500 mt-2 block">
                  {event.เวลา}
                </time>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

UserBehaviorTimeline.displayName = "UserBehaviorTimeline";

export default UserBehaviorTimeline;