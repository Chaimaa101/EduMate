import { LibraryBig, GraduationCap, FileText, Newspaper } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { motion } from "framer-motion";
import PlatformStudents from "../components/dashboard/PlatformStudents";
import CourseCategory from "../components/dashboard/CourseCategory";
import PlatformBlogs from "../components/dashboard/PlatformBlogs";
import PlatformReport from "../components/dashboard/PlatformReport";

function Dashboard() {
  return (
    <div className="flex-1 relative overflow-auto z-10">
      <Header title={"Dashboard"} />
      <main className="max-w-7xl mx-auto  py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Students"
            icon={GraduationCap}
            number="0"
            bg="#686ef1"
          />
          <StatCard name="Courses" icon={LibraryBig} number="0" bg="#FFA500" />
          <StatCard name="Reports" icon={FileText} number="0" bg="#40df64" />
          <StatCard name="Blogs" icon={Newspaper} number="0" bg="#d41f79" />
        </motion.div>
        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PlatformStudents />
          <CourseCategory />
          <PlatformReport/>
          <PlatformBlogs/>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
