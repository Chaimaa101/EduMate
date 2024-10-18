import { LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Header({ title }) {
    const [showEmail, setShowEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-800 py-2.5 px-8 border-b border-gray-300 dark:border-gray-700 relative">
                <p className="font-semibold text-lg text-gray-800 dark:text-white">
                    {title}
                </p>
                <div
                    onClick={() => setShowEmail(!showEmail)}
                    className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full cursor-pointer"
                >
                    <span className="font-semibold text-lg text-white">YB</span>
                </div>
                <div
                    id="logout"
                    className={`absolute py-4 px-4 top-[70px] right-4 bg-gray-200 dark:bg-gray-800 z-20 border-2 border-gray-300 dark:border-white rounded-md
        ${showEmail ? "block" : "hidden"}
        `}
                >
                    <div className="border-b pb-3 border-gray-300 dark:border-gray-600">
                        <p className="font-bold text-gray-800 dark:text-white">
                            Younes Boukrim
                        </p>
                        <small className="font-semibold text-gray-600 dark:text-gray-400">
                            younes@gmail.com
                        </small>
                    </div>
                    <button
                        onClick={() => {
                            setShowAlert(true);
                            setShowEmail(false);
                        }}
                        className="flex justify-left items-center gap-1 text-blue-500 mt-2"
                    >
                        Logout
                        <LogOut size={15} style={{ marginTop: "3px" }} />
                    </button>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-20 ${
                    showAlert ? "block" : "hidden"
                }`}
            >
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
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Yes
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                setShowAlert(false);
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
