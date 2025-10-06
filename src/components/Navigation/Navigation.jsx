'use client'

import Link from 'next/link'
import { NavDesktop } from './NavDesktop/NavDesktop'
import { NavMobile } from './NavMobile/NavMobile'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState, useEffect } from 'react'
import './Navigation.scss'

export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/produits', label: 'Produits' },
  { href: '/raclettes', label: 'Raclettes' },
  { href: '/fondues', label: 'Fondues' },
  { href: '/plateaux', label: 'Plateaux' },
  { href: '/contact', label: 'Contact' },
]

export const Navigation = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setIsScrolled(y > 4))

  return (
    <motion.header
      className={isScrolled ? 'scrolled' : ''}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
    >
      <nav>
        <Link
          href="/"
          className="logo"
        >
          La Belle Fromagerie
        </Link>
        <NavDesktop />
        <NavMobile />
      </nav>
    </motion.header>
  )
}
