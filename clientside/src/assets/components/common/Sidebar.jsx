import {
    LayoutDashboard,
    LibraryBig,
    GraduationCap,
    Menu,
    UserCircle2,
    FilePen,
    MessageCircleQuestion,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SIDBAR_ITEMS = [
    { name: "Dashboard", icon: LayoutDashboard, path: "dashboard" },
    { name: "Courses", icon: LibraryBig, path: "courses" },
    { name: "Students", icon: GraduationCap, path: "students" },
    {
        name: "Q&A",
        icon: MessageCircleQuestion,
        path: "q&a",
    },
    {
        name: "Blogs",
        icon: FilePen,
        path: "blogs",
    },
    { name: "Profile", icon: UserCircle2, path: "profile" },
];

export default function Sidebar() {
    const [isSideBarOpen, setIseSidebarOpen] = useState(true);
    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-linear flex-shrink-0 ${
                isSideBarOpen ? "w-60" : "w-[90px]"
            } `}
            animate={{ width: isSideBarOpen ? 240 : 90 }}
        >
            <div className="h-full bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-300 dark:border-gray-700">
                <motion.button
                    className="ml-2 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 max-w-fit transition-colors"
                    onClick={() => setIseSidebarOpen(!isSideBarOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Menu
                        size={24}
                        className="text-gray-800 dark:text-gray-200"
                    />
                </motion.button>
                <nav className="mt-8 flex-grow">
                    {SIDBAR_ITEMS?.map((item) => (
                        <NavLink id="link" key={item.path} to={item.path}>
                            <motion.div className="flex items-center gap-2 p-4 text-sm font-medium rounded-lg hover:bg-blue-500 hover:bg-opacity-20 transition-colors mb-2">
                                <item.icon
                                    size={24}
                                    className="text-blue-600"
                                />
                                <AnimatePresence>
                                    {isSideBarOpen && (
                                        <motion.span
                                            className="whitespace-nowrap text-gray-800 dark:text-gray-200"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{
                                                opacity: 1,
                                                width: "auto",
                                            }}
                                            transition={{
                                                duration: 0.2,
                                                delay: 0.35,
                                            }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </motion.div>
    );
}
