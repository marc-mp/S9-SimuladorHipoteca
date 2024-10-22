import { Navigate } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'



const PrivateRoute = ({ children }) => {
  const { usuario } = useContext(AuthContext);
   // Si no hay usuario logueado, redirige a la página de login
  if (!usuario) {
    return <Navigate to="/LogIn" />
  }
  // Si hay un usuario logueado, accedemos a la ruta protegida
  return children
};

export default PrivateRoute;
