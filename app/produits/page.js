import { SubnavAnchors } from '@/src/components/SubnavAnchors/SubnavAnchors'
import './produits.scss'
import Image from 'next/image'
import { ProductContainer } from '@/src/components/ProductContainer/ProductContainer'
import { products } from '@/src/data/products'

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
              Goûtez des saisons authentiques.
            </p>

            {products.map((product) => (
              <ProductContainer
                key={product.id}
                title={product.title}
                description={product.description}
                accent={product.accent}
                images={product.images}
              />
            ))}

            <p>
              CTA : “Voir nos raclettes” → /raclette | “Voir nos fondues” →
              /fondue | “Commander un plateau” → /plateaux#commander
            </p>
          </div>
        </section>

        <section id="charcuterie">
          <div className="container">
            <h2>Charcuterie & saucissons de montagne</h2>
            <div className="content-with-image">
              <p>
                La charcuterie est la complice idéale de nos fromages de Savoie.
                Jambon cru, viande des Grisons, coppa, pancetta, rosette, sans
                oublier nos saucissons nature, aux noix, au Beaufort, au poivre
                ou aux herbes… De la planche apéro au sandwich pour le ski ou la
                rando, en passant par la raclette et la fondue, vous trouverez
                toujours de quoi composer un assortiment généreux, gourmand et
                bien montagnard. Jambon cru de Savoie, viande des Grisons,
                coppa, pancetta, rosette. saucissons… Saucissons : nature, noix,
                Beaufort, poivre, herbes.
              </p>

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
          </div>
        </section>

        <section id="epicerie">
          <div className="container">
            <h2>Épicerie fine & Cave</h2>
            <p>
{/*               Crèmerie (beurre, lait), miels, cornichons, bocaux de spécialités,
              crozets. Cave : génépi, bières locales, vins blancs pour
              raclette/fondue. Dépôt de pain quotidien (en saison). Pickles,
              confits, miels, confitures, vins de Savoie, bières locales,
              génépi…  */}
              Dans notre boutique, la découverte continue au‑delà du
              fromage : crèmerie, épicerie fine et petite cave se complètent
              pour un panier 100 % montagne. Beurre, lait et autres produits
              laitiers de qualité, miels, confits, pickles et bocaux de
              spécialités rythment vos envies du quotidien ou vos apéros. Vous y
              trouverez aussi des incontournables locaux comme les crozets,
              petite pâte savoyarde typique, parfaite en accompagnement d’un
              plat montagnard. Côté cave, une sélection pensée pour sublimer nos
              fromages : vins de Savoie, blancs pour raclette ou fondue, bières
              locales et génépi, avec en saison un dépôt de pain quotidien pour
              partir avec tout le nécessaire d’un repas convivial. Tout est
              choisi avec la même exigence que nos fromages, pour que chaque
              visite soit l’occasion de composer un assortiment gourmand,
              pratique et authentique.
            </p>

          </div>
        </section>
      </main>
    </>
  )
}
