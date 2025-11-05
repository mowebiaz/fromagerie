'use client'

import './Footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* logo */}
        <div className="footer__info">
          <p>adress
            <br />
            adress
          </p>
          <p>telephone</p>
          <p>email</p>
        </div>
        <div className="footer__hours">
          <h3 className='footer__title'>Horaires d'ouverture</h3>
          <p>Lundi : Fermé</p>
          <p>Mardi - Vendredi : 10h - 19h</p>
          <p>Samedi : 10h - 20h</p>
          <p>Dimanche : 9h - 13h</p>
        </div>
        <div className="footer__social">
          <h3 className='footer__title'>Suivez-nous</h3>
          <div className="footer__social-links">
            <a href="#" className="footer__social-link">Facebook</a>
            <a href="#" className="footer__social-link">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className='footer__copyright'>
        <p>© 2025 Fromagerie des Cimes. Tous droits réservés.</p>
        <p>Site réalisé par MorganeWeb</p>
        </div>
        <div className="footer__links">
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}
