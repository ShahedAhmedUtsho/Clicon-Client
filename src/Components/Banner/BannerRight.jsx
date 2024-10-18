

import React from 'react';
import buttonArrow from '../../assets/Svg/Regular/ArrowRight.svg' ;
import bannerImg from '../../assets/images/Image.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const BannerRight = () => {
    
    return (
       


        <div className='md:col-span-4 col-span-12 grid grid-cols-2 md:row-span-7 gap-2  lg:gap-6 row-span-4 grid-rows-2 '>
        <Link to="/products" className='bg-slate-900 md:col-span-2 w-full h-full col-span-1 rounded-md flex row-span-1 '>
       <div className='h-full w-full lg:pl-10 lg:py-10 pl-2 py-2 md:pl-5 md:py-5 '>
       <span className="font-medium text-[#EBC80C] text-[1.5vw] md:text-[1vw] lg:text-[14px]  uppercase tracking-wider">
            
       Summer Sales
           </span>
           <h3 className="font-semibold text-white text-[3vw] leading-[1.3em] lg:leading-8 md:text-sm  lg:text-2xl pb-[0.8em] ">
           New Google Pixel 6 Pro
           </h3>
                         
           <button className='py-[0.8em] px-[1.3em] bg-[#FA8232] md:text-[8px] lg:text-[14px] text-[5px] rounded-sm text-white flex gap-[0.75em]  justify-center items-center '>
               
               <span className="font-medium  uppercase tracking-wider">
               shop now 
               </span>
                   
                   <img className='w-[1.5em] h-[1.5em]' src={buttonArrow} alt="" />
                   </button>
       </div>
       
<div className='h-full w-full'>
    <img className='w-full h-full object-cover' src={bannerImg} alt="" />
</div>
        </Link >










        <Link to="/products" className='bg-slate-600 md:col-span-2 w-full h-full col-span-1 row-span-1 rounded-md '>

        {/* <img src="" alt="" /> */}
          
        </Link>
    </div>

    );
};

export default BannerRight;