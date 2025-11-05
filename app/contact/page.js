import { MapContainer } from '@/src/components/LeafletMap/MapContainer'

export default function ContactPage() {
  return (
    <main>
      <h1>Nous contacter</h1>
      <h2>Coordonnées</h2>
      <p>
        Tél, E-mail, Adresse 74110 Avoriaz Horaires, heures d&apos;ouverture (en
        saison)
      </p>
      <h2>Nous trouver</h2>
      Boutique au cœur de la station (proche de xxxx). Accès piéton. En saison
      hivernale : prévoir délai pour retrait en fin de journée.
      <MapContainer />
      <h2>Nous écrire</h2>
      <p>
        formulaire de contact: Nom, e-mail, téléphone, sujet, message,
        date/heure souhaitées (plateaux), allergies/préférences. Mentions :
        délai de réponse, données personnelles.
      </p>
    </main>
  )
}
