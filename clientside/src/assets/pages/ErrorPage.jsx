import { Link } from "react-router-dom";
export default function ErrorPage() {
    return (
        <div className="flex items-center justify-center h-screen text-gray-900 bg-white dark:bg-gray-900 dark:text-white overflow-hidden">
            <div className="text-center">
                <h1 className="text-[150px]">404</h1>
                <h3 className="text-4xl mb-5 ">Page not found</h3>
                <p className="text-lg">
                    Oops!, the page you looking for does not exist
                </p>
                <Link
                    className="font-medium uppercase block bg-blue-500 w-fit mx-auto cursor-pointer mt-6 py-2 px-3 rounded-full"
                    to="/dashboard"
                >
                    Home page
                </Link>
            </div>
        </div>
    );
}
