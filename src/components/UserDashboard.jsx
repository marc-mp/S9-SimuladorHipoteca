import { auth } from "../Services/firebaseConfig.js";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate, Link } from 'react-router-dom'
import userImagen from '../assets/userImagen.png'
import dashboardVideo from '../assets/dashboardVideo.mp4'


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
        <div className="relative">
             <video
                className=""
                src={dashboardVideo} 
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute bottom-60 w-full px-10 text-center">
                <div className="flex justify-end ">
                    <Link to={"/"}>
                        <button className="p-1 text-md text-white font-semibold hover:text-yellow-400">OK</button>
                    </Link>
                </div>
                <h1 className="flex items-center justify-center text-white text-4xl font-semibold mb-6">Hipotech</h1>
                <div className="pt-4 ">
                <img
                    src={userImagen} 
                    alt="Perfil"
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white"
                />
                </div>
                <h2 className="text-2xl text-white font-semibold mb-2">Hola,</h2>
                <p className="text-white text-3xl font-semibold mb-4">{usuario.email}</p>
                <Link to={"/HistorialSimulaciones"}>
                    <button className="w-full bg-white border-2 border-yellow-400 text-black text-xl  font-bold py-3 rounded mb-2 hover:bg-yellow-400">
                        Ver simulaciones guardadas
                    </button>
                </Link>
                <button
                    onClick={logOut}
                    className="w-full bg-black border-2 border-black text-white text-xl font-bold py-3 rounded hover:bg-yellow-400 hover:border-yellow-400 flex items-center justify-center"
                > 
                    Cerrar sesión
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                </button>
            </div>
        </div>
    );
    };

export default UserDashboard;
