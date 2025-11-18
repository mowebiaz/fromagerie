import { SubnavAnchors } from '@/src/components/SubnavAnchors/SubnavAnchors'
import './produits.scss'

export default function ProduitsPage() {
  const items = [
    { id: 'fromages', label: 'Fromages' },
    { id: 'charcuterie', label: 'Charcuterie' },
    {
      id: 'epicerie',
      label: 'Épicerie & Cave',
    },
  ]

  return (
    <>
      <SubnavAnchors items={items} />
      <main className="produits">
        <section id="fromages">
          <div className="container">
            <h1>Nos produits</h1>
            <h2>Nos fromages d’exception</h2>
            <p>
              Sélectionnés chez des producteurs artisanaux et affineurs engagés.
              Goûtez des saisons authentiques.{' '}
            </p>
            <h3>Fromages à pâte molle</h3>
            <p>
              Crémeux et fondants, aux arômes délicats. Exemples : Brie,
              Camembert, Vacherin, Bleu du Vercors.
              <span>
                Astuce accord : pain de campagne, confiture de myrtilles.
              </span>
            </p>

            <h3>Fromages à pâte pressée</h3>
            <p>
              Fermes et savoureux, affinés avec soin. Exemples : Comté,
              Beaufort, Abondance, Reblochon, Morbier, Gruyère, Emmental, Tomme
              de Savoie.
              <span>
                Astuce : idéals en plateau ou pour la cuisine de montagne.
              </span>
            </p>

            <h3>Fromages de chèvre</h3>
            <p>
              Fraîcheur, nuances lactiques et herbacées. En saison : frais,
              cendrés, affinés..
              {/* à revoir */}
              Exemples : Crottin de Chavignol, Sainte-Maure, Valençay.
              <span>Coup de cœur : chèvre à l’ail des ours (printemps).</span>
            </p>
            <p>
              CTA : “Voir nos raclettes” → /raclette | “Voir nos fondues” →
              /fondue | “Commander un plateau” → /plateaux#commander
            </p>
          </div>
        </section>

        <section id="charcuterie">
          <div className="container">
            <h2>Charcuterie & saucissons de montagne</h2>
            <p>
              {/* à modifier */}
              Jambon cru de Savoie, viande des Grisons, coppa, pancetta,
              rosette. saucissons… Saucissons : nature, noix, Beaufort, poivre,
              herbes.
            </p>
          </div>
        </section>

        <section id="epicerie">
          <div className="container">
            <h2>Épicerie fine & Cave</h2>
            <p>
              Crèmerie (beurre, lait), miels, cornichons, bocaux de spécialités,
              crozets. Cave : génépi, bières locales, vins blancs pour
              raclette/fondue. Dépôt de pain quotidien (en saison). Pickles,
              confits, miels, confitures, vins de Savoie, bières locales,
              génépi…
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
