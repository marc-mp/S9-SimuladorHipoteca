import { createContext, useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {

  // objeto con los datos requeridos en el formulario
  const [formData, setFormData] = useState({
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

  
  // array con lista de videos que se muestran en el formulario
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
  ];

  //array de las imagenes que se muestran usando el componente SliderComponent
  const sliderImages = [
    '/src/assets/image1.jpg',
    '/src/assets/image2.jpg',
    '/src/assets/image3.jpg',
    '/src/assets/image4.jpg',
  ];

  // variables para contador de steps
  const [step, setStep] = useState(0);
  const totalSteps = videos.length
  
  // Validación: Asegurar que todos los campos requeridos estén presentes y son números válidos
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

  // varible Total de pagos
  const totalPayment = Number(monthlyPayment * loanTermMonths);

  //variable total intereses
  const totalInterest = Number(totalPayment - prestamoHipoteca);

  // Función para calcular el porcentaje de impuestos
  const taxPercentaje = () => {
    if (formData.familiaNumerosa === "SI" && formData.tipoCompra === "Habitual Segunda mano" ) {
      return 0.05; // 5% si es familia numerosa
    }

    if (formData.tipoCompra === "Habitual Segunda mano") {
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

  // variable % impuestos
  const taxRate = taxPercentaje()

  // impuestos totales
  const taxes = !isNaN(precioVivienda) && !isNaN(taxPercentaje()) ? Number(precioVivienda * taxPercentaje()) : 0;

  // Coste total de la vivienda
  const totalCost = Number(precioVivienda + taxes + totalInterest);

  //ratio endeudamiento
  const capacidadEndeudamiento = Number(formData.ingresosNetos - formData.cuotasCreditos) * 0.40
  const ratioEndeudamiento = monthlyPayment / (formData.ingresosNetos - formData.cuotasCreditos) * 100

  // Función para actualizar los datos del formulario
  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  // variable y funcion para guardar reporte generado en componente Report y poder usarlo en componente HistorialSimulaciones
  const [reportesGuardados, setReportesGuardados] = useState([]);

  const guardarReporte = (reporte) => {
      setReportesGuardados((prevReportes) => [...prevReportes, reporte]);
  };

  // variables para el componente SliderInfo que se usa en componente Home
  const info1 = {
    icon1:       
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="size-10">
        <path  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>,
    text1: "1. Introduce los datos de la casa que quieres comprar",

  }

  const info2 = {
    icon2: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          </svg>,  
    text2: "2. Introduce los datos de la hipoteca que quieres solicitar",
  }

  const info3 = {
    icon3:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 11.625h4.5m-4.5 2.25h4.5m2.121 1.527c-1.171 1.464-3.07 1.464-4.242 0-1.172-1.465-1.172-3.84 0-5.304 1.171-1.464 3.07-1.464 4.242 0M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>,     
    text3: "3. Consulta los cálculos al momento y conoce la cuota mensual",
  }

  const InfoCalc  = [
    info1, 
    info2, 
    info3
  ];

  //variables y configuracion datos del grafico (componente ReportChart)
  const data = {
    labels: ['Precio Vivienda', 'Impuestos', 'Interés Total'],
    datasets: [
      {
        label: 'Costos totales',
        data: [precioVivienda, taxes, totalInterest],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const value = tooltipItem.raw;
            return `$${value.toLocaleString()}`;
          }
        }
      }
    }
  };



  return (
    <DataContext.Provider value={{ formData, setFormData, 
                                  updateFormData, 
                                  step, setStep, 
                                  totalSteps,
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
                                  sliderImages,
                                  reportesGuardados, setReportesGuardados,
                                  guardarReporte,
                                  InfoCalc,
                                  info1, 
                                  info2, 
                                  info3,
                                  data,
                                  options,
                                  capacidadEndeudamiento,
                                  ratioEndeudamiento


                                  }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider
