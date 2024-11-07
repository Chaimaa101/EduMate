import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Students() {
    const [showFormAdd, isShowFormAdd] = useState(false);
    const [showFormEdit, isShowFormEdit] = useState(false);
    const [errors, setErrors] = useState([]);
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [phone, setPhone] = useState("");
    const [dateAdmission, setDate] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [students, setStudents] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const [updatefirstname, setupdatefirstname] = useState("");
    const [updatelastname, setupdatelastname] = useState("");
    const [updatephone, setupdatePhone] = useState("");
    const [updatedateAdmission, setupsateDate] = useState("");

    const fetchStudents = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/students"
            );
            setStudents(response.data.data);
            console.log(response);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/students/${id}`);
            console.log("Student deleted successfully");
            fetchStudents();
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    const updateStudent = (student) => {
        setupdatefirstname(student.firstname);
        setupdatelastname(student.lastname);
        setupdatePhone(student.phone);
        setupdateDate(student.dateAdmission);
        setSelectedStudentId(student.id); // Set the selected student ID
        isShowFormEdit(true); // Show the edit form
    };

    const editStudent = async (event) => {
        event.preventDefault();
        const errors = addStudentValidate();
        setErrors(errors);

        try {
            const studentData = {
                firstname,
                lastname,
                phone,
                dateAdmission,
            };
            const res = await axios.put(`http://localhost:8000/api/students/${selectedStudentId}`, studentData);
            console.log("Student updated successfully: ", res.data.data);
            fetchStudents();
            resetForm();
            isShowFormEdit(false); // Hide the edit form
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    const addStudent = async (event) => {
        event.preventDefault();
        const errors = addStudentValidate();
        setErrors(errors);
        try {
            const studentData = {
                firstname,
                lastname,
                phone,
                dateAdmission,
            };
            const res = await axios.post(
                "http://localhost:8000/api/students",
                studentData
            );
            console.log("New Student Added:", res.data.data);
            fetchStudents();

            setfirstname("");
            setlastname("");
            setPhone("");
            setDate("");
        } catch (error) {
            console.error("Error creating Student:", error);
        }
        if (Object.keys(errors).length === 0) {
            isShowFormAdd(false);
            isShowFormEdit(false);
            toast.success("Task completed successfully");
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const addStudentValidate = () => {
        const error = {};

        // Full Name validation
        if (!firstname) {
            error.firstname = "First Name is Required";
        } else if (firstname.length < 6) {
            error.firstname = "First Name must be at least 6 characters";
        } else {
            error.firstname = "";
        }

        // lastname validation
        if (!lastname) {
            error.lastname = "Last Name is Required";
        } else if (lastname.length < 6) {
            error.lastnameame = "Last Name must be at least 6 characters";
        } else {
            error.lastname = "";
        }

        // Phone number validation
        if (!phone) {
            error.phone = "Phone Number is Required";
        } else if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
            error.phone = "Invalid Phone Number";
        } else {
            error.phone = "";
        }

        // Date of DateAdmission validation
        if (!dateAdmission) {
            error.dateAdmission = "Date of Admission is Required";
        } else {
            const admissionDate = new Date(dateAdmission);
            const currentDate = new Date();

            if (admissionDate > currentDate) {
                error.dateAdmission =
                    "Date of Admission cannot be in the future";
            } else {
                error.dateAdmission = "";
            }
        }

        return error;
    };

    const filteredStudents = useMemo(() => {
        return Array.isArray(students)
            ? students.filter((student) =>
                student.firstname
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
            : [];
    }, [students, searchTerm]);

    return (
        <>
            <Toaster />
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
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}
                            />
                            <Search className="text-gray-200 dark:text-gray-300" />
                        </div>
                        <motion.button
                            onClick={() => {
                                isShowFormAdd(true);
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
                                        Id
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-nowrap"
                                    >
                                        First Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-nowrap"
                                    >
                                        Last Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-nowrap"
                                    >
                                        phone
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
                                {filteredStudents.length > 0 ? (
                                    filteredStudents.map((student, index) => (
                                        <tr
                                            key={index}
                                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-nowrap"
                                        >
                                            <td
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {index + 1}
                                            </td>
                                            <td
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {student.firstname}
                                            </td>
                                            <td className="px-6 py-4">
                                                {student.lastname}
                                            </td>
                                            <td className="px-6 py-4">
                                                {student.phone}
                                            </td>
                                            <td className="px-6 py-4">
                                                {student.dateAdmission}
                                            </td>
                                            <td className="px-6 py-4 flex items-center gap-2">
                                                <motion.a
                                                    onClick={() => {
                                                        isShowFormEdit(true);
                                                        updateStudent(student)
                                                    }}
                                                    whileTap={{ scale: 0.85 }}
                                                    className="text-blue-500 hover:text-gray-500"
                                                >
                                                    <Pencil size={20} />
                                                </motion.a>
                                                <motion.a
                                                    onClick={() =>
                                                        deleteStudent(
                                                            student.id
                                                        )
                                                    }
                                                    whileTap={{ scale: 0.85 }}
                                                    className="text-blue-500 hover:text-gray-500"
                                                >
                                                    <Trash size={20} />
                                                </motion.a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="text-center py-4"
                                        >
                                            No students found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </motion.div>
                </main>
            </div>

            {/* This is Add form */}
            <div
                onClick={() => {
                    isShowFormAdd(false);
                }}
                className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[100] cursor-pointer flex items-center justify-center ${showFormAdd ? "block" : "hidden"
                    }`}
            ></div>
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-500 z-[10000] 
    ${showFormAdd ? "block" : "hidden"}`}
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                    Student Information
                </h2>
                <form onSubmit={addStudent} className="space-y-4">
                    {/** Full Name Field **/}
                    <div>
                        <label
                            htmlFor="firstname"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={firstname}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.firstname && "border-red-500 dark:border-red-500"} 
                bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="John Doe"
                            onChange={(e) => setfirstname(e.target.value)}
                        />
                        {errors.firstname && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.firstname}
                            </p>
                        )}
                    </div>

                    {/** lastname Field **/}
                    <div>
                        <label
                            htmlFor="lastname"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={lastname}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.lastname && "border-red-500 dark:border-red-500"} 
                bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="you@example.com"
                            onChange={(e) => setlastname(e.target.value)}
                        />
                        {errors.lastname && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.lastname}
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
                            value={phone}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.phone && "border-red-500 dark:border-red-500"} 
                bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="+123456789"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.phone}
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
                            name="dateAdmission"
                            value={dateAdmission}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.date && "border-red-500 dark:border-red-500"} 
                text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            onChange={(e) => setDate(e.target.value)}
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
            {/* This is Edit form */}
            <div
                onClick={() => {
                    isShowFormEdit(false);
                }}
                className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[100] cursor-pointer flex items-center justify-center ${showFormEdit ? "block" : "hidden"
                    }`}
            ></div>
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-500 z-[10000] 
    ${showFormEdit ? "block" : "hidden"}`}
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                    Student Information
                </h2>
                <form onSubmit={editStudent} className="space-y-4">
                    {/** Full Name Field **/}
                    <div>
                        <input type="hidden" value={selectedStudentId} />
                        <label
                            htmlFor="firstname"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={updatefirstname}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.firstname && "border-red-500 dark:border-red-500"} 
                bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="John Doe"
                            onChange={(e) => setupdatefirstname(e.target.value)}
                        />
                        {errors.firstname && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.firstname}
                            </p>
                        )}
                    </div>

                    {/** lastname Field **/}
                    <div>
                        <label
                            htmlFor="lastname"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={updatelastname}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.lastname && "border-red-500 dark:border-red-500"} 
                bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="you@example.com"
                            onChange={(e) => setupdatelastname(e.target.value)}
                        />
                        {errors.lastname && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.lastname}
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
                            value={updatephone}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.phone && "border-red-500 dark:border-red-500"} 
                bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="+123456789"
                            onChange={(e) => setupdatePhone(e.target.value)}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.phone}
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
                            name="dateAdmission"
                            value={updatedateAdmission}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
                ${errors.date && "border-red-500 dark:border-red-500"} 
                text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            onChange={(e) => setupdateDate(e.target.value)}
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
                            EDIT STUDENT
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Students;