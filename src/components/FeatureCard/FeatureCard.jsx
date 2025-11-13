import './FeatureCard.scss'

export const FeatureCard = ({ title, content, Icon }) => {
  return (
    <article className="feature__card">
      <div className="feature__icon">
        <Icon size={50} />
      </div>
      <div className="feature__content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </article>
  )
}
