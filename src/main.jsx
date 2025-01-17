import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import React from 'react'
// import ReactDOM from 'react-dom/client'
import DataContextProvider from './context/DataContext.jsx';
import AuthContextProvider from './context/AuthContext.jsx';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import App from "./pages/App.jsx"
import Login from './pages/Login'
import Register from './pages/Register.jsx'
import InteractiveForm from './components/InteractiveForm.jsx';
import Report from './components/Report.jsx';
import UserDashboard from './components/UserDashboard.jsx';
import InfoHipoteca from './pages/InfoHipoteca.jsx'
import HistorialSimulaciones from './components/HistorialSimulaciones.jsx';
import PrivateRoute from './components/PrivateRoute';
//import { isDesktop } from 'react-device-detect';
import MobileMockup from './MobileMockup';



export const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/App",
    element: <App /> 
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/InteractiveForm", 
    element:         
          (
            <PrivateRoute>
              <InteractiveForm /> 
            </PrivateRoute>
          )
  },
  {
    path: "/Report",
    element: <Report />
  },
  {
    path: "/UserDashboard",
    element: <UserDashboard />
  },
  {
    path: "/InfoHipoteca",
    element: <InfoHipoteca />
  },
  {
    path: "/HistorialSimulaciones",
    element: <HistorialSimulaciones />
  },


])


createRoot(document.getElementById('root')).render(

  <StrictMode>
      <MobileMockup>
    <div  >
    <AuthContextProvider>
        <DataContextProvider>
          <RouterProvider router={router} />
        </DataContextProvider>  
      </AuthContextProvider>
    </div>



      </MobileMockup>
      
  </StrictMode>,
)
