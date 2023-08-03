import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { createContext } from "react";
import { useState } from "react";


export const Tema = createContext({
  tema: null,
  setTema: () => {},
})
export default function App() {
  const [tema,setTema] = useState("light");
  return (
    <Tema.Provider value={{tema,setTema}}>
    <div className={tema === "dark" ? "bg-gradient-to-r from-slate-950 to-slate-400 text-white  flex flex-col" : "bg-gradient-to-b from-gray-50 to-slate-500 text-black-400 flex flex-col"}>
      <Sidebar />
      <div className=" flex flex-col">
        <div className="flex flex-row">
        <div className="w-72"></div>
        <Outlet />
        </div>
      </div>
    </div>
    </Tema.Provider>
  );
}