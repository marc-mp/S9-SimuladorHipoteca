// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import InteractiveForm from '../components/InteractiveForm';
// import PrivateRoute from '../components/PrivateRoute';
// import { AuthProvider } from '../context/AuthContext';
// import DataContextProvider  from '../context/DataContext';
import '../App.css'


const App = () => (
  <div>
    <Home  />
    <InteractiveForm/>
  
  </div>

);

export default App;
