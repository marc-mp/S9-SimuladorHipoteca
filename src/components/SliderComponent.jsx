import { useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import { useContext } from 'react';


// Imágenes de ejemplo (puedes reemplazarlas con las tuyas)


const SliderComponent = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const { sliderImages } = useContext(DataContext);

  // Función para mover al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  // useEffect para crear el intervalo de desplazamiento automático
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Mueve las tarjetas cada 3 segundos

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <div className="slider-container overflow-hidden relative ">
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

      {/* Botones opcionales para desplazamiento manual */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={() => nextSlide()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default SliderComponent;
