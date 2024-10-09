import { useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import ReportChart from './ReportChart.jsx';

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
        } = useContext(DataContext);

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
      
    </div>
  );
};

export default Report;
