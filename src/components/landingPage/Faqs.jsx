
import { useState } from 'react';

const Faqs = () => {
  // Estado para controlar qué pregunta está abierta
  const [openQuestion, setOpenQuestion] = useState(null);

  // Función para alternar la pregunta abierta
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: '¿Qué documentación me pedirá el banco para evaluar la hipoteca que me puedo permitir?',
      answer: (
        <div>
          <p className="font-semibold">Documentos generales:</p>
          <ul className="list-disc pl-5">
            <li>DNI en vigor de cada uno de los titulares</li>
            <li>Vida laboral de cada uno de los titulares</li>
            <li>Última declaración de la renta de cada uno de los titulares</li>
            <li>Movimientos de cuenta de los últimos 3-6 meses</li>
            <li>3 últimos recibos pagados de todos los préstamos y tarjetas</li>
          </ul>
  
          <p className="mt-4 font-semibold">Asalariados:</p>
          <ul className="list-disc pl-5">
            <li>3 últimas nóminas de cada uno de los titulares</li>
            <li>Contrato de trabajo de cada uno de los titulares</li>
          </ul>
  
          <p className="mt-4 font-semibold">Autónomos:</p>
          <ul className="list-disc pl-5">
            <li>4 últimas declaraciones trimestrales de IRPF</li>
            <li>4 últimas declaraciones trimestrales del IVA</li>
          </ul>
  
          <p className="mt-4 font-semibold">Otros documentos:</p>
          <ul className="list-disc pl-5">
            <li>Escritura de capitulaciones matrimoniales</li>
            <li>Sentencia de separación y convenio regulador</li>
            <li>Contrato de arras</li>
          </ul>
        </div>
      ),
    },
    {
      question: '¿Cómo saber qué casa me puedo permitir? Criterios de concesión de hipotecas',
      answer: (
        <div>
          <p>La vivienda que te puedes permitir dependerá de algunos criterios que deberás tener en cuenta a la hora de pedir tu hipoteca:</p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Ahorros:</strong> Los bancos no suelen financiar más del 80% del precio de compra, es decir, necesitarás aportar alrededor de un 20% del precio de compra para la entrada.
            </li>
            <li>
              <strong>Endeudamiento:</strong> Los bancos suelen conceder hipotecas con cuotas que no excedan el 35% de los ingresos netos mensuales (ingresos - deudas), aunque pueden llegar hasta el 40% en algunos casos.
            </li>
            <li>
              <strong>Estabilidad laboral:</strong> Los bancos tendrán en cuenta tu historial laboral, antigüedad en la empresa, períodos de paro, sector laboral, etc.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: '¿Cómo puede ayudarte un broker hipotecario?',
      answer: (
        <div>
          <p>Un broker hipotecario es un profesional que gestionará tu hipoteca, resolverá tus dudas y te ayudará a lo largo de todo el proceso:</p>
          <ul className="list-disc pl-5">
            <li>Analiza tu caso y comprueba la viabilidad de tu solicitud</li>
            <li>Te explica las diferentes opciones que te ofrece el mercado contándote la letra pequeña de cada producto</li>
            <li>Resuelve tus dudas en todo momento</li>
            <li>Gestiona tu documentación para que no tengas que ir banco por banco pidiendo información. Suele contar con condiciones especiales en las entidades dado el volumen de clientes con que cuenta</li>
            <li>Presenta tu solicitud en los bancos más adecuados para ti</li>
            <li>Te ayuda a elegir la opción más conveniente</li>
          </ul>
        </div>
      ),
    },
    {
      question: '¿Qué hipoteca me puedo permitir? Hipoteca fija o variable',
      answer: (
        <div>
          <ul className="list-disc pl-5">
            <li>
              <strong>Tipo variable:</strong> La cuota variará a lo largo de la vida del préstamo en función a las fluctuaciones del Euríbor o el índice de referencia utilizado. Actualmente éste se encuentra en mínimos históricos, pero es importante conocer hasta dónde puede subir y cuánto puede impactar en la cuota de la hipoteca.
            </li>
            <li>
              <strong>Tipo fijo:</strong> Pagarás la misma cuota durante toda la vida del préstamo. La seguridad que te da la contratación de este tipo de préstamos supone un interés inicial más alto que las hipotecas a tipo variable.
            </li>
          </ul>
        </div>
      ),
    },
  ]
  

  return (
    
    <section id="FaqSection" className="bg-white p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 ">
        Preguntas frequentes sobre hipotecas
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b-2 pb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="text-left w-full flex justify-between items-center text-lg font-semibold text-gray-800 hover:text-blue-600"
            >
              {faq.question}
              <span className="text-xl">
                {openQuestion === index ? '-' : '+'}
              </span>
            </button>
            {openQuestion === index && (
              <p className="mt-2 text-gray-600 text-left">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;

