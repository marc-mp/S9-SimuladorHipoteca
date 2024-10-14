import Header from '../components/landingPage/Header';
import { Link } from 'react-router-dom';
import llavesLogoCasa from '../assets/llavesLogoCasa.mp4'


const Home = () => (
  <div className="justify-center text-center mx-auto">
    <nav>
      <Header/>
    </nav>
    <video
    className="w-full h-96 object-cover"
    src={llavesLogoCasa}  
    autoPlay
    loop
    muted
    playsInline
    />
    <section id="hero">
      <div className="relative container mx-auto text-center ">
        <h1 className="absolute bottom-0 text-6xl text-black font-bold">Simula tu hipoteca</h1>
      </div>
      <div>
      <p className="text-lg m-5 text-yellow-400 font-semibold ">Rápido, fácil y sin compromiso</p>
      </div>
      <div className=''>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Cómo funciona la calculadora de hipotecas?</h2>
        <div className='flex justify-around'>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-500 text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </span>
          </div>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-500 text-2xl"> 👤 </span>
          </div>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-500 text-2xl">📄</span>
          </div>
        </div>
        {/* Steps */}
        <div className="flex items-center gap-6 mb-12">
          <div className="md:flex flex-col items-center">
            <p className="mt-4 text-base font-medium">1. Introduce los datos de la casa que quieres comprar</p>
          </div>
          <div className="md:flex flex-col items-center">
            <p className="mt-4 text-base font-medium">2. Introduce los datos de la hipoteca que quieres solicitar</p>
          </div>
          <div className="md:flex flex-col items-center">
            <p className="mt-4 text-base font-medium">3. Consulta los cálculos al momento y conoce la cuota mensual</p>
          </div>
        </div>
      </div>
    </section>
    <div className='mx-auto mb-10 space-y-4 max-w-lg'>
      <div>
            <Link to="/InteractiveForm">
              <button className="bg-black border-4 border-black text-white font-semibold text-xl py-4 w-80">
                Calcular hipoteca
              </button>
            </Link>
        </div>
        <div>
            <Link to="/InfoHipoteca">
              <button className=" border-yellow-400 text-black font-bold text-xl border-4 py-4 w-80">
                Info y FAQs
              </button>
            </Link>
        </div>
    </div>
  {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div> */}
  </div>
);
export default Home;
