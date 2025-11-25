import { FormulaCard } from "@/src/components/FormulaCard/FormulaCard";
import './fondues.scss'

export default function FonduesPage() {
  return (
    <main>
      <h1>Fondue savoyarde : nos mélanges prêts à fondre</h1>
      <div className="container">
        <p>
          Nos fondues sont assemblées avec des fromages locaux : Beaufort,
          Abondance et Emmental (ou Gruyère de Savoie) selon la saison et le
          profil souhaité. Mélanges équilibrés, prêts à l’emploi. Nous
          fournissons pain, ail, vin et conseils.
        </p>
      </div>

      <section id="formules-fondues">
        <div className="container">
          <h2>Nos formules</h2>
          <div className="formules">
            <FormulaCard title="la Classique" price={10}>
              <p>Beaufort / Abondance / Emmental</p>
            </FormulaCard>
            <FormulaCard title="la Savoyarde" price={10}>
              <p>Beaufort / Abondance / Emmental</p>
            </FormulaCard>
            <FormulaCard title="la Suisse" price={10}>
              <p>Beaufort / Abondance / Emmental</p>
            </FormulaCard>
            <FormulaCard title="l'Avoriazienne" price={10}>
              <p>Beaufort / Abondance / Emmental</p>
            </FormulaCard>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Conseils de préparation</h2>
          <p>
            200–250 g de fromage, 10–12 cl de vin blanc sec, ½ gousse d’ail,
            pain rustique. Astuce : une pointe de muscade en fin de préparation.
          </p>
        </div>
      </section>
      <p>CTA : “Commander une fondue” → /contact</p>
    </main>
  )
}
