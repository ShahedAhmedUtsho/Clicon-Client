import React from 'react';
import { Outlet } from 'react-router-dom';
import Top from '../Components/Top/Top';
import Header from '../Components/Header/Header';

const Router = () => {
    return (
        <div className='min-h-screen w-full'>

       
       <header className=' bg-[#1B6392]'>
        <div className='lg:container lg:mx-auto mx-2'>
        <Top />
        <Header />

        </div>
        
         
          </header>
          <main>
          <Outlet />
          </main>
       </div>
        
    );
};

export default Router;