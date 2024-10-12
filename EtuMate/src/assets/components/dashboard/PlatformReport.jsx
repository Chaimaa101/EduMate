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
  { subject: "Math", reports: "124" },
  { subject: "Science", reports: "320" },
  { subject: "History", reports: "260" },
  { subject: "English", reports: "328" },
  { subject: " Computer", reports: "200" },
];

function PlatformReport() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Platform Reports
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={ProductPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="subject" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#40df64",
              }}
              itemStyle={{ color: "#40df64" }}
            />
            <Bar dataKey="reports" fill="#40df64" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default PlatformReport;
