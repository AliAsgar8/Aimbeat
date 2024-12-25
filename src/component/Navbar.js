import React, { useState } from 'react'
import facebook from '../assets/images/png/facebook.png'
import phone from '../assets/images/png/phone.png'
import downArrow from '../assets/images/png/down-arrow.png'
import logo from '../assets/images/png/shopify.png'
import search from '../assets/images/png/search.png'
import arrowUpAndDown from '../assets/images/png/up-down.png'
import heart from '../assets/images/png/heart.png'
import cart from '../assets/images/png/add-to-cart.png'
import hamburger from '../assets/images/png/menu.png'

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const togglebtn = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className='navbar pt-5 px-10 md:px-14 lg:px-20'>

            <div className="top-navbar pb-2 flex justify-between border-b-2">
                <div className='flex items-center'>
                    <div className="facebook flex items-center border-r-2  pr-2">
                        <div className="facebook-img h-[15px] w-[15px] sm:h-[30px] sm:w-[30px]">
                            <img src={facebook} alt="title" className='h-full w-full' />
                        </div>
                        <p className='text-[10px] sm:text-[15px]'>7500K Followers</p>
                    </div>

                    <div className="phone flex items-center  pl-2">
                        <div className="phone-img h-[15px] w-[15px] sm:h-[25px] sm:w-[25px]">
                            <img src={phone} alt="title" className='h-full w-full' />
                        </div>
                        <p className='text-[10px] sm:text-[15px]'>+[402] 768 282 46</p>
                    </div>
                </div>

                <div className=' hidden md:flex items-center gap-2'>
                    <div className="english flex gap-1 items-center border-r-2 pr-2 ">
                        <p>English</p>
                        <div className="down-arrow h-[20px] w-[20px] mt-2 ">
                            <img src={downArrow} alt="title" className='h-full w-full' />
                        </div>
                    </div>

                    <div className="usd flex gap-1 items-center border-r-2 pr-2">
                        <p>$USD</p>
                        <div className="down-arrow h-[20px] w-[20px] mt-2">
                            <img src={downArrow} alt="title" className='h-full w-full' />
                        </div>
                    </div>
                    <div className="setting flex gap-1 items-center">
                        <p>Setting</p>
                        <div className="down-arrow h-[20px] w-[20px] mt-2">
                            <img src={downArrow} alt="title" className='h-full w-full' />
                        </div>
                    </div>
                </div>

                <div className='relative block md:hidden'>

                    <div className="hamburger h-[20px] w-[20px] " onClick={togglebtn}>
                        <img src={hamburger} alt="title" className='h-full w-full' />
                    </div>
                    {isSidebarOpen && (
                        <div className={`responsive-sidebar fixed top-0 right-0 h-full bg-white z-30 w-[100%]  sm:w-[50%] md:hidden ${isSidebarOpen ? 'transition-all  duration-300' : 'transition-all duration-300'}`}>
                            <div className="close-button flex justify-end p-4">
                                <button onClick={togglebtn} className="text-black text-lg">Close</button>
                            </div>
                            <div className="sidebar-content p-4 text-black">
                                <ul>
                                    <li className='py-2 pl-6 border'>Home</li>
                                    <li className='py-2 pl-6 border'>Shop</li>
                                    <li className='py-2 pl-6 border'>Products</li>
                                    <li className='text-white py-2 pl-6 bg-black'>Categories</li>
                                    <li className='py-2 pl-6 border'>Pages</li>
                                    <li className='py-2 pl-6 border'>Contact</li>
                                </ul>
                            </div>
                        </div>
                    )}

                </div>

            </div>


            <div className='main-navbar border-b-2 py-4 flex  justify-between items-center'>

                <div className="logo flex gap-1 items-center">
                    <div className="shopy-logo h-[25px] w-[25px] sm:h-[50px] sm:w-[50px]">
                        <img src={logo} alt="title" className='h-full w-full' />
                    </div>
                    <h1 className='text-md sm:text-4xl font-bold '>Shofy.</h1>
                </div>


                <div className="nav-list hidden md:flex">
                    <ul className='flex items-center gap-4 cursor-pointer'>
                        <li className='hover:to-blue-400'>Home</li>
                        <li>Shop</li>
                        <li>Products</li>
                        <li className='text-[#60a5fa]'>Categories</li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="all-functionality flex gap-2">


                    <div className='flex items-center gap-3'>

                        <div className="search h-[25px] w-[25px] sm:h-[30px] sm:w-[30px]">
                            <img src={search} alt="title" className='w-full h-full' />
                        </div>
                        <div className="arrow-up-down h-[20px] w-[20px] ">
                            <img src={arrowUpAndDown} alt="title" className='h-full w-full' />
                        </div>

                        <div className="heart h-[25px] w-[25px]">
                            <img src={heart} alt="title" className='h-full w-full' />
                        </div>

                        <div className="cart heart h-[27px] w-[27px] ">
                            <img src={cart} alt="title" className='h-full w-full' />
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default Navbar
