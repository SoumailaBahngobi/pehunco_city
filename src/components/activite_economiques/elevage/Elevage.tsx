
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
            <h3 className="">📊 Impact Économique</h3>
            <div className="space-y-6">
              <div>
                <p className="">Contribution Revenu</p>
                <p className="">~20%</p>
              </div>
              <div className=""></div>
              <div>
                <p className="">Familles Impliquées</p>
                <p className="">~40%</p>
              </div>
              <div className=""></div>
              <div>
                <p className="">Nombre Animaux</p>
                <p className="">~9,500+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elevage