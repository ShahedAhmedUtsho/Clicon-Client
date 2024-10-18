import React from 'react';
import big from '../../assets/images/3bcfb602-5d35-4a44-90ed-2fdeded75993.png'
import top from '../../assets/images/ac5f3c23-48f3-4dfc-a738-0f91bf646a29.png'
import bottom from '../../assets/images/bc7ec7eb-39e5-4f7f-aabf-45b3f2f89ad8.png'

const Banner = () => {
    return (
        <div className=' h-[80vw] md:h-[40vw] lg:h-[520px]  grid grid-cols-12 gap-2 md:gap-6  grid-rows-7  '>
            <div className='bg-slate-500 md:col-span-8 col-span-12 md:row-span-7 row-span-4 rounded-md '>
               

            </div>




            <div className='md:col-span-4 col-span-12 grid grid-cols-2 md:row-span-7 gap-2 md:gap-6 row-span-3'>
                <div className='bg-slate-400 md:col-span-2 w-full h-full col-span-1 rounded-md '>
              
                </div>
                <div className='bg-slate-600 md:col-span-2 w-full h-full col-span-1 rounded-md '>
                  
                </div>
            </div>

            
        </div>
    );
};

export default Banner;