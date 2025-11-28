import { FaInstagramSquare } from 'react-icons/fa'
import { FaFacebook, FaGithub } from 'react-icons/fa6'
import { LinkAria } from '@/src/components/LinkAria/LinkAria'
import './Footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* logo */}
        <div className="footer__info">
          <p className="footer__title">Coordonnées</p>
          <p>
            xxxxx
            <br />
            74110 Avoriaz
          </p>
          <p>04 50 74 00 00</p>
          <p>fromagerie-cimes@example.com</p>
        </div>
        <div className="footer__hours">
          <p className="footer__title">Horaires d'ouverture</p>
          <p>En saison:</p>
          <p>Tous les jours</p>
          <p>7h30 - 13h</p>
          <p>16h - 19h</p>
        </div>
        <div className="footer__social">
          <p className="footer__title">Suivez-nous</p>
          <div className="footer__social-links">
            <LinkAria
              href={'/'}
              target="_blank"
              referrerPolicy="no-opener no-referrer"
              aria-label="Lien vers le profil instagram"
              className="social-link"
            >
              <FaInstagramSquare />
            </LinkAria>

            <LinkAria
              href={'/'}
              target="_blank"
              referrerPolicy="no-opener no-referrer"
              aria-label="Lien vers le profil Facebook"
              className="social-link"
            >
              <FaFacebook />
            </LinkAria>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          <p>© 2025 Fromagerie des Cimes. Tous droits réservés.</p>
          <p>Site réalisé par MorganeWeb</p>
        </div>
        <div className="footer__links">
          <LinkAria href={'/'} className="link">Mentions légales</LinkAria>
          <LinkAria href={'/'} className="link">Politique de confidentialité</LinkAria>
        </div>
      </div>
    </footer>
  )
}
