// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import InteractiveForm from '../components/InteractiveForm';
import PrivateRoute from '../components/PrivateRoute';
// import { AuthProvider } from '../context/AuthContext';
// import DataContextProvider  from '../context/DataContext';


const App = () => (
  <div className='max-w-md mx-auto max-h-screen ' >
      <Home  />
      <PrivateRoute>
        <InteractiveForm/>
      </PrivateRoute>

  </div>

);

export default App;
