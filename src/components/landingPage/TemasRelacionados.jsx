
const TemasRelacionados = () => {
  return (
    <div className=" p-10 rounded-md shadow-lg">
      {/* Título */}
      <h2 className="text-2xl font-bold text-center mb-6 ">
        Relacionado con tu solicitud de hipoteca
      </h2>

      {/* Compra tu piso */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Compra tu piso</h3>
        <p className="text-gray-600">Encuentra tu nuevo hogar</p>
      </div>

      {/* ¿Cuánto pagaré de hipoteca? */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          ¿Cuánto pagaré de hipoteca?
        </h3>
        <p className="text-gray-600">Descúbrelo con nuestro simulador</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Ir al simulador
        </button>
      </div>

      {/* Compara hipotecas */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Compara hipotecas</h3>
        <p className="text-gray-600">Consulta los tipos fijos y variables actuales</p>
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          Ver comparador
        </button>
      </div>
    </div>
  );
};

export default TemasRelacionados;
