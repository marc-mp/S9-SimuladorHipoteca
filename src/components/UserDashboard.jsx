import { auth } from "../Services/firebaseConfig.js";
// import { useState } from 'react';
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
// import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// import { DataContext } from '../context/DataContext.jsx';
import { AuthContext } from '../context/AuthContext.jsx';
// import { FaSignOutAlt } from 'react-icons/fa'; // Icono para el botón de cerrar sesión
import { useNavigate } from 'react-router-dom'
import userImagen from '../assets/userImagen.png'


const UserDashboard = () => {
    // const { logOut} = useContext(AuthContext);
    const navigate = useNavigate()
    const {usuario, setUsuario} = useContext(AuthContext);


      const logOut = () => {
        auth.signOut().then(() => {
          setUsuario(null)
          navigate('/')
        })
      }
    
    


    return (
        <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            {/* Foto de perfil */}
            <div>
            <img
                src={userImagen} // URL de la imagen de perfil
                alt="Perfil"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-300"
            />
            </div>
            {/* Saludo y email */}
            <h2 className="text-xl font-semibold mb-2">Hola,</h2>
            <p className="text-gray-600 mb-4">{usuario.email}</p>

            {/* Botón para ver simulaciones guardadas */}
            <button className="w-full bg-blue-500 text-white font-bold py-2 rounded mb-2 hover:bg-blue-600">
                Ver simulaciones guardadas
            </button>

            {/* Botón de cerrar sesión */}
            <button
                onClick={logOut}
                className="w-full bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600 flex items-center justify-center"
            > 
                Cerrar sesión
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
            </button>
        </div>
    );
    };

export default UserDashboard;
