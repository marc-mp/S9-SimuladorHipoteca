// // import { Link } from 'react-router-dom';
// // import escaleraDineroCasa from '../../assets/escaleraDineroCasa.jfif'
// // import llavesLogoCasa from '../../assets/llavesLogoCasa.mp4'
// // import ahorros1 from '../../assets/ahorros1.mp4'

// const Hero = () => {
//     return (
//       <section id="hero">
//         {/* <div className=''>
//         <video
//             src={llavesLogoCasa}  // Cambia esta línea con la ruta de tu video
//             className='h-80 w-full'
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//         </div> */}
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl font-bold mb-4">Simula tu hipoteca</h1>
//           <p className="text-lg mb-6">Rápido, fácil y sin compromiso</p>
//         </div>
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
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
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
  

import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import { useNavigate } from 'react-router-dom';


const InteractiveForm = () => {
  const { step, setStep, formData, setFormData, videos } = useContext(DataContext);
  const navigate = useNavigate();
  const { register, handleSubmit} = useForm();

  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleRangeChangeStep4 = (name, value) => {
    const options = ["", "habitual obra nueva", "habitual Segunda mano", "segunda residencia"];
    setFormData({ ...formData, [name]: options[value] });
    console.log(formData);
  };

  const handleRangeChangeStep8 = (name, value) => {
    const options = ["", "NO", "SI"];
    setFormData({ ...formData, [name]: options[value] });
    console.log(formData);
  };

  

  const handleRangeChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  
  const onSubmit = (name, value) => {
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    navigate('/Report');
  };

  const isValidStep = () => {
    switch (step) {
      case 0:
        return formData.precioVivienda > 0
      case 1:
        return formData.valorTasacion > 0
      case 2:
        return formData.duracion > 0
      case 3:
        return formData.interes >= 0
      case 4:
        return formData.tipoCompra !== ''
      case 5:
        return formData.ahorros >= 0
      case 6:
        return formData.solicitantes > 0
      case 7:
        return formData.edadesSolicitantes.every(age => age >= 18);
      case 8:
        return formData.familiaNumerosa !== ''
      case 9 :
        return formData.ingresosNetos >= 0
      case 10:
        return formData.cuotasCreditos >= 0
      default:
        return false;
    }
  };

  return (
    <div className="relative">
      {/* <h1 className=' text-2xl text-blue-500 font-bold'></h1> */}
      <video
        className=""
        src={videos[step]} // Accedemos al video correspondiente al step actual
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute bottom-24">
        <form onSubmit={handleSubmit(onSubmit)} className='w-screen h-44'>
          {step === 0 && (
            <div>
              <label className="absolute bottom-96 text-3xl text-start mb-14 ms-4 text-white font-bold ">Cual es el precio de la vivienda?:</label>
              <div className='text-center'>
                <input
                  type="number"
                  className=" w-full p-2 mb-4 text-center text-5xl text-white font-bold border-transparent placeholder-transparent bg-transparent"
                  placeholder="Introduce el precio"
                  {...register('precioVivienda', { required: true })}
                  value={formData.precioVivienda}
                  onChange={handleInputChange}
                  min={10000}
                  max={1000000}
                />
                  <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="5000"
                  value={formData.precioVivienda}
                  onChange={(e) => handleRangeChange('precioVivienda', e.target.value)}
                  className="w-96  mb-4 "
                />
              </div>
              <div className='flex justify-end'>
                {/* <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePrevStep}>Volver</button> */}
                {isValidStep() && (
                  <button type="button" className="bg-white text-black font-bold text-xl my-6 mx-4 w-52 px-6 py-4 " onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 1 && (
            <div>
              <label className="absolute bottom-96 text-3xl text-start mb-14 ms-4 text-white font-bold ">Cual es el valor de tasacion?:</label>
              <div className='text-center'>
                <input
                  type="number"
                  className="w-full p-2 mb-4 text-center text-5xl text-white font-bold placeholder-transparent focus:placeholder-transparent bg-transparent"
                  placeholder="Introduce el valor"
                  {...register('valorTasacion', { required: true })}
                  value={formData.valorTasacion}
                  onChange={handleInputChange}
                  min={10000}
                  max={1000000}
                />
                  <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="5000"
                  value={formData.valorTasacion}
                  onChange={(e) => handleRangeChange('valorTasacion', e.target.value)}
                  className="w-96 mb-4"
                />
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4 " onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 2 && (
            <div className='absolute bottom-0'>
              <label className="absolute bottom-96 text-3xl text-start mb-24 ms-4 text-white font-bold">Años de duración de la hipoteca?</label>
              <div className='text-center'>
                <input
                  type="number"
                  className="w-full p-2 mb-4 text-center text-5xl text-white font-bold placeholder-transparent focus:placeholder-transparent bg-transparent"
                  placeholder="Introduce los años"
                  {...register('duracion', { required: true })}
                  value={formData.duracion}
                  onChange={handleInputChange}
                  min={1}
                  max={35}
                />
                <input
                  type="range"
                  min="0"
                  max="35"
                  value={formData.duracion}
                  onChange={(e) => handleRangeChange('duracion', e.target.value)}
                  className="w-96 mb-4"
                />
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-2 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="bg-white text-black font-semibold text-xl my-2 mx-4 w-52 px-6 py-4 " onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <label className="absolute bottom-96 text-3xl text-start mb-14 ms-4 text-white font-bold ">Cual es el tipo de interes anual?</label>
              <div className='text-center'>
              <input
                type="number"
                className="w-full p-2 mb-4 text-center text-5xl text-white font-bold placeholder-transparent focus:placeholder-transparent bg-transparent"
                placeholder="Introduce el tipo de interés"
                {...register('interes', { required: true })}
                value={formData.interes}
                onChange={handleInputChange}
                min={0}
                max={20}
              />
              <input
                type="range"
                min="0"
                max="15"
                step="0.1"
                value={formData.interes}
                onChange={(e) => handleRangeChange('interes', e.target.value)}
                className="w-96 mb-4"
              />
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>  
                {isValidStep() && (
                  <button type="button" className="mt-6 bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}

          {step === 4 && (
              <div>
                <label className="absolute bottom-96 text-3xl text-start mb-14 ms-4 text-white font-bold">¿Para qué tipo de vivienda necesitas la hipoteca?</label>
                <div className="text-center">
                  <div className='p-2 mb-8 '>
                    <label className="text-3xl font-bold text-white">
                        {formData.tipoCompra === ""
                          ? "¿?"
                          : formData.tipoCompra}
                    </label>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="1"
                    value={
                      formData.tipoCompra === "habitual obra nueva"
                        ? 1
                        : formData.tipoCompra === "habitual Segunda mano"
                        ? 2
                        : formData.tipoCompra === "segunda residencia"
                        ? 3
                        : 0
                    }
                    // onChange={(e) => handleRangeChangeStep4(e)}
                    className="w-96 mb-4"

                    onChange={(e) => handleRangeChangeStep4('tipoCompra', e.target.value)}
  
                  />
                  {/* Mostrar el valor seleccionado */}
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded"
                    onClick={handlePrevStep}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  {isValidStep() && (
                    <button
                      type="button"
                      className="mt-6 bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4"
                      onClick={handleNextStep}
                    >
                      CONTINUAR
                    </button>
                  )}
                </div>
              </div>
          )}
           </form>
      </div>
    </div>
  );
};

export default InteractiveForm;

