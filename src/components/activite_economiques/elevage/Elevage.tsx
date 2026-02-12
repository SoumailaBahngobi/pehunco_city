
import cabane from '../../../assets/img/cabane.jpg'

const Elevage = () => {
  const livestock = [
    { name: 'Bovins', count: '~2,000+', purpose: 'Viande, lait, travail' },
    { name: 'Caprins', count: '~3,000+', purpose: 'Viande, lait' },
    { name: 'Ovins', count: '~2,500+', purpose: 'Viande, laine' },
    { name: 'Volailles', count: 'Milliers', purpose: 'Œufs, viande' },
  ]

  return (
    <div className="space-y-12">
      {/* Header avec Image de Fond */}
      <div 
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cabane})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="">
          <div>
            <h1 className="">🐄 Élevage</h1>
            <p className="">Une activité économique vitale</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="">Aperçu</h2>
            <p className="">
              L'élevage est une activité économique importante complémentaire à l'agriculture. 
              Les éleveurs de Pehunco élèvent divers types d'animaux pour la viande, le lait, 
              les œufs et autres produits dérivés. C'est une source importante de revenus et de nutrition.
            </p>
          </section>

          {/* Livestock Types */}
          <section className="space-y-4">
            <h2 className="">Cheptel Local</h2>
            <div className="">
              {livestock.map((animal, idx) => (
                <div key={idx} className="">
                  <h3 className="">{animal.name}</h3>
                  <div className="">
                    <div>
                      <p className="">Nombre Estimé</p>
                      <p className="">{animal.count}</p>
                    </div>
                    <div>
                      <p className="">Utilisation</p>
                      <p className="">{animal.purpose}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practices */}
          <section className="space-y-4">
            <h2 className="">Pratiques d'Élevage</h2>
            <p className="">
              Les méthodes d'élevage à Pehunco combinent les techniques traditionnelles avec des approches modernes. 
              Les animaux sont généralement élevés en semi-liberté avec un accès aux pâturages locaux et aux ressources naturelles.
            </p>
            <div className="">
              <h3 className="">Points Clés</h3>
              <ul className="">
                <li> Élevage extensif et semi-intensif</li>
                <li> Respect du bien-être animal</li>
                <li> Utilisation des ressources locales</li>
                <li> Amélioration progressive des races</li>
              </ul>
            </div>
          </section>
        </div>

        
        <div>
          <div className="">
            <h1 className="text-2xl font-bold">Types d'élevage et espèces</h1>
            <div className="space-y-6">
              <div>
                <h3> Bovins</h3>
                <p className="">Principalement au nord, confrontés à des défis de ressources, l'élevage évolue vers la sédentarisation. La production laitière se développe, utilisant des matières locales comme le tourteau de soja et de palmiste.</p>
                <p className=""></p>
              </div>
              <div>
                <h3>Volailles</h3>
                <p className="">L'élevage de poules, pintades, dindes et canards est très répandu, souvent géré par des femmes et des jeunes</p>
              </div>
              <div>
                <h3>Petits ruminants et autres</h3>
                <p className="">Élevage de moutons (dont la race Djallonké), chèvres, porcs et aulacodes</p>
              </div>
              <div>
                <h3>Pisciculture</h3>
              </div>

            </div>
          </div>

          <section className="space-y-4">
            <h2 className="">Caractéristiques et enjeux</h2>
            <div>
              <h3>Role Economique</h3>
              <p className="">L'élevage, y compris à petite échelle, constitue une source de revenus pour les ménages, permettant l'achat de nourriture, les frais scolaires et la santé.</p>
            </div>

            <div>
              <h3>Modernisation</h3>
              <p className="">L'introduction de pratiques modernes, telles que l'amélioration des races et l'utilisation de fourrages améliorés, est en cours pour augmenter la productivité et la durabilité. Des centres comme le Centre SONGHAÏ impulsent des techniques modernes et une meilleure gestion sanitaire</p>
            </div>

            <div>
              <h3>Défis Sanitaires et alimentaires</h3>
              <p className="">Les défis sanitaires, tels que les maladies animales et les problèmes d'hygiène, ainsi que les défis liés à l'alimentation des animaux, sont des enjeux majeurs dans l'élevage à Pehunco. <br />
              Les maladies (peste porcine, grippe aviaire) et la rareté des aliments en saison sèche nécessitent une meilleure prévention et gestion.
              </p>
            </div>
            <div>
              <h3>Agro-pastoralisme</h3>
              <p className="">L'élevage est souvent intégré à l'agriculture, avec des animaux pâturant les résidus de culture et fournissant du fumier pour fertiliser les champs, créant ainsi un système agro-pastoral durable. <br />
              Le secteur s'oriente vers des pratiques durables, intégrant l'agriculture et l'élevage pour optimiser les rendements. 
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Elevage