import Image from 'next/image'
import './plateaux.scss'
import { FormulaCard } from '@/src/components/FormulaCard/FormulaCard'

export default function PlateauxPage() {
  return (
    <main>
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
              <p>2-4 pers</p>
              <p>sélection de 4 fromages, charcuteries fines, fruits secs</p>
            </FormulaCard>

            <FormulaCard
              price="25"
              title="Convivial"
            >
              <p>4-6 pers</p>
              <p>
                sélection de 5-6 fromages, charcuteries de montagne, condiments
              </p>
            </FormulaCard>

            <FormulaCard
              price="40"
              title="Gourmand"
            >
              <p>6-8 pers</p>
              <p>
                sélection de 7-8 fromages, grands affinages, charcuteries,
                confitures
              </p>
            </FormulaCard>

            <FormulaCard
              price="60"
              title="Sur mesure"
            >
              <p>8-12 pers</p>
              <p>thèmes (Savoie only, chèvres, truffe…), allergies, budget</p>
            </FormulaCard>
          </div>
        </div>
      </section>

      <h2>Commander (ancre #commander)</h2>
      <p>
        Commande la veille recommandée (en saison : le matin pour le soir selon
        dispo). Indiquez la date/heure de retrait, le nombre de personnes,
        préférences et allergies. CTA : “Demander un devis rapide” →
        /contact?type=plateau
      </p>
      <p>
        FAQ Proposez-vous des plateaux sans charcuterie ? Oui, version 100%
        fromages. Ajoutez-vous du pain ? Oui, dépôt quotidien. Prêts pour la
        raclette/fondue ? Nous préparons aussi portions & accompagnements.
      </p>
    </main>
  )
}
