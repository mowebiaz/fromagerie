'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import './SubnavAnchors.scss'

export function SubnavAnchors({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id)
  const observerRef = useRef(null)

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    })

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observerRef.current?.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [items])

  return (
    <motion.nav
      className="subnav"
      aria-label="Sous-navigation"
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <ul className="subnav__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="subnav__link"
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
