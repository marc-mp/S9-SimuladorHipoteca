
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getAuth } from "firebase/auth";
import appFirebase from '../Services/firebaseConfig';
import userImagen from '../assets/userImagen.png';

const Header = () => {
  const { usuario, setUsuario } = useContext(AuthContext);
  const auth = getAuth(appFirebase);
  const navigate = useNavigate();


  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUsuario(currentUser);
    }
  }, [auth, setUsuario]);

  const handleGoTo = () => {
    navigate('/UserDashboard');
  };

  const logOut = () => {
    auth.signOut().then(() => {
      setUsuario(null);
      navigate('/');
    });
  };

  return (
    <header className="container border-none">
      <nav className="flex justify-end me-4 border-none ">
        <div className="flex space-x-4">
          <div className='flex justify-end mt-4 items-center'>
            {usuario ? (
              <div className='inline-flex items-center'>
                <button className="w-9 h-9 rounded-full mx-auto mb-4  " onClick={handleGoTo}>
                  <img
                    src={userImagen} 
                    alt="Perfil"
                    className="w-9 h-9 rounded-full mx-auto border-2 border-gray-300"
                  /> 
                </button>
              </div>
            ) : (
              <div className='me-8'>
                <button className="text-gray-600 hover:text-gray-900 inline-flex">
                  <Link to="/Login">Iniciar sesión</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
