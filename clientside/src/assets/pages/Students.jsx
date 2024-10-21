import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";

const STUDENTS_DATA = [
    {
        fullName: "Sarah Thompson",
        email: "sarah.thompson@email.com",
        phone: "+1-555-123-4567",
        enrollNumber: "20231001",
        dataOfAdmission: "2023-09-01",
    },
    {
        fullName: "John Miller",
        email: "john.miller@email.com",
        phone: "+1-555-345-6789",
        enrollNumber: "20231002",
        dataOfAdmission: "2023-09-10",
    },
    {
        fullName: "Michael Anderson",
        email: "michael.anderson@email.com",
        phone: "+1-555-456-7890",
        enrollNumber: "20231003",
        dataOfAdmission: "2023-09-12",
    },
    {
        fullName: "Jessica Brown",
        email: "jessica.brown@email.com",
        phone: "+1-555-567-8901",
        enrollNumber: "20231004",
        dataOfAdmission: "2023-09-15",
    },
    {
        fullName: "Emily Johnson",
        email: "emily.johnson@email.com",
        phone: "+1-555-345-6789",
        enrollNumber: "20231005",
        dataOfAdmission: "2023-10-30",
    },
];

function Students() {
    const [showForm, isShowForm] = useState(false);
    const [errors, setErrors] = useState([]);
    const [fullName, isFullName] = useState("");
    const [email, isEmail] = useState("");
    const [phone, isPhone] = useState("");
    const [enrollNumber, isEnrollNumber] = useState("");
    const [date, isDate] = useState("");

    const addStudent = (event) => {
        event.preventDefault();
        const errors = addStudentValidate();
        setErrors(errors);
    };

    const addStudentValidate = () => {
        const error = {};

        // Full Name validation
        if (!fullName) {
            error.fullName = "Full Name is Required";
        } else if (fullName.length < 6) {
            error.fullName = "Full Name must be at least 6 characters";
        } else {
            error.fullName = "";
        }

        // Email validation
        if (!email) {
            error.email = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Invalid Email Format";
        } else {
            error.email = "";
        }

        // Phone number validation
        if (!phone) {
            error.phone = "Phone Number is Required";
        } else if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
            error.phone = "Invalid Phone Number";
        } else {
            error.phone = "";
        }

        // Enroll Number validation
        if (!enrollNumber) {
            error.enrollNumber = "Enroll Number is Required";
        } else if (!/^\d{8}$/.test(enrollNumber)) {
            error.enrollNumber = "Enroll Number must be 8 digits";
        } else {
            error.enrollNumber = "";
        }

        // Date of Admission validation
        if (!date) {
            error.date = "Date of Admission is Required";
        } else {
            const admissionDate = new Date(date);
            const currentDate = new Date();
            if (admissionDate > currentDate) {
                error.date = "Date of Admission cannot be in the future";
            } else {
                error.date = "";
            }
        }

        return error;
    };

    return (
        <>
            <div className="flex-1 relative overflow-auto z-10">
                <Header title={"Students"} />
                <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-wrap justify-between gap-8 "
                    >
                        <div className="w-full md:w-1/2 flex items-center gap-2 px-4 py-2 bg-gray-800 bg-opacity-70 backdrop-blur-md  rounded-xl overflow-hidden border border-gray-700 dark:bg-gray-900 dark:border-gray-600">
                            <input
                                type="text"
                                className="bg-transparent text-gray-200 placeholder-gray-400 outline-none w-full  dark:text-gray-300 dark:placeholder-gray-500"
                                placeholder="STUDENT FULL NAME"
                            />
                            <Search className="text-gray-200 dark:text-gray-300" />
                        </div>
                        <motion.button
                            onClick={() => {
                                isShowForm(true);
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-fit bg-blue-500 py-2 px-4 rounded-lg text-nowrap"
                        >
                            NEW STUDENT
                        </motion.button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        id="tableContainer"
                        className="relative overflow-x-auto my-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:rounded-lg"
                    >
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-nowrap"
                                    >
                                        Full Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-nowrap"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-nowrap"
                                    >
                                        Phone
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-nowrap"
                                    >
                                        Enroll Number
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-nowrap"
                                    >
                                        Date of admission
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-nowrap"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {STUDENTS_DATA?.map((student, index) => (
                                    <tr
                                        key={index}
                                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-nowrap"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {student.fullName}
                                        </th>
                                        <td className="px-6 py-4">
                                            {student.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            7305477760
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.dataOfAdmission}
                                        </td>
                                        <td className="px-6 py-4 flex items-center gap-2">
                                            <motion.a
                                                onClick={() => {
                                                    isShowForm(true);
                                                }}
                                                whileTap={{ scale: 0.85 }}
                                                className="text-blue-500 hover:text-gray-500"
                                            >
                                                <Pencil size={20} />
                                            </motion.a>
                                            <motion.a
                                                whileTap={{ scale: 0.85 }}
                                                className="text-blue-500 hover:text-gray-500"
                                            >
                                                <Trash size={20} />
                                            </motion.a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </main>
            </div>
            <div
                onClick={() => {
                    isShowForm(false);
                }}
                className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[100] cursor-pointer flex items-center justify-center ${
                    showForm ? "block" : "hidden"
                }`}
            ></div>
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-500 z-[10000] 
    ${showForm ? "block" : "hidden"}`}
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                    Student Information
                </h2>
                <form onSubmit={addStudent} className="space-y-4">
                    {/** Full Name Field **/}
                    <div>
                        <label
                            htmlFor="fullname"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.fullName && "border-red-500 dark:border-red-500"} 
                bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="John Doe"
                            onChange={(e) => isFullName(e.target.value)}
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.fullName}
                            </p>
                        )}
                    </div>

                    {/** Email Field **/}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.email && "border-red-500 dark:border-red-500"} 
                bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="you@example.com"
                            onChange={(e) => isEmail(e.target.value)}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/** Phone Field **/}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.phone && "border-red-500 dark:border-red-500"} 
                bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="+123456789"
                            onChange={(e) => isPhone(e.target.value)}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/** Enroll Number Field **/}
                    <div>
                        <label
                            htmlFor="enroll"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Enroll Number
                        </label>
                        <input
                            type="text"
                            id="enroll"
                            name="enroll"
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.enrollNumber && "border-red-500 dark:border-red-500"} 
                bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="20231001"
                            onChange={(e) => isEnrollNumber(e.target.value)}
                        />
                        {errors.enrollNumber && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.enrollNumber}
                            </p>
                        )}
                    </div>

                    {/** Date of Admission Field **/}
                    <div>
                        <label
                            htmlFor="admission"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Date of Admission
                        </label>
                        <input
                            type="date"
                            id="admission"
                            name="admission"
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.date && "border-red-500 dark:border-red-500"} 
                text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            onChange={(e) => isDate(e.target.value)}
                        />
                        {errors.date && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.date}
                            </p>
                        )}
                    </div>

                    {/** Submit Button **/}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                        >
                            ADD STUDENT
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Students;
