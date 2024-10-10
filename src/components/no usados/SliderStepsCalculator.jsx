import React, { useState } from 'react';

const SliderStepsCalculator = () => {
  // Estado que guarda el índice actual del step
  const [sliderCurrentStep, setSliderCurrentStep] = useState(0);

  // Información de los pasos (puedes agregar más o modificar los textos)
  const sliderSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      text: '1. Introduce los datos de la casa que quieres comprar',
    },
    {
      icon: '👤',
      text: '2. Introduce los datos de la hipoteca que quieres solicitar',
    },
    {
      icon: '📄',
      text: '3. Consulta los cálculos al momento y conoce la cuota mensual',
    },
  ];

  // Función para manejar el cambio de paso
  const handleNextStep = () => {
    setSliderCurrentStep((prevStep) => (prevStep + 1) % sliderSteps.length);
  };

  const handlePrevStep = () => {
    setSliderCurrentStep((prevStep) => (prevStep - 1 + sliderSteps.length) % sliderSteps.length);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Cómo funciona la calculadora de hipotecas?</h2>
        <div className="relative">
            {/* Contenedor de los pasos */}
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${sliderCurrentStep * 100}%)` }}>
            {sliderSteps.map((step, index) => (
                <div key={index} className="min-w-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-500 text-2xl">{step.icon}</span>
                </div>
                <p className="mt-4 text-base font-medium">{step.text}</p>
                </div>
            ))}
            </div>
        </div>

        {/* Controles para cambiar entre pasos */}
        <div className="flex justify-between mt-8">
            <button onClick={handlePrevStep} className="bg-gray-300 p-2 rounded-full">
                Anterior
            </button>
            <button onClick={handleNextStep} className="bg-green-500 text-white p-2 rounded-full">
                Siguiente
            </button>
        </div>
    </div>
  );
};

export default SliderStepsCalculator;


// import React, { useState, useRef } from 'react';

// const Slider = () => {
//   // Estado para el índice actual del paso
//   const [currentStep, setCurrentStep] = useState(0);

//   // Ref para almacenar la posición inicial del toque o clic
//   const startX = useRef(0);
//   const translateX = useRef(0);
//   const sliderRef = useRef(null);

//   // Información de los pasos
//   const steps = [
//     {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
//         </svg>
//       ),
//       text: '1. Introduce los datos de la casa que quieres comprar',
//     },
//     {
//       icon: '👤',
//       text: '2. Introduce los datos de la hipoteca que quieres solicitar',
//     },
//     {
//       icon: '📄',
//       text: '3. Consulta los cálculos al momento y conoce la cuota mensual',
//     },
//   ];

//   // Función para cambiar el paso actual cuando se arrastra
//   const handleNextStep = () => {
//     setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
//   };

//   const handlePrevStep = () => {
//     setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
//   };

//   // Función para iniciar el arrastre
//   const handleTouchStart = (e) => {
//     startX.current = e.touches ? e.touches[0].clientX : e.clientX;
//   };

//   // Función cuando se está arrastrando
//   const handleTouchMove = (e) => {
//     translateX.current = e.touches ? e.touches[0].clientX - startX.current : e.clientX - startX.current;
//   };

//   // Función para finalizar el arrastre
//   const handleTouchEnd = () => {
//     if (translateX.current < -50) {
//       handleNextStep(); // Ir a la derecha
//     } else if (translateX.current > 50) {
//       handlePrevStep(); // Ir a la izquierda
//     }
//     translateX.current = 0;
//   };

//   return (
//     <div
//       className="w-full max-w-lg mx-auto overflow-hidden" // Usamos `overflow-hidden` para que no se vean los otros pasos fuera de la vista.
//       ref={sliderRef}
//       onMouseDown={handleTouchStart} // Para soporte de arrastre en escritorio
//       onMouseMove={handleTouchMove}
//       onMouseUp={handleTouchEnd}
//       onTouchStart={handleTouchStart} // Para soporte en móviles
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentStep * 100}%)` }}>
//         {steps.map((step, index) => (
//           <div key={index} className="min-w-full flex flex-col items-center text-center">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//               <span className="text-green-500 text-2xl">{step.icon}</span>
//             </div>
//             <p className="mt-4 text-base font-medium">{step.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
