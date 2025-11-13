import { FeatureCard } from '@/src/components/FeatureCard/FeatureCard'
import './FeaturesSection.scss'

export const FeaturesSection = ({ items }) => {
  return (
    <section id="features">
      <div className="container">
        <h2>Pourquoi nous choisir ?</h2>
        <div className="feature__grid">
          {items.map((item) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              content={item.content}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
