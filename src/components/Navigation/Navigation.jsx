'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { NavDesktop } from './NavDesktop/NavDesktop'
import { NavMobile } from './NavMobile/NavMobile'
import './Navigation.scss'
import { LogoContainer } from './LogoContainer/LogoContainer'

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

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0)
  })

  return (
    <header
/*       className={isScrolled ? 'scrolled' : ''}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }} */
    >
      <nav>
        <LogoContainer />
        <NavDesktop />
        <NavMobile />
      </nav>
    </header>
  )
}
