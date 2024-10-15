import { motion } from "framer-motion";

/* eslint-disable react/prop-types */

function CartQuestion({ title, discription, image, date, auther, link }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
            }}
            transition={{ delay: 0.25, duration: 0.2 }}
            className=" flex flex-col bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl overflow-hidden border border-gray-700 flex flex-col h-full"
        >
            <div className="w-full">
                <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt="Image News"
                />
            </div>
            <div className="px-6 py-3">
                <small className="text-xs font-semibold text-gray-300">
                    {date} / <span className="uppercase">{auther}</span>
                </small>
                <h3 className="text-xl font-bold my-2">{title}</h3>
                <p className="text-sm text-left line-clamp-3 flex-grow">
                    {discription}
                </p>
            </div>
            <a
                className="w-fit black bg-blue-500 text-white px-4 py-2 rounded-lg mt-auto cursor-pointer mx-6 mb-3"
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
