import Link from 'next/link'

export const products = [
  {
    id: 'montagne',
    title: 'Fromages de montagne',
    description: (
      <>
        Idéals en <Link href={'plateaux'}>plateau</Link> ou pour la cuisine de
        montagne, ces fromages sont fermes à la coupe mais fondants en bouche.{' '}
        <Link href={'/raclettes'}>Raclettes</Link>, gratins,{' '}
        <Link href={'/fondues'}>fondues</Link>, croque-monsieur ou simple
        morceau de pain : ce sont les incontournables de vos repas en altitude.
        <br />
        Quelques exemples : Abondance, Beaufort, Tomme de Savoie, Reblochon,
        Gruyère, Emmental…
      </>
    ),
    accent: null,
    images: [
      { src: '/images/pate-pressee-1.webp', alt: 'Fromage à pâte pressée', width: 400, height:282 },
      {
        src: '/images/pate-pressee-3.webp',
        alt: 'meule de Savoie, fromage de montagne',
        width: 400,
        height: 300,
      },
    ],
  },
  {
    id: 'cremeux',
    title: 'Fromages crémeux et fondants',
    description: (
      <>
        Crémeux, fondants, parfois même un peu coulants… Ce sont les fromages
        qui aiment s’échapper de l’assiette. Croûtes fleuries ou lavées, arômes
        délicats ou plus puissants : parfaits sur un bon pain de campagne, en
        fin de repas ou pour un moment ultra-gourmand.
        <br />
        Exemples : Vacherin de Savoie, Brie, Camembert, Bleu du Vercors…
      </>
    ),
    accent: '❤️ Notre coup de coeur: Brie fourré aux truffes',
    images: [
      {
        src: '/images/brie.webp',
        alt: 'Brie fourré aux truffes, fromage crémeux',
        width: 400,
        height: 300,
      },
      { src: '/images/vacherin-de-savoie.webp', alt: 'vacherin de savoie', width: 397, height: 298 },
    ],
  },
  {
    id: 'fromages-chevre',
    title: 'Fromages de chèvre et de brebis',
    description: (
      <>
        Fraîcheur, notes lactiques et petites touches herbacées: du chèvre frais
        de saison aux fromages plus affinés, ils trouvent leur place aussi bien
        dans une salade que sur un plateau. En saison : frais, cendrés, bûches,
        tommettes…
        <br />
        Exemples : Chevrotin, Crottin de Chavignol, Sainte-Maure, Valençay,
        bûches cendrées, tommes de chèvre affinées.
      </>
    ),
    accent: '❤️ Notre Coup de cœur : chèvre à l’ail des ours',
    images: [
      { src: '/images/fromage-de-chevre.webp', alt: 'Fromage de chèvre', width: 626, height: 300 },
      { src: '/images/chevrotin-des-aravis.webp', alt: 'chevrotin des aravis', width: 400, height: 328 },
    ],
  },
]
