import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Logo from '/public/assets/logo.png';

const Navbar = () => {
  return (
    <div className='shadow bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* Upper Nawbar */}
        <div className=' bg-primary/40 py-2'>
            <div className='container flex justify-between item-center'>
                <div>
                    <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <Image className="w-10" src={Logo} alt='logo' width={150} height={150} />
                        Shopy
                    </a>
                </div>
                {/* search bar */}
                <div>
                    <div className='group'>
                        <input type='text' placeholder='search' className="
                        w-[200px] sm:w-[200px] group-hover:w-[300px]
                        transition-all duration-300 rounded-full border
                        border-gray-300 px-2 py-1 focus:outline-none
                        focus:border-1 focus:border-primary
                        " />
                    </div>
                </div>
            </div>
        </div>
        {/* Lower Navbar */}
        <div>

        </div>
    </div>
  )
}

export default Navbar