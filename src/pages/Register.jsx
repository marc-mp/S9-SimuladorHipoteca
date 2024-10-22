import { useState } from 'react'
//import appFirebase from '../credenciales.js'
import { auth } from "../Services/firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import registerVideo from '../assets/registerVideo.mp4'

// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext.jsx';


const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignUp = () => {
        if (!name || !email || !password) {
            alert('Por favor, complete todos los campos.')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Registro completado. Ahora, inicia sesión para acceder.')
                navigate('/Login')
            })
            .catch((error) => {
                console.error('Error en el registro:', error)
                alert(`Error en el registro: ${error.message}`)
            })
    }

   
    return (
        <div className='relative'>
            <video
                className=""
                src={registerVideo} 
                autoPlay
                loop
                muted
                playsInline
            />
            <div className='absolute bottom-80 mb-8 px-10 w-full'>
                <div className='flex justify-end'>
                    <Link to={"/"}>
                        <button className='p-2 text-sm text-blue-500 font-semibold'>OK</button>
                    </Link>
                </div>
                <div className='flex items-center justify-center text-4xl font-bolt mb-6'>
                    <h1>Hipotech</h1>
                </div>
                <label className="input input-bordered flex items-center gap-2 my-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                    </svg>
                    <input 
                        type="text" 
                        className="grow py-1 px-2 text-base border-b-2" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>

                    <input 
                        type="text" 
                        className="grow px-2 py-1 text-base border-b-2" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                    </svg>
                    <input 
                        type="password" 
                        className="grow px-2 py-1 text-base sm:text-lg border-b-2" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
                <button 
                    className="bg-blue-500 text-white  font-semibold my-2 py-2 px-4 text-lg sm:text-base" 
                    onClick={handleSignUp}
                >
                    Registrarse
                </button>
                <div className="mt-4 text-sm sm:text-base">
                    <p className="text-black">
                        ¿Tienes una cuenta? 
                        <Link to="/LogIn" className="text-blue-500 font-bold ml-2">Entrar</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
