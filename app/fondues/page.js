import { FormulaCard } from '@/src/components/FormulaCard/FormulaCard'
import './fondues.scss'
import { FaqComponent } from '@/src/components/FaqComponent/FaqComponent'
import { JsonLd } from '@/src/components/JsonLd/JsonLd'
import { faqFondues } from '@/src/data/faq'

export const metadata = {
  title: 'Fondue savoyarde à Avoriaz – Recettes maison',
  description:
    'Fondue savoyarde à base de Beaufort, Abondance et Emmental (ou Gruyère de Savoie). Mélanges prêts à fondre, pains et vins associés. Conseils & prêt de caquelon.',
  openGraph: {
    title: 'Fromagerie des Cimes à Avoriaz',
    description: 'Fondue savoyarde : nos mélanges prêts à fondre',
    siteName: 'Fromagerie des Cimes',
    type: 'website',
    url: '/fondues',
  },
  alternates: {
    canonical: '/fondues',
  },
}

const fonduesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Fondue savoyarde',
  description:
    'Assemblage de Beaufort, Abondance et Emmental (ou Gruyère de Savoie). Prête à fondre.',
  category: 'Fondue savoyarde',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStoreOnly',
    priceCurrency: 'EUR',
    url: '{{siteUrl}}/fondue',
  },
}

export default function FonduesPage() {
  return (
    <main>
      <JsonLd schema={fonduesJsonLd} />
      <h1>Fondue savoyarde : nos mélanges prêts à fondre</h1>
      <div className="container">
        <p>
          Nos fondues sont assemblées avec des fromages locaux : Beaufort,
          Abondance et Emmental (ou Gruyère de Savoie) selon la saison et le
          profil souhaité. Mélanges équilibrés, prêts à l’emploi. Nous
          fournissons pain, ail, vin et conseils.
        </p>
      </div>

      <section id="formules-fondues">
        <div className="container">
          <h2>Nos formules</h2>
          <div className="formules">
            <FormulaCard
              title="la Classique"
              price={10}
            >
              <p>Beaufort / Abondance / Emmental</p>
            </FormulaCard>
            <FormulaCard
              title="la Savoyarde"
              price={10}
            >
              <p>Beaufort / Abondance / Emmental</p>
            </FormulaCard>
            <FormulaCard
              title="la Suisse"
              price={10}
            >
              <p>Beaufort / Abondance / Emmental</p>
            </FormulaCard>
            <FormulaCard
              title="l'Avoriazienne"
              price={10}
            >
              <p>Beaufort / Abondance / Emmental</p>
            </FormulaCard>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Conseils de préparation</h2>
          <p>
            200–250 g de fromage, 10–12 cl de vin blanc sec, ½ gousse d’ail,
            pain rustique. Astuce : une pointe de muscade en fin de préparation.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <FaqComponent
            className={'faq'}
            items={faqFondues}
          />
        </div>
      </section>
    </main>
  )
}
