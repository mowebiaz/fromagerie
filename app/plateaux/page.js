import Image from 'next/image'
import './plateaux.scss'
import { FormulaCard } from '@/src/components/FormulaCard/FormulaCard'
import { JsonLd } from '@/src/components/JsonLd/JsonLd'

export const metadata = {
  title: 'Plateaux de fromages et charcuteries à Avoriaz – Sur-mesure',
  description:
    'Plateaux apéro, dînatoires ou sur-mesure, avec fromages de Savoie, charcuteries, fruits secs et condiments. Commande la veille recommandée. Retrait en boutique.',
  openGraph: {
    title: 'Fromagerie des Cimes à Avoriaz',
    description: 'Plateaux prêts à partager : formats & exemples',
    url: '/plateaux',
  },
  alternates: {
    canonical: '/plateaux',
  },
}

const plateauxJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Plateaux de fromages et charcuteries',
  provider: { '@type': 'FoodEstablishment', name: 'Fromagerie des Cimes' },
  areaServed: { '@type': 'Place', name: 'Avoriaz (74110)' },
  url: '{{siteUrl}}/plateaux',
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
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 592px"
              priority
            />
          </div>
          <p>
            Apéro de fin de journée, dîner cosy ou grande tablée : nous
            composons des plateaux élégants avec nos fromages, charcuteries et
            condiments. Formats au choix, options végétariennes, sans porc ou
            100% fromages.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Formats & exemples</h2>
          <div className="formules">
            <FormulaCard
              price="15"
              title="Apéro"
            >
              <p className="info">2-4 pers</p>
              <p>sélection de 4 fromages, charcuteries fines, fruits secs</p>
            </FormulaCard>

            <FormulaCard
              price="25"
              title="Convivial"
            >
              <p className="info">4-6 pers</p>
              <p>
                sélection de 5-6 fromages, charcuteries de montagne, condiments
              </p>
            </FormulaCard>

            <FormulaCard
              price="40"
              title="Gourmand"
            >
              <p className="info">6-8 pers</p>
              <p>
                sélection de 7-8 fromages, grands affinages, charcuteries,
                confitures
              </p>
            </FormulaCard>

            <FormulaCard
              price="60"
              title="Sur mesure"
            >
              <p className="info">8-12 pers</p>
              <p>thèmes (Savoie only, chèvres, truffe…), allergies, budget</p>
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
            disponibilité des produits que vous souhaitez.
            Pour commander, passez en boutique ou bien appelez-nous au 04 50 74 00 00
          </p>
        </div>
      </section>
    </main>
  )
}
