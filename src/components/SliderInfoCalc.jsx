import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';

const SliderInfoCalc = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { InfoCalc } = useContext(DataContext);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % InfoCalc.length);
  };

  // desplazamiento automático cada 3 segundos
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <div className="slider-container overflow-hidden relative max-w-md mx-auto">
      <div
        className="slider-wrapper flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {InfoCalc.map((info, index) => (
          <div key={index} className="slide min-w-full h-full flex items-center justify-center flex-col">
            <span className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">{info[`icon${index + 1}`]}</span>
            <p className="text-center text-xl font-bold mx-10 my-5">{info[`text${index + 1}`]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderInfoCalc;
