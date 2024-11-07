import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { Trash, Search } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Blog() {
    const [showFormAdd, isShowFormAdd] = useState(false);
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [tag1, setTag1] = useState("");
    const [tag2, setTag2] = useState("");
    const [tag3, setTag3] = useState("");
    const [blogs, setBlogs] = useState([]); 
    const [selectedBlogId, setSelectedBlogId] = useState(null); 

    const fetchBlogs = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/blogs");
            setBlogs(response.data.data);
            console.log("Fetched blogs:", response);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const deleteBlog = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/blogs/${id}`);
            console.log("Blog deleted successfully");
            fetchBlogs();
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    const addBlog = async (event) => {
        event.preventDefault();
        const errors = addBlogValidate();
        setErrors(errors);

        try {
            const blogData = {
                title,
                content,
                image,
                tag1,
                tag2,
                tag3,
            };
            const res = await axios.post(
                "http://localhost:8000/api/blogs",
                blogData
            );
            console.log("New Blog Added:", res.data.data);
            fetchBlogs();

            setTitle("");
            setContent("");
            setImage("");
            setTag1("");
            setTag2("");
            setTag3("");
        } catch (error) {
            console.error("Error creating blog:", error);
        }
        if (Object.keys(errors).length === 0) {
            isShowFormAdd(false);
            toast.success("Addition successful!");
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const addBlogValidate = () => {
        const error = {};

        // Title validation
        if (!title) {
            error.title = "Title is required";
        } else if (title.length < 6) {
            error.title = "Title must be at least 6 characters";
        }

        // Image validation
        if (!image) {
            error.image = "Image is required";
        } else if (!image.startsWith("http")) {
            error.image = "Invalid Image format";
        }

        // Content validation
        if (!content) {
            error.content = "Content is required";
        } else if (content.length < 10) {
            error.content = "Content must be at least 10 characters";
        }
        if (!tag1) {
            error.tag1 = "Tag 1 is required";
        } else if (tag1.length < 2) {
            error.tag1 = "Tag 1 must be at least 2 characters";
        }

        // Tag 2 validation
        if (!tag2) {
            error.tag2 = "Tag 2 is required";
        } else if (tag2.length < 2) {
            error.tag2 = "Tag 2 must be at least 2 characters";
        }

        // Tag 3 validation
        if (!tag3) {
            error.tag3 = "Tag 3 is required";
        } else if (tag3.length < 2) {
            error.tag3 = "Tag 3 must be at least 2 characters";
        }

        return error;
    };

    //  logic for search
    const filterBlogs = useMemo(() => {
        return Array.isArray(blogs)
            ? blogs.filter((blog) =>
                  blog.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
            : [];
    }, [blogs, searchTerm]);

    return (
        <>
            <Toaster />
            <div className="flex-1 relative overflow-auto z-10">
                <Header title={"Blogs"} />
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
                                placeholder="BLOG TITLE"
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
                            NEW BLOG
                        </motion.button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        id="tableContainer"
                        className="relative overflow-x-auto my-2 py-4  sm:rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4  " // {flex flex-wrap  justify-center items-stretch}
                    >
                        {filterBlogs.length > 0 ? (
                            filterBlogs.map((blog, index) => (
                                <div
                                    key={index}
                                    className="group relative max-w-md rounded overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white dark:bg-gray-800 transition-all duration-300 mx-auto"
                                >
                                    <button
                                        onClick={() => deleteBlog(blog.id)}
                                        className="absolute text-gray-900 dark:text-gray-100 bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 z-50 top-5 -right-14 cursor-pointer py-2 pr-4 pl-2 rounded-tl-md rounded-bl-md focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 transition-all duration-300 ease-in-out group-hover:right-0"
                                        aria-label="Delete"
                                    >
                                        <Trash size={20} />
                                    </button>
                                    <div className="w-full h-[220px] block">
                                        <img
                                            className="w-full h-full object-fill transition-transform duration-300 ease-in-out transform hover:scale-105"
                                            src={blog.image}
                                            alt="Blog Image"
                                        />
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
                                            {blog.title}
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-base">
                                            {blog.content}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                                            {blog.tag1}
                                        </span>
                                        <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                                            {blog.tag2}
                                        </span>
                                        <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            {blog.tag3}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="mx-auto col-start-1 col-end-7">
                                <p className="text-center py-4 text-[#9ca3af]">
                                    No blogs found.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </main>
            </div>
            {/* -------------------------------------------------- Add form -------------------------------------------- */}
            {/* black w-screen */}
            <div
                onClick={() => {
                    isShowFormAdd(false);
                }}
                className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[100] cursor-pointer flex items-center justify-center ${
                    showFormAdd ? "block" : "hidden"
                }`}
            ></div>
            {/* form  */}
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-500 z-[10000] 
    ${showFormAdd ? "block" : "hidden"}`}
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                    blog Information
                </h2>
                <form onSubmit={addBlog} className="space-y-4">
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
                            value={title}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
            ${errors.title && "border-red-500 dark:border-red-500"} 
            bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
            focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="Enter Blog Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    {/** Image Field **/}
                    <div>
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Image
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={image}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
            ${errors.image && "border-red-500 dark:border-red-500"} 
            bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
            focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="https://example.com/image.jpg"
                            onChange={(e) => setImage(e.target.value)}
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.image}
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
                            value={content}
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
            ${errors.content && "border-red-500 dark:border-red-500"} 
            bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
            focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="Write your blog content..."
                            onChange={(e) => setContent(e.target.value)}
                        />
                        {errors.content && (
                            <p className="text-red-500 text-sm font-normal pl-1">
                                {errors.content}
                            </p>
                        )}
                    </div>

                    {/* Tag Field */}
                    <div className="grid grid-cols-3 gap-1">
                        <div>
                            <label
                                htmlFor="tag1"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Tag 1
                            </label>
                            <input
                                type="text"
                                id="tag1"
                                name="tag1"
                                value={tag1}
                                className={`
                                ${
                                    errors.tag1 &&
                                    "border-red-500 dark:border-red-500"
                                } 
                                mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                                placeholder="tag1"
                                onChange={(e) => setTag1(e.target.value)}
                            />
                            {errors.tag1 && (
                                <p className="text-red-500 text-sm font-normal pl-1">
                                    {errors.tag1}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="tag2"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Tag 2
                            </label>
                            <input
                                type="text"
                                id="tag2"
                                name="tag2"
                                value={tag2}
                                className={`
                                ${
                                    errors.tag2 &&
                                    "border-red-500 dark:border-red-500"
                                } 
                                mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                                placeholder="tag2"
                                onChange={(e) => setTag2(e.target.value)}
                            />
                            {errors.tag2 && (
                                <p className="text-red-500 text-sm font-normal pl-1">
                                    {errors.tag2}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="tag3"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Tag 3
                            </label>
                            <input
                                type="text"
                                id="tag3"
                                name="tag3"
                                value={tag3}
                                className={`
                                ${
                                    errors.tag3 &&
                                    "border-red-500 dark:border-red-500"
                                } 
                                mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                                placeholder="tag3"
                                onChange={(e) => setTag3(e.target.value)}
                            />
                            {errors.tag3 && (
                                <p className="text-red-500 text-sm font-normal pl-1">
                                    {errors.tag3}
                                </p>
                            )}
                        </div>
                    </div>

                    {/** Submit Button **/}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                        >
                            ADD BLOG
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Blog;
