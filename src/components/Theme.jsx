import { useContext } from "react"
import { Tema } from "../App"
import { useState } from "react";
import { MdDarkMode, MdLightMode,} from "react-icons/md";
import { useEffect } from "react";

export default function Theme() {
    const {tema,setTema} = useContext(Tema);
    const [mode, setMode] = useState(true);

    useEffect(()=>{
        console.log(`Berhasil Ke Mode ${tema}`);
    },[tema])
    return(
    <div onClick={()=> setMode(!mode)}className="cursor-pointer">
    {mode? 
        <MdDarkMode
            size={30}
            onClick={() => setTema (tema=== "light" ? "dark" : "light")}
        />: 
        <MdLightMode
            size={30}
            onClick={() => setTema (tema=== "light" ? "dark" : "light")}
        />}
    </div>
    )
}