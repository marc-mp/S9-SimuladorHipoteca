import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <section id="hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Calcula tu hipoteca</h1>
          <p className="text-lg mb-6">Rápido, fácil y sin compromiso</p>
          <form className="bg-white p-6 rounded max-w-lg mx-auto">
            <Link to="/InteractiveForm">
              <button className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
                Calcular
              </button>
            </Link>
          </form>
        </div>
      </section>
    );
  };
  
  export default Hero;
  