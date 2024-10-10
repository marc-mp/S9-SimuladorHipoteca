import React, { useState } from 'react';

const CalcTemplate = () => {
  const [years, setYears] = useState(25);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      {/* Tipo de vivienda */}
      <div>
        <p className="font-bold text-gray-700">¿Qué tipo de vivienda deseas hipotecar?</p>
        <div className="flex justify-between mt-3">
          <button className="border-2 border-green-400 rounded-lg flex flex-col items-center px-4 py-2">
            <span className="text-green-400">🏡</span>
            <span className="text-green-400">Nueva construcción</span>
          </button>
          <button className="border-2 border-purple-400 rounded-lg flex flex-col items-center px-4 py-2">
            <span className="text-purple-400">🏠</span>
            <span className="text-purple-400">Segunda mano</span>
          </button>
          <button className="border-2 border-orange-400 rounded-lg flex flex-col items-center px-4 py-2">
            <span className="text-orange-400">🏖️</span>
            <span className="text-orange-400">Vacacional</span>
          </button>
        </div>
      </div>

      {/* Valor de la propiedad */}
      <div>
        <p className="font-bold text-gray-700">¿Cuál es el valor de la propiedad?</p>
        <div className="relative mt-2">
          <input
            type="text"
            value="40,000.00"
            className="w-full bg-gray-100 text-gray-400 rounded-lg p-3 pr-10"
            disabled
          />
          <span className="absolute right-3 top-3 text-gray-400">$</span>
        </div>
      </div>

      {/* Años de financiamiento */}
      <div>
        <p className="font-bold text-gray-700">¿Por cuántos años se financiará?</p>
        <div className="flex justify-between text-xs px-2 text-gray-500">
          <span>5</span>
          <span>25 años</span>
          <span>30</span>
        </div>
        <input
          type="range"
          min="5"
          max="30"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full h-2 bg-gradient-to-r from-orange-400 via-purple-400 to-gray-400 rounded-lg appearance-none mt-2"
        />
      </div>

      {/* Abono inicial */}
      <div>
        <p className="font-bold text-gray-700">Abono Inicial</p>
        <div className="relative mt-2">
          <input
            type="text"
            value="40,000.00"
            className="w-full bg-gray-100 text-gray-400 rounded-lg p-3 pr-10"
            disabled
          />
          <span className="absolute right-3 top-3 text-gray-400">$</span>
        </div>
      </div>

      {/* Botón de Cotizar */}
      <div className="mt-6">
        <button className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-orange-400 to-purple-400 flex justify-center items-center">
          <span className="mr-2">📅</span> Cotizar
        </button>
      </div>
    </div>
  );
};

export default CalcTemplate;
