import { Footer } from '@/src/components/Footer/Footer'
import { JsonLd } from '@/src/components/JsonLd/JsonLd'
import { Navigation } from '@/src/components/Navigation/Navigation'
import { playfair, raleway } from '@/src/styles/fonts'
import '@/src/styles/scss/globals.scss'

export const metadata = {
  metadataBase: new URL('https://morganeweb.com/'),
  title: {
    default: 'Fromagerie des Cimes',
    template: '%s | Fromagerie des Cimes',
  },
  description:
    'Fromagerie artisanale à Avoriaz : raclettes, fondues, plateaux sur-mesure, charcuteries, produits locaux et cave. Conseils d’accords, commande par téléphone & retrait en boutique.',
  openGraph: {
    siteName: 'Fromagerie des Cimes',
    type: 'website',
    url: 'https://morganeweb.com/',
    // mettre l'image par défaut
    images: [
      {
        url: '/images/og/fromagerie-des-cimes.jpg',
        width: 1200,
        height: 630,
        alt: 'Plateau de fromages et charcuteries à Avoriaz',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
}

const layoutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  '@id': '{{siteUrl}}/#fromagerie',
  name: 'La Fromagerie des Cimes',
  description:
    'Fromagerie artisanale à Avoriaz : raclettes, fondues, plateaux, charcuteries et cave locale.',
  url: '{{siteUrl}}/',
  telephone: '04 50 74 00 00',
  image: '{{siteUrl}}/images/og/home.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'xxx',
    addressLocality: 'Avoriaz',
    postalCode: '74110',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 46.191, longitude: 6.777 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:30',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '16:00',
      closes: '20:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '04 50 74 00 00',
    contactType: 'customer service',
    areaServed: 'FR',
    availableLanguage: ['fr'],
  },
  //"sameAs": ["{{instagram}}","{{facebook}}"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${raleway.variable}`}>
        {/*         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        /> */}
        <JsonLd schema={layoutJsonLd} />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
