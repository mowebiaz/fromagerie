import Image from 'next/image'
import { FaqComponent } from '@/src/components/FaqComponent/FaqComponent'
import { FormulaCard } from '@/src/components/FormulaCard/FormulaCard'
import { faqFondues } from '@/src/data/faq'
import './fondues.scss'

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
    images: [
      {
        url: '/images/og/fondue.jpg',
        width: 1200,
        height: 630,
        alt: 'Fondues à Avoriaz',
      },
    ],
  },
  alternates: {
    canonical: '/fondues',
  },
}

export default function FonduesPage() {
  return (
    <main>
      <h1>Fondue savoyarde : nos mélanges prêts à fondre</h1>
      <div className="container">
        <p>
          Chaque famille a sa fondue fétiche, et on le respecte ! Nos mélanges
          sont préparés avec des fromages locaux (Beaufort, Abondance, Emmental
          ou Gruyère de Savoie), râpés et prêts à l’emploi. Vous choisissez le
          profil : plus doux, plus corsé, plus fruité… nous ajustons les
          proportions pour vous. Pain, ail, vin blanc et conseils maison : on
          s’occupe de tout, vous n’avez plus qu’à faire tourner le caquelon.
        </p>
      </div>

      <section id="formules-fondues">
        <div className="container">
          <h2>Nos formules</h2>
          <div className="formules">
            <FormulaCard
              title="la Savoyarde"
              price={9}
            >
              <p>Beaufort / Abondance / Emmental</p>
            </FormulaCard>

            <FormulaCard
              title="la Suisse"
              price={'9,5'}
            >
              <p>Gruyère suisse / Vacherin</p>
            </FormulaCard>

            <FormulaCard
              title="la Fribourgeoise"
              price={'9,5'}
            >
              <p>Vacherin</p>
            </FormulaCard>

            <FormulaCard
              title="l'Avoriazienne"
              price={9}
            >
              <p>Beaufort / Abondance / Comté / Vacherin</p>
            </FormulaCard>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Conseils de préparation</h2>
          <div className="igp">
            <Image
              src="/images/fromage-rape.webp"
              alt="Préparation du fromage pour la fondue"
              width={250}
              height={167}
            />
            <p>
              Prévoir 200 à 250 g de fromage par personne, 10–12 cl de vin blanc
              sec, une demi gousse d’ail, et du pain rustique.
              <br />
              Astuce : vous pouvez ajouter une pointe de muscade en fin de
              préparation.
            </p>
          </div>
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
