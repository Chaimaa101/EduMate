import { LogOut, Moon, Sun, } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../ThemeContext/ThemeContext";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "../../pages/UserContext";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function Header({ title }) {
    const [showEmail, setShowEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const {user} = useUser();
const handleLogout = () => {
    try {
    setShowAlert(true);
    setShowEmail(false);
    setUser(null);
   
  } catch (error) {
    console.error("Error logging out:", error);
    // Optionally show an alert or handle error in the UI
  }
}
    const confirmLogout = async() => {
            try {
        const token = localStorage.getItem("token"); // Retrieve the token
        if (!token) {
            toast.error("No token found, please log in again.");
            navigate("/signin");
            return;
        }

        const res = await axios.post(
            "http://localhost:8000/api/logout",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log(res.data); // Log the response
        toast.success("You have successfully logged out!");
        
        // Clear user data and token
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        toast.success("You have successfully logged out!");
        setTimeout(() => {
            navigate("/signin");
        }, 600);
    } catch (error) {
        console.error("Error logging out:", error);
        toast.error("Failed to log out. Please try again.");
    }
};
    const { theme, toggleTheme } = useTheme();

    const handleSwitchTheme = () => {
        toggleTheme()
        const newTheme = theme === "dark" ? "light" : "dark"; // Assuming these are your themes
        toast(`Switched to ${newTheme} theme!`, {
            icon: '🎨',
            style: {
                borderRadius: '10px',
                background: '#ffffff', // Light background
                color: '#333333', // Dark text color
                padding: '10px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
            },
        });
    }

    return (
        <>
            <Toaster />
            <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 py-2.5 px-8 border-b border-gray-300 dark:border-gray-700 relative">
                <p className="font-semibold text-lg text-gray-800 dark:text-white">
                    {title}
                </p>
                <div className="flex gap-5 items-center">
                    <button
                        id="theme-toggle"
                        className="text-gray-800 dark:text-gray-200"
                        onClick={handleSwitchTheme}
                    >
                        {theme === "dark" ? (
                            <Sun size={30} />
                        ) : (
                            <Moon size={30} />
                        )}
                    </button>
                    <div
                        onClick={() => setShowEmail((prev) => !prev)}
                        className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full cursor-pointer"
                    >
                        <span className="font-semibold text-lg text-white">
                          {(user.firstname.charAt(0).toUpperCase() || " ")}{(user.lastname.charAt(0).toUpperCase() || " ")}


                        </span>
                    </div>
                </div>
                {showEmail && (
                    <div className="absolute py-4 px-4 top-[70px] right-4 bg-gray-200 dark:bg-gray-800 z-20 border-2 border-gray-300 dark:border-white rounded-md">
                        <div className="border-b pb-3 border-gray-300 dark:border-gray-600">
                            <p className="font-bold text-gray-800 dark:text-white">
                                {user.firstname } {user.lastname}
                            </p>
                            <small className="font-semibold text-gray-600 dark:text-gray-400">
                               {user.email}
                            </small>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex justify-left items-center gap-1 text-blue-500 mt-2"
                        >
                            Logout
                            <LogOut size={15} style={{ marginTop: "3px" }} />
                        </button>
                    </div>
                )}
            </div>
            {showAlert && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-20">
                    <div className="bg-gray-200 dark:bg-gray-800 py-4 px-8 rounded-lg shadow-lg z-[10000]">
                        <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
                            Confirm logout
                        </h2>
                        <hr className="border-gray-300 dark:border-gray-600" />
                        <p className="text-gray-800 dark:text-white py-2">
                            Are you sure you want to log out?
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={confirmLogout}
                            >
                                Yes
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setShowAlert(false)}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
