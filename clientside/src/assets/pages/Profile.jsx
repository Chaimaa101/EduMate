import { motion } from "framer-motion";
import Header from "../components/common/Header";
import {useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "./UserContext";

export default function Profile() {

    const {user, setUser } = useUser();
    const [firstname, setfirstname] = useState(user?.firstname || ''); 
    const [lastname, setlastname] = useState(user?.lastname || '');
    const [email, setemail] = useState(user.email);
    const [password, setpassword] = useState(user.password);
    const [id, setId] = useState(user.id);


  useEffect(() => {
    // Check if user data is available in localStorage
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      // Parse the stored JSON string to get the user object
      setUser(JSON.parse(storedUser));
    } else {
      console.warn("No user data found in localStorage");
    }
  }, []);

const updateUser = async (e) => {
  e.preventDefault();

  try {
    const updatedUserData = {
      firstname : firstname,
      lastname: lastname,
      email: `${firstname}.${lastname}@domain.com`,
      password : `${firstname}@123456`,
    };

    const res = await axios.put(`http://localhost:8000/api/update/${id}`, updatedUserData);
    if (res.status === 200) {
      toast.success("Informations updated successfully!");
        if (typeof setUser === 'function') {
                    setUser((prevUser) => ({
                        ...prevUser,
                        ...updatedUserData,
                    }));
                }
    }
  } catch (error) {
    console.error("Error updating information:", error);
    toast.error("An error occurred while updating the User.");
  }
};


    
        return (
            <div className="flex-1 relative overflow-auto z-10">
                <Header title="Profile" />
                <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.2 }}
                        className="bg-white dark:bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700"
                    >
                        <form className="w-full flex flex-col gap-4 px-6 py-3" onSubmit={updateUser}>
                             <div className="flex flex-col gap-2">
                                 <label
                                    className="text-lg font-semibold text-gray-700 dark:text-gray-300"
                                    htmlFor="id"
                                >
                                    ID:
                                </label>
                                <input
                                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-1 py-2 rounded-md outline-none ring-1 ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-white font-medium text-lg"
                                    type="text"
                                    id="id"
                                    name="id"
                                    value={id}
                                    onChange={(e) =>
                                      setId(e.target.value)
                                    }
                                    readOnly
                                />
                             </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-lg font-semibold text-gray-700 dark:text-gray-300"
                                    htmlFor="firstName"
                                >
                                    First Name:
                                </label>
                                <input
                                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-1 py-2 rounded-md outline-none ring-1 ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-white font-medium text-lg"
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    value={firstname}
                                    onChange={(e) =>
                                      setfirstname(e.target.value)
                                    }
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-lg font-semibold text-gray-700 dark:text-gray-300"
                                    htmlFor="lastName"

                                >
                                    Last Name:
                                </label>
                                <input
                                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-1 py-2 rounded-md outline-none ring-1 ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-white font-medium text-lg"
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    value={lastname}
                                    onChange={(e) =>
                                        setlastname(e.target.value)
                                    }
                                />
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-lg font-semibold text-gray-700 dark:text-gray-300"
                                    htmlFor="email"
                                >
                                   Email:
                                </label>
                                <input
                                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-1 py-2 rounded-md outline-none ring-1 ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-white font-medium text-lg"
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={`${firstname}.${lastname}@domain.com`}
                                    onChange={(e) =>
                                        setemail(e.target.value)
                                    }
                                    readOnly
                                />
                            </div>


                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-lg font-semibold text-gray-700 dark:text-gray-300"
                                    htmlFor="password"
                                >
                                Password:
                                </label>
                                <input
                                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-1 py-2 rounded-md outline-none ring-1 ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-white font-medium text-lg"
                                    type="text"
                                    id="password"
                                    name="password"
                                    value={`${firstname}@123456`}
                                    onChange={(e) =>
                                        setpassword(e.target.value)
                                    }
                                    readOnly
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.input
                                whileTap={{ scale: 0.9 }}
                                className="border-[1.5px] rounded-md text-blue-500 dark:text-blue-400 border-blue-500 dark:border-blue-400 w-fit px-4 py-2 font-semibold hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white cursor-pointer"
                                type="submit"
                                value="Update"
                            />
                        </form>
                    </motion.div>

                    {/* User Info Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.2 }}
                        className="flex flex-col gap-4 p-8 items-center justify-center bg-white dark:bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700"
                    >
                        {/* Profile Picture */}
                        <div className="w-20 h-20 bg-blue-500 dark:bg-blue-400 flex items-center justify-center rounded-full cursor-pointer">
                            <span className="font-semibold text-3xl text-white">
                               {(firstname.charAt(0).toUpperCase() || " ")}{(lastname.charAt(0).toUpperCase() || " ")}

                            </span>
                        </div>

                        {/* User Name and Email */}
                        <h3 className="font-bold text-3xl text-gray-800 dark:text-white">
                            {firstname } {lastname}
                            
                        </h3>
                            <p className="font-semibold text-base text-gray-700 dark:text-gray-300">
                                    {user.email}
                            </p>
                    </motion.div>
                </main>
            </div>
        );
    }
