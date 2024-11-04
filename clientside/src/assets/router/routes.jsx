import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import RasetPassword from "../pages/RasetPassword";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import Course from "../pages/Course";
import Blog from "../pages/Blog";
import Students from "../pages/Students";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";
import Questionswer from "../pages/Questionswer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
    },
    {
        path:"/resetpassword",
        element: <RasetPassword />,
    },
    {
        path: "/",
        element: <Layout />, // Wrap routes with Layout
        children: [
            {
                path: "*",
                element: <ErrorPage />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "courses",
                element: <Course />,
            },
            {
                path: "students",
                element: <Students />,
            },
            {
                path: "q&a",
                element: <Questionswer />,
            },
            {
                path: "blogs",
                element: <Blog />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
]);
