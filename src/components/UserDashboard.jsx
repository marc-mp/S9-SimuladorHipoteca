import { auth } from "../Services/firebaseConfig.js";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate, Link } from 'react-router-dom'
import userImagen from '../assets/userImagen.png'


const UserDashboard = () => {
    const navigate = useNavigate()
    const {usuario, setUsuario} = useContext(AuthContext);

    const logOut = () => {
    auth.signOut().then(() => {
        setUsuario(null)
        navigate('/')
    })
    }
    
    
    return (
        <div className="mx-auto rounded-lg p-6 text-center ">
            <div className="flex justify-end border-b-2">
                <Link to={"/"}>
                    <button className="p-1 text-md text-blue-500 font-semibold">OK</button>
                </Link>
            </div>
            <div className="pt-4 ">
            <img
                src={userImagen} 
                alt="Perfil"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-300"
            />
            </div>
            <h2 className="text-xl font-semibold mb-2">Hola,</h2>
            <p className="text-gray-800 font-semibold mb-4">{usuario.email}</p>
            <Link to={"/HistorialSimulaciones"}>
                <button className="w-full bg-blue-500 text-white font-bold py-2 rounded mb-2 hover:bg-blue-600">
                    Historial simulaciones guardadas
                </button>
            </Link>
            <button
                onClick={logOut}
                className="w-full bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600 flex items-center justify-center"
            > 
                Cerrar sesión
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
            </button>
        </div>
    );
    };

export default UserDashboard;
