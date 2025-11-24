import Image from 'next/image'
import { FormulaCard } from '@/src/components/FormulaCard/FormulaCard'
import './raclettes.scss'

export default function RaclettesPage() {
  return (
    <main className="raclettes">
      <h1>La raclette, star de l’hiver</h1>
      <div className="container">
        <p>
          À deux pas de la Suisse, Avoriaz est un terrain de jeu idéal pour une
          raclette réussie. A la Fromagerie des Cimes, nous proposons plusieurs
          profils : nature, fumée, ail des ours, 3 poivres, chèvre… et tout
          l’accompagnement : pommes de terre, charcuteries, cornichons, pain,
          vins blancs de montagne.
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
              alt="fromagerie des cimes: notre histoire"
              fill
              quality={100}
              /*               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw, 40vw"
              priority */
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
              <p className='info'>(250g de fromage, 150g de charcuterie environ pp)</p>
            </FormulaCard>

            <FormulaCard price="11">
              <ul>
                <li>fromage nature</li>
                <li>charcuterie</li>
              </ul>
              < p className='info'>(250g de fromage, 150g de charcuterie environ pp)</p>
            </FormulaCard>

            <FormulaCard price="8,50">
              <ul>
                <li>4 parfums de fromage</li>
                <li>sans charcuterie</li>
              </ul>
              <p className='info'>(250g de fromage environ pp)</p>
            </FormulaCard>

            <FormulaCard price="5,50">
              <ul>
                <li>fromage nature</li>
                <li>sans charcuterie</li>
              </ul>
              <p className='info'>(250g de fromage environ pp)</p>
            </FormulaCard>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Le saviez-vous ?</h2>
          <p>
            La Raclette de Savoie bénéficie d’une IGP depuis 2017. Elle est
            élaborée et affinée sur une aire délimitée en Savoie et
            Haute-Savoie, avec des laits principalement issus des races
            Abondance, Montbéliarde et Tarentaise.
          </p>
        </div>
      </section>

      <p>CTA : “Je commande ma raclette” → /contact ou ancre de commande.</p>
      <p>
        FAQ (extraits) Quelle quantité prévoir ? Comptez 200–250 g de fromage
        par personne. Proposez-vous une option sans porc ? Oui, alternative
        charcuterie de bœuf/volaille ou plateau végétarien. Peut-on mixer
        plusieurs parfums ? Bien sûr, au choix selon disponibilité.
      </p>
    </main>
  )
}
