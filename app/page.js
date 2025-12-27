import { HeroVideo } from '@/src/components/HeroVideo/HeroVideo'
import { HomeContent } from '@/src/components/HomeContent/HomeContent'
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
      <HomeContent />
    </main>
  )
}
