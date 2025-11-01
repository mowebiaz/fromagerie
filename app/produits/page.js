import { SubnavAnchors } from '@/src/components/SubnavAnchors/SubnavAnchors'
import './page.scss'

export default function ProduitsPage() {
  // Définition stable des sections (ordre constant => OK pour les refs)
  const items = [
    { id: 'fromages', label: 'Fromages' },
    { id: 'charcuterie', label: 'Charcuterie' },
    {
      id: 'epicerie',
      label: 'Épicerie & Cave',
    },
  ]

  return (
    <main>
      <SubnavAnchors items={items} />

      <section
        id="fromages"
        className="container"
      >
        <h1> blabla</h1>
        <h2>Nos fromages</h2>
        <p>
          Beaufort, Abondance, Tomme, Raclette nature/fumée/truffe, Comté,
          Morbier… voir nos fromages à raclette: lien voir nos fromages à
          fondue: lien
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi
          sunt repellat quia, exercitationem ex earum suscipit corporis a
          cupiditate rerum excepturi rem odit, officiis dolores, vero fugit
          illum magni. Consequuntur, sit cupiditate enim labore a ipsa
          laboriosam praesentium voluptates nemo nisi provident voluptatum
          maiores molestiae consectetur soluta veritatis laudantium impedit
          accusantium. Rem recusandae iure provident minus, aspernatur fugit
          cum! Fugiat error alias dolores temporibus quibusdam, quis porro eaque
          nesciunt nam cum laudantium dolorum autem, tenetur facere! Nulla
          accusamus quae, eaque quidem cumque aspernatur est sint, nam debitis
          nemo sit. Minima, voluptas aliquid obcaecati tempora rerum in numquam
          cum, blanditiis voluptates doloremque libero quibusdam atque delectus
          iusto laboriosam illo alias maiores. Ipsa officiis omnis minima.
          Tempore repudiandae commodi nesciunt inventore! Numquam consequuntur
          quod doloremque maxime corporis facilis. Odit rem error animi eum quis
          quibusdam labore consequatur vero. Corrupti, reprehenderit laboriosam
          quaerat, neque repudiandae, necessitatibus aliquid soluta mollitia
          quam molestias id! Nemo cupiditate autem non dicta rem soluta optio
          explicabo repudiandae tenetur commodi. Reiciendis atque, blanditiis
          animi consequatur doloremque ex nulla quaerat minus non corporis
          dolorum ratione sapiente voluptatibus, quod voluptatum. Iusto qui
          omnis exercitationem ipsam delectus saepe reprehenderit inventore hic
          dolore itaque quis, cumque perspiciatis cupiditate placeat quas
          eveniet magni. Totam, ab consequuntur perferendis autem repudiandae
          assumenda et cupiditate blanditiis. Eum repellat ad doloremque modi
          earum qui praesentium tenetur voluptas tempore nesciunt, perspiciatis
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi
          sunt repellat quia, exercitationem ex earum suscipit corporis a
          cupiditate rerum excepturi rem odit, officiis dolores, vero fugit
          illum magni. Consequuntur, sit cupiditate enim labore a ipsa
          laboriosam praesentium voluptates nemo nisi provident voluptatum
          maiores molestiae consectetur soluta veritatis laudantium impedit
          accusantium. Rem recusandae iure provident minus, aspernatur fugit
          cum! Fugiat error alias dolores temporibus quibusdam, quis porro eaque
          nesciunt nam cum laudantium dolorum autem, tenetur facere! Nulla
          accusamus quae, eaque quidem cumque aspernatur est sint, nam debitis
          nemo sit. Minima, voluptas aliquid obcaecati tempora rerum in numquam
          cum, blanditiis voluptates doloremque libero quibusdam atque delectus
          iusto laboriosam illo alias maiores. Ipsa officiis omnis minima.
          Tempore repudiandae commodi nesciunt inventore! Numquam consequuntur
          quod doloremque maxime corporis facilis. Odit rem error animi eum quis
          quibusdam labore consequatur vero. Corrupti, reprehenderit laboriosam
          quaerat, neque repudiandae, necessitatibus aliquid soluta mollitia
          quam molestias id! Nemo cupiditate autem non dicta rem soluta optio
          explicabo repudiandae tenetur commodi. Reiciendis atque, blanditiis
          animi consequatur doloremque ex nulla quaerat minus non corporis
          dolorum ratione sapiente voluptatibus, quod voluptatum. Iusto qui
          omnis exercitationem ipsam delectus saepe reprehenderit inventore hic
          dolore itaque quis, cumque perspiciatis cupiditate placeat quas
          eveniet magni. Totam, ab consequuntur perferendis autem repudiandae
          assumenda et cupiditate blanditiis. Eum repellat ad doloremque modi
          earum qui praesentium tenetur voluptas tempore nesciunt, perspiciatis
        </p>
      </section>

      <section
        id="charcuterie"
        className="container"
      >
        <h2>Charcuterie & saucissons</h2>
        <p>
          Jambon cru de Savoie, viande des Grisons, coppa, pancetta, rosette,
          saucissons…
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam
          voluptatibus, modi dicta vitae aspernatur maiores voluptate similique
          ipsa quam qui, rem illo expedita quibusdam ipsam culpa consectetur
          possimus. Consequuntur. Ratione distinctio, officia sapiente quae
          saepe aperiam impedit eveniet adipisci quia hic laudantium temporibus!
          Maiores ipsa, labore porro vitae veniam illo earum consequatur? Earum
          dolor incidunt quaerat omnis accusantium voluptates. Ab quasi
          asperiores amet vel nisi placeat in eius cum dignissimos. Eius
          voluptatibus commodi exercitationem nemo ab? Labore debitis vel
          repudiandae porro ipsa, eveniet odit veritatis in? Iusto, laboriosam
          nisi. Hic, quo nobis ullam itaque magni officia facilis optio quos
          doloremque quasi. Modi cupiditate, impedit iste provident ducimus
          dignissimos excepturi, obcaecati, perferendis fugit aut eos vero
          corporis nulla voluptate earum. Eius amet, corrupti sint at omnis, rem
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi
          sunt repellat quia, exercitationem ex earum suscipit corporis a
          cupiditate rerum excepturi rem odit, officiis dolores, vero fugit
          illum magni. Consequuntur, sit cupiditate enim labore a ipsa
          laboriosam praesentium voluptates nemo nisi provident voluptatum
          maiores molestiae consectetur soluta veritatis laudantium impedit
          accusantium. Rem recusandae iure provident minus, aspernatur fugit
          cum! Fugiat error alias dolores temporibus quibusdam, quis porro eaque
          nesciunt nam cum laudantium dolorum autem, tenetur facere! Nulla
          accusamus quae, eaque quidem cumque aspernatur est sint, nam debitis
          nemo sit. Minima, voluptas aliquid obcaecati tempora rerum in numquam
          cum, blanditiis voluptates doloremque libero quibusdam atque delectus
          iusto laboriosam illo alias maiores. Ipsa officiis omnis minima.
          Tempore repudiandae commodi nesciunt inventore! Numquam consequuntur
          quod doloremque maxime corporis facilis. Odit rem error animi eum quis
          quibusdam labore consequatur vero. Corrupti, reprehenderit laboriosam
          quaerat, neque repudiandae, necessitatibus aliquid soluta mollitia
          quam molestias id! Nemo cupiditate autem non dicta rem soluta optio
          explicabo repudiandae tenetur commodi. Reiciendis atque, blanditiis
          animi consequatur doloremque ex nulla quaerat minus non corporis
          dolorum ratione sapiente voluptatibus, quod voluptatum. Iusto qui
          omnis exercitationem ipsam delectus saepe reprehenderit inventore hic
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi
          sunt repellat quia, exercitationem ex earum suscipit corporis a
          cupiditate rerum excepturi rem odit, officiis dolores, vero fugit
          illum magni. Consequuntur, sit cupiditate enim labore a ipsa
          laboriosam praesentium voluptates nemo nisi provident voluptatum
          maiores molestiae consectetur soluta veritatis laudantium impedit
          accusantium. Rem recusandae iure provident minus, aspernatur fugit
          cum! Fugiat error alias dolores temporibus quibusdam, quis porro eaque
          nesciunt nam cum laudantium dolorum autem, tenetur facere! Nulla
          accusamus quae, eaque quidem cumque aspernatur est sint, nam debitis
          nemo sit. Minima, voluptas aliquid obcaecati tempora rerum in numquam
          cum, blanditiis voluptates doloremque libero quibusdam atque delectus
          iusto laboriosam illo alias maiores. Ipsa officiis omnis minima.
          Tempore repudiandae commodi nesciunt inventore! Numquam consequuntur
          quod doloremque maxime corporis facilis. Odit rem error animi eum quis
          quibusdam labore consequatur vero. Corrupti, reprehenderit laboriosam
          quaerat, neque repudiandae, necessitatibus aliquid soluta mollitia
          quam molestias id! Nemo cupiditate autem non dicta rem soluta optio
          explicabo repudiandae tenetur commodi. Reiciendis atque, blanditiis
          animi consequatur doloremque ex nulla quaerat minus non corporis
          dolorum ratione sapiente voluptatibus, quod voluptatum. Iusto qui
          omnis exercitationem ipsam delectus saepe reprehenderit inventore hic
          dolore itaque quis, cumque perspiciatis cupiditate placeat quas
          eveniet magni. Totam, ab consequuntur perferendis autem repudiandae
          assumenda et cupiditate blanditiis. Eum repellat ad doloremque modi
          earum qui praesentium tenetur voluptas tempore nesciunt, perspiciatis
        </p>
      </section>

      <section
        id="epicerie"
        className="container"
      >
        <h2>Épicerie fine & Cave</h2>
        <p>
          Pickles, confits, miels, confitures, vins de Savoie, bières locales,
          génépi…
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam
          voluptatibus, modi dicta vitae aspernatur maiores voluptate similique
          ipsa quam qui, rem illo expedita quibusdam ipsam culpa consectetur
          possimus. Consequuntur. Ratione distinctio, officia sapiente quae
          saepe aperiam impedit eveniet adipisci quia hic laudantium temporibus!
          Maiores ipsa, labore porro vitae veniam illo earum consequatur? Earum
          dolor incidunt quaerat omnis accusantium voluptates. Ab quasi
          asperiores amet vel nisi placeat in eius cum dignissimos. Eius
          voluptatibus commodi exercitationem nemo ab? Labore debitis vel
          repudiandae porro ipsa, eveniet odit veritatis in? Iusto, laboriosam
          nisi. Hic, quo nobis ullam itaque magni officia facilis optio quos
          doloremque quasi. Modi cupiditate, impedit iste provident ducimus
          dignissimos excepturi, obcaecati, perferendis fugit aut eos vero
          corporis nulla voluptate earum. Eius amet, corrupti sint at omnis, rem
          facere cum quibusdam perspiciatis dolor ducimus ex sapiente deleniti
          dignissimos asperiores quo! Ullam placeat quam eveniet culpa eligendi
          dolorum. Maiores iusto assumenda illum! Libero molestiae nisi,
          nesciunt saepe qui perferendis vitae similique debitis provident
          cumque illo ipsum non natus quod porro sed, omnis totam! Facere
          quibusdam recusandae dolorem, amet culpa iusto! Voluptatem, porro?
          Explicabo voluptatem sapiente necessitatibus error dolor tempora, a
          veniam et consequuntur temporibus excepturi quos recusandae voluptate
          aspernatur possimus fuga, magnam facilis qui nam nobis repudiandae.
          Cumque cupiditate deleniti quod dignissimos. Sed molestiae aspernatur
          sunt id cumque laborum maxime fuga fugit, labore laudantium quos nulla
          animi! Tempora esse aspernatur neque id vitae maiores necessitatibus
          quas repellat totam placeat deleniti, explicabo maxime. Quod ad
          obcaecati culpa numquam nobis hic sint facere fugit, modi blanditiis
          sapiente qui temporibus maxime, cumque labore debitis. Hic
          necessitatibus ipsa nihil, saepe obcaecati voluptates tenetur eaque
          odio rem. Soluta molestias debitis dignissimos assumenda tempora,
          corrupti placeat commodi omnis voluptatum natus quod, non consectetur
          fugit repellat? Ipsum aperiam aliquam molestias dignissimos quis culpa
          magni sunt impedit. Molestiae, officia quaerat. Unde, libero beatae
          saepe odio quaerat autem voluptatum ratione praesentium veniam, eos
          perspiciatis nulla obcaecati sint ipsa vitae dolorum eligendi ex hic
          iusto dolorem ipsum soluta? Officiis facilis soluta iusto. Asperiores
          nisi harum enim explicabo iste quos numquam id. Aut modi eius nulla at
          velit sint. Facilis, obcaecati ipsa impedit velit possimus nulla
          cupiditate? Nulla suscipit corrupti odio quos sint! Molestiae quae
          fuga aliquam. Alias aperiam saepe temporibus magnam animi ducimus
          laboriosam inventore, odio unde expedita quod, fuga cumque totam rem
          eius eaque non at exercitationem blanditiis quasi nostrum. Nostrum.
          Accusantium neque omnis praesentium vel veritatis quas aliquid
          delectus quisquam ipsum impedit dolorem, facilis doloremque non hic
          qui iusto dolore autem officia culpa? Soluta dicta consequatur
          obcaecati? Quos, deleniti saepe! Similique earum deleniti harum
          quaerat reiciendis! Eos, cum nisi dolore nulla laborum fugit quos
          rerum explicabo amet sed qui ex autem itaque voluptate facere minima?
          Debitis vel quis ad quam? Nobis sit unde odit fugit molestias magni
          perspiciatis officiis in veritatis, amet perferendis sed quaerat
          facilis mollitia laudantium corporis nostrum pariatur sint est, minima
          ducimus quos exercitationem! Ex, sint dolorem! Modi quibusdam
          veritatis laudantium, reiciendis, officia voluptate eos voluptates
          consequatur temporibus, eum aliquid! Inventore voluptas, molestias
          repudiandae laudantium autem, placeat accusantium tenetur, veritatis
          deleniti delectus corporis ratione omnis perferendis tempore! Suscipit
          sed, animi facere natus eveniet nostrum quo quisquam laudantium, eum
          perferendis fugiat sapiente earum iste saepe perspiciatis consequuntur
          ea iure sit corrupti possimus ad ducimus distinctio. Exercitationem,
          sit explicabo? Iste excepturi iusto, deserunt dolorem deleniti
          recusandae vero ipsa fugit dolorum quod nam maxime exercitationem
          cumque. Nesciunt quam ipsum fugit, qui rerum odio tempore? Esse quis
          earum animi ratione perferendis. Molestias autem eos cum enim error
          culpa omnis, id laboriosam qui impedit? Quos vero beatae, similique
          sapiente ratione, suscipit, sint sequi animi nisi culpa pariatur eaque
          repellat velit in! Illum! Quae nobis voluptatibus magni odit illo
          fugit ea officiis velit at atque. Nulla asperiores voluptas cumque
          numquam magni rerum voluptatum ullam provident. Commodi architecto
          amet sed et? Quis, in aliquid. Nihil cumque animi corporis quo enim
          consectetur eligendi esse iusto necessitatibus vitae saepe id
          laudantium molestias sequi ad harum ea et, odit adipisci, fugit nemo
          repudiandae illum quas? Voluptatum, et. Impedit consectetur sequi
          ratione, ut quas quam quidem voluptatem placeat, at delectus amet
          harum cum voluptas debitis magnam cumque, aliquid veniam perspiciatis
          quia error ducimus sit dolorem minus animi? In. Incidunt inventore
          vero officiis, consequuntur maiores quidem quaerat quisquam amet
          adipisci? Aliquam cupiditate, dolor, voluptatibus voluptatum quasi id
          maiores quia adipisci, ipsum commodi saepe quae suscipit placeat.
          Eaque, odio ipsa. Provident, neque quae odio id debitis molestiae
          quasi eaque autem, impedit nam fuga voluptates atque. Quod, natus
          rerum illo obcaecati cumque deleniti cum quaerat ratione, unde ipsum
          aspernatur nisi tenetur. Nulla vel labore quas? Perferendis mollitia
          nobis in quibusdam dicta praesentium earum quas unde ducimus! Vero
          minima, hic, eveniet quasi non quia totam reiciendis, corporis
          deleniti quibusdam omnis praesentium ab! Modi officia distinctio error
          neque excepturi voluptate culpa suscipit a obcaecati et sed vero
          officiis, fugiat inventore soluta ea, enim quod, ab dolores. Impedit
          quia, eveniet libero praesentium fuga officia! Ab voluptatem dolorem
          velit sit molestiae asperiores, maiores quis dolorum minus? Rem id
          vitae provident quia consequatur repellendus odit repellat,
          consequuntur magni soluta omnis? Impedit unde minima velit ut iusto.
          Voluptatibus, voluptatum. Ab eum soluta laudantium quas dolor impedit,
          iusto blanditiis quisquam unde repellendus iste nostrum. Id fugit
          porro minus obcaecati? Odio similique, quod provident eum aut
          voluptatum vitae culpa. Reiciendis a voluptatum rerum dicta voluptas
          similique eaque velit error veritatis vitae culpa reprehenderit,
          excepturi quas porro corporis hic est quibusdam temporibus optio
          alias. Repellat omnis dolor fuga. Cupiditate, illum. Animi molestias
          vitae ipsa enim sint rerum, libero sapiente corrupti error eveniet,
          quidem reprehenderit qui dolorem suscipit expedita atque. Ipsum fuga
          soluta sit nobis qui et omnis voluptas corporis deserunt. Voluptates
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi
          sunt repellat quia, exercitationem ex earum suscipit corporis a
          cupiditate rerum excepturi rem odit, officiis dolores, vero fugit
          illum magni. Consequuntur, sit cupiditate enim labore a ipsa
          laboriosam praesentium voluptates nemo nisi provident voluptatum
          maiores molestiae consectetur soluta veritatis laudantium impedit
          accusantium. Rem recusandae iure provident minus, aspernatur fugit
          cum! Fugiat error alias dolores temporibus quibusdam, quis porro eaque
          nesciunt nam cum laudantium dolorum autem, tenetur facere! Nulla
          accusamus quae, eaque quidem cumque aspernatur est sint, nam debitis
          nemo sit. Minima, voluptas aliquid obcaecati tempora rerum in numquam
          cum, blanditiis voluptates doloremque libero quibusdam atque delectus
          iusto laboriosam illo alias maiores. Ipsa officiis omnis minima.
          Tempore repudiandae commodi nesciunt inventore! Numquam consequuntur
          quod doloremque maxime corporis facilis. Odit rem error animi eum quis
          quibusdam labore consequatur vero. Corrupti, reprehenderit laboriosam
          quaerat, neque repudiandae, necessitatibus aliquid soluta mollitia
          quam molestias id! Nemo cupiditate autem non dicta rem soluta optio
          explicabo repudiandae tenetur commodi. Reiciendis atque, blanditiis
          animi consequatur doloremque ex nulla quaerat minus non corporis
          dolorum ratione sapiente voluptatibus, quod voluptatum. Iusto qui
          omnis exercitationem ipsam delectus saepe reprehenderit inventore hic
          dolore itaque quis, cumque perspiciatis cupiditate placeat quas
          eveniet magni. Totam, ab consequuntur perferendis autem repudiandae
          assumenda et cupiditate blanditiis. Eum repellat ad doloremque modi
          earum qui praesentium tenetur voluptas tempore nesciunt, perspiciatis
        </p>
      </section>
    </main>
  )
}
