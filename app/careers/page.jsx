import React from 'react';
import JoinUsForm from '../Components/JoinUsForm';

const page = () => {
  return (
    <div>
      <div className="h-[500px] w-full bg-[url('/imge10.jpeg')] bg-cover bg-center">
        {/* Optional overlay or heading */}
        <div className="h-full w-full bg-black/30 flex items-center justify-center text-white text-6xl font-bold">
            Careers
        </div>
      </div>
      <div className='h-[10px] w-full bg-blue-900'></div>
      <JoinUsForm/>
    </div>
  );
}

export default page;
