import React from 'react';
import './MobileMockup.css';

const MobileMockup = ({ children }) => {
  return (
    
      <div className='h-screen  bg-gray-300'>
        <div className="flex justify-center items-center ">
          <div className="relative w-[428px] h-screen shadow-lg overflow-hidden bg-white">
            <div className="absolute inset-0 overflow-y-scroll no-scrollbar h-screen touch-pan-y">
              {children}
            </div>
          </div>
        </div>
      </div>
  );
};

export default MobileMockup;
