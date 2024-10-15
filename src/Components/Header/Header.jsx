import React, { useState } from 'react';
import logo from '../../assets/Svg/logo.svg'
import  HeartIcon  from '../../assets/Svg/heart.svg';
import  UserIcon  from '../../assets/Svg/user.svg';
import  CartIcon  from '../../assets/Svg/Cart.svg';
import  SearchIcon  from '../../assets/Svg/search.svg';
import { AlignLeft, Info, PenTool, Phone, Search, ShoppingCart, User, X } from 'lucide-react';
import { Link } from 'react-router-dom';




const Header = () => {

const [showSearch, setShowSearch] =useState(false);
const [showNav, setShowNav] =useState(false);
const handleShowNav = () =>{
    setShowNav(!showNav);
}
const handleShowSearch = () =>{
    setShowSearch(!showSearch);
}







    return (
        <div className=' transition-all duration-500 ease-linear'>
        <div className='md:min-h-20 min-h-14 text-white w-full   flex md:flex-row   items-center justify-between lg:py-5   '>
            <div className="logo flex gap-2    ">
                <img className='lg:w-auto md:w-8 w-5' src={logo} alt="logo" />
                <span className="font-semibold text-lg leading-[40px] md:text-[36px] md:leading-[44px] lg:text-[40px] lg:leading-[48px]">
                Clicon
                </span>

          
                
            </div>

            <div className=' w-1/2  bg-white min-h-12 rounded-sm px-5 lg:flex hidden  justify-between'>
            <input className='w-full text-black/70 focus:outline-none' placeholder='Search for anything...'  type="text" /> 
            <img src={SearchIcon} alt="search" className=" cursor-pointer" />

</div>

                <div className="flex gap-4">
             <div className='flex gap-4'>
           <Search onClick={handleShowSearch} className='lg:hidden w-5 cursor-pointer' />
             <div  className="w-6 h-6 cursor-pointer relative">
                    <span className="absolute -top-2 -right-2 text-[#1B6392] bg-white w-5 h-5 outline outline-[#1B6392] rounded-full flex items-center justify-center text-xs font-semibold">2</span>
                <img src={CartIcon} alt="cart" />
                
                </div>
                <AlignLeft onClick={handleShowNav} className='lg:hidden' />
             </div>
             
                    <img src={HeartIcon} alt="heart" className="w-6 h-6 lg:block hidden cursor-pointer" />
                    <img src={UserIcon} alt="user" className="w-6 h-6 cursor-pointer lg:inline-block hidden " />
                   
                </div>
                
                
        </div>
       {
        showSearch && <MobileSearchBar />
       }
{
  showNav &&  <MobileNavbar  handleShowNav= {handleShowNav}  />
}


        </div>
    );


 

    
};


export default Header;

const MobileSearchBar = (   ) => {
    return (
        <div className={`w-full flex  bg-white min-h-8 md:min-h-10 md:max-w-[60%] mx-auto rounded-sm px-2  relative top-2 shadow-sm lg:hidden justify-between`}>
            <input className='w-full text-black/70 placeholder:text-xs text-xs  focus:outline-none' placeholder='Search for anything...' type="text" />
            <img src={SearchIcon} alt="search" className="cursor-pointer opacity-75 w-5" />
        </div>
    );
};


const MobileNavbar =({handleShowNav})=>{
    return(
        <div className='w-screen h-screen absolute top-0 left-0 bg-[white] pt-20 flex flex-col gap-5  items-start p-5'>
            <Link to="/login" onClick={handleShowNav} className="flex items-center text-black/80 border-b text-lg py-2  w-full  transition duration-200">
                <User className='mr-2' /> {/* User icon for Login */}
                Login
            </Link>
            <Link to="/cart"  onClick={handleShowNav}  className="flex items-center text-black/80  text-lg py-2  w-full border-b transition duration-200">
                <ShoppingCart className='mr-2' /> {/* Cart icon for Cart */}
                Cart
            </Link>
            <Link to="/contact"  onClick={handleShowNav}  className="flex items-center text-black/80  text-lg py-2  w-full border-b transition duration-200">
                <Phone className='mr-2' /> {/* Phone icon for Contact */}
                Contact
            </Link>
            <Link to="/services"  onClick={handleShowNav}  className="flex items-center text-black/80  text-lg py-2  w-full border-b transition duration-200">
                <PenTool className='mr-2' /> {/* Tools icon for Services */}
                Services
            </Link>
            <Link to="/about"  onClick={handleShowNav}  className="flex items-center text-black/80  text-lg py-2  w-full border-b transition duration-200">
                <Info className='mr-2' /> {/* Info icon for About */}
                About
            </Link>
            <X onClick={handleShowNav} className='absolute bottom-5 w-8 h-8 bg-black text-white rounded-full p-2 right-5 cursor-pointer' />
        </div>
    );
}


