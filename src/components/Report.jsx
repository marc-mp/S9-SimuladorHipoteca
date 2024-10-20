import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import ReportChart from './ReportChart';
import { useNavigate } from 'react-router-dom';

const Report = () => {
    const {
        prestamoHipoteca,
        monthlyPayment,
        totalInterest,
        taxRate,
        taxes,
        totalCost,
        precioVivienda,
        ahorros,
        interes,
        duracion,
        ratioEndeudamiento,
        capacidadEndeudamiento,
        setFormData,
        setStep,
        guardarReporte
    } = useContext(DataContext);

    const navigate = useNavigate();
    const [isGuardado, setIsGuardado] = useState(false); // Nuevo estado

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

    const handleGuardarReporte = () => {
      const nuevoReporte = {
          precioVivienda: precioVivienda,
          ahorros: ahorros,
          prestamoHipoteca: prestamoHipoteca,
          monthlyPayment: monthlyPayment,
          interes: interes,
          duracion: duracion,
          totalInterest: totalInterest,
          taxRate: taxRate,
          taxes: taxes,
          totalCost: totalCost,
          ratioEndeudamiento: ratioEndeudamiento,
          capacidadEndeudamiento: capacidadEndeudamiento
          }
    
      guardarReporte(nuevoReporte);
      setIsGuardado(true);
    };

    // Validación por si no hay datos para generar reporte
    if (precioVivienda <= 0 || ahorros < 0 || interes <= 0 || duracion <= 0) {
        return <div>Error en los datos, volver a intentarlo</div>;
    }

    return (
        <div className="p-6 rounded-lg shadow-lg">
          <div >
            <h2 className="text-2xl font-bold mb-6">Resumen de la Hipoteca</h2>
          </div>
          <div className="mb-2">
            <strong>Precio de la vivienda:</strong> {precioVivienda.toFixed(2)} €
          </div>
          <div className="mb-2">
            <strong>Impuestos ({(taxRate * 100).toFixed(2)}%)</strong> {taxes.toFixed(2)} €
          </div>

          <div className="mb-2">
            <strong>Ahorros aportados:</strong> {ahorros.toFixed(2)} €
          </div>
          <div className="mb-2">
            <strong>Duración de la hipoteca:</strong> {duracion} años
          </div>
          <div className="mb-2">
            <strong>Tasa de interés anual:</strong> {interes} %
          </div>
          <div className="mb-2">
            <strong>Total intereses de la hipoteca:</strong> {totalInterest.toFixed(2)} €
          </div>
          <div className="mb-2">
            <strong>Préstamo Hipoteca solicitada:</strong> {prestamoHipoteca.toFixed(2)} €
          </div>
          <div className="mb-2">
            <strong>Cuota mensual hipoteca:</strong> {monthlyPayment.toFixed(2)} €
          </div>
          <div className="mb-2">
            <strong>Capacidad maxima endeudamiento:</strong> {capacidadEndeudamiento.toFixed(0)} €
          </div>
          <div className='inline-flex mb-2 space-x-2'>
            <strong>Ratio endeudamiento (max 40%): </strong> 
            <p className={` font-bold ${ratioEndeudamiento < 36 ? 'text-green-700' : ratioEndeudamiento < 41 ? 'text-orange-500' : 'text-red-600'} `}>  {ratioEndeudamiento.toFixed(0)}%</p>
          </div>
          <div className="mb-4">
            <strong>Coste total al finalizar hipoteca:</strong> {totalCost.toFixed(2)} €
          </div>
          <div className='flex justify-center'>
            {ratioEndeudamiento < 36 && (
              <div  className='inline-flex space-x-3 items-center'>
                <div className='rounded-full w-4 h-4 bg-green-500'></div>
                <p className='text-green-600 font-bold text-xl'>HIPOTECA ACEPTADA</p>
              </div>
            )}
              {ratioEndeudamiento > 36 && ratioEndeudamiento < 41 && (
              <div  className='inline-flex space-x-3 items-center'>
                <div className='rounded-full w-4 h-4 bg-orange-500'></div>
                <p className='text-orange-500 font-bold text-xl'>HIPOTECA ACEPTADA</p>
              </div>
            )}
            {ratioEndeudamiento > 40 && (
              <div  className='inline-flex space-x-3 items-center'>
                <div className='rounded-full w-4 h-4 bg-red-600'></div>
                <p className='text-red-600 font-bold text-xl'>HIPOTECA RECHAZADA</p>
              </div>
            )}
          </div>
          <ReportChart />
          <div className="space-y-4 md:w-56">
              <div>
                <button 
                  onClick={handleGuardarReporte} 
                  className={`space-x-4 py-2 text-center px-4 rounded w-full ${
                    isGuardado ? 'bg-pink-500' : 'bg-blue-600'
                  } text-white`}
                  disabled={isGuardado} // Deshabilita el botón una vez ha guardado el reporte
                >
                    {isGuardado ? 'Hipoteca Guardada' : 'Guardar hipoteca'}
                </button>
              </div>
              <div>
                  <button 
                    onClick={handleGoHome} 
                    className="space-x-4 bg-blue-600 text-white py-2 text-center px-4 rounded w-full hover:bg-blue-900">
                      Volver a empezar
                  </button>
              </div>

          </div>
        </div>
    );
};

export default Report;
