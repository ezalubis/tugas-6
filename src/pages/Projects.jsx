const data=[
    {
        id:1,
        judul:"Ez-Shop (Bahasa C)",
        img:"https://static.vecteezy.com/system/resources/previews/002/963/551/non_2x/ez-logo-monogram-with-pillar-shape-designs-template-free-vector.jpg",
        link:"",
        des:"Top Up game Termurah"
    },
    {
        id:2,
        judul:"EzAnime (Html,CSS,Javascript)",
        img:"https://static.vecteezy.com/system/resources/previews/003/649/994/non_2x/ez-logo-monogram-with-slash-style-design-template-free-vector.jpg",
        link:"",
        des:"Website Anime Lengkap"
    },
    {
        id:3,
        judul:"EP-Tube (Javascript(Node Js),HTML,Express,Css)",
        img:"https://static.vecteezy.com/system/resources/previews/004/283/823/original/ep-logo-monogram-emblem-style-with-crown-shape-design-template-free-vector.jpg",
        link:"",
        des:"Situs nonton Tanpa bayar"
    },
    {
        id:4,
        judul:"EpRoom (Javascript(Node Js),HTML,Express,Css)",
        img:"https://media1.thehungryjpeg.com/thumbs2/ori_4018695_6hua26k3710ecj5tmnjrou5opfklh9fnidir12rr_ep-monogram-logo-design-v6.jpg",
        link:"",
        des:"Website Belajar Tanpa Biaya"
    },
]

export default function Projects(){
    return(
        <> 
        <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Projects C,Html,Javascript(Node Js) </h1>
        {data.map((d)=>(    
            <>
                <a href="https://github.com/ezalubis?tab=repositories" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img src={d.img} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d.judul}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{d.des}</p>
                    </div>
                </a>
            </>
        ))}
        </div>
        </>
    )
}