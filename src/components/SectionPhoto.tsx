
export default function SectionPhoto(){
    return(
        <div className="mt-10">
            <header className="w-full sm:h-[20vh] lg:h-[30vh] flex justify-center items-center pb-10">
                <h1 className="w-full max-w-[650px] font-bold text-3xl md:text-4xl md:max-w-[900px] md:text-center lg:text-5xl">Découvrez notre gamme de services pour toutes les mobilités</h1>
            </header>
            <main className="w-full flex justify-center items-center gap-5 lg:gap-7 xl:justify-between flex-wrap ">
                <article className=" bg-[url(/moto1.png)] bg-cover w-full max-w-[767px] md:w-[300px] h-[400px] lg:w-[420px] lg:h-[550px] rounded-lg flex justify-center items-center hover:scale-105 duration-150 ease-in-out cursor-pointer ">
                    <figure className="w-[90%] h-[90%]  flex items-end">
                        <div className="w-full md:h-[180px] text-white ">
                            <h1 className="font-bold text-[1.4rem] md:text-[1.2rem] lg:text-[1.5rem] py-5">PAIEMENT 3/4/10 FOIS</h1>
                            <p>Faites un paiement en 3, 4 ou 10 fois en carte bleue. C'est sans justificatif.</p>
                        </div>
                    </figure>
                </article>
                <article className=" bg-[url(/trotinette1.png)] bg-cover w-full max-w-[767px] md:w-[300px] h-[400px] lg:w-[420px] lg:h-[550px] rounded-lg flex justify-center items-center hover:scale-105 duration-150 ease-in-out cursor-pointer">
                    <figure className="w-[90%] h-[90%]  flex items-end">
                        <div className="w-full md:h-[180px] text-white">
                            <h1 className="font-bold text-[1.4rem] md:text-[1.2rem] lg:text-[1.5rem] py-5">FINANCEMENT 12 A 60 MOIS</h1>
                            <p>Faites une demande de financement de 12 à 60 fois. Obtenez un accord d'une de nos banques partenaires.</p>
                        </div>
                    </figure>
                </article>
                <article className=" bg-[url(/bycle2.png)] bg-cover w-full max-w-[767px] md:w-[300px] h-[400px] lg:w-[420px] lg:h-[550px] rounded-lg flex justify-center items-center hover:scale-105 duration-150 ease-in-out cursor-pointer">
                    <figure className="w-[90%] h-[90%]  flex items-end" >
                        <div className="w-full md:h-[180px] text-white">
                            <h1 className="font-bold text-[1.4rem] md:text-[1.2rem] lg:text-[1.5rem] py-5">FORFAITS MOBILITÉ</h1>
                            <p>Souscrivez à un abonnement assurance, assistance, garantie ou maintenance. Sans engagement.</p>
                        </div>
                    </figure>
                </article>
            </main>
        </div>
    )
}
