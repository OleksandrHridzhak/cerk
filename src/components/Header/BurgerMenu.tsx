'use client'

import React from 'react'

interface BurgerMenuProps {
  isOpen: boolean
  onClick?: () => void
  ariaControls?: string
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClick, ariaControls }) => {
  return (
    <button
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls={ariaControls}
      onClick={onClick}
      className="flex flex-col items-center justify-center w-11 h-11 p-0 bg-transparent border-0 cursor-pointer xl:hidden"
      type="button"
    >
      <span
        className={`block h-[3px] ml-auto mb-[5px] bg-gray-c rounded transition-all duration-300 ease-in-out origin-left ${
          isOpen ? 'w-[29px]' : 'w-[25px]'
        }`}
      />
      <span
        className={`block h-[3px] ml-auto rounded mb-[5px] bg-gray-c transition-all duration-300 ease-in-out ${
          isOpen ? 'w-[18px]' : 'w-[34px]'
        }`}
      />
      <span
        className={`block h-[3px] ml-auto bg-gray-c rounded transition-all duration-300 ease-in-out origin-left ${
          isOpen ? 'w-[25px]' : 'w-[20px]'
        }`}
      />
    </button>
  )
}

export default BurgerMenu
