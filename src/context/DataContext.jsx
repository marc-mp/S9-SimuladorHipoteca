import { createContext, useState } from 'react';

// Creamos el contexto
export const DataContext = createContext();

// Proveedor del contexto
const DataContextProvider = ({ children }) => {
  // Estado que almacenará los datos del formulario


  const [formData, setFormData] = useState({
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
  });

  // const [usuario, setUsuario] = useState(null);
  const [step, setStep] = useState(0);
  
  // Lista de videos
  const videos = [
    '/src/assets/videoStep0.mp4',
    '/src/assets/videoStep1.mp4',
    '/src/assets/videoStep2.mp4',
    '/src/assets/videoStep3.mp4',
    '/src/assets/videoStep4.mp4',
    '/src/assets/videoStep5.mp4',
    '/src/assets/videoStep6.mp4',
    '/src/assets/videoStep7.mp4',
    '/src/assets/videoStep8.mp4',
    '/src/assets/videoStep9.mp4',
    '/src/assets/videoStep10.mp4',

    // Agrega más videos según el número de steps
  ];
  // Validación: Asegúrate de que todos los campos requeridos estén presentes y son números válidos
  const precioVivienda = parseFloat(formData?.precioVivienda) || 0;
  const ahorros = parseFloat(formData?.ahorros) || 0;
  const interes = parseFloat(formData?.interes) || 0;
  const duracion = parseInt(formData?.duracion) || 0;


  // Cálculo del préstamo total solicitado
  const prestamoHipoteca = precioVivienda - ahorros;

  // Convertir tasa de interés a decimal y calcular el interés mensual
  const interestRateDecimal = interes / 100;
  const monthlyInterestRate = interestRateDecimal / 12;

  // Duración de la hipoteca en meses
  const loanTermMonths = duracion * 12;

  // Cálculo del pago mensual usando la fórmula de amortización
  const monthlyPayment = prestamoHipoteca > 0 && monthlyInterestRate > 0
    ? Number((prestamoHipoteca * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths)))
    : 0;

  // Total de pagos y de intereses
  const totalPayment = Number(monthlyPayment * loanTermMonths);
  const totalInterest = Number(totalPayment - prestamoHipoteca);

// Función para calcular el porcentaje de impuestos
const taxPercentaje = () => {
  if (formData.familiaNumerosa === "SI" && formData.tipoCompra === "habitual Segunda mano" ) {
    return 0.05; // 5% si es familia numerosa
  }

  if (formData.tipoCompra === "habitual Segunda mano") {
    const allYoungerThan33 = formData.edadesSolicitantes.every(edad => edad < 33);
    const someYoungerAndSomeOlder = formData.edadesSolicitantes.some(edad => edad < 33) && 
                                    formData.edadesSolicitantes.some(edad => edad > 32);

    if (allYoungerThan33) {
      return 0.05; // 5% si todos son menores de 33 años
    }

    if (someYoungerAndSomeOlder) {
      return 0.075; // 7.5% si hay un menor de 33 y otro mayor de 32
    }
  }

  return 0.10; // Por defecto, retornar 10% si no se cumplen otras condiciones
};

  const taxRate = taxPercentaje()
  // Asegurarse que siempre sea un número válido (fallback a 0 si algo falla)
  const taxes = !isNaN(precioVivienda) && !isNaN(taxPercentaje()) ? Number(precioVivienda * taxPercentaje()) : 0;

  // Costo total de la vivienda
  const totalCost = Number(precioVivienda + taxes + totalInterest);


  // Función para actualizar los datos del formulario
  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const [reportesGuardados, setReportesGuardados] = useState([]);

  const guardarReporte = (reporte) => {
      setReportesGuardados((prevReportes) => [...prevReportes, reporte]);
  };

  return (
    <DataContext.Provider value={{ formData, setFormData, 
                                  updateFormData, 
                                  step, setStep, 
                                  prestamoHipoteca,
                                  interestRateDecimal,
                                  monthlyInterestRate,
                                  loanTermMonths,
                                  monthlyPayment,
                                  totalPayment,
                                  totalInterest,
                                  taxPercentaje,
                                  taxRate,
                                  taxes,
                                  totalCost,
                                  precioVivienda, 
                                  ahorros,
                                  interes,
                                  duracion,
                                  videos,
                                  reportesGuardados, setReportesGuardados,
                                  guardarReporte

                                  }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider
