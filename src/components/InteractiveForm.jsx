import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import { useNavigate } from 'react-router-dom';
import entrarPuerta from '../assets/entrarPuerta.mp4'

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
    <div className="relative max-h-screen">
      {/* <h1 className=' text-2xl text-blue-500 font-bold'></h1> */}
      <video
        className=""
        src={videos[step]} // Accedemos al video correspondiente al step actual
        autoPlay
        loop
        muted
        // playsInline
      />
      <div className="absolute bottom-9">
        <form onSubmit={handleSubmit(onSubmit)} className='w-screen h-44 bg-red-400'>
          {step === 0 && (
            <div>
              <label className="absolute bottom-96 text-3xl text-start mb-14 ms-4 text-white font-bold ">Cual es el precio de la vivienda?:</label>
              <input
                type="number"
                className="w-full p-2 mb-4 text-center text-3xl font-semibold border rounded placeholder-transparent focus:placeholder-transparent"
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
                className="w-full mx-4 mb-4"
              />
              {/* <div className="flex justify-between">
                <span>0</span>
                <span>2000000</span>
              </div> */}
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
              <input
                type="number"
                className="w-full p-2 mb-4 text-center text-3xl font-semibold border rounded placeholder-transparent focus:placeholder-transparent"
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
                className="w-full mb-4"
              />
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4 " onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <label className="absolute bottom-96 text-3xl text-start mb-14 ms-4 text-white font-bold ">Años de duración de la hipoteca?</label>
              <input
                type="number"
                className="w-full p-2 mb-4 text-center text-3xl font-semibold border rounded placeholder-transparent focus:placeholder-transparent"
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
                className="w-full mb-4"
              />
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4 " onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <label className="absolute bottom-96 text-3xl text-start mb-14 ms-4 text-white font-bold ">Cual es el tipo de interes anual?</label>
              <input
                type="number"
                className="w-full p-2 mb-4 text-center text-3xl font-semibold border rounded placeholder-transparent focus:placeholder-transparent"
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
                className="w-full mb-4"
              />
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
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
              <label className="absolute bottom-96 text-3xl text-start mb-14 ms-4 text-white font-bold ">Para que tipo de vivienda necessitas la hipoteca?</label>
              <select
                className="w-full p-2 mb-4 text-center text-3xl font-semibold border rounded placeholder-transparent focus:placeholder-transparent"
                {...register('tipoCompra', { required: true })}
                value={formData.tipoCompra}
                onChange={handleInputChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="habitual nueva construcción">Vivienda habitual de nueva construcción</option>
                <option value="habitual Segunda mano">Vivienda habitual de Segunda mano</option>
                <option value="segunda residencia">Segunda residencia</option>
              </select>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="mt-6 bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 5 && (
            <div>
              <label className="absolute bottom-96 text-3xl text-start mb-14 ms-4 text-white font-bold ">¿Cuántos ahorros vas a aportar?</label>
              <input
                type="number"
                className="w-full p-2 mb-4 text-center text-3xl font-semibold border rounded placeholder-transparent focus:placeholder-transparent"
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
                className="w-full mb-4"
              />
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="mt-6 bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <label className="block text-lg font-bold mb-2">¿Cuántos titulares tendrá la hipoteca?</label>
              <div className="mb-4">
                {[1, 2].map((num) => (
                  <label key={num} className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      className="form-radio"
                      {...register('solicitantes', { required: true })}
                      value={num}
                      checked={formData.solicitantes === num.toString()}
                      onChange={handleInputChange}
                    />
                    <span className="ml-2">{num}</span>
                  </label>
                ))}
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="mt-6 bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 7 && (
            <div>
              <label className="block text-lg font-bold mb-2">Edades de los solicitantes:</label>
              {Array.from({ length: formData.solicitantes }).map((_, index) => (
                <input
                  key={index}
                  type="number"
                  className="w-full p-2 mb-4 border rounded"
                  placeholder={`Introduce la edad del solicitante ${index + 1}`}
                  {...register(`edadesSolicitantes.${index}`, { required: true })}
                  onChange={(e) => {
                    // Actualizar el valor del array `edadesSolicitantes` en `formData`
                    const newEdades = [...formData.edadesSolicitantes];
                    newEdades[index] = e.target.value; // Asignar el nuevo valor
                    setFormData({ ...formData, edadesSolicitantes: newEdades }); // Actualizar el estado
                  }}
                  min={18}
                  max={79}
                />         
              ))}
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="mt-6 bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}

          {step === 8 && (
            <div>
              <label className="block text-lg font-bold mb-2">¿Eres familia numerosa?</label>
              <div className="mb-4">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    className="form-radio"
                    {...register('familiaNumerosa', { required: true })}
                    value="sí"
                    checked={formData.familiaNumerosa === 'sí'}
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">Sí</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    className="form-radio"
                    {...register('familiaNumerosa', { required: true })}
                    value="no"
                    checked={formData.familiaNumerosa === 'no'}
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="mt-6 bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}
          {step === 9 && (
            <div>
              <label className="block text-lg font-bold mb-2">Ingresos netos mensuales:</label>
              <input
                type="number"
                className="w-full p-2 mb-4 border rounded"
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
                className="w-full mb-4"
              />
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                {isValidStep() && (
                  <button type="button" className="mt-6 bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
                )}
              </div>
            </div>
          )}

          {step === 10 && (
            <div>
              <label className="block text-lg font-bold mb-2">Tienes otros créditos? indica la cuota:</label>
              <input
                type="number"
                className="w-full p-2 mb-4 border rounded"
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
                className="w-full mb-4"
              />
              {formData.cuotasCreditos < "1" && (
                <span>No</span>
              )}
              <div className='flex justify-between'>
                <button type="button" className="bg-transparent border-4 border-white text-white my-6 mx-4 px-4 py-4 rounded" onClick={handlePrevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                  {isValidStep() && (
                    <button type="button" className="mt-6 bg-white text-black font-semibold text-xl my-6 mx-4 w-52 px-6 py-4" onClick={handleNextStep}>CONTINUAR</button>
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

