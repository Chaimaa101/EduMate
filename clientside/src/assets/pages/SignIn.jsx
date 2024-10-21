import { Eye, EyeClosed } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { axiosClient } from "../../api/axios";

function SignIn() {
  const [isColse, setIsColse] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  // This is for show Password
  const toggleEye = () => {
    const passwordInput = document.querySelector("#password");
    console.log(passwordInput.value);
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      setIsColse(!isColse);
    } else {
      passwordInput.type = "password";
      setIsColse(!isColse);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
        navigate("/dashboard");
    
  };


  const validate = () => {
    const error = {};
    if (!email) {
      error.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email not Matched";
    } else {
      error.email = "";
    }

    if (!password) {
      error.password = "Password is Required";
    } else if (password.length < 8) {
      error.password = "Password not Matched";
    } else {
      error.password = "";
    }
    return error;
  };
  
  return (
    <div className="w-screen h-screen bg-gray-900 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="bg-white p-4 rounded-2xl w-[400px]"
      >
        <div className=" mb-8 flex items-center justify-center gap-1">
          <span className="h-8 w-[6px] bg-blue-500 block"></span>
          <h1 className="text-3xl font-bold">EduMate</h1>
        </div>
        <h4 className="text-lg font-bold uppercase text-center mb-1">
          Sign In
        </h4>
        <p className="text-sm text-center text-gray-600 mb-5">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <label
              className="font-semibold text-sm text-gray-500 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`${
                errors.email && "border-red-500"
              }  border-gray-300  w-full border-[1.5px]   p-2 rounded-sm text-gray-400 text-sm outline-none focus:border-2  placeholder:text-sm `}
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm font-thin pl-1">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              className="font-semibold text-sm text-gray-500 mb-1"
              htmlFor="email"
            >
              Password
            </label>
            <div className="relative">
              <input
                className={`w-full border-[1.5px]  border-gray-300 p-2 rounded-sm text-gray-400 text-sm outline-none focus:border-2 ${
                  errors.password && "border-red-500"
                } placeholder:text-sm `}
                type="password"
                name="password"
                value={password}
                id="password"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm font-thin pl-1">
                  {errors.password}
                </p>
              )}
              <span
                onClick={() => {
                  toggleEye();
                }}
                className="absolute text-gray-400 top-[10px] right-[8px] cursor-pointer"
              >
                {isColse ? <EyeClosed size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>
          <motion.input
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 p-2 text-white uppercase font-normal cursor-pointer rounded-sm"
            type="submit"
            value="sign in"
          />
        </form>
        <p className="text-center text-xs mt-2">
          Forgot your password?{" "}
          <Link
            to='/rasetpassword'
            className="text-blue-500 underline cursor-pointer"
          >
            Reset Password
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignIn;
