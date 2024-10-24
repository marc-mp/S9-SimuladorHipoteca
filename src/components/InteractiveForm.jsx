import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import { useNavigate } from 'react-router-dom';
import StepForm from './StepForm.jsx';


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
    const options = ["", "Habitual obra nueva", "Habitual Segunda mano", "Segunda residencia"];
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

  const handleGoHome = () => {
    setFormData({
        precioVivienda: 0,
        valorTasacion: 0,
        duracion: 0,
        interes: 0,
        tipoCompra: '',
        ahorros: 0,
        solicitantes: 0,
        edadesSolicitantes: [],
        familiaNumerosa: '',
        ingresosNetos: 0,
        cuotasCreditos: 0,
    });
    setStep(0);
    navigate('/');
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
        src={videos[step]} 
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute bottom-24">
        <form onSubmit={handleSubmit(onSubmit)} className='w-screen h-44'>
          {step === 0 && (
            <div>
              <div className="absolute bottom-96 mb-32">
                  <button className="p-2 ms-2 text-white  text-2xl font-bold " onClick={handleGoHome} >
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                    </svg>
                  </button>
              </div>
              <div className='absolute w-24 right-5 bottom-96 mb-48'>
                <StepForm />
              </div>
              <label className="absolute bottom-96 text-3xl text-start mb-5 ms-4 text-white font-bold ">Cual es el precio de la vivienda?</label>
              <div className='text-center'>
                <input
                  type="number"
                  className=" w-full p-2 mb-4 text-center text-5xl text-white font-bold border-transparent placeholder-transparent bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
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
                  className="w-96 mb-6"
                />
              </div>
              <div className='flex justify-end'>
                {isValidStep() && (
                  <button type="button" className="bg-white text-black font-bold text-2xl my-6 mx-4 w-52 px-6 py-4 " onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 1 && (
            <div>
              <div className="absolute bottom-96 mb-32">
                  <button className="p-2 ms-2 text-white  text-2xl font-bold " onClick={handleGoHome} >
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                    </svg>
                  </button>
              </div>
              <div className='absolute w-24 right-5 bottom-96 mb-48'>
                <StepForm />
              </div>
              <label className="absolute bottom-96 text-3xl text-start mb-5 ms-4 text-white font-bold ">Cual es el valor de tasacion?</label>
              <div className='text-center'>
                <input
                  type="number"
                  className="w-full p-2 mb-4 text-center text-5xl text-white font-bold placeholder-transparent focus:placeholder-transparent bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
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
                  className="w-96 mb-6"
                />
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="bg-white text-black font-bold text-2xl my-6 mx-4 w-52 px-6 py-4 " onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 2 && (
            <div className='absolute -bottom-5'>
              <div className="absolute bottom-96 mb-48">
                  <button className="p-2 ms-2 text-white  text-2xl font-bold " onClick={handleGoHome} >
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                    </svg>
                  </button>
              </div>
              <div className='absolute w-24 right-5 bottom-96 mb-64'>
                <StepForm />
              </div>
              <label className="absolute bottom-96 text-3xl text-start mb-20 ms-4 text-white font-bold">Años de duración de la hipoteca?</label>
              <div className='text-center'>
                <input
                  type="number"
                  className="w-full p-2 mb-4 text-center text-5xl text-white font-bold placeholder-transparent focus:placeholder-transparent bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
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
                  className="w-96 mb-5"
                />
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="bg-white text-black font-bold text-2xl my-6 mx-4 w-52 px-6 py-4 " onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <div className="absolute bottom-96 mb-32">
                  <button className="p-2 ms-2 text-white  text-2xl font-bold " onClick={handleGoHome} >
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                    </svg>
                  </button>
              </div>
              <div className='absolute w-24 right-5 bottom-96 mb-48'>
                <StepForm />
              </div>
              <label className="absolute bottom-96 text-3xl text-start mb-5 ms-4 text-white font-bold ">Cual es el tipo de interes anual?</label>
              <div className='text-center'>
                <input
                  type="number"
                  className="w-full p-2 mb-4 text-center text-5xl text-white font-bold placeholder-transparent focus:placeholder-transparent bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
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
                  className="w-96 mb-6"
                />
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>  
                {isValidStep() && (
                  <button type="button" className="mt-6 bg-white text-black font-bold text-2xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 4 && (
              <div>
                <div className="absolute bottom-96 mb-32">
                    <button className="p-2 ms-2 text-white  text-2xl font-bold " onClick={handleGoHome} >
                      <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                      </svg>
                    </button>
                </div>
                <div className='absolute w-24 right-5 bottom-96 mb-48'>
                <StepForm />
                </div>
                <label className="absolute bottom-96 text-3xl text-start mb-5 ms-4 text-white font-bold">Para qué tipo de vivienda necesitas la hipoteca?</label>
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
                      formData.tipoCompra === "Habitual obra nueva"
                        ? 1
                        : formData.tipoCompra === "Habitual Segunda mano"
                        ? 2
                        : formData.tipoCompra === "Segunda residencia"
                        ? 3
                        : 0
                    }
                    className="w-96 mb-8"
                    onChange={(e) => handleRangeChangeStep4('tipoCompra', e.target.value)}
                  />
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
                      className="mt-6 bg-white text-black font-bold text-2xl my-6 mx-4 w-52 px-6 py-4"
                      onClick={handleNextStep}
                    >
                      CONTINUAR
                    </button>
                  )}
                </div>
              </div>
          )}
          {step === 5 && (
            <div>
              <div className="absolute bottom-96 mb-32">
                  <button className="p-2 ms-2 text-white  text-2xl font-bold " onClick={handleGoHome} >
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                    </svg>
                  </button>
              </div>
              <div className='absolute w-24 right-5 bottom-96 mb-48'>
                <StepForm />
              </div>
              <label className="absolute bottom-96 text-3xl text-start mb-5 ms-4 text-white font-bold">Cuántos ahorros vas a aportar?</label>
              <div className="text-center">
                <input
                  type="number"
                  className="w-full p-2 mb-4 text-center text-5xl text-white font-bold placeholder-transparent focus:placeholder-transparent bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder="Introduce la cantidad"
                  {...register('ahorros', { required: true })}
                  value={formData.ahorros}
                  onChange={handleInputChange}
                  min={0}
                  max={formData.precioVivienda}
                />
                  <input
                  type="range"
                  min="0"
                  max={formData.precioVivienda}
                  value={formData.ahorros}
                  onChange={(e) => handleRangeChange('ahorros', e.target.value)}
                  className="w-96 mb-6"
                />
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className=" bg-white text-black font-bold text-2xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 6 && (
            <div>
              <div className="absolute bottom-96 mb-32">
                  <button className="p-2 ms-2 text-white  text-2xl font-bold " onClick={handleGoHome} >
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                    </svg>
                  </button>
              </div>
              <div className='absolute w-24 right-5 bottom-96 mb-48'>
                <StepForm />
              </div>
              <label className="absolute bottom-96 text-3xl text-start mb-6 ms-4 text-white font-bold">Cuántos titulares tendrá la hipoteca?</label>
              <div className='text-center'>
                <input
                  type="number"
                  className="w-full p-2 mb-4 text-center text-white text-5xl font-bold placeholder-transparent bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder="Introduce la cantidad"
                  {...register('ahorros', { required: true })}
                  value={formData.solicitantes}
                  onChange={handleInputChange}
                  min={0}
                  max="2"
                />
                  <input
                  type="range"
                  min="0"
                  max="2"
                  value={formData.solicitantes}
                  onChange={(e) => handleRangeChange('solicitantes', e.target.value)}
                  className="w-96 mb-6"
                />
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="mt-6 bg-white text-black font-bold text-2xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 7 && (
            <div className={formData.solicitantes == 2 ? 'absolute -bottom-11 mt-10' : ''}>
              <div className={formData.solicitantes == 2 ? "absolute bottom-96 mb-44" : "absolute bottom-96 mb-32"} onClick={handleGoHome} >
                  <button className="p-2 ms-2 text-white  text-2xl font-bold ">
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                    </svg>
                  </button>
              </div>
              <div className={formData.solicitantes == 2 ? 'absolute w-24 right-5 bottom-96 mb-60' : 'absolute w-24 right-5 bottom-96 mb-48'}>
                <StepForm />
              </div>
              <label className={formData.solicitantes == 2 ? 'absolute bottom-96 text-3xl text-start mb-16 ms-4 text-white font-bold' : 'absolute bottom-96 text-3xl text-start mb-6 ms-4 text-white font-bold' }>Indica las edades de los solicitantes:</label>
               <div className='text-center'>
                {Array.from({ length: formData.solicitantes }).map((_, index) => (
                  <div key={index} className="mb-4">
                    <input
                      type="number"
                      className="w-full p-2 mb-4 text-center text-5xl text-white font-bold placeholder-transparent focus:placeholder-transparent bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
                      placeholder={`Introduce la edad del solicitante ${index + 1}`}
                      {...register(`edadesSolicitantes.${index}`, { required: true })}
                      value={formData.edadesSolicitantes[index] || 18} // Valor por defecto de 18 si no hay edad establecida
                      onChange={(e) => {
                        const newEdades = [...formData.edadesSolicitantes];
                        newEdades[index] = e.target.value; // Asignar el nuevo valor
                        setFormData({ ...formData, edadesSolicitantes: newEdades }); // Actualizar el estado
                      }}
                      min={18}
                      max={79}
                    />
                    <input
                      type="range"
                      min="18"
                      max="79"
                      step="1"
                      value={formData.edadesSolicitantes[index] || 18} // Usar el valor actual o 18 si no hay
                      onChange={(e) => {
                        const newEdades = [...formData.edadesSolicitantes];
                        newEdades[index] = e.target.value; // Cambiar la edad del solicitante correspondiente
                        setFormData({ ...formData, edadesSolicitantes: newEdades });
                      }}
                      className="w-96 mb-6"
                    />
                  </div>
                ))}
              </div>
              <div className='flex justify-between bg-black'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-2 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className=" bg-white text-black font-bold text-2xl  my-2 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 8 && (
            <div >
              <div className="absolute bottom-96 mb-32">
                  <button className="p-2 ms-2 text-white  text-2xl font-bold " onClick={handleGoHome} >
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                    </svg>
                  </button>
              </div>
              <div className='absolute w-24 right-5 bottom-96 mb-48'>
                <StepForm />
              </div>
              <label className="absolute bottom-96 text-3xl text-start mb-14 ms-4 text-white font-bold">Eres familia numerosa?</label>
              <div className="text-center w-screen">
                <div className='p-2 mb-4'>
                  <label className="text-5xl font-bold text-white">
                      {formData.familiaNumerosa === ""
                        ? "¿?"
                        : formData.familiaNumerosa}
                  </label>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="1"
                  value={
                    formData.familiaNumerosa === "NO"
                      ? 1
                      : formData.familiaNumerosa === "SI"
                      ? 2
                      : 0
                  }
                  className="w-96 mb-9"
                  onChange={(e) => handleRangeChangeStep8('familiaNumerosa', e.target.value)}
                />
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className=" bg-white text-black font-bold text-2xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 9 && (
            <div className='absolute -bottom-6'>
              <div className="absolute bottom-96 mb-48">
                  <button className="p-2 ms-2 text-white  text-2xl font-bold " onClick={handleGoHome} >
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                    </svg>
                  </button>
              </div>
              <div className='absolute w-28 right-5 bottom-96 mb-64'>
                <StepForm />
              </div>
              <label className="absolute bottom-96 text-3xl text-start mb-24 ms-4 text-white font-bold">Cuantos ingresos netos tienes al mes?</label>
              <div className='text-center'>
                <input
                  type="number"
                  className="w-full p-2 mb-4 text-center text-5xl text-white font-bold placeholder-transparent focus:placeholder-transparent bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder="Introduce tus ingresos"
                  {...register('ingresosNetos', { required: true })}
                  value={formData.ingresosNetos}
                  onChange={handleInputChange}
                  min={0}
                />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step ="50"
                  value={formData.ingresosNetos}
                  onChange={(e) => handleRangeChange('ingresosNetos', e.target.value)}
                  className="w-96 mb-8"
                />
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className=" bg-white text-black font-bold text-2xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}

          {step === 10 && (
            <div>
              <div className="absolute bottom-96 mb-32">
                  <button className="p-2 ms-2 text-white  text-2xl font-bold " onClick={handleGoHome} >
                    <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"/>
                    </svg>
                  </button>
              </div>
              <div className='absolute w-28 right-5 bottom-96 mb-48'>
                <StepForm />
              </div>
              <label className="absolute bottom-96 p-2 text-3xl text-start mb-3 ms-4 text-white font-bold">Tienes otros créditos? indica la cuota.</label>
              <div className='text-center'>
              <input
                type="number"
                className="w-full p-2 text-center text-5xl text-white font-bold placeholder-transparent focus:placeholder-transparent bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
                placeholder="Introduce tus cuotas mensuales"
                {...register('cuotasCreditos', { required: true })}
                value={formData.cuotasCreditos}
                onChange={handleInputChange}
                min={0}
              />
              <input
                type="range"
                min="0"
                max="1000"
                step ="25"
                value={formData.cuotasCreditos}
                onChange={(e) => handleRangeChange('cuotasCreditos', e.target.value)}
                className="w-96 mb-8"
              />
              </div>
              {/* {formData.cuotasCreditos < "1" && (
                <span>No</span>
              )} */}
              <div className='flex justify-between '>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                  {isValidStep() && (
                    <button type="button" className=" bg-white text-black font-bold text-2xl my-6 mx-4 w-52 px-2 py-4" onClick={onSubmit}>VER RESULTADO</button>
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

