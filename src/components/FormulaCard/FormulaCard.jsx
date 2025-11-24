import './FormulaCard.scss'

export const FormulaCard = ({title, price, children, ...props}) => {
  return (
    <article className='formula-card'>
      <div className="content">
        {title && <h3>{title}</h3>}
        {children}
      </div>
      <div className="price">{price}€</div>
    </article>
  )
}