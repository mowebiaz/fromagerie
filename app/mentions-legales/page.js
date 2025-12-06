import { LinkAria } from '@/src/components/LinkAria/LinkAria'
import './mentions-legales.scss'

export default function MentionsLegales() {
  return (
    <main id="mentions-legales">
      <h1>Mentions légales</h1>
      <div className="container">
        <h2>Informations générales</h2>
        <p>
          Le présent site (ci-après « le Site ») est un projet de démonstration
          réalisé dans le cadre d’un portfolio de développeuse web.
        </p>
        <div className="important">
          💡<strong> Important</strong>:<br />
          La « Fromagerie des Cimes » est une entreprise{' '}
          <strong>fictive</strong>. La boutique, les produits, les services, les
          tarifs, horaires présentés sur ce Site ont été entièrement inventés.
          Aucune commande réelle, aucune réservation ni aucun achat ne peuvent
          être effectués via ce Site.
        </div>
        <p>
          Ce modèle (&quot;template&quot;) a pour seul but d’illustrer ce à quoi
          pourrait ressembler un site vitrine pour une fromagerie de montagne.
        </p>
      </div>

      <div className="container">
        <h2>Editeur du site</h2>
        <p>Statut de la société : Entrepreneur Individuel</p>
        <p>Nom de la Société : Morgane Couvet</p>
        <p>Nom commercial : MorganeWeb</p>
        <p>Adresse : 11 Boulevard Maréchal Leclerc, 38000 Grenoble</p>
        <p>E-mail : contact@morganeweb.com</p>
        <p>SIRET : 938 955 333 00019</p>
        <p>Responsable de la publication : Morgane Couvet</p>
      </div>

      <div className="container">
        <h2>Hébergeur</h2>
        <p>Nom de l&apos;hébergeur : Cloudflare, Inc.</p>
        <p>Adresse : 101 Townsend St, San Francisco, CA 94107, États-Unis</p>
        <p>
          Site web :{' '}
          <LinkAria
            href={'https://www.cloudflare.com/fr-fr/'}
            target="_blank"
            referrerPolicy="no-opener no-referrer"
            className="link"
          >
            https://www.cloudflare.com/fr-fr
          </LinkAria>
        </p>
      </div>

      <div className="container">
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des éléments présents sur le Site (textes, maquettes, mises
          en page, éléments graphiques, logos de démonstration, etc.) est
          destiné à illustrer un projet fictif. Sauf mention contraire :
        </p>
        <ul>
          <li>
            Les textes de présentation ont été rédigés spécifiquement pour ce
            projet.
          </li>
          <li>
            La reproduction, même partielle, des contenus du Site est autorisée
            uniquement dans le cadre d’une utilisation personnelle ou d’un
            échange professionnel autour du portfolio de la développeuse à
            l’origine du projet.
          </li>
          <li>
            Toute réutilisation commerciale nécessite l’accord écrit préalable
            de l’éditeur du Site.
          </li>
        </ul>
      </div>

      <div className="container">
        <h2>Crédits photo & visuels</h2>
        <p>
          Les images utilisées sur ce Site ont pour seul but d’illustrer
          l’univers d’une fromagerie de montagne.
        </p>
        <p>
          Chaque image reste la propriété de son auteur ou de la plateforme qui
          la fournit. Toute reproduction ou réutilisation doit respecter les
          conditions d’utilisation desdites plateformes ou l’autorisation de
          l’auteur.
        </p>
        <ul>
          <li>certaines images ont été créées avec Midjourney</li>
          <li>Unsplash</li>
          <li>Freepik</li>
          <li>
            Wikipedia:
            <LinkAria
              href={
                'https://commons.wikimedia.org/wiki/File:Vache_Abondance_en_alpage.jpg'
              }
              target="_blank"
              referrerPolicy="no-opener no-referrer"
              className="link"
            >
              Vache abondance
            </LinkAria>
            ,
            <LinkAria
              href={
                'https://commons.wikimedia.org/wiki/File:Abondance_(fromage)_01.jpg'
              }
              target="_blank"
              referrerPolicy="no-opener no-referrer"
              className="link"
            >
              fromage d&apos;abondance
            </LinkAria>
            ,
            <LinkAria
              href={
                'https://commons.wikimedia.org/wiki/File:WikiCheese_-_Tomme_de_Savoie_-_20150619_-_002.jpg'
              }
              target="_blank"
              referrerPolicy="no-opener no-referrer"
              className="link"
            >
              tomme de Savoie
            </LinkAria>
            ,
            <LinkAria
              href={'https://commons.wikimedia.org/wiki/File:Reblochon_11.jpg'}
              target="_blank"
              referrerPolicy="no-opener no-referrer"
              className="link"
            >
              reblochon
            </LinkAria>
            ,
            <LinkAria
              href={
                'https://commons.wikimedia.org/wiki/File:Vacherin_des_bauges.jpg'
              }
              target="_blank"
              referrerPolicy="no-opener no-referrer"
              className="link"
            >
              vacherin
            </LinkAria>
            ,
            <LinkAria
              href={
                'https://commons.wikimedia.org/wiki/File:Chevrotin_des_Aravis_(avril_2021)_-_2.jpg'
              }
              target="_blank"
              referrerPolicy="no-opener no-referrer"
              className="link"
            >
              chevrotin
            </LinkAria>
          </li>
        </ul>
      </div>

      <div className="container">
        <h2>Caractère fictif des informations</h2>
        <p>
          Les contenus suivants sont fictifs et n’ont aucune valeur
          contractuelle:
        </p>
        <ul>
          <li>Noms de la fromagerie, des producteurs et des fournisseurs</li>
          <li>Descriptions de produits, tarifs, formules</li>
          <li>Coordonnées, horaires d’ouverture, conditions de vente</li>
        </ul>
        <p>
          Toute ressemblance avec des commerces, personnes ou situations
          existantes serait purement fortuite.
        </p>
      </div>

      <div className="container">
        <h2>Liens externes</h2>
        <p>
          Le Site peut contenir des liens vers d’autres sites. Ces liens sont
          fournis uniquement à titre informatif. L’éditeur du Site n’exerce
          aucun contrôle sur ces sites tiers et ne peut être tenu responsable de
          leurs contenus, pratiques ou politiques de confidentialité.
        </p>
      </div>

      <div className="container">
        <h2>Modification des mentions légales</h2>
        <p>
          Les présentes mentions légales peuvent être modifiées à tout moment,
          notamment pour s’adapter à l’évolution des contenus du Site ou de la
          législation en vigueur.
        </p>
        <p>Date de la dernière mise à jour: 06/12/2025</p>
      </div>
    </main>
  )
}
