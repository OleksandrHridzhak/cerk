'use client'

import React, { useState } from 'react'

interface BurgerMenuProps {
  onToggle?: (open: boolean) => void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onToggle }) => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(prev => {
      const newState = !prev
      if (onToggle) onToggle(newState)
      return newState
    })
  }

  return (
    <button
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={handleToggle}
      className="flex flex-col items-center justify-center w-11 h-11 p-0 bg-transparent border-0 cursor-pointer xl:hidden"

      type="button"
    >
      <span
        className={`block  h-[3px] ml-auto mb-[5px] bg-gray-c rounded transition-all duration-300 ease-in-out origin-left ${
          open ? 'w-[29px]' : 'w-[25px]'
        }`}
      />
      <span
        className={`block h-[3px] ml-auto rounded mb-[5px] bg-gray-c transition-all duration-300 ease-in-out ${
          open ? 'w-[18px]' : 'w-[34px]'
        }`}
      />
      <span
        className={`block h-[3px] ml-auto bg-gray-c rounded transition-all duration-300 ease-in-out origin-left ${
          open ? 'w-[25px]' : 'w-[20px]'
        }`}
      />
    </button>
  )
}

export default BurgerMenu
