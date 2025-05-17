import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p>© 2023 Your Company. All rights reserved.</p>
          <ul className="footer__socials">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}