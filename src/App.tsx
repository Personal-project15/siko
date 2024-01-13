import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import SectionComments from "./components/SectionComments"
import SectionPartners from "./components/SectionPartners"
import SectionPhoto from "./components/SectionPhoto"


function App() {

  return (
    <div className='w-full justify-center '>
      <header className='w-full flex justify-center border-b border-black/20 shadow-md fixed bg-white z-40'>
        <article className='w-[90%]'>
          <NavBar />
        </article>      
      </header>
      <div className='w-full h-[10vh]'></div>
      <main className='w-full flex justify-center bg-slate-50 pb-[60px]'>
        <article className='w-[90%] flex flex-col gap-[70px] lg:gap-[110px]'>
          <SectionPhoto />
          <SectionComments />
          <SectionPartners />
        </article>
      </main>
      <footer className='w-full flex justify-center '>
        <article className='w-[90%]'>
          <Footer />
        </article>
      </footer>
    </div>
  )
}

export default App