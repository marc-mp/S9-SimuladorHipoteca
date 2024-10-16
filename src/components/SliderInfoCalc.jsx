// import { Link } from 'react-router-dom';
// import escaleraDineroCasa from '../../assets/escaleraDineroCasa.jfif'
// import llavesLogoCasa from '../../assets/llavesLogoCasa.mp4'
// import ahorros1 from '../../assets/ahorros1.mp4'

// const Hero = () => {
//     return (
//       <section id="hero">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Cómo funciona la calculadora de hipotecas?</h2>
//           {/* Steps */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
//             {/* Step 1 */}
//             <div className="flex flex-col items-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//                 {/* Placeholder for icon */}
//                 <span className="text-green-500 text-2xl">
//                   {/* 👤 */}
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6">
//                     <path  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
//                   </svg>

//                   </span>
//               </div>
//               <p className="mt-4 text-base font-medium">1. Introduce los datos de la casa que quieres comprar</p>
//             </div>
  
//             {/* Step 2 */}
//             <div className="flex flex-col items-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//                 {/* Placeholder for icon */}
//                 <span className="text-green-500 text-2xl"> 👤 </span>
//               </div>
//               <p className="mt-4 text-base font-medium">2. Introduce los datos de la hipoteca que quieres solicitar</p>
//             </div>
  
//             {/* Step 3 */}
//             <div className="flex flex-col items-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//                 {/* Placeholder for icon */}
//                 <span className="text-green-500 text-2xl">📄</span>
//               </div>
//               <p className="mt-4 text-base font-medium">3. Consulta los cálculos al momento y conoce la cuota mensual</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default Hero;

//   import { useState, useEffect } from 'react';
// import { DataContext } from '../context/DataContext';
// import { useContext } from 'react';


// // Imágenes de ejemplo (puedes reemplazarlas con las tuyas)


// const SliderInfoCalc = () => {

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const { InfoCalc } = useContext(DataContext);

//   // const info1 = {
//   //   icon1:       
//   //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-6">
//   //       <path  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
//   //     </svg>,
//   //   text1: "1. Introduce los datos de la casa que quieres comprar",
//   // }

//   // const info2 = {
//   //   icon2: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//   //           <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
//   //         </svg>,  
//   //   text2: "2. Introduce los datos de la hipoteca que quieres solicitar",
//   // }

//   // const info3 = {
//   //   icon3:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   //             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 11.625h4.5m-4.5 2.25h4.5m2.121 1.527c-1.171 1.464-3.07 1.464-4.242 0-1.172-1.465-1.172-3.84 0-5.304 1.171-1.464 3.07-1.464 4.242 0M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//   //           </svg>,     
//   //   text3: "3. Consulta los cálculos al momento y conoce la cuota mensual",
//   // }



//   // const InfoCalc  = [
//   //   '/src/assets/image1.jpg',
//   //   '/src/assets/image2.jpg',
//   //   '/src/assets/image3.jpg',
//   //   '/src/assets/image4.jpg',
//   // ];

//   // const InfoCalc  = [
//   //   info1, 
//   //   info2, 
//   //   info3
//   // ];


//   // Función para mover al siguiente slide
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % InfoCalc.length);
//   };

//   // useEffect para crear el intervalo de desplazamiento automático
//   useEffect(() => {
//     const sliderInterval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Mueve las tarjetas cada 3 segundos

//     // Limpia el intervalo cuando el componente se desmonte
//     return () => clearInterval(sliderInterval);
//   }, []);

//   return (
//     <div className="slider-container overflow-hidden relative ">
//       <div
//         className="slider-wrapper flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {InfoCalc.map((info, index) => (
//           <div key={index} className="slide min-w-full h-full">
//             {/* <p src={info}  className="w-full h-full object-cover" /> */}
//             <div>{info}</div>
//           </div>
//         ))}
//       </div>

//       {/* Botones opcionales para desplazamiento manual */}
//       <button
//         onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + InfoCalc.length) % InfoCalc.length)}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
//       >
//         ❮
//       </button>
//       <button
//         onClick={() => nextSlide()}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
//       >
//         ❯
//       </button>
//     </div>
//   );
// };

// export default SliderInfoCalc;

import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';

const SliderInfoCalc = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { InfoCalc } = useContext(DataContext); // Usamos el contexto

  // Función para mover al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % InfoCalc.length);
  };

  // useEffect para crear el intervalo de desplazamiento automático
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Mueve las tarjetas cada 3 segundos

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <div className="slider-container overflow-hidden relative">
      <div
        className="slider-wrapper flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {InfoCalc.map((info, index) => (
          <div key={index} className="slide min-w-full h-full flex items-center justify-center flex-col">
            <span className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">{info[`icon${index + 1}`]}</span>
            <p className="text-center text-xl font-bold mx-10 my-5">{info[`text${index + 1}`]}</p>
          </div>
        ))}
      </div>

      {/* Botones opcionales para desplazamiento manual */}
      {/* <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + InfoCalc.length) % InfoCalc.length)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={() => nextSlide()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        ❯
      </button> */}
    </div>
  );
};

export default SliderInfoCalc;
