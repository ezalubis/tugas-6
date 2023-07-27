import { useContext } from "react"
import { Tema } from "../App"
import { useState } from "react";
import { MdDarkMode, MdLightMode,} from "react-icons/md";

export default function Theme() {
    const {tema,setTema} = useContext(Tema);
    const [mode, setMode] = useState(false);

    return(
    <div onClick={()=> setMode(!mode)}className="cursor-pointer">
    {mode? 
        <MdLightMode
            size={30}
            onClick={() => setTema (tema=== "light" ? "dark" : "light")}
        />: 
        <MdDarkMode
            size={30}
            onClick={() => setTema (tema=== "light" ? "dark" : "light")}
        />}
    </div>
    )
}