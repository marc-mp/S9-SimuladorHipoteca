import { useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import { useContext } from 'react';


const SliderComponent = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const { sliderImages } = useContext(DataContext);

  // Función para mover al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  // desplazamiento automático slide cada 3 segundos
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(sliderInterval); 
  }, []);

  return (
    <div className="max-h-svh max-w-md slider-container overflow-hidden relative ">
      <div
        className="slider-wrapper flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderImages.map((image, index) => (
          <div key={index} className="slide min-w-full h-full">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={() => nextSlide()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default SliderComponent;
