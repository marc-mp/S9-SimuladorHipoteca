// import { useContext } from 'react';
// import { DataContext } from '../context/DataContext';
// import { Link } from 'react-router-dom';


// const HistorialSimulaciones = () => {
//     const { reportesGuardados } = useContext(DataContext);

//     const fecha = new Date();
//     // fecha en formato local (ejemplo: día/mes/año)
//     const fechaFormato = fecha.toLocaleDateString();
  

//     return (
//         <div className="max-w-md mx-auto">
//             <div className="flex justify-end mt-5 me-4">
//                 <Link to={"/UserDashboard"}>
//                     <button className="  px-4 py-1 mb-4 bg-yellow-300 rounded-xl text-md font-semibold ">Volver</button>
//                 </Link>
//             </div>
//             <h2 className="text-2xl text-center font-bold mb-4">Historial de Simulaciones</h2>
//             <div>
//                 {reportesGuardados.length === 0 ? (
//                     <p className='ms-10 text-red-500 '>No hay simulaciones guardadas.</p>
//                 ) : (
//                     <ul>
//                         {reportesGuardados.map((reporte, index) => (
//                             <li key={index} className="mb-2 border-2 space-y-2 border-neutral-200 shadow-lg rounded-xl p-4">
//                                 <div className='font-bold mb-2 text-lg'>
//                                     {fechaFormato}
//                                 </div>
//                                 <div>
//                                     <strong>Precio de la vivienda:</strong> {reporte.precioVivienda.toFixed(2)} €
//                                 </div>
//                                 <div>
//                                     <strong>Impuestos:</strong>({(reporte.taxRate * 100).toFixed(2)}%) {reporte.taxes.toFixed(2)} €
//                                 </div>
//                                 <div>
//                                     <strong>Ahorros aportados:</strong> {reporte.ahorros.toFixed(2)} €
//                                 </div>
//                                 <div>
//                                     <strong>Duración de la hipoteca:</strong> {reporte.duracion} años
//                                 </div>
//                                 <div>
//                                     <strong>Tasa de interés:</strong> {reporte.interes} %
//                                 </div>
//                                 <div>
//                                     <strong>Total intereses de la hipoteca:</strong> {reporte.totalInterest.toFixed(2)} €
//                                 </div>
//                                 <div>
//                                     <strong>Préstamo hipoteca solicitada:</strong> {reporte.prestamoHipoteca.toFixed(2)} €
//                                 </div>
//                                 <div>
//                                     <strong>Cuota mensual hipoteca:</strong> {reporte.monthlyPayment.toFixed(2)} €
//                                 </div>
//                                 <div>
//                                     <strong>Capacidad maxima endeudamiento:</strong> {reporte.capacidadEndeudamiento.toFixed(0)} €
//                                 </div>
//                                 <div className='inline-flex mb-2 space-x-2'>
//                                     <strong>Ratio endeudamiento (max 40%): </strong> 
//                                     <p className={` font-bold ${reporte.ratioEndeudamiento < 36 ? 'text-green-700' : reporte.ratioEndeudamiento < 41 ? 'text-orange-500' : 'text-red-600'} `}>  {reporte.ratioEndeudamiento.toFixed(0)}%</p>
//                                 </div>
//                                 <div>
//                                     <strong>Coste total al finalizar hipoteca:</strong> {reporte.totalCost.toFixed(2)} €
//                                 </div>
//                                 <div className='flex justify-center p-4'>
//                                     {reporte.ratioEndeudamiento < 36 && (
//                                     <div  className='inline-flex space-x-3 items-center'>
//                                         <div className='rounded-full w-4 h-4 bg-green-500'></div>
//                                         <p className='text-green-600 font-bold text-xl'>HIPOTECA ACEPTADA</p>
//                                     </div>
//                                     )}
//                                     {reporte.ratioEndeudamiento > 36 && reporte.ratioEndeudamiento < 41 && (
//                                     <div  className='inline-flex space-x-3 items-center'>
//                                         <div className='rounded-full w-4 h-4 bg-orange-500'></div>
//                                         <p className='text-orange-500 font-bold text-xl'>LA HIPOTECA ES VIABLE</p>
//                                     </div>
//                                     )}
//                                     {reporte.ratioEndeudamiento > 40 && (
//                                     <div  className='inline-flex space-x-3 items-center'>
//                                         <div className='rounded-full w-4 h-4 bg-red-600'></div>
//                                         <p className='text-red-600 font-bold text-xl'>LA HIPOTECA NO ES VIABLE</p>
//                                     </div>
//                                     )}
//                                 </div>
//                             </li>
//                         ))}
//                     </ul> 
//                 )}
//                 </div>
//             </div>
//         )
// }

// export default HistorialSimulaciones


import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

