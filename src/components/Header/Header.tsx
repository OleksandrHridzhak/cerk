import React from 'react'
import Link from 'next/link'
import BurgerMenu from './BurgerMenu'
import SearchBtn from './SearchBtn'

const Header: React.FC = ({}) => {
  return (
    <header className='flex bg-light-c w-full justify-between items-center px-4 h-15 border-b border-gray-c'>
        <Link href="/" className="font-bold text-xl">
            cerk
        </Link>
        <div className='flex items-center gap-1'>
            <SearchBtn />
            <BurgerMenu/>
        </div>
    </header>
  )
}

export default Header
