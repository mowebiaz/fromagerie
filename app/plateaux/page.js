import Image from 'next/image'
import { FormulaCard } from '@/src/components/FormulaCard/FormulaCard'
import { JsonLd } from '@/src/components/JsonLd/JsonLd'
import './plateaux.scss'

export const metadata = {
  title: 'Plateaux de fromages et charcuteries à Avoriaz – Sur-mesure',
  description:
    'Plateaux apéro, dînatoires ou sur-mesure, avec fromages de Savoie, charcuteries, fruits secs et condiments. Commande la veille recommandée. Retrait en boutique.',
  openGraph: {
    title: 'Fromagerie des Cimes à Avoriaz',
    description: 'Plateaux prêts à partager : formats & exemples',
    url: '/plateaux',
    images: [
      {
        url: '/images/og/plateaux.jpg',
        width: 1200,
        height: 630,
        alt: 'Plateaux de fromages et charcuteries à Avoriaz',
      },
    ],
  },
}

const plateauxJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Plateaux de fromages et charcuteries',
  description:
    "'Préparation de plateaux de fromages et charcuteries pour l’apéro, les repas de famille ou les grandes tablées à Avoriaz.",
  serviceType: 'Plateaux de fromages et charcuteries',
  provider: {
    '@type': 'FoodEstablishment',
    '@id':
      'https://morganeweb.com/services/creation-site-vitrine/fromagerie#fromagerie',
    name: 'La Fromagerie des Cimes',
  },
  areaServed: { '@type': 'Place', name: 'Avoriaz (74110)' },
}

export default function PlateauxPage() {
  return (
    <main>
      <JsonLd schema={plateauxJsonLd} />
      <h1>Plateaux prêts à partager</h1>
      <section id="plateaux">
        <div className="container">
          <div className="image">
            <Image
              src="/images/plateau-de-fromages.webp"
              alt="fromagerie des cimes: notre histoire"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 592px"
              priority
            />
          </div>
          <p>
            Apéritif entre amis, fin de repas gourmand ou grande tablée en
            chalet : nous composons des plateaux sur mesure avec nos fromages,
            charcuteries et accompagnements. Chaque plateau est préparé selon
            vos envies : formats au choix, versions 100 % fromages ou avec
            charcuterie. Pour un anniversaire, un week-end en famille ou un
            événement particulier, n’hésitez pas à nous appeler : nous ajustons
            les quantités et la présentation en fonction de votre occasion.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Formats & exemples</h2>
          <p>
            Les tarifs indiqués sont des tarifs par personne. Minimum 20€ de
            commande.
          </p>
          <div className="formules">
            <FormulaCard
              price="6"
              title="Apéro fromage"
            >
              <p className="info">Découpé à la bouchée</p>
            </FormulaCard>

            <FormulaCard
              price="8,5"
              title="Apéro fromage et charcuterie"
            >
              <p className="info">Découpé à la bouchée</p>
            </FormulaCard>

            <FormulaCard
              price="11"
              title="Repas fromage"
            >
              <p className="info">Pour ceux qui ne veulent pas cuisiner</p>
            </FormulaCard>

            <FormulaCard
              price="14"
              title="Repas fromage et charcuterie"
            >
              <p className="info">Pour ceux qui ne veulent pas cuisiner</p>
            </FormulaCard>

            <FormulaCard
              price="5"
              title="Fin de repas"
            >
              <p className="info">avant de passer au dessert...</p>
            </FormulaCard>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Commander</h2>
          <p>
            En saison et pendant les vacances, nous vous conseillons vivement de
            réserver, surtout pour les groupes. Cela nous permet de préparer vos
            plateaux dans les meilleures conditions et de garantir la
            disponibilité des produits que vous souhaitez. Pour commander,
            passez en boutique ou bien appelez-nous au 04 50 74 00 00
          </p>
        </div>
      </section>
    </main>
  )
}
