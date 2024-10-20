import { useState } from 'react';
import Faqs from '../components/Faqs'
import SliderComponent from '../components/SliderComponent'
import Footer from '../components/Footer'


const InfoHipoteca = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-3xl font-bold text-gray-800 p-4">Cómo funciona una hipoteca? </h2>
      <p className="text-2xl font-bold text-gray-800 px-4 mb-6">Elementos a tener en cuenta:</p>
      <div className="border-b border-gray-300 p-4">
        <button
          onClick={() => toggleSection(1)}
          className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
        >
          <span>¿Qué es una hipoteca?</span>
          <svg
            className={`w-6 h-6 transform transition-transform ${activeSection === 1 ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {activeSection === 1 && (
          <p className="text-gray-600 mt-2 text-sm">
            Un préstamo hipotecario consiste en recibir una cantidad de dinero (capital) por parte de una entidad bancaria, con el compromiso de devolver dicha cantidad, más los intereses correspondientes, a través de pagos periódicos de cuotas mensuales. El inmueble adquirido se utiliza como garantía del pago.
          </p>
        )}
      </div>
      <div className="border-b border-gray-300 p-4">
        <button
          onClick={() => toggleSection(2)}
          className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
        >
          <span>El capital de una hipoteca</span>
          <svg
            className={`w-6 h-6 transform transition-transform ${activeSection === 2 ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {activeSection === 2 && (
          <div className="mt-2 text-gray-600 text-sm">
            <p>El capital es la cantidad de dinero que se solicita al banco para adquirir o reformar una vivienda.</p>
            <p className="mt-2 font-medium">¿Cuánto se puede pedir?</p>
            <p>
              Generalmente, se financia hasta el 80% del valor de tasación para la primera vivienda y hasta el 70% para la segunda. 
              También existen hipotecas que cubren el 90% o el 100%, dependiendo de la tasación del inmueble.
            </p>
            <p className="mt-2 font-medium">El 20% - 30% restante</p>
            <p>
              El cliente debe cubrir este porcentaje como entrada en la compra del inmueble, lo que demuestra su capacidad de ahorro y reduce el riesgo del banco.
            </p>
          </div>
        )}
      </div>
      <div className="border-b border-gray-300 p-4">
        <button
          onClick={() => toggleSection(3)}
          className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
        >
          <span>Los intereses de una hipoteca</span>
          <svg
            className={`w-6 h-6 transform transition-transform ${activeSection === 3 ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {activeSection === 3 && (
          <div className="mt-2 text-gray-600 text-sm">
            <p>El interés es el beneficio económico que obtiene el banco por otorgar el préstamo.</p>
            <p className="mt-2 font-medium">Tipos de interés:</p>
            <ul className="list-disc pl-5">
              <li className="mb-2">
                <strong>Tipo fijo:</strong> La cuota mensual es siempre la misma.
              </li>
              <li className="mb-2">
                <strong>Tipo variable:</strong> Depende del euríbor, que varía cada 6 o 12 meses.
              </li>
              <li>
                <strong>Tipo mixto:</strong> Un interés fijo durante los primeros años, luego pasa a ser variable.
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="border-b border-gray-300 p-4 ">
        <button
          onClick={() => toggleSection(4)}
          className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
        >
          <span className='text-start'>El periodo de amortización de una hipoteca</span>
          <svg
            className={`w-6 h-6 transform transition-transform ${activeSection === 4 ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {activeSection === 4 && (
          <div className="mt-2 text-gray-600 text-sm">
            <p>El periodo de amortización es el tiempo para devolver el capital más los intereses.</p>
            <p className="mt-2 font-medium">¿Cuánto tiempo ofrece el banco?</p>
            <p>Generalmente, de 20 a 30 años, aunque existen hipotecas desde 5 hasta 40 años.</p>
            <p className="mt-2 font-medium">Cuotas mensuales</p>
            <p>
              Las cuotas mensuales se calculan en función del capital prestado, el tiempo de amortización y el tipo de interés.
              Cuanto más largo sea el plazo, menores serán las cuotas, pero mayores serán los intereses totales.
            </p>
          </div>
        )}
      </div>
      <div className="p-4">
        <button
          onClick={() => toggleSection(5)}
          className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
        >
          <span>Otros conceptos importantes</span>
          <svg
            className={`w-6 h-6 transform transition-transform ${activeSection === 5 ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {activeSection === 5 && (
          <div className="mt-2 text-gray-600 text-sm">
            <ul className="list-disc pl-5">
              <li className="mb-2"><strong>TIN:</strong> Tipo de Interés Nominal.</li>
              <li className="mb-2"><strong>TAE:</strong> Tasa Anual Equivalente.</li>
              <li className="mb-2"><strong>Diferencial:</strong> Porcentaje fijo que se suma al índice de referencia (euríbor).</li>
            </ul>
          </div>
        )}
      </div>
      <div className='mt-8'>
        <SliderComponent />
      </div>
      <Faqs />
      <div className=''>
        <Footer />
      </div>

    </div>
  );
};

export default InfoHipoteca;
