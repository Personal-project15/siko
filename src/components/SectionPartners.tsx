
export default function SectionPartners(){
  
    return(
        <div className="w-full h-[340px] border border-black/30 rounded-lg flex items-center justify-center">
            <article className="w-[90%] h-[90%] lg:h-[70%] flex flex-col justify-between">
                <section className="w-full">
                    <h1 className="text-3xl font-bold md:text-5xl">Vous avez un site e-commerce ou</h1>
                    <h1 className="text-3xl font-bold md:text-5xl"> une boutique ?</h1>
                </section>
                <section className="w-full flex flex-col items-start gap-3">
                    <p className="text-lg text-gray-500 md:text-lg">Rejoignez nos partenaires et offrez de multiples services et avantages à vos clients. Augmentez votre chiffre d’affaire avec notre solution en financement.</p>
                    <button className="flex items-center gap-3 border border-[#3b81f6] rounded-lg border-2 py-2 px-2 text-[#3b81f6] cursor-pointer hover:text-white hover:bg-[#3b81f6]">
                        <p className="lg:text-md font-bold ">Devenir partenaire</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.1} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </section>
            </article>
        </div>
    )
}

