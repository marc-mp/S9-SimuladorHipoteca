import { useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';


const StepForm = () => {

    const { step, totalSteps } = useContext(DataContext);

    return (
      <div className="absolute flex justify-center text-center border-4 border-white p-4 font-bold text-white items-center">
        <span className="text-white font-bold text-xl">
          {step + 1} / {totalSteps}
        </span>
      </div>
    );
  };
  
  export default StepForm;
  