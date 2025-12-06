import Image from 'next/image'
import { BtnLink } from '@/src/components/BtnLink/BtnLink'
import { FeaturesSection } from '@/src/components/FeaturesSection/FeaturesSection'
import { HeroVideo } from '@/src/components/HeroVideo/HeroVideo'
import { ReviewSection } from '@/src/components/ReviewSection/ReviewSection'
import { SpecialtySection } from '@/src/components/SpecialtySection/SpecialtySection'
import { features } from '@/src/data/features'
import { reviews } from '@/src/data/reviews'
import { specialties } from '@/src/data/specialties'
import './page.scss'

export const metadata = {
  description:
    'Fromagerie artisanale à Avoriaz : raclettes, fondues, plateaux, charcuteries et produits locaux.',
  openGraph: {
    title: 'Fromagerie à Avoriaz – Fromagerie des Cimes',
    description:
      'Fromages savoyards, raclettes, fondues et plateaux prêts à partager à Avoriaz.',
    url: '/', // devient https://fromageriedescimes.fr/ via metadataBase
  },
}

export default function HomePage() {
  return (
    <main className="home">
      <HeroVideo />

      <section id="about">
        <div className="container">
          <p>
            Installée au cœur d’Avoriaz, la Fromagerie des Cimes sélectionne
            pour vous le meilleur des alpages savoyards : Abondance, Reblochon,
            Tomme, Beaufort… Raclettes et fondues prêtes à partager, plateaux
            raffinés, charcuteries de montagne et cave locale. Passez en
            boutique ou commandez vos plateaux pour ce soir.
          </p>
        </div>
      </section>

      <section id="histoire">
        <div className="container">
          <div className="histoire__content">
            <h2>Notre histoire</h2>
            <p>
              Depuis plus de 35 ans, nous sélectionnons avec passion les
              meilleurs fromages de notre terroir et d&apos;ailleurs. Chaque
              fromage raconte une histoire, celle de son producteur, de son
              terroir et de son savoir-faire. Nous sommes fiers de vous les
              faire découvrir et de partager notre passion avec vous. Née de
              l’amour des fromages de montagne, nous travaillons en direct avec
              des producteurs et affineurs indépendants. Nous défendons une
              sélection courte, de saison et de caractère, affinée avec patience
              pour révéler la richesse de nos terroirs alpins.
            </p>
          </div>
          <div className="histoire__image">
            <Image
              src="/images/histoire-des-cimes.webp"
              alt="cuillère en bois contenant du fromage fondu"
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          </div>
        </div>
      </section>

      <SpecialtySection items={specialties} />

      <section id="boutique">
        <div className="container">
          <h2>La boutique</h2>
          <p>
            Un comptoir de fromages de Savoie et d’ailleurs, une belle sélection
            de charcuteries, une crèmerie gourmande, des bocaux, miels, crozets…
            et une cave pensée pour sublimer vos raclettes et fondues.
          </p>
          <div className="note">
            <p>🥐 En saison, dépôt quotidien de pain et de viennoiseries</p>
          </div>
          <div className="boutique__images">
            <div className="card">
              <Image
                src={'/images/fromagerie-des-cimes-boutique.webp'}
                alt="La fromagerie des Cimes: notre boutique au coeur d’Avoriaz"
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
              />
            </div>
            <div className="card">
              <Image
                src={'/images/fromagerie-des-cimes.webp'}
                alt="image1"
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
              />
            </div>
            <div className="card">
              <Image
                src={'/images/fromagerie-des-cimes-exterieur.webp'}
                alt="La fromagerie des Cimes, vue de l'extérieur"
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
              />
            </div>
            {/*             <div className='card-link'>
              <Link href="/contact">Nous rendre visite</Link>
            </div> */}
          </div>
          <BtnLink
            href="/contact"
            text="Nous rendre visite"
          />
        </div>
      </section>

      <FeaturesSection items={features} />

      <ReviewSection items={reviews} />
    </main>
  )
}
