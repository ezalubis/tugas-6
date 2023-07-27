import React, { useState} from "react";
import { Link } from "react-router-dom";
import Theme from "./Theme";
import { HiMenuAlt3 } from "react-icons/hi";
import {MdOutlineDashboard } from "react-icons/md";
import {  AiOutlineUser } from "react-icons/ai";
import {  FiMessageSquare,} from "react-icons/fi";

export default function Sidebar() {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "Projects", link: "/Projects", icon:  FiMessageSquare },
    { name: "CV", link: "/Cv", icon: AiOutlineUser },
  ];
  
  const [open, setOpen] = useState(false);


  return (
    <>
      <section className="z-50 fixed">
        <div
          className={`bg-[#0e0e0e] min-h-screen ${
            open ? "w-68" : "w-16"
          } duration-500 px-4`}
        >
          <div
            className={`py-3 flex justify-end text-white sm:block ${
              "hidden" ? "hidden" : "block"
            }`}
          >
            <HiMenuAlt3
              size={30}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
            <br />
            <Theme/>
          </div>
          <div className={`pt-4 text-white flex flex-col gap-4 relative`}>
            {menus.map((elem, ind) => {
              return (
                <Link
                  to={elem.link}
                  key={ind}
                  className={`${
                    elem.margin && "mt-5"
                  } group overflow-hidden flex item-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800`}
                >
                  <div>{React.createElement(elem.icon, { size: "20" })}</div>
                  <h2
                    style={{ transitionDelay: `${ind + 3}00ms` }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {elem.name}
                  </h2>

                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white fons-semi-bold whitespace-pre text-gray-800 rounded drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-500 group-hover:w-fit`}
                  >
                    {elem.name}
                  </h2>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}