import { Eye, EyeClosed } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
// import axios from "axios";

function SignIn() {
    const [isColse, setIsColse] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
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

   const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
        if (errors.email) toast.error(errors.email);
        if (errors.password) toast.error(errors.password);
        return;
    }

    const formData = {
        email: email,
        password: password,
    };

    try {
        const response = await axios.post('http://localhost:8000/api/login', formData);

        // Save token and user data
         const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user))

        toast.success("Sign in successful!");
        setTimeout(() => {
            navigate("/Profile");
        }, 600);
    } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message);

        if (error.response?.status === 401) {
            toast.error("Invalid credentials. Please try again.");
        } else {
            toast.error("An unexpected error occurred.");
        }
    }
};
const validate = () => {
    const errors = {};

    // Check if email is entered
    if (!email) {
        errors.email = "Email is required";
    } else {
        // Check if email format is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = "Please enter a valid email address";
        }
    }

    // Check if password is entered
    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }

    return errors;
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
                        Sign In
                    </h4>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-2">
                        Enter your credentials to access your account
                    </p>
                    <div className="flex flex-col justify-center items-center mb-5">
                        <p className="text-sm font-semibold italic text-gray-800 dark:text-gray-200">
                            <strong>Email:</strong> firstname.  lastname@domain.com
                        </p>
                        <p className="text-sm font-semibold italic text-gray-800 dark:text-gray-200">
                            <strong>Password:</strong> firstname@123456
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        method="POST"
                        className="flex flex-col gap-y-3"
                    >
                        <div className="flex flex-col">
                            <label
                                className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-1"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className={`${
                                    errors.email
                                        ? "border-red-600"
                                        : "border-gray-300 dark:border-gray-500"
                                } w-full border-[1.5px] p-2 rounded-sm text-gray-800 dark:text-gray-200 text-sm outline-none focus:border-2 placeholder:text-sm dark:bg-gray-700`}
                                type="email"
                                value={email}
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm font-thin pl-1">
                                    {errors.email}
                                </p>
                            )}
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
                                    className={`${
                                        errors.password
                                            ? "border-red-600"
                                            : "border-gray-300 dark:border-gray-500"
                                    } w-full border-[1.5px] p-2 rounded-sm text-gray-800 dark:text-gray-200 text-sm outline-none focus:border-2 placeholder:text-sm dark:bg-gray-700`}
                                    type="password"
                                    name="password"
                                    value={password}
                                    id="password"
                                    placeholder="Enter your password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <p className="text-red-600 text-sm font-thin pl-1">
                                        {errors.password}
                                    </p>
                                )}
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
                            <Link
                                to={"/resetpassword"}
                                className="ml-auto text-xs mt-2 text-blue-600 dark:text-blue-400  w-fit"
                            >
                                Forget password ?
                            </Link>
                        </div>
                        <motion.input
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 dark:bg-blue-400 p-2 text-white dark:text-gray-900 uppercase font-normal cursor-pointer rounded-sm"
                            type="submit"
                            value="sign in"
                        />
                    </form>
                    <p className="text-center text-xs mt-2 text-gray-600 dark:text-gray-400">
                        Don&apos;t have an accounte?{" "}
                        <Link
                            to="/"
                            className="text-blue-600 dark:text-blue-400 underline cursor-pointer"
                        >
                            Create new one
                        </Link>
                    </p>
                </motion.div>
            </div>
        </>
    );
}

export default SignIn;
