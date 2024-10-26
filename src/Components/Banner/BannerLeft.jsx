
import buttonArrow from '../../assets/Svg/Regular/ArrowRight.svg' ;
import bannerImg from '../../assets/images/Image.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../Buttons/Buttons';


const BannerLeft=() =>{
    const settings = {
        // Enable pagination dots
infinite: true,       // Loop through slides infinitely
speed: 500,           // Transition speed in ms
slidesToShow: 1,      // Number of slides to show at once
slidesToScroll: 1,    // Number of slides to scroll at once
autoplay: false,       // Enable auto-scroll
autoplaySpeed: 3000,  // Speed of auto-scroll in ms (3 seconds)
arrows: false         // Disable navigation arrows
};


const check = ()=>{
      console.log('clicked')
}





    return (
        <Slider {...settings} className='bg-[#F2F4F5] !box-border   md:col-span-8 col-span-12 md:row-span-7 row-span-3 rounded-md   !grid !h-full '>

        <div className='   !row-span-2 !col-span-2  '>
           <div className='flex lg:gap-9 lg:p-14 p-6 justify-center items-center  h-full w-full' >
           <div className='w-full'>

<p className="font-semibold text-[#2484C2] text-[6px] leading-[20px] md:text-[8px] md:leading-[24px] lg:text-[14px] lg:leading-[18px]  lg:mb-1">
---- THE BEST PLACE TO PLAY
</p>
<h5 className="font-semibold text-gray-900 text-base  md:text-2xl  lg:text-[2.7vw] lg:leading-[3.1vw]     md:mb-4 xl:text-5xl">
Xbox Consoles
</h5>
<p className="font-normal  text-gray-700 text-[6px] leading-[1.42em] md:text-xs xl:text-lg lg:text-[1vw] lg:leading-[1.5vw] md:mb-6 mb-2">
Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
</p>


<Button onClick={check}   className=' xl '>

<span className=" ">
shop now 
</span>

<img className='w-[1.5em] h-[1.5em]' src={buttonArrow} alt="" />
</Button>






</div>
<div className='w-full h-full'>
<img className='w-full !h-full    object-contain max-h-[35vw] md:max-h-[250px]  lg:max-h-[400px]  ' src={bannerImg} alt="" />
</div>
           </div>

        </div>
        <div className='   !row-span-2 !col-span-2  '>
           <div className='flex lg:gap-9 lg:p-14 p-6 justify-center items-center  h-full w-full' >
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


<button  className='anime-btn py-[1em] px-[1.5em] bg-[#FA8232] md:text-[8px] lg:text-[16px] text-[6px] rounded-sm text-white flex gap-[0.75em]  justify-center items-center '>

<span className="font-medium  uppercase tracking-wider">
shop now 
</span>

<img className='w-[1.5em] h-[1.5em]' src={buttonArrow} alt="" />
</button>
</div>
<div className='w-full h-full'>
<img className='w-full !h-full    object-contain max-h-[35vw] md:max-h-[250px]  lg:max-h-[400px]  ' src={bannerImg} alt="" />
</div>
           </div>

        </div>
        <div className='   !row-span-2 !col-span-2  '>
           <div className='flex lg:gap-9 lg:p-14 p-6 justify-center items-center  h-full w-full' >
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


<button  className='anime-btn py-[1em] px-[1.5em] bg-[#FA8232] md:text-[8px] lg:text-[16px] text-[6px] rounded-sm text-white flex gap-[0.75em]  justify-center items-center '>

<span className="font-medium  uppercase tracking-wider">
shop now 
</span>

<img className='w-[1.5em] h-[1.5em]' src={buttonArrow} alt="" />
</button>
</div>
<div className='w-full h-full'>
<img className='w-full !h-full    object-contain max-h-[35vw] md:max-h-[250px]  lg:max-h-[400px]  ' src={bannerImg} alt="" />
</div>
           </div>

        </div>


        </Slider>
    )
  }


export default BannerLeft