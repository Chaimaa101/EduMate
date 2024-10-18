import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Trash } from "lucide-react";
import { useState } from "react";

const blogPosts = [
    {
        title: "Innovative Teaching Methods in the Digital Age",
        imgUrl: "https://static.wixstatic.com/media/a3eef6_f0c75630f4bd4e598b76855a114826d8~mv2.jpg/v1/fill/w_480,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a3eef6_f0c75630f4bd4e598b76855a114826d8~mv2.jpg",
        content:
            "The digital age has transformed traditional teaching methods. In this post, we explore the latest innovations in online education and how teachers are leveraging technology to improve student engagement.",
        tags: ["#EdTech", "#OnlineLearning", "#Innovation"],
    },
    {
        title: "The Importance of Lifelong Learning for Educators",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9ppi0zwOX8sHb5XhSCrRqSVDgh4Lu2dWPSNf0-TPxmGw8hi6G1c_81a-xjVn-gRVEuk&usqp=CAU",
        content:
            "Lifelong learning is essential for educators who want to stay up-to-date with new teaching strategies and methodologies. Discover why it's important and how to continue growing as an educator.",
        tags: ["#ProfessionalDevelopment", "#LifelongLearning", "#Teaching"],
    },
    {
        title: "How to Create an Engaging Online Course",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W-vrAhnVDp4AiJF6qwHIQEWmgH_7IbAk73zQSfVnupxmpP3tmbQkx6OuBI0xFetGzAk&usqp=CAU",
        content:
            "Designing an engaging online course is crucial for student success. This blog provides tips on content creation, interactive elements, and the tools available for educators to build effective courses.",
        tags: ["#CourseDesign", "#StudentEngagement", "#eLearning"],
    },
    {
        title: "The Future of Education: AI in the Classroom",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Rj_mxKC9N4hI1tZVqQ0tus8uKwUzhn10ftjNgPdtqf_242arSQalsm4ogeob22jUh8&usqp=CAU",
        content:
            "AI is reshaping the educational landscape, from personalized learning to grading automation. Explore the potential of artificial intelligence and how it can be integrated into the modern classroom.",
        tags: ["#AIinEducation", "#FutureOfLearning", "#TechInClassroom"],
    },
    {
        title: "Building Critical Thinking Skills in Students",
        imgUrl: "https://www.diyesinternational.edu.in/wp-content/uploads/2024/03/image3-49.webp",
        content:
            "Critical thinking is a key skill for students in today's fast-paced world. Learn how educators can help students develop this skill and apply it to real-world scenarios.",
        tags: ["#CriticalThinking", "#SkillDevelopment", "#Education"],
    },
];

function Blog() {
    const [showForm, isShowForm] = useState(false);
    const [errors, setErrors] = useState([]);
    const [title, isTitle] = useState("");
    const [imageUrl, isImageUrl] = useState("");
    const [content, isContent] = useState("");
    const [tag1, setTag1] = useState("");
    const [tag2, setTag2] = useState("");
    const [tag3, setTag3] = useState("");

    console.log({ title, imageUrl, content, errors });
    console.log(errors.fullName);
    console.log(errors.email);
    console.log(errors.phone);

    const addBlog = (event) => {
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

        // Tag 1 validation
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

    return (
        <>
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
                        {blogPosts?.map((blog, index) => (
                            <div
                                key={index}
                                className="group relative max-w-md rounded overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white dark:bg-gray-800 transition-all duration-300 mx-auto"
                            >
                                <button
                                    className="absolute text-gray-900 dark:text-gray-100 bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 z-50 top-5 -right-14 cursor-pointer py-2 pr-4 pl-2 rounded-tl-md rounded-bl-md focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 transition-all duration-300 ease-in-out group-hover:right-0"
                                    aria-label="Delete"
                                >
                                    <Trash size={20} />
                                </button>
                                <div className="w-full h-[220px] block">
                                    <img
                                        className="w-full h-full object-fill transition-transform duration-300 ease-in-out transform hover:scale-105"
                                        src={blog.imgUrl}
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
                                        {blog.tags[0]}
                                    </span>
                                    <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                                        {blog.tags[1]}
                                    </span>
                                    <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        {blog.tags[2]}
                                    </span>
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
                            className={`mt-1 block w-full border-[1.5px] border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 
            ${errors.title && "border-red-500 dark:border-red-500"} 
            bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
            focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="Enter Blog Title"
                            onChange={(e) => isTitle(e.target.value)}
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
            ${errors.imageUrl && "border-red-500 dark:border-red-500"} 
            bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
            focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="https://example.com/image.jpg"
                            onChange={(e) => isImageUrl(e.target.value)}
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
            ${errors.content && "border-red-500 dark:border-red-500"} 
            bg-transparent text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500
            focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700`}
                            placeholder="Write your blog content..."
                            onChange={(e) => isContent(e.target.value)}
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
