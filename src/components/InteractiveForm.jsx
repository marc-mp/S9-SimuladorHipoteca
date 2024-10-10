import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import { useNavigate } from 'react-router-dom';
import ahorros2 from '../assets/ahorros2.mp4'

const InteractiveForm = () => {
  const { step, setStep, formData, setFormData } = useContext(DataContext);
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
        return formData.precioVivienda > 0 && formData.valorTasacion > 0;
      case 1:
        return formData.duracion > 0 && formData.interes >= 0;
      case 2:
        return formData.tipoCompra !== '' && formData.ahorros >= 0;
      case 3:
        return formData.solicitantes > 0 && formData.edadesSolicitantes.every(age => age >= 18);
      case 4:
        return formData.familiaNumerosa !== '' && formData.ingresosNetos >= 0;
      case 5:
        return formData.cuotasCreditos >= 0;
      default:
        return false;
    }
  };

  return (
    <div className="container max-w-lg mx-auto my-5 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h1 className=' text-2xl text-blue-500 font-bold'>Simulador de hipotecas</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <div>
            <label className="block text-lg font-bold mb-2">Precio vivienda:</label>
            <input
              type="number"
              className="w-full p-2 mb-4 border rounded"
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
              className="w-full mb-4"
            />
            {/* <div className="flex justify-between">
              <span>0</span>
              <span>2000000</span>
            </div> */}
            <label className="block text-lg font-bold mb-2">Valor tasación:</label>
            <input
              type="number"
              className="w-full p-2 mb-4 border rounded"
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
            <div className='flex justify-end'>
              {/* <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePrevStep}>Volver</button> */}
              {isValidStep() && (
                <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNextStep}>Continuar</button>
              )}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <label className="block text-lg font-bold mb-2">Años de duración de la hipoteca:</label>
            <input
              type="number"
              className="w-full p-2 mb-4 border rounded"
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

            <label className="block text-lg font-bold mb-2">Tipo de interés:</label>
            <input
              type="number"
              className="w-full p-2 mb-4 border rounded"
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
              <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePrevStep}>Volver</button>
              {isValidStep() && (
                <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNextStep}>Continuar</button>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block text-lg font-bold mb-2">Tipo de vivienda:</label>
            <select
              className="w-full p-2 mb-4 border rounded"
              {...register('tipoCompra', { required: true })}
              value={formData.tipoCompra}
              onChange={handleInputChange}
            >
              <option value="">Selecciona una opción</option>
              <option value="habitual nueva construcción">Vivienda habitual de nueva construcción</option>
              <option value="habitual Segunda mano">Vivienda habitual de Segunda mano</option>
              <option value="segunda residencia">Segunda residencia</option>
            </select>

            <label className="block text-lg font-bold mb-2">¿Cuántos ahorros vas a aportar?</label>
            <input
              type="number"
              className="w-full p-2 mb-4 border rounded"
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
              <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePrevStep}>Volver</button>
              {isValidStep() && (
                <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNextStep}>Continuar</button>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
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
              <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePrevStep}>Volver</button>
              {isValidStep() && (
                <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNextStep}>Continuar</button>
              )}
            </div>
          </div>
        )}


        {step === 4 && (
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
              <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePrevStep}>Volver</button>
              {isValidStep() && (
                <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNextStep}>Continuar</button>
              )}
            </div>
          </div>
        )}

        {step === 5 && (
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
              <button type="button" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePrevStep}>Volver</button>
              {isValidStep() && (
                <button type="submit" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default InteractiveForm;

