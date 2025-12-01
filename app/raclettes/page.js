import Image from 'next-export-optimize-images/image'
import { FaqComponent } from '@/src/components/FaqComponent/FaqComponent'
import { FormulaCard } from '@/src/components/FormulaCard/FormulaCard'
import { faqRaclettes } from '@/src/data/faq'
import './raclettes.scss'

export const metadata = {
  title: 'Raclette à Avoriaz – Fromage & assortiments',
  description:
    'Raclettes nature, fumée, ail des ours, 3 poivres, chèvre… Pommes de terre, charcuteries, cornichons, pains et vins adaptés. Conseils & prêt d’appareil sur demande.',
  alternates: {
    canonical: 'https://morganeweb.com/',
  },
  openGraph: {
    title: 'Fromagerie des Cimes: Raclette à Avoriaz',
    description:
      'Raclettes nature, fumée, ail des ours, 3 poivres, chèvre… Pommes de terre, charcuteries, cornichons, pains et vins adaptés. Conseils & prête d’appareil sur demande.',
    url: '/raclettes',
    // mettre l'image par défaut
    images: [
      {
        url: '/images/og/raclette.jpg',
        width: 1200,
        height: 630,
        alt: 'Plateau de fromages et charcuteries à Avoriaz',
      },
    ],
  },
}

export default function RaclettesPage() {
  return (
    <main className="raclettes">
      <h1>La raclette, star de l’hiver</h1>
      <div className="container">
        <p>
          À deux pas de la Suisse, Avoriaz est un terrain de jeu idéal pour une
          raclette réussie. A la Fromagerie des Cimes, nous proposons plusieurs
          profils : nature, fumée, ail des ours, 3 poivres, chèvre… et tout ce
          qu&apos;il faut pour l’accompagnement : pommes de terre, charcuteries,
          cornichons, pain, vins blancs de montagne.
        </p>
      </div>

      <section id="fromages-raclette">
        <div className="container">
          <div>
            <h2>Nos fromages à raclette</h2>

            <ul>
              <li>Nature : lait de vache, généreuse et fondante</li>
              <li>Fumée : notes boisées</li>
              <li>Ail des ours : parfum végétal printanier</li>
              <li>3 poivres : relevé, équilibré</li>
              <li>Chèvre : plus franc et herbacé</li>
            </ul>
          </div>
          <div className="image">
            <Image
              src="/images/1.png"
              alt="fromages à raclette"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      {/* à revoir */}

      <section id="formules-raclette">
        <div className="container">
          <h2>Nos formules</h2>
          <p>
            Chaque raclette est offerte en plusieurs formules, selon vos
            besoins. Chaque formule est personnalisable selon vos besoins. Par
            personne : 200–250 g de fromage, 200–300 g de pommes de terre,
            assortiment de charcuteries, cornichons. Sortez le fromage 30 min
            avant. Prêt d’appareil possible (caution). à modifier: Présentation
            sur Plateau ou juste découpé en sac, choisissez votre Formule !
          </p>

          <div className="formules">
            <FormulaCard price="13">
              <ul>
                <li>4 parfums de fromage</li>
                <li>charcuterie</li>
              </ul>
              <p className="info">
                (250g de fromage, 150g de charcuterie environ pp)
              </p>
            </FormulaCard>

            <FormulaCard price="11">
              <ul>
                <li>fromage nature</li>
                <li>charcuterie</li>
              </ul>
              <p className="info">
                (250g de fromage, 150g de charcuterie environ pp)
              </p>
            </FormulaCard>

            <FormulaCard price="8,50">
              <ul>
                <li>4 parfums de fromage</li>
                <li>sans charcuterie</li>
              </ul>
              <p className="info">(250g de fromage environ pp)</p>
            </FormulaCard>

            <FormulaCard price="5,50">
              <ul>
                <li>fromage nature</li>
                <li>sans charcuterie</li>
              </ul>
              <p className="info">(250g de fromage environ pp)</p>
            </FormulaCard>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Le saviez-vous ?</h2>
          <div className="igp">
            <Image
              src="/images/vache-abondance.webp"
              alt="Vache de race Abondance en alpage, utilisée pour la production de Raclette de Savoie IGP"
              width={203}
              height={150}
            />
            <p>
              La Raclette de Savoie bénéficie d’une IGP depuis 2017. Elle est
              élaborée et affinée sur une aire délimitée en Savoie et
              Haute-Savoie, avec des laits principalement issus des races
              Abondance, Montbéliarde et Tarentaise.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <FaqComponent
            className={'faq'}
            items={faqRaclettes}
          />
        </div>
      </section>
    </main>
  )
}
