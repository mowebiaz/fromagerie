import Link from "next/link";
import './not-found.scss'

export default function NotFound() {
  return (
    <main id="not-found">
      <h1>404</h1>
      <h2>Oups… ce fromage est introuvable 🧀</h2>
      <p>La page que vous cherchez a peut-être fini en raclette, en fondue… ou n’a jamais existé.</p>
      <p>Retourner à l&apos;<Link href="/" className="link">accueil</Link></p>
    </main>

  )
}