const HistorialSimulaciones = () => {
    const { reportesGuardados } = useContext(DataContext);
    const [openSections, setOpenSections] = useState({});

    // Alternar la visibilidad de una sección específica
    const toggleSection = (index, section) => {
        setOpenSections((prev) => ({
            ...prev,
            [`${index}-${section}`]: !prev[`${index}-${section}`],
        }));
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="flex justify-end mt-5 me-4">
                <Link to={"/UserDashboard"}>
                    <button className="px-4 py-1 mb-4 bg-yellow-300 rounded-xl text-md font-semibold">
                        Volver
                    </button>
                </Link>
            </div>
            <h2 className="text-2xl text-center font-bold mb-4">
                Historial de Simulaciones
            </h2>
            <div>
                {reportesGuardados.length === 0 ? (
                    <p className="ms-10 text-red-500">
                        No hay simulaciones guardadas.
                    </p>
                ) : (
                    <ul>
                        {reportesGuardados.map((reporte, index) => (
                            <li
                                key={index}
                                className="mb-2 border-2 space-y-2 border-neutral-200 shadow-lg rounded-xl p-4"
                            >
                                {/* Fecha de la simulación */}
                                <div className="font-bold mb-2 text-lg">
                                    {new Date().toLocaleDateString()}
                                </div>

                                {/* Datos introducidos por el usuario (Desplegado por defecto) */}
                                <div className="mb-4 border-b">
                                    <button
                                        className="w-full text-left font-bold py-2"
                                        onClick={() =>
                                            toggleSection(index, "datosUsuario")
                                        }
                                    >
                                        {openSections[`${index}-datosUsuario`] !== false
                                            ? "▼"
                                            : "▶"}{" "}
                                        Datos introducidos por el usuario
                                    </button>
                                    {openSections[`${index}-datosUsuario`] !== false && (
                                        <div className="p-2">
                                            <p><strong>Precio de la vivienda:</strong> {reporte.precioVivienda.toFixed(2)} €</p>
                                            <p><strong>Valor tasación:</strong> {reporte.valorTasacion.toFixed(2)} €</p>
                                            <p><strong>Duración de la hipoteca:</strong> {reporte.duracion} años</p>
                                            <p><strong>Tasa de interés:</strong> {reporte.interes} %</p>
                                            <p><strong>Tipo de compra:</strong> {reporte.tipoCompra}</p>
                                            <p><strong>Ahorros aportados:</strong> {reporte.ahorros.toFixed(2)} €</p>
                                            <p><strong>Solicitantes:</strong> {reporte.solicitantes}</p>
                                            <p><strong>Edades solicitantes:</strong> {Array.isArray(reporte.edadesSolicitantes) ? reporte.edadesSolicitantes.join(", ") : reporte.edadesSolicitantes} años</p>
                                            <p><strong>Familia numerosa:</strong> {reporte.familiaNumerosa}</p>
                                            <p><strong>Ingresos netos:</strong> {reporte.ingresosNetos.toFixed(2)} €</p>
                                            <p><strong>Cuotas de otros créditos:</strong> {reporte.cuotasCreditos.toFixed(2)} €</p>
                                        </div>
                                    )}
                                </div>

                                {/* Cálculos hipoteca */}
                                <div className="mb-4 border-b">
                                    <button
                                        className="w-full text-left font-bold py-2"
                                        onClick={() =>
                                            toggleSection(index, "calculosHipoteca")
                                        }
                                    >
                                        {openSections[`${index}-calculosHipoteca`]
                                            ? "▼"
                                            : "▶"}{" "}
                                        Cálculos hipoteca
                                    </button>
                                    {openSections[`${index}-calculosHipoteca`] && (
                                        <div className="p-2">
                                            <p><strong>Impuestos ({(reporte.taxRate * 100).toFixed(2)}%):</strong> {reporte.taxes.toFixed(2)} €</p>
                                            <p><strong>Préstamo Hipoteca solicitado:</strong> {reporte.prestamoHipoteca.toFixed(2)} €</p>
                                            <p><strong>Cuota mensual hipoteca:</strong> {reporte.monthlyPayment.toFixed(2)} €</p>
                                            <p><strong>Total intereses de la hipoteca:</strong> {reporte.totalInterest.toFixed(2)} €</p>
                                            <p><strong>Coste total al finalizar hipoteca:</strong> {reporte.totalCost.toFixed(2)} €</p>
                                            <p><strong>Capacidad máxima de endeudamiento:</strong> {reporte.capacidadEndeudamiento.toFixed(0)} €</p>
                                            <p className="inline-flex">
                                                <strong>Ratio endeudamiento (max 40%):</strong>
                                                <span className={`font-bold ml-2 ${reporte.ratioEndeudamiento < 36 ? 'text-green-700' : reporte.ratioEndeudamiento < 41 ? 'text-orange-500' : 'text-red-600'}`}>
                                                    {reporte.ratioEndeudamiento.toFixed(0)}%
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Estado de viabilidad */}
                                <div className="flex justify-center p-4">
                                    {reporte.ratioEndeudamiento < 36 && (
                                        <div className="inline-flex space-x-3 items-center">
                                            <div className="rounded-full w-4 h-4 bg-green-500"></div>
                                            <p className="text-green-600 font-bold text-xl">
                                                HIPOTECA ACEPTADA
                                            </p>
                                        </div>
                                    )}
                                    {reporte.ratioEndeudamiento >= 36 &&
                                        reporte.ratioEndeudamiento < 41 && (
                                            <div className="inline-flex space-x-3 items-center">
                                                <div className="rounded-full w-4 h-4 bg-orange-500"></div>
                                                <p className="text-orange-500 font-bold text-xl">
                                                    LA HIPOTECA ES VIABLE
                                                </p>
                                            </div>
                                        )}
                                    {reporte.ratioEndeudamiento >= 41 && (
                                        <div className="inline-flex space-x-3 items-center">
                                            <div className="rounded-full w-4 h-4 bg-red-600"></div>
                                            <p className="text-red-600 font-bold text-xl">
                                                LA HIPOTECA NO ES VIABLE
                                            </p>
                                        </div>
                                    )}
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
