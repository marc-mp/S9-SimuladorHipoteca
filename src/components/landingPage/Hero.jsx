import { Link } from 'react-router-dom';
import escaleraDineroCasa from '../../assets/escaleraDineroCasa.jfif'

const Hero = () => {
    return (
      <section id="hero">
        <div className='bg-red-600'>
        <img src={escaleraDineroCasa} alt="" className='w-full'/>
        </div>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Simula tu hipoteca</h1>
          <p className="text-lg mb-6">Rápido, fácil y sin compromiso</p>
          {/* <form className="bg-white p-6 rounded max-w-lg mx-auto">
            <Link to="/InteractiveForm">
              <button className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
                Calcular
              </button>
            </Link>
          </form> */}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Cómo funciona la calculadora de hipotecas?</h2>
          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                {/* Placeholder for icon */}
                <span className="text-green-500 text-2xl">
                  {/* 👤 */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>

                  </span>
              </div>
              <p className="mt-4 text-base font-medium">1. Introduce los datos de la casa que quieres comprar</p>
            </div>
  
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                {/* Placeholder for icon */}
                <span className="text-green-500 text-2xl"> 👤 </span>
              </div>
              <p className="mt-4 text-base font-medium">2. Introduce los datos de la hipoteca que quieres solicitar</p>
            </div>
  
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                {/* Placeholder for icon */}
                <span className="text-green-500 text-2xl">📄</span>
              </div>
              <p className="mt-4 text-base font-medium">3. Consulta los cálculos al momento y conoce la cuota mensual</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  