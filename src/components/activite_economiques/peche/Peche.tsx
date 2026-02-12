
import { Fish } from 'lucide-react'
import cabane1 from '../../../assets/img/cabane1.jpg'

const Peche = () => {
  const fishTypes = [
    { name: 'Tilapia', habitat: 'Eaux douces', abundance: 'Modérée' },
    { name: 'Silure', habitat: 'Eaux profondes', abundance: 'Modérée' },
    { name: 'Carpe', habitat: 'Eaux stagnantes', abundance: 'Limitée' },
  ]

  return (
    <div className="space-y-12">
      {/* Header avec Image de Fond */}
      <div
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cabane1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="">
          <div>
            <h1 className="">   <Fish className="w-12 h-12 text-blue-400" >Pêche </Fish> </h1>

            <p className="">Une tradition et une ressource</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="">Aperçu</h2>
            <p className="">
              La pêche est une activité économique minoritaire mais importante à Pehunco.
              Elle fournit une source de protéines nutritive et génère des revenus supplémentaires pour les familles.
              Bien que moins développée que l'agriculture ou l'élevage, elle reste une ressource précieuse.
            </p>
          </section>

          {/* Fish Species */}
          <section className="space-y-4">
            <h2 className="">Espèces de Poissons</h2>
            <div className="">
              {fishTypes.map((fish, idx) => (
                <div key={idx} className="g">
                  <h3 className="">{fish.name}</h3>
                  <div className="">
                    <div>
                      <p className="">Habitat</p>
                      <p className="">{fish.habitat}</p>
                    </div>
                    <div>
                      <p className="">Abondance</p>
                      <p className="">{fish.abundance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Methods */}
          <section className="space-y-4">
            <h2 className="">Méthodes de Pêche</h2>
            <div className="">
              <div className="">
                <h3 className="">Pêche Traditionnelle</h3>
                <p className="">
                  Utilisation de techniques éprouvées, filets à main, hameçons et pièges.
                  Respectueuse de l'environnement et durable.
                </p>
              </div>
              <div className="">
                <h3 className="">Pisciculture</h3>
                <p className="text-slate-300">
                  Élevage de poissons dans des bassins, permettant un approvisionnement régulier
                  et une meilleure productivité.
                </p>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section className="space-y-4">
            <h2 className="">Défis et Perspectives</h2>
            <p className="">
              Bien que la pêche soit une activité minoritaire, elle présente des défis et des opportunités.
            </p>
            <div className="">
              <div className=" ">
                <h3 className="">Défis</h3>
                <ul className="">
                  <li>• Ressources limitées</li>
                  <li>• Saisons sèches</li>
                  <li>• Peu d'infrastructure</li>
                </ul>
              </div>
              <div className="">
                <h3 className="">Opportunités</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Développement piscicole</li>
                  <li>• Nutrition communautaire</li>
                  <li>• Revenus supplémentaires</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="">
            <h3 className="">📊 Détails</h3>
            <div className="space-y-6">
              <div>
                <p className="">Importance Relative</p>
                <p className="">Mineure</p>
              </div>
              <div className=""></div>
              <div>
                <p className="">Lieu Principal</p>
                <p className="">Cours d'eau</p>
              </div>
              <div className=""></div>
              <div>
                <p className="">Saison Peak</p>
                <p className="">Hivernage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Peche