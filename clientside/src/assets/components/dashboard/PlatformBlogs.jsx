import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const ProductPerformanceData = [
  { month: "January", blogs: "124" },
  { month: "February", blogs: "320" },
  { month: "March", blogs: "348" },
  { month: " April", blogs: "200" },
];

function PlatformBlogs() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Platform Blogs
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={ProductPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#d41f79" }}
            />
            <Bar dataKey="blogs" fill="#d41f79" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default PlatformBlogs;
