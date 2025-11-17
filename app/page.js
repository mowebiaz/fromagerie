import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.svg'
import { FaqComponent } from '@/src/components/FaqComponent/FaqComponent'
import { FeaturesSection } from '@/src/components/FeaturesSection/FeaturesSection'
import { HeroVideo } from '@/src/components/HeroVideo/HeroVideo'
import { SpecialtySection } from '@/src/components/SpecialtySection/SpecialtySection'
import { faqHome } from '@/src/data/faq'
import { features } from '@/src/data/features'
import { reviews } from '@/src/data/reviews'
import { specialties } from '@/src/data/specialties'
import { svgToComponent } from '@/src/utils/svgToComponent'
import { ReviewSection } from '@/src/components/ReviewSection/ReviewSection'
import './page.scss'
import { BtnLink } from '@/src/components/BtnLink/BtnLink'

export default function HomePage() {
  //const Logo = svgToComponent(logo)

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
            boutique ou commandez vos plateaux pour ce soir. Bienvenue à La
            Petite Fromgerie, votre fromagerie artisanale de quartier. Depuis
            plus de 35 ans, nous sélectionnons avec passion les meilleurs
            fromages de notre terroir et d&apos;ailleurs. Chaque fromage raconte
            une histoire, celle de son producteur, de son terroir et de son
            savoir-faire. Nous sommes fiers de vous les faire découvrir et de
            partager notre passion avec vous.
          </p>
        </div>
      </section>

      <section id="histoire">
        <div className="container">
          <div className="histoire__content">
            <h2>Notre histoire</h2>
            <p>
              Née de l’amour des fromages de montagne, nous travaillons en
              direct avec des producteurs et affineurs indépendants. Nous
              défendons une sélection courte, de saison et de caractère, affinée
              avec patience pour révéler la richesse de nos terroirs alpins.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              dicta rerum suscipit cumque voluptatum consequuntur perferendis
            </p>
          </div>
          <div className="histoire__image">
            <Image
              src="/images/fromages.webp"
              alt="fromagerie des cimes: notre histoire"
              fill
              quality={100}
              /*               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw, 40vw"
              priority */
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
          <p>🥖 🥐 Dépôt de pain quotidien, en saison</p>
          <div className="boutique__images">
            <div className="card">
              <Image
                src={'/images/1.png'}
                alt="image1"
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            <div className="card">
              <Image
                src={'/images/2.png'}
                alt="image1"
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            <div className="card">
              <Image
                src={'/images/3.png'}
                alt="image1"
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            {/*             <div className='card-link'>
              <Link href="/contact">Nous rendre visite</Link>
            </div> */}
          </div>
          <BtnLink href="/contact" text="Nous rendre visite" />
        </div>
      </section>

      <FeaturesSection items={features} />

      <ReviewSection items={reviews} />

      <section>
        <div className="container">
          <FaqComponent
            className={'faq'}
            items={faqHome}
          />
          <p>
            FAQ (extraits) Proposez-vous des plateaux le jour même ? Oui, selon
            disponibilité. Pour être sûr(e), commandez la veille ou appelez-nous
            au
            {/* mettre un n° de tel */}
            xxxx. Prêt de caquelon / appareil à raclette ? Oui, sur demande
            (caution). Options végétariennes ? Nous proposons des plateaux sans
            charcuterie et plusieurs raclettes (nature, ail des ours, 3 poivres,
            chèvre).
          </p>
        </div>
      </section>
    </main>
  )
}
