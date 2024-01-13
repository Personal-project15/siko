
import { useState } from "react"


export default function NavBar(){
    const [ham, setHam] = useState(false)
    const [service, setService] = useState(false)
    const [serviceModal, setServiceModal] =useState(false)

    const handleHam = ()=>{
        setHam(!ham)
    }
    const toggleService = ()=>{
        setService(!service)
    }
    const toggleServiceModal = ()=>{
        setServiceModal(!serviceModal)
    }
    
    
    return(
        <div className="w-full h-[10vh] flex justify-between items-center">
            <article className="">
                <img className="w-[200px]" src="/logo.svg" alt="logo" />
            </article>
            <article className="flex items-center gap-10">
                <svg onClick={handleHam} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <figure className="hidden md:block cursor-pointer hover:text-[#3b81f6]">
                    <p>Espace marchand</p>
                </figure>
                <figure onClick={toggleServiceModal} className="flex items-center gap-2 hidden md:block md:flex cursor-pointer hover:text-[#3b81f6]">
                    <p>Nos services</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </figure>
                <figure className="hidden md:block">
                    <button className="text-[#3b81f6] font-bold border-2 border-[#3b81f6] rounded-lg p-2 hover:bg-[#3b81f6] hover:text-white">Simulation</button>
                </figure>
            </article>
           
            {ham &&
             <article className="w-full pb-10 shadow-lg absolute top-0 left-0 flex justify-center bg-white">
                <section className="w-[90%] h-[90%]">
                    <figure className="w-full h-[10vh] flex justify-between items-center bg-white ">
                        <img className="w-[200px]" src="/logo.svg" alt="sikomobility"/>
                        <svg onClick={handleHam} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </figure>
                    <figure className="w-full  bg-slate-100 border rounded-lg flex justify-center items-center pb-6 ">
                        <div className="w-[90%] h-[80%] flex flex-col items-end gap-4 mt-8">
                            <p>Espace marchand</p>
                            <figure onClick={toggleService} className="flex items-center gap-2 md:flex cursor-pointer hover:text-[#3b81f6]">
                                <p>Nos services</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </figure>
                             {service &&
                            <figure className="flex flex-col gap-3">
                                <article className="w-full flex items-center gap-1">
                                    <div className="w-[110px] h-[70px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#3b81f6]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h1 className="font-bold">Assurance</h1>
                                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, qui.</p>
                                    </div>
                                </article>
                                <article className="w-full flex items-center gap-1">
                                    <div className="w-[110px] h-[70px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#3b81f6]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h1 className="font-bold">Assistance</h1>
                                        <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis omnis veritatis laudantium quam rerum! Iusto.</p>
                                    </div>   
                                </article>
                                <article className="w-full flex items-center gap-1">
                                    <div className="w-[110px] h-[70px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#3b81f6]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h1 className="font-bold">Entretien</h1>
                                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </div>
                                </article>
                                <article className="w-full flex items-center gap-1">
                                    <div className="w-[110px] h-[70px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#3b81f6]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h1 className="font-bold">Extension de garantie</h1>
                                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a. Expedita, perferendis cum.</p>
                                    </div>
                                </article>
                            </figure>
                            }
                            <button className="text-[#3b81f6] font-bold border-2 border-[#3b81f6] rounded-lg p-2 hover:bg-[#3b81f6] hover:text-white">Simulation</button>
                        </div>
                    </figure>
                </section>
            </article>
            }
           {serviceModal &&
            <article className="w-full h-[400px] fixed mt-[13vh] top-0 left-0 rounded-lg flex flex-col items-center ">
                <figure className="w-[75%] h-[200px] bg-white shadow-2xl rounded-lg flex ">
                    <div className="w-[50%] h-[180px] flex flex-wrap my-2 mx-2">
                        <section className="w-[550px] h-[90px] flex items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#3b81f6]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                            <div className="w-full">
                                <h1 className="font-bold">Assurance</h1>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, qui.</p>
                            </div>
                        </section>
                        <section className="w-[550px] h-[90px] flex items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#3b81f6]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <div className="w-full">
                                <h1 className="font-bold">Assistance</h1>
                                <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis omnis veritatis laudantium quam rerum! Iusto.</p>
                            </div>  
                        </section>
                    </div>
                    <div className="w-[50%] h-[180px] flex flex-wrap my-2 mx-2">
                        <section className="w-[550px] h-[90px] flex items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#3b81f6]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div className="w-full">
                                <h1 className="font-bold">Entretien</h1>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </section>
                        <section className="w-[550px] h-[90px] flex items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#3b81f6]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                            <div className="w-full">
                                <h1 className="font-bold">Extension de garantie</h1>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a. Expedita, perferendis cum.</p>
                            </div>
                        </section>
                    </div>
                </figure>
            </article>
           }
        </div>
        )
    }

    
