import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';


const HistorialSimulaciones = () => {
    const { reportesGuardados } = useContext(DataContext);

    return (
        <div className="mx-3 ">
            <div className="flex justify-end">
                <Link to={"/UserDashboard"}>
                    <button className=" justify-start px-4 py-1 ms-4 mb-4 bg-yellow-300 rounded-xl text-md font-semibold ">Volver</button>
                </Link>
            </div>
            <h2 className="text-2xl text-center font-bold mb-4">Historial de Simulaciones</h2>
            <div>
                {reportesGuardados.length === 0 ? (
                    <p>No hay simulaciones guardadas.</p>
                ) : (
                    <ul>
                        {reportesGuardados.map((reporte, index) => (
                            <li key={index} className="mb-2 border-2 space-y-2 border-neutral-200 shadow-lg rounded-xl p-4">
                                <div>
                                    <strong>Precio de la vivienda:</strong> {reporte.precioVivienda.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Impuestos:</strong>({(reporte.taxRate * 100).toFixed(2)}%) {reporte.taxes.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Ahorros aportados:</strong> {reporte.ahorros.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Duración de la hipoteca:</strong> {reporte.duracion} años
                                </div>
                                <div>
                                    <strong>Tasa de interés:</strong> {reporte.interes} %
                                </div>
                                <div>
                                    <strong>Total intereses de la hipoteca:</strong> {reporte.totalInterest.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Préstamo hipoteca solicitada:</strong> {reporte.prestamoHipoteca.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Cuota mensual hipoteca:</strong> {reporte.monthlyPayment.toFixed(2)} €
                                </div>
                                <div>
                                    <strong>Capacidad maxima endeudamiento:</strong> {reporte.capacidadEndeudamiento.toFixed(0)} €
                                </div>
                                <div className='inline-flex mb-2 space-x-2'>
                                    <strong>Ratio endeudamiento (max 40%): </strong> 
                                    <p className={` font-bold ${reporte.ratioEndeudamiento < 36 ? 'text-green-700' : reporte.ratioEndeudamiento < 41 ? 'text-orange-500' : 'text-red-600'} `}>  {reporte.ratioEndeudamiento.toFixed(0)}%</p>
                                </div>
                                <div>
                                    <strong>Coste total al finalizar hipoteca:</strong> {reporte.totalCost.toFixed(2)} €
                                </div>
                                <div className='flex justify-center p-4'>
                                    {reporte.ratioEndeudamiento < 36 && (
                                    <div  className='inline-flex space-x-3 items-center'>
                                        <div className='rounded-full w-4 h-4 bg-green-500'></div>
                                        <p className='text-green-600 font-bold text-xl'>HIPOTECA ACEPTADA</p>
                                    </div>
                                    )}
                                    {reporte.ratioEndeudamiento > 36 && reporte.ratioEndeudamiento < 41 && (
                                    <div  className='inline-flex space-x-3 items-center'>
                                        <div className='rounded-full w-4 h-4 bg-orange-500'></div>
                                        <p className='text-orange-500 font-bold text-xl'>HIPOTECA ACEPTADA</p>
                                    </div>
                                    )}
                                    {reporte.ratioEndeudamiento > 40 && (
                                    <div  className='inline-flex space-x-3 items-center'>
                                        <div className='rounded-full w-4 h-4 bg-red-600'></div>
                                        <p className='text-red-600 font-bold text-xl'>HIPOTECA RECHAZADA</p>
                                    </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul> 
                )}
                </div>
            </div>
        )
}

export default HistorialSimulaciones
