import React from 'react';
import twitterIcon from '../../assets/Svg/twitter.svg'
import redditIcon from '../../assets/Svg/reddit.svg';
import youtubeIcon from '../../assets/Svg/youtube.svg';
import instagramIcon from '../../assets/Svg/instagram.svg';
import facebookIcon from '../../assets/Svg/facebook.svg';
import pinterestIcon from '../../assets/Svg/pinterest.svg';
const Top = () => {
    return (
        <div className=' min-h-12 py-3 lg:flex hidden justify-between '>
            <span className="font-normal text-white text-[14px] hidden lg:block leading-[20px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[28px]">
            Welcome to Clicon online eCommerce store. 
        </span>
        <div className=' flex '>

        <span className="font-normal text-white text-[14px] hidden lg:block  leading-[20px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[28px]">
            follow us: 
        </span>
       <span className='flex gap-3 items-center px-3 border-r border-white pr-6 pl-4'>
       <img src={twitterIcon} alt="Twitter Icon"  />
       <img src={facebookIcon} alt="Facebook Icon"  />

            <img src={pinterestIcon} alt="Pinterest Icon"  />
         <img src={redditIcon} alt="Reddit Icon"  />
            <img src={youtubeIcon} alt="Youtube Icon"  />
            <img src={instagramIcon} alt="Instagram Icon"  />
            
       </span>

<div className='flex'>
  <span className='flex items-center gap-2 px-6'>
            <span className="font-normal text-white text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[28px]">
                    Eng: 
            </span>
        
            <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <g opacity="0.5">
                    <path d="M9.75 4.5L6 8.25L2.25 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
    </span>
    <span className='flex items-center gap-2 '>
            <span className="font-normal text-white text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[28px]">
                    USD
            </span>
        
            <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <g opacity="0.5">
                    <path d="M9.75 4.5L6 8.25L2.25 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
    </span>
        
   
</div>

        </div>
            
        </div>
    );
};

export default Top;