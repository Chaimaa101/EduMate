import { Outlet} from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

function Layout() {
  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-white  overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
