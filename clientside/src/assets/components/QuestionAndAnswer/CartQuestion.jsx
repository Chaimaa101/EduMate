import { motion } from "framer-motion";

/* eslint-disable react/prop-types */

function CartQuestion({ title, description, image, date, author, link }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
            }}
            transition={{ delay: 0.25, duration: 0.2 }}
            className="bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-sm rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 flex flex-col h-full"
        >
            <div className="w-full h-48 overflow-hidden">
                <img
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    src={image}
                    alt="Image News"
                />
            </div>
            <div className="px-6 py-3 flex flex-col flex-grow">
                <small className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                    {date} / <span className="uppercase">{author}</span>
                </small>
                <h3 className="text-xl font-bold my-2 text-gray-800 dark:text-gray-100">
                    {title}
                </h3>
                <p className="text-sm text-left  flex-grow text-gray-700 dark:text-gray-400 line-clamp-3">
                    {description}
                </p>
            </div>
            <a
                className="w-fit bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-auto cursor-pointer mx-6 mb-3 transition-colors"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Read More
            </a>
        </motion.div>
    );
}

export default CartQuestion;
