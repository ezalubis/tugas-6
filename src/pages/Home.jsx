import Projects from "./Projects"
import ff from "../assets/ff.jpg"
import Cv from "./Cv"
export default function Home(){
    return(
        <>
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="w-80">
                <img src={ff} className="my-5 rounded-lg"/>
                </div>
                <div className="p-20 flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">Hello there</h1>
                    <h1 className="text-4xl font-bold">My Name Is Azhari Fahreza Lubis</h1>
                    <h2 className="text-2xl font-bold">Junior Backend And Frontend Developer</h2>
                    <p>I am a student at PASIM Bandung National University, I am studying D3 Management
                        Informatics. <br/> I mastered several tools that support work as a developer such as Vs Code,
                        Dbeaver, PgAdmin, Postman, Sqlyog
                    </p>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-bold">My Projects</h1>
                <Projects/>
            </div>
            <div>
                <h1 className="text-4xl font-bold">My CV</h1>
                <Cv/>
            </div>
            
        </div>
        </>
    )
}