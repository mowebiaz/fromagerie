'use client'

import { SpecialtyCard } from '../SpecialtyCard/SpecialtyCard'
import { BtnLink } from '../BtnLink/BtnLink'
import './SpecialtySection.scss'
import {motion} from 'motion/react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
}

export const SpecialtySection = ({ items }) => {
  return (
    <section id="specialites">
      <div className="container">
        <h2>Nos spécialités</h2>
        <motion.div className="specialites__grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {items.map((item) => (
            <SpecialtyCard
              key={item.id}
              size={item.size}
              title={item.title}
              content={item.content}
              image={item.image}
              link={item.link}
            />
          ))}
        </motion.div>
        <BtnLink
          href="/produits"
          text="Tous nos produits"
        />
      </div>
    </section>
  )
}
