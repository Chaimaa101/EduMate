import { Eye, EyeClosed } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "./UserContext";
import axios from "axios";

function SignUp() {
    const [isColse, setIsColse] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [errors, setErrors] = useState([]);
    const { setUser } = useUser();
    const navigate = useNavigate();


    const toggleEye = () => {
        const passwordInput = document.querySelector("#password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
        setIsColse(!isColse);
    };
    const userData = {
        firstname: firstname,
        lastname: lastname,
        email: `${firstname}.${lastname}@domain.com`,
        password: `${firstname}@123456`
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);


        try {

            const res = await axios.post("http://localhost:8000/api/createUser", userData);
            console.log("New User Added:", res.data.data);

            setUser(userData);
            setfirstname("");
            setlastname("");

            setErrors({});
            toast.success("Sign up successful!");

            setTimeout(() => {
                navigate("/Profile");
            }, 600);

        } catch (error) {
            console.error("Error creating User:", error);
            toast.error("An error occurred while creating the User.");
        }
    };


    const validate = () => {
        const error = {};
        if (!firstname || firstname.trim() === "") {
            error.firstname = "First Name is required";
        } else if (firstname.length < 3) {
            error.firstname = "First Name must be 3 characters";
        } else if (/\d/.test(firstname)) {
            error.firstname = `Firse Name cannot contain numbers`;
        }

        if (!lastname || lastname.trim() === "") {
            error.lastname = "Last Name is required";
        } else if (lastname.length < 3) {
            error.lastname = "Last Name must be 3 characters";
        } else if (/\d/.test(lastname)) {
            error.lastname = `Last Name cannot contain numbers`;
        }

        // Validate Email
        if (!email || email.trim() === "") {
            error.email = "Email is Required";
        } else {
            const expectedEmail = `${firstname}.${lastname}@domain.com`;
            if (email !== expectedEmail) {
                error.email = `Email must be '${expectedEmail}'`;
            }
        }

        // Validate Password
        if (!password || password.trim() === "") {
            error.password = "Password is Required";
        } else {
            const expectedPassword = `${firstname}@123456`; // Password format: firstname@123456
            if (password !== expectedPassword) {
                error.password = `Password must be '${expectedPassword}'`;
            }
        }

        return error;
    };

    return (
        <>
            <Toaster />
            <div className="w-screen h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-2xl w-[400px]"
                >
                    <div className="mb-8 flex items-center justify-center gap-1">
                        <span className="h-8 w-[6px] bg-blue-600 dark:bg-blue-400 block"></span>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                            EduMate
                        </h1>
                    </div>
                    <h4 className="text-lg font-bold uppercase text-center mb-1 text-gray-800 dark:text-gray-200">
                        Sign Up
                    </h4>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-2">
                        Enter your credentials to access your account
                    </p>
                    <div className="flex flex-col justify-center items-center mb-5">
                        <p className="text-sm font-semibold italic text-gray-800 dark:text-gray-200">
                            <strong>Email:</strong> firastname.lastname@domain.com
                        </p>
                        <p className="text-sm font-semibold italic text-gray-800 dark:text-gray-200">
                            <strong>Password:</strong> firstname@123456
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-y-3"
                    >
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col">
                                <label
                                    className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-1"
                                    htmlFor="firstname"
                                >
                                    First Name
                                </label>
                                <input
                                    className={`${errors.firstname
                                        ? "border-red-600"
                                        : "border-gray-300 dark:border-gray-500"
                                        } w-full border-[1.5px] p-2 rounded-sm text-gray-800 dark:text-gray-200 text-sm outline-none focus:border-2 placeholder:text-sm dark:bg-gray-700`}
                                    type="text"
                                    value={firstname}
                                    name="firstname"
                                    id="firstname"
                                    placeholder="Enter your first name"
                                    onChange={(e) =>
                                        setfirstname(e.target.value)
                                    }
                                />
                                {errors.firstname && (
                                    <p className="text-red-600 text-sm font-thin pl-1">
                                        {errors.firstname}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label
                                    className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-1"
                                    htmlFor="lastname"
                                >
                                    Last Name
                                </label>
                                <input
                                    className={`${errors.lastname
                                        ? "border-red-600"
                                        : "border-gray-300 dark:border-gray-500"
                                        } w-full border-[1.5px] p-2 rounded-sm text-gray-800 dark:text-gray-200 text-sm outline-none focus:border-2 placeholder:text-sm dark:bg-gray-700`}
                                    type="text"
                                    value={lastname}
                                    name="lastname"
                                    id="lastname"
                                    placeholder="Enter your last name"
                                    onChange={(e) =>
                                        setlastname(e.target.value)
                                    }
                                />
                                {errors.lastname && (
                                    <p className="text-red-600 text-sm font-thin pl-1">
                                        {errors.lastname}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label
                                className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-1"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="w-full border-[1.5px] p-2 rounded-sm text-gray-800 dark:text-gray-200 text-sm outline-none focus:border-2 placeholder:text-sm dark:bg-gray-700"
                                type="email"
                                value={userData.email}
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                readOnly
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-1"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="w-full border-[1.5px] p-2 rounded-sm text-gray-800 dark:text-gray-200 text-sm outline-none focus:border-2 placeholder:text-sm dark:bg-gray-700"
                                    type="password"
                                    name="password"
                                    value={userData.password}
                                    id="password"
                                    placeholder="Enter your password"
                                    readOnly
                                />
                                <span
                                    onClick={toggleEye}
                                    className="absolute text-gray-500 dark:text-gray-400 top-[10px] right-[8px] cursor-pointer"
                                >
                                    {isColse ? (
                                        <EyeClosed size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </span>
                            </div>
                        </div>

                        <motion.input
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 dark:bg-blue-400 p-2 text-white dark:text-gray-900 uppercase font-normal cursor-pointer rounded-sm"
                            type="submit"
                            value="sign Up"
                        />
                    </form>
                    <p className="text-center text-xs mt-2 text-gray-600 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link
                            to="/signin"
                            className="text-blue-600 dark:text-blue-400 underline cursor-pointer"
                        >
                            Sign in
                        </Link>
                    </p>
                </motion.div>
            </div>
        </>
    );
}

export default SignUp;
