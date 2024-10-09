import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getAuth } from "firebase/auth"
import appFirebase from '../../Services/firebaseConfig'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { usuario, setUsuario } = useContext(AuthContext);
  const auth = getAuth(appFirebase)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const currentUser = auth.currentUser
    if (currentUser) {
        setUsuario(currentUser)
    }
}, [auth, setUsuario])


  const handleGoTo =() => {
    navigate('/UserDashboard')
  }



  // const logOut = () => {
  //   auth.signOut().then(() => {
  //     setUsuario(null)
  //   })
  // }


  return (
    <header className="container p-4 m-2">
      <nav className="flex justify-between items-center">
        <div className="hidden sm:flex space-x-4">
          <a href="#hero" className="text-gray-600 hover:text-gray-900">Inicio</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonios</a>
          <a href="#FaqSection" className="text-gray-600 hover:text-gray-900">FAQs</a>
        </div>
        <div className="hidden sm:flex space-x-4">
          <div className='flex justify-end items-center'>
                {usuario ? (
                    <>
                        {/* <div className='me-8'>
                            <span className="text-gray-600 hover:text-gray-900 inline-flex">
                               {usuario.email}
                            </span>
                        </div>
                        <div className='me-8'>
                            <button className="text-gray-600 hover:text-gray-900" onClick={logOut}>
                            LOG OUT                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                            </svg>
                            </button>
                        </div> */}
                        <div>
                          <button className="w-11 h-11 rounded-full text-2xl mx-auto mb-4 bg-gray-500 " onClick={handleGoTo}>
                            {/* <img
                              src="" // URL de la imagen de perfil
                              alt="Perfil"
                              className="w-10 h-10 rounded-full mx-auto mb-4  bg-blue-800"
                            /> */}
                            M
                          </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='me-8'>
                            <button className="text-gray-600 hover:text-gray-900 inline-flex">
                                <Link to="/Login">Iniciar sesion</Link>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>

        {/* Botón Hamburguesa para pantallas móviles */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {/* Icono del menú hamburguesa */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
        </div>

        {/* Menú desplegable para pantallas móviles */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md sm:hidden">
            <ul className="flex flex-col items-center space-y-4 p-4">
              <li><a href="#hero" className="text-gray-600 hover:text-gray-900">Inicio</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonios</a></li>
              <li><a href="#Faqs" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><Link to="/Login" className="text-gray-600 hover:text-gray-900">Log In</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

