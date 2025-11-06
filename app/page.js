import { svgToComponent } from '@/src/utils/svgToComponent'
import logo from '@/public/logo.svg'
import { HeroVideo } from '@/src/components/HeroVideo/HeroVideo'
import './page.scss'
import { FaqComponent } from '@/src/components/FaqComponent/FaqComponent'


const faqHome = [
  {
    id: '1',
    title: 'Proposez-vous des plateaux pour le jour même ?',
    content: 'Oui, selon disponibilité. Pour être sûr(e), commandez la veille ou appelez-nous au 04 00 00 00 00',
  }, {
    id: '2',
title: "Prêtez-vous le capequelon / appareil à raclette ?",
content: "Oui, sur demande (caution)",
  }]

export default function HomePage() {
  const Logo = svgToComponent(logo)

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

      <section>
        <div className="container">
          <h2>Notre histoire</h2>
          <p>
            Née de l’amour des fromages de montagne, nous travaillons en direct
            avec des producteurs et affineurs indépendants. Nous défendons une
            sélection courte, de saison et de caractère, affinée avec patience
            pour révéler la richesse de nos terroirs alpins.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>La boutique</h2>
          <p>
            Un comptoir de fromages de Savoie et d’ailleurs, une belle sélection
            de charcuteries, une crèmerie gourmande, des bocaux, miels, crozets…
            et une cave pensée pour sublimer vos raclettes et fondues. Dépôt de
            pain quotidien en hiver. CTA : “Voir nos produits” → /produits
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Nos spécialités</h2>
          <p>
            Raclettes : nature, fumée, ail des ours, 3 poivres, chèvre… →
            /raclette Fondues : recettes maison (Beaufort, Abondance, Emmental…)
            → /fondue Plateaux : apéro, dînatoire, sur-mesure → /plateaux CTA
            secondaire : “Commander un plateau” → /plateaux#commander
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Pourquoi nous choisir ?</h2>
          Sélection locale & de saison Affinage exigeant Conseils d’accords & de
          préparation Service plateau sur-mesure (retrait en boutique) Ouvert
          7/7 en saison
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Avis clients: ce qu&apos;ils disent de nous</h2>
          <p>3–5 avis courts authentiques.</p>
          <p>
            « Fromages d’une qualité exceptionnelle et service chaleureux. La
            Fromagerie des Cimes est un incontournable à Avoriaz ! » – Claire M.
          </p>
          <p>
            « J’ai commandé une raclette et un fondue au Fromagerie des Cimes et
            je suis vraiment impressionnée ! La qualité des produits est
            excellente, et le service client est au top. » – Julien D.
          </p>
          <p>
            « La sélection de fromages est incroyable, et les conseils du
            personnel m’ont vraiment aidé à choisir le plateau parfait pour ma
            soirée. Je recommande vivement ! » – Sophie L.
          </p>
          <p>
            « Un vrai délice ! Les fromages sont savoureux et authentiques. La
            Fromagerie des Cimes est devenue ma destination préférée pour tout
            ce qui concerne le fromage à Avoriaz. » – Marc T.
          </p>
          <p>
            « Excellente expérience du début à la fin. La qualité des produits
            et le service client sont irréprochables. Je reviendrai certainement
            ! » – Emma R.
          </p>
          <p>
            « La Fromagerie des Cimes est un véritable joyau à Avoriaz. Leurs
            fromages sont d’une qualité exceptionnelle, et le personnel est
            toujours accueillant et serviable. » – Antoine S.
          </p>
          <p>
            « La Fromagerie des Cimes offre une expérience fromagère inégalée à
            Avoriaz. Leurs produits sont d’une qualité exceptionnelle, et le
            personnel est toujours prêt à partager ses connaissances et à offrir
            des conseils personnalisés. » – Lucas P.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <FaqComponent className={'faq'} items={faqHome}/>
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
