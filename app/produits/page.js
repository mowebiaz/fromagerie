import Image from 'next-export-optimize-images/image'
import { BtnLink } from '@/src/components/BtnLink/BtnLink'
import { FaqComponent } from '@/src/components/FaqComponent/FaqComponent'
import { JsonLd } from '@/src/components/JsonLd/JsonLd'
import { ProductContainer } from '@/src/components/ProductContainer/ProductContainer'
import { SubnavAnchors } from '@/src/components/SubnavAnchors/SubnavAnchors'
import { faqProduits } from '@/src/data/faq'
import { products } from '@/src/data/products'
import './produits.scss'

export const metadata = {
  title: 'Nos fromages, charcuteries et cave',
  description:
    "Fromages de Savoie et d'ailleurs (pâtes molles, pressées, chèvres fermiers), charcuteries de montagne, crèmerie, épicerie fine et cave à Avoriaz.",
  openGraph: {
    title: 'Nos produits – Fromagerie des Cimes (Avoriaz)',
    description:
      "Sélection de fromages de Savoie et d'ailleurs, charcuteries de montagne, crèmerie, épicerie fine et cave à Avoriaz.",
    url: '/produits',
    images: [
      {
        url: '/images/og/saucisson.jpg',
        width: 1200,
        height: 630,
        alt: 'Sélection de fromages et charcuteries à Avoriaz',
      },
    ],
  },
}

const productsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  url: 'https://morganeweb.com/services/creation-site-vitrine/fromagerie',
  name: 'Nos produits – Fromagerie des Cimes',
  '@id':
    'https://morganeweb.com/services/creation-site-vitrine/fromagerie#fromagerie',

  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Fromages à pâte molle',
      description:
        'Brie, camembert, vacherin, bleu du Vercors… Fromages crémeux et fondants aux arômes délicats.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Fromages à pâte pressée',
      description:
        'Comté, Beaufort, Abondance, Reblochon, Morbier, Gruyère, Emmental, Tomme de Savoie… Des fromages de caractère pour plateau ou cuisine de montagne.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Fromages de chèvre',
      description:
        'Chèvres frais, cendrés ou affinés, et spécialités de saison comme le chèvre à l’ail des ours.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Charcuteries de montagne',
      description:
        'Viande des Grisons, jambon de pays, rosette, coppa, saucissons nature, aux noix, au Beaufort, au poivre ou aux herbes.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Crèmerie & épicerie fine',
      description:
        'Beurre, lait, miels, cornichons, bocaux de spécialités, crozets, douceurs sucrées, dépôt de pain en saison.',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Cave',
      description:
        'Génépi, bières locales et vins blancs de Savoie pour accompagner raclettes, fondues et plateaux de fromages.',
    },
  ],
}

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
        <JsonLd schema={productsJsonLd} />

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
            <div className="cta">
              <BtnLink
                href="/raclettes"
                text="nos raclettes"
              />
              <BtnLink
                href="/fondues"
                text="nos fondues"
              />
            </div>
          </div>
        </section>

        <section id="charcuterie">
          <div className="container">
            <h2>Charcuterie & saucissons de montagne</h2>
            <div className="content-with-image">
              <div className="image">
                <Image
                  src="/images/saucisson.webp"
                  alt="de nombreux saucissons en présentation dans un panier d'osier"
                  fill
                  sizes="(max-width: 576px) 100vw, 50vw"
                />
              </div>
              <p>
                La charcuterie est la complice idéale de nos fromages de Savoie.
                Jambon cru de Savoie, viande des Grisons, coppa, pancetta,
                rosette, sans oublier nos saucissons nature, aux noix, au
                Beaufort, au poivre ou aux herbes… De la planche apéro au
                sandwich pour le ski ou la rando, en passant par la raclette et
                la fondue, vous trouverez toujours de quoi composer un
                assortiment généreux, gourmand et bien montagnard.
              </p>
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
              Dans notre boutique, la découverte continue au‑delà du fromage :
              crèmerie, épicerie fine et petite cave se complètent pour un
              panier 100 % montagne. Beurre, lait et autres produits laitiers de
              qualité, miels, confits, pickles et bocaux de spécialités rythment
              vos envies du quotidien ou vos apéros. Vous y trouverez aussi des
              incontournables locaux comme les crozets, petite pâte savoyarde
              typique, parfaite en accompagnement d’un plat montagnard. Côté
              cave, une sélection pensée pour sublimer nos fromages : vins de
              Savoie, blancs pour raclette ou fondue, bières locales et génépi,
              avec en saison un dépôt de pain quotidien pour partir avec tout le
              nécessaire d’un repas convivial. Tout est choisi avec la même
              exigence que nos fromages, pour que chaque visite soit l’occasion
              de composer un assortiment gourmand, pratique et authentique.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <FaqComponent
              className={'faq'}
              items={faqProduits}
            />
          </div>
        </section>
      </main>
    </>
  )
}
