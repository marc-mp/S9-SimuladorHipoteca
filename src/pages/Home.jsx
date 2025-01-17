import Header from '../components/Header';
import { Link } from 'react-router-dom';
import SliderInfoCalc from '../components/SliderInfoCalc';
import Footer from '../components/Footer';


const Home = () => (
  <div className="relative text-center mx-auto max-h-svh max-w-md ">
    <nav className="flex justify-between">
    <h1 className=' text-black text-4xl ms-5 mt-3 font-semibold '>HipoTech</h1>
      <Header/>
    </nav>
  
    <section id="hero" className='relative'>
      <video
      className="max-w-md w-screen" 
      src="/llavesLogoCasa.mp4" 
      autoPlay
      loop
      muted
      playsInline
      />
      <div className="absolute bottom-96 mb-20 md:mb-16  container mx-auto text-center ">
        <h1 className=" text-6xl text-white font-bold">Simula tu hipoteca</h1>
      </div>
      <div> 
      <p className="text-2xl m-5 text-yellow-400 font-bold ">Rápido, fácil y sin compromiso</p>
      </div>
      <div className=''>
        <h2 className="text-3xl font-bold mb-6">¿Cómo funciona la calculadora de hipotecas?</h2>
        <SliderInfoCalc/>
      </div>
    </section>
    <div className='mx-auto mb-10 space-y-4 max-w-lg'>
      <div>
            <Link to="/InteractiveForm">
              <button className="bg-black border-4 border-black text-white font-semibold text-2xl py-4 w-80">
                CALCULAR HIPOTECA
              </button>
            </Link>
        </div>
        <div>
            <Link to="/InfoHipoteca">
              <button className=" border-yellow-400 text-black font-bold text-2xl border-4 py-4 w-80">
                INFO & FAQs
              </button>
            </Link>
        </div>
    </div>
    <div className='mx-auto'>
      <Footer />
    </div>
  </div>
);
export default Home;
