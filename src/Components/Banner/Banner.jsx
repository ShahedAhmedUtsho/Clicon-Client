import React from 'react';
import buttonArrow from '../../assets/Svg/Regular/ArrowRight.svg' ;
import bannerImg from '../../assets/images/Image.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import BannerRight from './BannerRight';
import BannerLeft from './BannerLeft';


const Banner = () => {

    return (
        <div className='   md:h-[40vw] lg:max-h-[520px] lg:h-[33vw]  grid grid-cols-12 gap-2 lg:gap-6  grid-rows-5  '>
          <BannerLeft /> 

<BannerRight />
            
        </div>
    );
};

export default Banner;