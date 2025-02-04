import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getAuth } from "firebase/auth";
import appFirebase from '../Services/firebaseConfig';
import userImagen from '../../public/userImagen.png';

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


  return (
    <header className="container max-w-md bg-white">
      <nav className="flex justify-end">
        <div className="flex space-x-4">
          <div className='flex justify-end mt-4 items-center'>
            {usuario ? (
              <div className='inline-flex items-center me-5'>
                <button className="w-9 h-9 rounded-full  mb-4" onClick={handleGoTo}>
                  <img
                    src={userImagen} 
                    alt="Perfil"
                    className="w-9 h-9 rounded-full mx-auto border-2 border-white"
                  /> 
                </button>
              </div>
            ) : (
              <div className='me-4'>
                <button className="font-semibold mb-7 inline-flex">
                  <Link to="/Login">Iniciar sesión</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

