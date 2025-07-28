'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import BurgerMenu from './BurgerMenu'
import SlideMenu from './SlideMenu'
import { menuItems } from '../../constants/menuItems'



const Header: React.FC = ({}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <SlideMenu isOpen={isOpen} onClose={()=> setOpen(!isOpen)} menuItems={menuItems}/>
    <header className='flex relative z-10 bg-light-c w-full  items-center h-17 border-b xl:border-b-[1.5px] border-b-gray-c'>
      <div className='flex justify-between w-full px-5 md:px-7 mx-auto max-w-screen-xl  items-center'>
        <Link href="/" className="font-bold text-gray-c text-2xl md:text-3xl">
            cerk
        </Link>
        <div className='flex items-center gap-1 xl:gap-7'>
          <nav aria-label="Primary navigation">
                <ul className='hidden xl:flex gap-8'>
                  {menuItems.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className="text-gray-c font-semibold hover:text-gray-800 transition-colors duration-200">
                            {item.label}
                        </Link>
                    </li>
                  ))}
                </ul>
            </nav>
            <BurgerMenu
              onClick={() => setOpen(!isOpen)}
              isOpen={isOpen}
              ariaControls="mobile-menu"
            />

        </div>
      </div>
    </header>
    </>
  )
}

export default Header
