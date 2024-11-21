import { LibraryBig, GraduationCap, FileText, Newspaper } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { motion } from "framer-motion";
import PlatformStudents from "../components/dashboard/PlatformStudents";
import CourseCategory from "../components/dashboard/CourseCategory";
import PlatformBlogs from "../components/dashboard/PlatformBlogs";
import PlatformReport from "../components/dashboard/PlatformReport";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
const [totalStudents, setTotalStudents] = useState(0);
    const [totalBlogs, setTotalBlogs] = useState(0); 
    const [totalCourses, setTotalCourses] = useState(0); 
    useEffect(() => {
    // Fetch total students
    axios.get("http://localhost:8000/api/students")
        .then((response) => {
            setTotalStudents((response.data.data).length);
        })
        .catch((error) => {
            console.error("Error fetching students count:", error);
        });

    // Fetch total blogs
    axios.get("http://localhost:8000/api/blogs")
        .then((response) => {
            setTotalBlogs((response.data.data).length);
        })
        .catch((error) => {
            console.error("Error fetching blogs count:", error);
        });

        // Fetch total courses
    axios.get("http://localhost:8000/api/cours")
        .then((response) => {
            setTotalCourses((response.data.data).length );
        })
        .catch((error) => {
            console.error("Error fetching courses count:", error);
        });
}, []);

    return (
        <div className="flex-1 relative overflow-auto z-10 ">
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
                        number={totalStudents}
                        bg="#686ef1"
                    />
                    <StatCard
                        name="Courses"
                        icon={LibraryBig}
                        number={totalCourses}
                        bg="#FFA500"
                    />
                    <StatCard
                        name="Reports"
                        icon={FileText}
                        number="20"
                        bg="#40df64"
                    />
                    <StatCard
                        name="Blogs"
                        icon={Newspaper}
                        number={totalBlogs}
                        bg="#d41f79"
                    />
                </motion.div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <PlatformStudents />
                    <CourseCategory />
                    <PlatformReport />
                    <PlatformBlogs />
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
