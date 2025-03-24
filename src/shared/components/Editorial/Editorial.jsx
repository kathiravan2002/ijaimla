import React from 'react';
import Sidebar from '../../../core/Sidebar/Sidebar.jsx';


function Editorial() {
  return (
    <div className='flex flex-row min-h-56  w-full'>
        <Sidebar/>
    <div className='w-full mx-auto'>
       <h1 className="text-2xl poppins-extrabold mb-4 text-[#1A4480] pr-2 " > Editorial Board :</h1>
           <div className='min-h-[55vh] mt-64'>
            <h2 className=" text-primary-dark text-xl poppins-bold text-center">Updates will come soon...</h2> 
           </div>
       
        </div>
    </div>
  )
}

export default Editorial