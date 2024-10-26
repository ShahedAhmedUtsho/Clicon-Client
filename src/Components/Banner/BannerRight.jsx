


import buttonArrow from '../../assets/Svg/Regular/ArrowRight.svg' ;
import bannerImg from '../../assets/images/Image.png'
import earphone from '../../assets/images/image 4.png'

import { Link } from 'react-router-dom';
import Button from '../Buttons/Buttons';



const BannerRight = () => {
    
    return (
       


        <div className='md:col-span-4  col-span-12 grid grid-cols-2 md:row-span-7 gap-2  lg:gap-6 row-span-2 md:grid-rows-2 '>

            
        <Link to="/products" className='bg-slate-900 md:col-span-2 w-full h-full col-span-1 rounded-md flex row-span-1  '>
       <div className='h-full w-full lg:pl-10 lg:py-10 pl-2 py-2 md:pl-5 md:py-5 '>
       <span className="font-medium text-[#EBC80C] text-[1.5vw] md:text-[1vw] lg:text-[0.78vw]  uppercase tracking-wider xl:text-[14px]  ">
            
       Summer Sales
           </span>
           <h3 className="font-semibold text-white text-[3vw] leading-[1.3em] xl:text-2xl lg:text-[1.32vw] lg:leading-[1.8vw] md:text-sm   pb-[0.8em] ">
           New Google Pixel 6 Pro
           </h3>
                         
<Button size='sm' >
<span className="">
               shop now 
               </span>
                   
                   <img className='w-[1.5em] h-[1.5em]' src={buttonArrow} alt="" />
</Button>

           
       </div>
       
<div className='h-full w-full'>
    <img className='w-full h-full object-cover' src={bannerImg} alt="" />
</div>




        </Link >










        <Link to="/products" className='bg-[#F2F4F5]  md:col-span-2 w-full h-full col-span-1 rounded-md flex row-span-1 '>
      
       
<div className='h-full w-full flex justify-center items-center'>
    <img className='w-full h-full max-h-[70%] object-contain' src={earphone} alt="" />
</div>
<div className='h-full w-full lg:pl-10 lg:py-10 pr-2 py-2 md:pr-5 md:py-5 '>
     
           <h3 className="font-semibold text-gray-900 text-[3vw] md:leading-[1.3em] lg:text-[1.32vw] lg:leading-[1.8vw] md:text-sm xl:text-2xl    ">
           Xiaomi FlipBuds Pro
           </h3>
           <span className="font-medium text-[#2DA5F3] text-[1.5vw] md:text-[1vw] lg:text-[14px]  uppercase tracking-wider   inline-block md:mt-1 ">
            
           $299 USD
                </span>
           <Button size='sm' className={`mt-[1vw]`}>
               
               <span className="">
               shop now 
               </span>
                   
                   <img className='w-[1.5em] h-[1.5em]' src={buttonArrow} alt="" />
                   </Button>



                   
       </div>
        </Link >


    </div>

    );
};

export default BannerRight;