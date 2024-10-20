import React from 'react';
import logo from '../../assets/Svg/logo2.svg';
import { BodyLarge500, BodyMedium400, BodyMedium500, BodySmall400, BodySmall500, Label02 } from '../../Typography/Typography';
import { ArrowRight, MoveRight, Play } from 'lucide-react'; 
import playStore from '../../assets/images/playStore.png';
import appleStore from '../../assets/images/appleStore.png';

const Footer = () => {
    return (
        <div className=' grid grid-cols-12 lg:gap-0 gap-y-10 lg:container lg:mx-auto px-3 mt-auto text-[#77878F] py-[72px]'>
            <div className='flex flex-col gap-12 lg:col-span-3 col-span-7 ' >
                <div className="logo flex gap-2">
                    <img className='lg:w-auto md:w-8 w-5' src={logo} alt="logo" />
                    <span className="font-semibold text-lg text-white leading-[40px] md:text-[36px] md:leading-[44px] lg:text-[40px] lg:leading-[48px]">
                        Clicon
                    </span>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <BodySmall400 className={`py-[6px]`}>
                            Customer Supports:
                        </BodySmall400>
                    </div>
                    <div>
                        <BodyLarge500 className="text-white py-[6px]">
                            (629) 555-0129
                        </BodyLarge500>
                    </div>
                    <div>
                        <BodyMedium400 className="leading-6 py-[6px]">
                            4517 Washington Ave. <br /> Manchester, Kentucky 39495
                        </BodyMedium400>
                    </div>
                    <div>
                        <BodyMedium500>
                            <BodyLarge500 className="text-white py-[6px]">
                                info@kinbo.com
                            </BodyLarge500>
                        </BodyMedium500>
                    </div>
                </div>
            </div>






            <div className='flex flex-col gap-3  lg:col-span-2 col-span-5 '>
                <div className="logo flex gap-2">
                    <Label02 className={`text-white uppercase flex py-[6px]`} >
                    Top Category
                    </Label02>
                </div>
               
                       <div className='flex flex-col gap-2'>
                       <BodySmall500 className={`flex py-[6px] `} >
                       Computer & Laptop
                       </BodySmall500>
                       <BodySmall500 className={`flex py-[6px] `} >
                       SmartPhone
                       </BodySmall500>
                       <BodySmall500 className={`flex py-[6px] `} >
                       Headphone
                       </BodySmall500>
                       <span className=' flex py-[6px] text-white gap-2  items-center'>
                       <hr className='w-6 text-[#EBC80C] border-[#EBC80C]' />
                            <BodySmall500 className={` `} >
                           
                                Accessories
                            </BodySmall500>
                       </span>
                       <BodySmall500 className={`flex py-[6px] `} >
                       Camera & Photo
                       </BodySmall500>
                       <BodySmall500 className={`flex py-[6px] `} >
                       TV & Homes
                       </BodySmall500>
                       <span className='flex py-[6px] text-white gap-2  items-center'>
                            <BodySmall500 className={` `} >
                               
                            Browse All Product
                           
                                
                            </BodySmall500>
                            
                            <ArrowRight className="text-[#EBC80C] max-w-5" />
                       </span>
                       </div>
                    
                
            </div>






            <div className='flex flex-col gap-3  lg:col-span-2 col-span-7 '>
                <div className="logo flex gap-2">
                    <Label02 className={`text-white uppercase flex py-[6px]`} >
                    Quick links
                    </Label02>
                </div>
               




                       <div className='flex flex-col gap-2'>
                       <BodySmall500 className={`flex py-[6px] `} >
                       Shop Product
                       </BodySmall500>
                       <BodySmall500 className={`flex py-[6px] `} >
                       Shoping Cart
                       </BodySmall500>
                       <BodySmall500 className={`flex py-[6px] `} >
                       Wishlist
                       </BodySmall500>
                       <BodySmall500 className={`flex py-[6px] `} >
                       Compare
                       </BodySmall500>
                       <BodySmall500 className={`flex py-[6px] `} >
                       Track Order
                       </BodySmall500>
                       <BodySmall500 className={`flex py-[6px] `} >
                       Customer Help
                       </BodySmall500>
                       <BodySmall500 className={`flex py-[6px] `} >
                       About Us
                       </BodySmall500>
                   
                       </div>
                    
                
            </div>





            <div className='flex flex-col gap-3  lg:col-span-2 col-span-5  '>
                <div className="logo flex gap-2">
                    <Label02 className={`text-white uppercase flex `} >
                    Download APP
                    </Label02>
                </div>
               
                       <div className='flex flex-col gap-3 py-3'>
                        
                        <img className='max-w-44 hover:shadow-slate-600/20 hover:contrast-125  shadow-md ' src={playStore} alt="playStore" />
                        <img className='max-w-44 hover:shadow-slate-600/20 hover:contrast-125  shadow-md' src={appleStore} alt="appleStore" />
                      
                   
                       </div>
                    
                
            </div>




            <div className='flex flex-col gap-3 text-white   lg:col-span-3 col-span-12  w-full'>
                <div className="logo gap-2">
                    <Label02 className={` uppercase flex py-[6px] `} >
                    Popular Tag
                    </Label02>
                </div>
               
                    <div className='flex gap-2 flex-wrap w-full '>
                    {
    ['Game', 'iPhone', 'TV', 'Asus Laptops', 'Macbook', 'SSD',"Graphics Card","Power Bank","Smart TV","Speaker","Tablet","microwave", "Samsung"].map((item, index) => { 

      return (
        <BodySmall500 key={index} as="span" className={`px-3  border rounded-[2px] py-[6px] border-[#303639] hover:border-white/80 `}>
       {item}
        </BodySmall500>
      )

     
    }
    )
}


                      
                    </div>
                    
                
              </div>
        </div>

       
    );
};

export default Footer;