import Link from 'next/link'
import { SpecialtyCard } from '../SpecialtyCard/SpecialtyCard'
import './SpecialtySection.scss'

export const SpecialtySection = ({ items }) => {
  return (
    <section id="specialites">
      <div className="container">
        <h2>Nos spécialités</h2>
        <div className="specialites__grid">
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
        </div>
        <Link href="/produits">Tous nos produits</Link>
      </div>
    </section>
  )
}
