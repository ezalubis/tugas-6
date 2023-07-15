import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        {/* <Header/> */}
        <div className="flex flex-row">
        <div className="w-72"></div>
        <Outlet />
        </div>
      </div>
    </div>
  );
}