'use client'
import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import Link from 'next/link'
import { X } from 'lucide-react'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

interface SlideMenuProps {
  isOpen: boolean
  onClose?: () => void
}

const SlideMenu: React.FC<SlideMenuProps> = ({ isOpen, onClose }) => {
  const styles = useSpring({
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 250, friction: 30 },
  })

  return (
    <animated.div
      style={styles}
      className="fixed top-10 z-6 w-full h-full bg-light-c flex flex-col p-6 items-center justify-center"
    >
      <nav>
        <ul className="list-none flex flex-col justify-center mt-30 gap-14 p-0 m-0">
          {menuItems.map((item) => (
            <li key={item.href} className="flex justify-center">
              <Link
                href={item.href}
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
