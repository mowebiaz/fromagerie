'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'

export default function Map() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    if (mapRef.current) return // évite un double init en StrictMode

    const map = L.map(containerRef.current, {
      center: [45.19425, 5.73618], // coordonnées de Paris
      zoom: 15,
      //maxZoom: 20,
      scrollWheelZoom: false,
      //detectRetina: true,
    })

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: './leaflet/marker-icon-2x.png',
      iconUrl: './leaflet/marker-icon.png',
      shadowUrl: './leaflet/marker-shadow.png',
    })

    L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
        zoom: 20,
        //maxZoom: 20,
        detectRetina: true,
      }
    ).addTo(map)

    const marker = L.marker([45.19425, 5.73618]).addTo(map)
    marker.bindPopup('🧀 Nous sommes ici !').openPopup()

    mapRef.current = map

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id="map"
    />
  )
}
