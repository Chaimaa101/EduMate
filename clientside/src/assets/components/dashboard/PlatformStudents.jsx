import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const UserRetentionData = [
    { month: "Jan", students: 50 },
    { month: "Mar", students: 100 },
    { month: "May", students: 140 },
    { month: "Jul", students: 135 },
    { month: "Sep", students: 150 },
    { month: "Nov", students: 230 },
];

export default function PlatformStudents() {
    return (
        <motion.div
            className="bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-100">
                Platform Students
            </h2>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={UserRetentionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                        <XAxis dataKey={"month"} stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF " />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31,41,55,0.8)",
                                borderColor: "#686ef1",
                            }}
                            itemStyle={{
                                color: "#686ef1",
                            }}
                        />
                        <Line
                            type="monotoneX"
                            dataKey="students"
                            stroke="#686ef1"
                            strokeWidth={3}
                            dot={{ fill: "white", strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
