'use client'

import { usePathname } from 'next/navigation'
import { navLinks } from '../Navigation'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useClickAway } from '@/src/utils/useClickAway'
import { Divide, Divide as Hamburger } from 'hamburger-react'
import './NavMobile.scss'

export const NavMobile = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useClickAway(ref, () => {
    setIsOpen(false)
  })

  return (
    <div ref={ref}>
      <Divide
        color="#8b4513"
        toggle={toggleMenu}
        toggled={isOpen}
        distance='sm'
        rounded
        hideOutline={false}
        label='Menu'
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-mobile-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
          >
            <ul className="nav-mobile">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  className={`nav-mobile__item ${
                    pathname === link.href ? 'active' : ''
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
