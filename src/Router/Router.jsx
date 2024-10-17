import React from 'react';
import { Outlet } from 'react-router-dom';
import Top from '../Components/Top/Top';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';

const Router = () => {
    return (
        <div className='min-h-screen w-full'>

       
       <header className=' bg-[#1B6392]'>
        <div className='lg:container lg:mx-auto px-3'>
        <Top />
        <Header />
       

        </div>
        
         
          </header>
<header className='border-b '>
<div className='lg:container lg:mx-auto px-3 '>
      
      <Navbar />

      </div>
</header>

       



          <main className='lg:mt-6 md:mt-2 mt-1  lg:container lg:mx-auto px-3'>
          <Outlet />
          </main>
       </div>
        
    );
};

export default Router;