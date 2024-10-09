import { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DataContext } from '../context/DataContext.jsx';

ChartJS.register(ArcElement, Tooltip, Legend);

const ReportChart = () => {
  const { precioVivienda, taxes, totalInterest, totalCost } = useContext(DataContext);

  // Configuración de los datos para el gráfico
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
    <div className="container max-w-lg mx-auto p-6  rounded-xl space-y-4">
      <h2 className="text-xl text-center font-bold mb-4">Resumen de Costes</h2>

      <div className="relative" style={{ height: '300px' }}>
        <Doughnut data={data} options={options} />
      </div>

      <div className=" text-center mt-4 p-4 rounded">
        <h3 className="text-lg font-bold">Coste Total al finalizar hipoteca:</h3>
        <p className="text-xl text-blue-500 font-semibold">
        {totalCost.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ReportChart;
