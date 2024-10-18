import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Trash } from "lucide-react";
import { useState } from "react";

const courses = [
    {
        name: "Mastering Web Development",
        imgUrl: "https://aptlearn.io/wp-content/uploads/2022/11/html_css_for_web_dev_final1.png",
        description:
            "Learn how to build professional websites with HTML, CSS, and JavaScript.",
        price: "99",
    },
    {
        name: "Data Science for Beginners",
        imgUrl: "https://microsoft.github.io/Data-Science-For-Beginners/sketchnotes/00-Title.png",
        description:
            "An introductory course to Data Science, including Python and R programming.",
        price: "120",
    },
    {
        name: "Graphic Design Essentials",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPspKWzU0xlXOIY2i1_Q6rIiYLyuZSYH4B-w&s",
        description:
            "Master the tools of Adobe Photoshop, Illustrator, and InDesign.",
        price: "85",
    },
];

function Course() {
    const [showForm, isShowForm] = useState(false);
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [content, setContent] = useState("");
    const [price, setPrice] = useState("");

    const addCourse = (event) => {
        event.preventDefault();
        const errors = addBlogValidate();
        setErrors(errors);
    };

    const addBlogValidate = () => {
        const error = {};
        // Title validation
        if (!title) {
            error.title = "Title is required";
        } else if (title.length < 6) {
            error.title = "Title must be at least 6 characters";
        }

        // Image URL validation
        if (!imageUrl) {
            error.imageUrl = "Image URL is required";
        } else if (!imageUrl.startsWith("http")) {
            error.imageUrl = "Invalid Image URL format";
        }

        // Content validation
        if (!content) {
            error.content = "Content is required";
        } else if (content.length < 10) {
            error.content = "Content must be at least 10 characters";
        }
        // Price validation
        if (!price) {
            error.price = "Price is required";
        } else {
            const numericPrice = parseFloat(price);
            if (isNaN(numericPrice) || numericPrice <= 0) {
                error.price = "Price must be a positive number";
            }
        }

        return error;
    };

    return (
        <>
            <div className="flex-1 relative overflow-auto z-10">
                <Header title={"Courses"} />
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
                                placeholder="COURSE TITLE"
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
                            NEW COURSE
                        </motion.button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        id="tableContainer"
                        className="relative overflow-x-auto my-2 py-4  sm:rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4  " // {flex flex-wrap  justify-center items-stretch}
                    >
                        {courses?.map((course, index) => (
                            <div
                                key={index}
                                className="flex flex-col group relative max-w-md rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 mx-auto transform"
                            >
                                <button
                                    className="absolute text-gray-900 dark:text-gray-100 bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 z-50 top-5 -right-14 cursor-pointer py-2 pr-4 pl-2 rounded-tl-md rounded-bl-md focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 transition-all duration-300 ease-in-out group-hover:right-0"
                                    aria-label="Delete"
                                >
                                    <Trash size={20} />
                                </button>
                                <div className="relative w-full h-[220px] overflow-hidden rounded-t-lg">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                                        src={course.imgUrl}
                                        alt={course.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>{" "}
                                    {/* Gradient overlay */}
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                            New
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="font-bold text-2xl mb-2 text-gray-900 dark:text-gray-100">
                                        {course.name}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
                                        {course.description}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center px-6 pb-6 mt-auto">
                                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                                        ${course.price}
                                        {/* Format price as a number */}
                                    </p>
                                    <button
                                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all flex items-center space-x-2"
                                        aria-label="Buy"
                                    >
                                        <ShoppingCart size={20} />
                                        <span>Buy Now</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </main>
            </div>
            {/* black w-screen */}
            <div
                onClick={() => {
                    isShowForm(false);
                }}
                className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[100] cursor-pointer flex items-center justify-center ${
                    showForm ? "block" : "hidden"
                }`}
            ></div>
            {/* form  */}
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-500 z-[10000]
    ${showForm ? "block" : "hidden"}`}
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                    blog Information
                </h2>
                <form onSubmit={addCourse} className="space-y-4">
                    {/** Title Field **/}
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3
                        ${errors.title && "border-red-500 dark:border-red-500"}
                        bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                        focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="Enter Course Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    {/** Image URL Field **/}
                    <div>
                        <label
                            htmlFor="imageUrl"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3
                        ${
                            errors.imageUrl &&
                            "border-red-500 dark:border-red-500"
                        }
                        bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                        focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="https://example.com/image.jpg"
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                        {errors.imageUrl && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.imageUrl}
                            </p>
                        )}
                    </div>

                    {/** Content Field **/}
                    <div>
                        <label
                            htmlFor="content"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            rows="4"
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3
                        ${
                            errors.content &&
                            "border-red-500 dark:border-red-500"
                        }
                        bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                        focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="Write your course description..."
                            onChange={(e) => setContent(e.target.value)}
                        />
                        {errors.content && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.content}
                            </p>
                        )}
                    </div>

                    {/** Price Field **/}
                    <div>
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3
                        ${errors.price && "border-red-500 dark:border-red-500"}
                        bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
                        focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="Enter Course Price"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        {errors.price && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.price}
                            </p>
                        )}
                    </div>

                    {/** Submit Button **/}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                        >
                            ADD COURSE
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Course;
