import React from 'react';
import { Outlet } from 'react-router-dom';
import Top from '../Components/Top/Top';

const Router = () => {
    return (
        <div className='min-h-screen w-full'>

       
       <header className=' bg-[#1B6392]'>
        <div className='lg:container lg:mx-auto mx-10'>
        <Top />

        </div>
        
         
          </header>
          <main>
          <Outlet />
          </main>
       </div>
        
    );
};

export default Router;