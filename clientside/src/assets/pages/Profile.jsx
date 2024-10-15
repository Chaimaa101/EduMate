import { motion } from "framer-motion";
import Header from "../components/common/Header";

export default function Profile() {
    return (
        <div className="flex-1  relative overflow-auto z-10">
            <Header title={"Profile"} />
            <main className="max-w-7xl mx-auto  py-6 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.2 }}
                    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl overflow-hidden border border-gray-700"
                >
                    <form className="w-full flex flex-col gap-4 px-6 py-3">
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-lg font-semibold"
                                htmlFor="firstName"
                            >
                                First Name :
                            </label>
                            <input
                                className="bg-gray-500 px-1 py-2 rounded-md outline-none ring-1 ring-white focus:ring-2 focus:ring-white focus:bg-blue-900/10 font-medium text-lg"
                                type="text"
                                name=""
                                id="firstName"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-lg font-semibold"
                                htmlFor="lastName"
                            >
                                Last Name :
                            </label>
                            <input
                                className="bg-gray-500 px-1 py-2 rounded-md outline-none ring-1 ring-white focus:ring-2 focus:ring-white focus:bg-blue-900/10 font-medium text-lg"
                                type="text"
                                name=""
                                id="lastName"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-lg font-semibold"
                                htmlFor="email"
                            >
                                Email :
                            </label>
                            <input
                                className="bg-gray-500 px-1 py-2 rounded-md outline-none ring-1 ring-white focus:ring-2 focus:ring-white focus:bg-blue-900/10 font-medium text-lg"
                                type="email"
                                name=""
                                id="email"
                            />
                        </div>
                        <motion.input
                            whileTap={{ scale: 0.9 }}
                            className="border-[1.5px] rounded-md text-blue-500 border-blue-500 w-fit px-4 py-2 font-semibold hover:bg-blue-500 hover:text-white cursor-pointer"
                            type="submit"
                            value="Update"
                        />
                    </form>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.2 }}
                    className="flex flex-col gap-4 p-8 items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl overflow-hidden border border-gray-700"
                >
                    <div className="w-20 h-20 bg-blue-500  flex items-center justify-center rounded-full cursor-pointer">
                        <span className="font-semibold text-3xl">YB</span>
                    </div>
                    <h3 className="font-bold text-3xl">Younes Boukrim</h3>
                    <p className="font-semibold text-base">younes@gmail.com</p>
                </motion.div>
            </main>
        </div>
    );
}
