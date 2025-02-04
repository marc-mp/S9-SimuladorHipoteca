import '../MobileMockup.css';

const MobileMockup = ({ children }) => {
  return (
      <div className='h-screen'>
        <div className="flex justify-center items-center ">
          <div className="relative max-w-md w-screen h-screen border-4 border-x-gray-500 shadow-lg overflow-hidden ">
            <div className="absolute inset-0 overflow-y-scroll no-scrollbar h-screen touch-pan-y">
              {children}
            </div>
          </div>
        </div>
      </div>
  );
};

export default MobileMockup;
