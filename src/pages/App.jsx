// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
// import Login from './Login';
// import Register from './Register';
import InteractiveForm from '../components/InteractiveForm';
// import Report from '../components/Report';
// import PrivateRoute from '../components/PrivateRoute';
// import { AuthProvider } from '../context/AuthContext';
// import DataContextProvider  from '../context/DataContext';

const App = () => (
  <div>
    <Home/>
    <InteractiveForm/>
    {/* <Report /> */}


  </div>

  // <AuthProvider>
  //   <DataContextProvider> 
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Register />} />
  //         <Route path="/form-data" element={<PrivateRoute><FormData /></PrivateRoute>} />
  //         <Route path="/report" element={<PrivateRoute><Report /></PrivateRoute>} />
  //       </Routes>
  //     </Router>
  //   </DataContextProvider>
  // </AuthProvider>
);

export default App;
