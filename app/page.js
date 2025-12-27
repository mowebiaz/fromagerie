import { HeroVideo } from '@/src/components/HeroVideo/HeroVideo'
import { HomeContent } from '@/src/components/HomeContent/HomeContent'
import './page.scss'

export const metadata = {
  openGraph: {
    url: '/', // devient https://fromageriedescimes.fr/ via metadataBase
    images: [
      {
        url: '/images/og/fromagerie-des-cimes.jpg',
        width: 1200,
        height: 630,
        alt: 'Plateau de fromages et charcuteries à Avoriaz',
      },
    ],
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
