
export default function Footer(){
    return(
        <div className="w-full  ">
                <header className="w-full pb-8 ">
                   <img className="w-[300px]" src="/logo.svg" alt="logo sikomobility" />
                </header>
                <main className="w-full h-full flex flex-col lg:flex-row gap-10 lg:justify-between pb-10">
                    <section className="w-full md:max-w-[400px] lg:max-w-[200px] xl:max-w-[400px] ">
                        <article className="w-full ">
                            <a className="hover:underline" href="mailto:contact@sikomobility.com">contact@sikomobility.com</a>
                            <p>86 rue Dutot, 75015 Paris</p>
                            <article className="w-full mt-5  ">
                                <p className="italic text-md text-black/80">Siko Mobility respecte les normes sociales et environnementales et s'inscrit dans une démarche de progrès.</p>
                            </article>
                        </article>
                    </section>
                    <section className="w-full flex flex-wrap md:justify-between gap-5 lg:max-w-[650px] xl:max-w-[750px] ">
                        <article className="w-[160px] flex flex-col ">
                            <h1 className="font-bold ">INFORMATIONS</h1>
                            <div className="w-full flex flex-col gap-3 mt-4 ">
                                <p className="text-gray-500  hover:underline cursor-pointer">Mentions légales</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">Conditions générales de vente</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">Politique de confidentialité</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">RGPD & Cookies</p>
                            </div>
                        </article>
                        <article className="w-[160px] ">
                            <h1 className="font-bold ">SIKO MOBILITÉ</h1>
                            <div className="w-full flex flex-col gap-3 mt-4 ">
                                <p className="text-gray-500  hover:underline cursor-pointer">Accueil</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">Devenir partenaire</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">Qui sommes-nous ?</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">Contact</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">FAQ</p>
                            </div>
                        </article>
                        <article className="w-[160px] ">
                            <h1 className="font-bold ">NOS SERVICES</h1>
                            <div className="w-full flex flex-col gap-3 mt-4 ">
                                <p className="text-gray-500  hover:underline cursor-pointer">Nos services</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">Assurance</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">Forfait entretien</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">Assistance dépannage</p>
                                <p className="text-gray-500  hover:underline cursor-pointer">Garantie 3 ans</p>
                            </div>
                        </article>
                    </section>
                </main>
                <footer className="w-full h-[10vh] border-t border-black/20 ">
                    <article className="w-full h-full flex justify-between items-center  ">
                        <p className="text-sm text-gray-500">© 2021 Siko Mobilité. Tous droits réservés.</p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook w-5 h-5 cursor-pointer hover:text-[#1977f2] scale-100 hover:scale-[1.2] duration-200 ease-in-out" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/siko_mobility?igsh=MTlyZDUzYXlubXZvaA==" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor"className="text-instaColor bi bi-instagram hover:text-[] w-5 h-5"viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x w-5 h-5 cursor-pointer scale-100 hover:scale-[1.2] duration-200 ease-in-out" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                            </a>
                            
                        </div>
                    </article>
                </footer>
        </div>
    )
}
