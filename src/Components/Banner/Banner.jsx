import React from 'react';
import buttonArrow from '../../assets/Svg/Regular/ArrowRight.svg' ;
import bannerImg from '../../assets/images/Image.png'

const Banner = () => {
    return (
        <div className=' h-[80vw] md:h-[40vw] lg:h-[520px]  grid grid-cols-12 gap-2 lg:gap-6  grid-rows-7  '>
            <div className='bg-[#F2F4F5] md:col-span-8 col-span-12 md:row-span-7 row-span-4 rounded-md '>
            <div className='flex lg:gap-9 lg:p-14 p-6 justify-center items-center  h-full'>
                <div className='w-full'>

<p className="font-semibold text-[#2484C2] text-[6px] leading-[20px] md:text-[8px] md:leading-[24px] lg:text-[14px] lg:leading-[18px]  lg:mb-1">
---- THE BEST PLACE TO PLAY
</p>
<h5 className="font-semibold text-gray-900 text-base  md:text-2xl  lg:text-[48px] lg:leading-[56px]     md:mb-4">
Xbox Consoles
</h5>
<p className="font-normal  text-gray-700 text-[6px] leading-[1.42em] md:text-xs lg:text-[18px] lg:leading-[28px] md:mb-6 mb-2">
Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
</p>


<button className='py-[1em] px-[1.5em] bg-[#FA8232] md:text-[8px] lg:text-[16px] text-[6px] rounded-sm text-white flex gap-[0.75em]  justify-center items-center '>
    
<span className="font-medium  uppercase tracking-wider">
shop now 
</span>
    
    <img className='w-[1.5em] h-[1.5em]' src={buttonArrow} alt="" />
     </button>
                </div>
                <div className='w-full'>
                  <img className='w-full h-full' src={bannerImg} alt="" />
                </div>

            </div>

            </div>




            <div className='md:col-span-4 col-span-12 grid grid-cols-2 md:row-span-7 gap-2  lg:gap-6 row-span-3'>
                <div className='bg-slate-400 md:col-span-2 w-full h-full col-span-1 rounded-md '>
              
                </div>
                <div className='bg-slate-600 md:col-span-2 w-full h-full col-span-1 rounded-md '>
                  
                </div>
            </div>

            
        </div>
    );
};

export default Banner;