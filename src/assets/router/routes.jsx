import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import RasetPassword from "../pages/RasetPassword";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import Course from "../pages/Course";
import Blog from "../pages/Blog";
import Reports from "../pages/Reports";
import Students from "../pages/Students";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/rasetpassword",
    element: <RasetPassword />,
  },
  {
    path: "/",
    element: <Layout />, // Wrap routes with Layout
    children: [
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
        path: "reports",
        element: <Reports />,
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
