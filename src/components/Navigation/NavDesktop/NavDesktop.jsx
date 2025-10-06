'use client'

import Link from 'next/link'
import { navLinks } from '../Navigation'
import { usePathname } from 'next/navigation'
import './NavDesktop.scss'

export const NavDesktop = () => {
  const  pathname  = usePathname()
  
  return (
    <ul className="nav-desktop">
      {navLinks.map((link) => (
        <li key={link.href} className={`nav-desktop__item ${pathname === link.href ? 'active' : ''}`}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}
