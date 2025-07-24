'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import BurgerMenu from './BurgerMenu'
import SearchBtn from './SearchBtn'
import SlideMenu from './SlideMenu'




const Header: React.FC = ({}) => {
  const [isOpen, setOpen] = useState(false);


  return (
    <>
    <SlideMenu isOpen={isOpen} onClose={()=> setOpen(!isOpen)} />
    <header className='flex relative z-10 bg-light-c w-full  items-center h-17 border-b xl:border-b-[1.5px] border-b-gray-c'>
      <div className='flex justify-between w-full px-5 md:px-7 mx-auto max-w-screen-xl  items-center'>
        <Link href="/" className="font-bold text-2xl md:text-3xl">
            cerk
        </Link>
        <div className='flex items-center gap-1 xl:gap-7'>
          <nav>
                <ul className='hidden xl:flex gap-7'>
                    <li>
                        <Link href="/about" className="text-gray-c font-semibold hover:text-gray-800 transition-colors duration-200">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-c font-semibold hover:text-gray-800 transition-colors duration-200">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <SearchBtn />
            <BurgerMenu onClick={()=> setOpen(!isOpen)} isOpen={isOpen}/>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
