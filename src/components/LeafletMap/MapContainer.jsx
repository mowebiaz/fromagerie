'use client'

import dynamic from 'next/dynamic'
import './Map.scss'

const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <p>Chargement de la carte…</p>,
})

export function MapContainer() {
  return (
    <div className="map-container">
      <DynamicMap />
    </div>
  )
}
