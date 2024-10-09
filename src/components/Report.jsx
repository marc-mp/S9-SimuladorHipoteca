import { useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import ReportChart from './ReportChart.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Report = () => {
  const { prestamoHipoteca,
          monthlyPayment,
          totalInterest,
          taxRate,
          taxes,
          totalCost, 
          precioVivienda, 
          ahorros, 
          interes, 
          duracion, 
          setFormData,
          setStep,

        } = useContext(DataContext);

        const navigate = useNavigate()

        const handleGoHome =() => {
          setFormData({
              precioVivienda: 0,
              valorTasacion: 0,
              duracion: 0,
              interes: 0,
              tipoCompra: '',
              // tipoVivienda: '',
              ahorros: 0,
              solicitantes: 0,
              edadesSolicitantes: [],
              familiaNumerosa: '',
              ingresosNetos: 0,
              cuotasCreditos: 0,
          })
          setStep(0)
          navigate('/')
        }
      

  // Validación adicional: Si los valores no son lógicos, mostrar mensaje
  if (precioVivienda <= 0 || ahorros < 0 || interes <= 0 || duracion <= 0) {
    return <div>Error en los datos, volver a intentarlo</div>;
  }

  return (
    <div className="p-6 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold mb-4">Resumen de la Hipoteca</h2>
      <div className="mb-2">
        <strong>Precio de la vivienda:</strong> {precioVivienda.toFixed(2)} €
      </div>
      <div className="mb-2">
        <strong>Ahorros aportados:</strong> {ahorros.toFixed(2)} €
      </div>
      <div className="mb-2">
        <strong>Préstamo total solicitado:</strong> {prestamoHipoteca.toFixed(2)} €
      </div>
      <div className="mb-2">
        <strong>Pago mensual:</strong> {monthlyPayment.toFixed(2)} €
      </div>
      <div className="mb-2">
        <strong>Tasa de interés anual:</strong> {interes} %
      </div>
      <div className="mb-2">
        <strong>Duración de la hipoteca:</strong> {duracion} años
      </div>
      <div className="mb-2">
        <strong>Total de intereses pagados:</strong> {totalInterest.toFixed(2)} €
      </div>
      <div className="mb-2">
        <strong>Impuestos ({(taxRate * 100).toFixed(2)}%)</strong> {taxes.toFixed(2)} €
      </div>
      <div className="mb-4">
        <strong>Costo total de la vivienda:</strong> {totalCost.toFixed(2)} €
      </div>
      <div>
        <ReportChart/>
      </div>
      <div className='space-y-4 md:w-56'>
        <div>
          <button  onClick={handleGoHome} className="inline-flex space-x-4 bg-blue-600 text-white py-2 text-center px-4 rounded w-full hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <p>Volver a empezar</p>
          </button>
        </div>
        <div>
          <button className="inline-flex space-x-4 bg-blue-600 text-white py-2 text-center px-4 rounded w-full hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
            </svg>
            <p>Guardar reporte</p>
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Report;
