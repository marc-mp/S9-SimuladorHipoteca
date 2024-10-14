import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';


const HistorialSimulaciones = () => {
    const { reportesGuardados } = useContext(DataContext);

    return (
        <div className="p-6 mx-4 ">
            <div className="flex justify-end">
                <Link to={"/UserDashboard"}>
                    <button className="p-1 mb-4 text-sm text-blue-500 font-semibold ">Volver</button>
                </Link>
            </div>
            <h2 className="text-2xl text-center font-bold mb-4">Historial de Simulaciones</h2>
            <div>
                {reportesGuardados.length === 0 ? (
                    <p>No hay simulaciones guardadas.</p>
                ) : (
                    <ul>
                        {reportesGuardados.map((reporte, index) => (
                            <li key={index} className="mb-2 border-2 border-neutral-200 shadow-lg rounded-xl p-4">
                                <div>
                                    <strong>Precio de la vivienda:</strong> {reporte.precioVivienda.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Ahorros:</strong> {reporte.ahorros.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Préstamo total:</strong> {reporte.prestamoHipoteca.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Pago mensual:</strong> {reporte.monthlyPayment.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Tasa de interés:</strong> {reporte.interes} %
                                </div>
                                <div>
                                    <strong>Duración:</strong> {reporte.duracion} años
                                </div>
                                <div>
                                    <strong>Total intereses:</strong> {reporte.totalInterest.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Impuestos:</strong>({(reporte.taxRate * 100).toFixed(2)}%) {reporte.taxes.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Coste total hipoteca:</strong> {reporte.totalCost.toFixed(2)} €
                                </div>
                            </li>
                        ))}
                    </ul> 
                )}
                </div>
            </div>
        );
};

export default HistorialSimulaciones;
