import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { ContactCard } from '@/src/components/ContactCard/ContactCard'
import { JsonLd } from '@/src/components/JsonLd/JsonLd'
import { MapContainer } from '@/src/components/LeafletMap/MapContainer'
import { LinkAria } from '@/src/components/LinkAria/LinkAria'

export const metadata = {
  title: 'Contact et horaires',
  description:
    'Adresse, horaires, téléphone et e-mail de la Fromagerie des Cimes à Avoriaz. Commande de plateaux, raclettes et fondues. Accès & plan.',
  openGraph: {
    title: 'Contact et horaires',
    description:
      'Adresse, horaires, téléphone et e-mail de la Fromagerie des Cimes à Avoriaz. Commande de plateaux, raclettes et fondues. Accès & plan.',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact La Fromagerie des Cimes',
  url: '{{siteUrl}}/contact',
  about: {
    '@type': 'LocalBusiness',
    name: 'La Fromagerie des Cimes',
    email: 'fromagerie-cimes@example.com',
    telephone: '04 50 74 00 00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'xxx',
      addressLocality: 'Avoriaz',
      postalCode: '74110',
      addressCountry: 'FR',
    },
  },
}

export default function ContactPage() {
  return (
    <main>
      <JsonLd schema={contactJsonLd} />
      <h1>Nous contacter</h1>
      <section>
        <div className="container">
          <h2>Coordonnées</h2>
          <ContactCard
            title="Téléphone"
            content="04 50 74 00 00"
            Icon={FaPhone}
          />
          <ContactCard
            title="E-mail"
            content="fromagerie-cimes@example.com"
            Icon={FaEnvelope}
          />
          <ContactCard
            title="Adresse"
            content="74110 Avoriaz"
            Icon={FaMapMarkerAlt}
          />
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Horaires</h2>
          <p>
            En saison, nous sommes ouverts tous les jours de 7h30 à 13h00 et de
            16h00 à 20h00.<br></br>La boutique est fermée en intersaison. Nos
            dates d&apos;ouverture et de fermeture sont les mêmes que celles de
            la station.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Nous trouver</h2>
          Notre boutique se situe au cœur de la station, proche du
          <LinkAria
            className="link"
            href={'https://www.village-des-enfants.com/fr/'}
            target="_blank"
            referrerPolicy="no-opener no-referrer"
          >
            village des enfants
          </LinkAria>
          .
          <MapContainer />
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Nous écrire</h2>
          <p>
            formulaire de contact: Nom, e-mail, téléphone, sujet, message,
            date/heure souhaitées (plateaux), allergies/préférences. Mentions :
            délai de réponse, données personnelles.
          </p>
        </div>
      </section>
    </main>
  )
}
