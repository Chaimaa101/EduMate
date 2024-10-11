import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
export default function RasetPassword() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white overflow-hidden">
      <div className="text-center">
        <h1 className="text-[150px]">404</h1>
        <h3 className="text-4xl mb-5 ">Page not found</h3>
        <p className="text-lg">
          Oops!, the page you looking for does not exist
        </p>
        <div className="flex justify-center items-center bg-blue-500 w-fit mx-auto cursor-pointer mt-6 py-3 px-6 rounded-full gap-2">
          <ArrowLeft size={30} className="pt-1" />
          <Link className="font-medium text-xl" to="/">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
