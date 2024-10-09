import Header from '../components/landingPage/Header';
import Hero from '../components/landingPage/Hero';
import { Link } from 'react-router-dom';


const Home = () => (
  <div className="justify-center text-center mx-auto p-8">
     <Header />
      <Hero />
      <div className='space-y-4 max-w-lg'>
      <div>
            <Link to="/InteractiveForm">
              <button className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
                Ir al simulador
              </button>
            </Link>
        </div>
        <div>
            <Link to="/InfoHipoteca">
              <button className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
                Info y FAQ's
              </button>
            </Link>
        </div>
      </div>

  </div>
);
export default Home;
