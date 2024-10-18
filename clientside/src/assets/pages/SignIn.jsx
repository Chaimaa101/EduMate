import { Eye, EyeClosed } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
    const [isColse, setIsColse] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    // Toggle show/hide password
    const toggleEye = () => {
        const passwordInput = document.querySelector("#password");
        passwordInput.type =
            passwordInput.type === "password" ? "text" : "password";
        setIsColse(!isColse);
    };

    // Validate form fields
    const handleSubmit = (event) => {
        event.preventDefault();
        const erros = validate();
        setErrors(erros);
        if (!erros.email && !erros.password) {
            navigate("/profile");
        }
    };

    const validate = () => {
        const error = {};
        if (!email) {
            error.email = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Email not Matched";
        }

        if (!password) {
            error.password = "Password is Required";
        } else if (password.length < 8) {
            error.password = "Password must be at least 8 characters";
        }
        return error;
    };

    return (
        <div className="w-screen h-screen bg-white dark:bg-gray-800 flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl w-[400px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
                <div className="mb-8 flex items-center justify-center gap-1">
                    <span className="h-8 w-[6px] bg-blue-500 block"></span>
                    <h1 className="text-3xl font-bold dark:text-white">
                        EduMate
                    </h1>
                </div>
                <h4 className="text-lg font-bold uppercase text-center mb-1 dark:text-gray-200">
                    Sign In
                </h4>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-5">
                    Enter your credentials to access your account
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-sm text-gray-500 dark:text-gray-300 mb-1"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className={`${
                                errors.email &&
                                "dark:border-red-500 border-red-500"
                            } border-gray-300 dark:border-gray-600 w-full border-[1.5px] p-2 rounded-sm text-gray-400 dark:bg-gray-800 dark:text-gray-300 text-sm outline-none focus:border-blue-500 placeholder:text-sm`}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-sm text-gray-500 dark:text-gray-300 mb-1"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className={`w-full border-[1.5px] border-gray-300 dark:border-gray-600 p-2 rounded-sm text-gray-400 dark:bg-gray-800 dark:text-gray-300 text-sm outline-none focus:border-blue-500 ${
                                    errors.password &&
                                    "dark:border-red-500 border-red-500"
                                } placeholder:text-sm`}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm font-normal pl-1">
                                    {errors.password}
                                </p>
                            )}
                            <span
                                onClick={toggleEye}
                                className="absolute text-gray-400 top-[10px] right-[8px] cursor-pointer"
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
                        className="bg-blue-500 dark:bg-blue-600 p-2 text-white uppercase font-normal cursor-pointer rounded-sm"
                        type="submit"
                        value="Sign In"
                    />
                </form>
                <p className="text-center text-xs mt-2 dark:text-gray-300">
                    Forgot your password?{" "}
                    <Link
                        to="/rasetpassword"
                        className="text-blue-500 dark:text-blue-400 underline cursor-pointer"
                    >
                        Reset Password
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}

export default SignIn;
