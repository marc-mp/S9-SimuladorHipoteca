import Home from '../pages/Home';
import InteractiveForm from '../components/InteractiveForm';
import PrivateRoute from '../components/PrivateRoute';



const App = () => (
  <div className='max-w-md mx-auto max-h-screen ' >
      <Home  />
      <PrivateRoute>
        <InteractiveForm/>
      </PrivateRoute>
  </div>

);

export default App;
