import React, { useState } from 'react';
import phoneIcon from '../../assets/Svg/Regular/PhoneCall.svg';
import caretDownIcon from '../../assets/Svg/Duotone/ArrowsCounterClockwise.svg';
import infoIcon from '../../assets/Svg/Regular/Info.svg';
import headphonesIcon from '../../assets/Svg/Regular/Headphones.svg';
import mapPinLineIcon from '../../assets/Svg/Regular/MapPinLine.svg';


import * as Popover  from '@radix-ui/react-popover';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [categoryOpen, setCategoryOpen] = useState(false);
  
    return (
     
    <div className='min-h-20  w-full hidden lg:flex justify-between items-center'>
        <div className='flex gap-6 justify-center items-center'>
        <Popover.Root  onOpenChange={()=>{setCategoryOpen(!categoryOpen)}}>
            
           
            
<Popover.Trigger asChild > 
<div className={`AllCategory cursor-pointer ${categoryOpen ? "bg-[#FA8232] text-white" : "bg-[#F2F4F5] text-gray-900"} px-6 py-3 flex gap-2 items-center justify-center`}>

<p className="font-normal  text-[11px] leading-[12px] md:text-[12px] md:leading-[14px] lg:text-[13px] lg:leading-[16px]">
 All Category
</p>
<span className='mt-1'>{categoryOpen ? <ChevronUp size={25} /> : <ChevronDown size={25} />}</span>
</div>
</Popover.Trigger>

{/* <Popover.Content   >
hello


    </Popover.Content> */}
            
          
            </Popover.Root>

            <div className='flex justify-center gap-6 items-center '>
            <Link className='flex text-[#5F6C72] gap-2 items-center justify-center' to="/track-order">
                <img className='w-6 h-6' src={mapPinLineIcon} alt="" />
                <p className="font-normal text-gray-900 text-[11px] leading-[12px] md:text-[12px] md:leading-[14px] lg:text-[13px] lg:leading-[16px]">
                    Track Order
                </p>
            </Link>
            <Link className='flex text-[#5F6C72] gap-2 items-center justify-center' to="/compare">
                <img src={caretDownIcon} alt="" />
                <p className="font-normal text-gray-900 text-[11px] leading-[12px] md:text-[12px] md:leading-[14px] lg:text-[13px] lg:leading-[16px]">
                    Compare
                </p>
            </Link>
            <Link className='flex text-[#5F6C72] gap-2 items-center justify-center' to="/customer-support">
                <img  src={headphonesIcon} alt="" />
                <p className="font-normal text-gray-900 text-[11px] leading-[12px] md:text-[12px] md:leading-[14px] lg:text-[13px] lg:leading-[16px]">
                    Customer Support
                </p>
            </Link>
            <Link className='flex text-[#5F6C72] gap-2 items-center justify-center' to="/need-help">
                <img src={infoIcon} alt="" />
                <p className="font-normal text-gray-900 text-[11px] leading-[12px] md:text-[12px] md:leading-[14px] lg:text-[13px] lg:leading-[16px]">
                    Need Help
                </p>
            </Link>
            </div>
        
        </div>


        <div className='flex gap-2'>
            <img src={phoneIcon} alt="" />
            
                <p  className="font-normal text-[#191C1F] text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[28px]">
                +1-202-555-0104
                </p>


        </div>
    	
     
    </div>
    );
};

export default Navbar;