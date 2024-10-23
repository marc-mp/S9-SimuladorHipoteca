import { auth } from "../Services/firebaseConfig.js";
import { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import loginVideo from '../assets/loginVideo.mp4'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const { setUsuario } = useContext(AuthContext);

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario logueado:', user)
        setUsuario(user)
        alert('Bienvenido');
        setUsuario(user);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error en el inicio de sesión:', error);
        alert('Usuario o contraseña no válidos');
      });
  };

  const handlePasswordReset = () => {
    if (!email) {
      alert('Por favor, ingrese su correo electrónico para restablecer la contraseña.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetEmailSent(true);
        alert('Correo de recuperación enviado. Por favor, revisa tu bandeja de entrada.');
      })
      .catch((error) => {
        console.error('Error al enviar correo de recuperación:', error);
        alert('Error al enviar el correo de recuperación. Intentelo de nuevo.');
      });
  };

  return (
    
    <div className=' relative'>
      <video
        className=""
        src={loginVideo} 
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute bottom-80 mb-3 mx-10 ">
        <div className="flex justify-end">
          <Link to={"/"}>
            <button className="p-1 text-sm text-blue-500 font-semibold ">OK</button>
          </Link>
        </div>
        <div className='flex items-center justify-center text-4xl font-bolt mb-6'>
          <h1>Hipotech</h1>
        </div>
        <label className="input input-bordered flex items-center gap-2 my-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow px-2 py-1 text-base sm:text-lg border-b-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 my-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
            <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
          </svg>
          <input
            type={showPassword ? 'text' : 'password'}  
            className="grow px-2 py-1 text-base sm:text-lg border-b-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {/* Checkbox para mostrar/ocultar contraseña */}
        <div className="flex items-center my-2">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}  
            className="mr-2"
          />
          <label htmlFor="showPassword" className="text-sm sm:text-base text-gray-800">Mostrar contraseña</label>
        </div>
        <button className=" bg-blue-500 text-white font-semibold my-2 py-2 px-4 text-lg sm:text-base" onClick={handleLogIn}>
          Iniciar sesión
        </button>
        <div className="mt-2 text-sm sm:text-base">
          <p className="text-black font-semibold">
            ¿Olvidaste tu contraseña?
            <button onClick={handlePasswordReset} className="text-blue-500 font-semibold ml-2">
              Recuperar contraseña
            </button>
          </p>
          {resetEmailSent && <p className="text-green-500 mt-2">Correo de recuperación enviado.</p>}
        </div>

        <div className="mt-4 text-sm sm:text-base">
          <p className="text-black font-semibold">
            ¿No tienes una cuenta?
            <Link to="/Register" className="text-blue-500 ml-2 font-bold">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

