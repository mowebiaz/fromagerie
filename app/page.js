import { svgToComponent } from '@/src/utils/svgToComponent'
import logo from '@/public/logo.svg'
import { HeroVideo } from '@/src/components/HeroVideo/HeroVideo'
import './page.scss'

export default function Home() {
  const Logo = svgToComponent(logo)

  return (
    <main className="home">
      <HeroVideo />

      <section id="about">
        <div className="container">
          <h2>Qui sommes-nous</h2>
          <Logo
            width={120}
            height={120}
            alt="Logo La Belle Fromagerie"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            voluptatibus quos aut distinctio quasi totam sed cupiditate
            doloribus deleniti esse aspernatur exercitationem, temporibus,
            adipisci dolore repellat iste error quod commodi? Quae, modi
            accusamus laudantium quod illo necessitatibus labore, distinctio
            atque iste provident reprehenderit, odit nulla. Beatae ipsa
            voluptatum consectetur ab nobis iure fugit molestiae inventore quod
            fugiat, corporis qui temporibus? Consequatur, voluptatum ipsum ipsam
            cumque, numquam iure asperiores veritatis eligendi odit soluta quasi
            eaque laboriosam omnis ut provident deleniti? Repellat quis,
            perferendis est pariatur praesentium culpa commodi libero eos
            quaerat! Quos illo culpa recusandae doloremque, vitae eaque unde
            enim sint quas non laborum laboriosam. Tempore animi laborum
            voluptate nihil exercitationem aperiam, necessitatibus iste ex,
            asperiores ut iusto voluptatibus optio cumque? Excepturi tempore
            soluta quisquam. Dolore, assumenda praesentium.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2> blabla</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            voluptatibus quos aut distinctio quasi totam sed cupiditate
            doloribus deleniti esse aspernatur exercitationem, temporibus,
            adipisci dolore repellat iste error quod commodi? Quae, modi
            accusamus laudantium quod illo necessitatibus labore, distinctio
            atque iste provident reprehenderit, odit nulla. Beatae ipsa
            voluptatum consectetur ab nobis iure fugit molestiae inventore quod
            fugiat, corporis qui temporibus? Consequatur, voluptatum ipsum ipsam
            cumque, numquam iure asperiores veritatis eligendi odit soluta quasi
            eaque laboriosam omnis ut provident deleniti? Repellat quis,
            perferendis est pariatur praesentium culpa commodi libero eos
            quaerat! Quos illo culpa recusandae doloremque, vitae eaque unde
            enim sint quas non laborum laboriosam. Tempore animi laborum
            voluptate nihil exercitationem aperiam, necessitatibus iste ex,
            asperiores ut iusto voluptatibus optio cumque?
          </p>
        </div>
      </section>
    </main>
  )
}
