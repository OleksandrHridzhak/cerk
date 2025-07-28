'use client'
import React, { useEffect, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Link from 'next/link'
import { X } from 'lucide-react'


interface SlideMenuProps {
  isOpen: boolean
  onClose?: () => void
  menuItems?: { label: string; href: string }[]
}

const SlideMenu: React.FC<SlideMenuProps> = ({ isOpen, onClose, menuItems = [] }) => {
  const styles = useSpring({
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 250, friction: 30 },
  })
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  // Focus the first link when the menu opens
  useEffect(() => {
  if (isOpen && firstLinkRef.current) {
    firstLinkRef.current.focus()
  }
  }, [isOpen])

  // Close the menu when the Escape key is pressed
  useEffect(() => {
  function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Escape' && isOpen) {
      if(onClose) {
        onClose();
      }
    }
  }
  window.addEventListener('keydown', handleEsc)
  return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])


  return (
    <animated.div
      role="dialog"            
      aria-modal="true"           
      aria-hidden={!isOpen}        
      style={styles}
      id="mobile-menu"
      className="fixed top-10 z-6 w-full h-full bg-light-c flex flex-col p-6 items-center justify-center"
    >
      <nav aria-label="Main menu">  {/* описуємо меню */}
        <ul className="list-none flex flex-col justify-center mt-30 gap-14 p-0 m-0">
          {menuItems.map((item, i) => (
            <li key={item.href} className="flex justify-center">
              <Link
                href={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={onClose}
                tabIndex={isOpen ? 0 : -1}
                className="no-underline text-gray-800 text-3xl font-bold hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="self-center bg-transparent border-none text-6xl cursor-pointer mt-auto mb-14 p-2 rounded-full hover:bg-gray-300 transition"
      >
        <X size={60} strokeWidth={2} />
      </button>
    </animated.div>

  )
}

export default SlideMenu
