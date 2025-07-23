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
      className="flex flex-col items-center w-8 h-5 gap-[4px] p-0 bg-transparent border-0 cursor-pointer"
      type="button"
    >
      <span
        className={`block  h-[3px] w-[18px] ml-auto bg-gray-800 rounded transition-transform duration-300 ease-in-out origin-left ${
          open ? 'rotate-45 translate-x-[6px] translate-y-[6px]' : ''
        }`}
      />
      <span
        className={`block h-[3px] w-[24px] ml-auto rounded bg-gray-800 transition-opacity duration-300 ease-in-out ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ width: '24px' }}
      />
      <span
        className={`block h-[3px] w-[13px] ml-auto bg-gray-800 rounded transition-transform duration-300 ease-in-out origin-left ${
          open ? '-rotate-45 translate-x-[6px] -translate-y-[6px]' : ''
        }`}
      />
    </button>
  )
}

export default BurgerMenu
