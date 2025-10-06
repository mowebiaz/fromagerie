'use client'

import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'
import './SiteHeader.scss'

export default function SiteHeader() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 4))

  return (
    <motion.header
      className={`site-header${scrolled ? ' is-scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
    >
      <div className="container header-inner">
        <a className="brand" href="/">Épicerie</a>
        <nav className="primary-nav" aria-label="Navigation principale">
          <a href="/produits">Produits</a>
          <a href="/raclettes-fondues">Raclettes & Fondues</a>
          <a href="/plateaux">Plateaux</a>
          <a href="/infos">Infos</a>
          <a className="btn-cta" href="/commander">Commander</a>
        </nav>
      </div>
    </motion.header>
  )
}
