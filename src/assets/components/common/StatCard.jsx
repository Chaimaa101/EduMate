/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function StatCard({ name, icon: Icon, number, bg }) {
  return (
    <motion.div
      style={{ backgroundColor: bg }}
      className={`flex flex-col 
    overflow-hidden shadow-lg rounded-xl border border-gray-700 px-5 py-2.5 sm:p-4`}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    >
      <div className="flex flex-col items-left text-sm font-medium gap-1 ">
        <Icon size={25} />
        <p className="text-base">{name}</p>
      </div>
      <p className="mt-1 text-2xl font-semibold text-gray-100 self-end">
        {number}
      </p>
    </motion.div>
  );
}

export default StatCard;
