
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
        <div className="relative z-10 hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">🐟 Pêche</h1>
            <p className="text-lg drop-shadow-lg">Une tradition et une ressource</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Aperçu</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              La pêche est une activité économique minoritaire mais importante à Pehunco. 
              Elle fournit une source de protéines nutritive et génère des revenus supplémentaires pour les familles. 
              Bien que moins développée que l'agriculture ou l'élevage, elle reste une ressource précieuse.
            </p>
          </section>

          {/* Fish Species */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Espèces de Poissons</h2>
            <div className="">
              {fishTypes.map((fish, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-500 transition shadow-lg">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">{fish.name}</h3>
                  <div className="">
                    <div>
                      <p className="text-sm text-slate-400">Habitat</p>
                      <p className="font-semibold text-slate-200">{fish.habitat}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Abondance</p>
                      <p className="font-semibold text-cyan-300">{fish.abundance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Methods */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Méthodes de Pêche</h2>
            <div className="">
              <div className="bg-gradient-to-br from-blue-900/30 to-slate-800 rounded-xl p-6 border border-blue-500/30 shadow-lg">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Pêche Traditionnelle</h3>
                <p className="text-slate-300">
                  Utilisation de techniques éprouvées, filets à main, hameçons et pièges. 
                  Respectueuse de l'environnement et durable.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/30 to-slate-800 rounded-xl p-6 border border-cyan-500/30 shadow-lg">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Pisciculture</h3>
                <p className="text-slate-300">
                  Élevage de poissons dans des bassins, permettant un approvisionnement régulier 
                  et une meilleure productivité.
                </p>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Défis et Perspectives</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              Bien que la pêche soit une activité minoritaire, elle présente des défis et des opportunités.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-red-900/30 to-slate-800 rounded-xl p-6 border-l-4 border-red-500 shadow-lg">
                <h3 className="font-bold mb-3 text-red-400 text-lg">Défis</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>• Ressources limitées</li>
                  <li>• Saisons sèches</li>
                  <li>• Peu d'infrastructure</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-slate-800 rounded-xl p-6 border-l-4 border-green-500 shadow-lg">
                <h3 className="font-bold mb-3 text-green-400 text-lg">Opportunités</h3>
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
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-xl border border-slate-600 sticky top-20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">📊 Détails</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-1">Importance Relative</p>
                <p className="text-3xl font-bold text-yellow-400">Mineure</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Lieu Principal</p>
                <p className="text-3xl font-bold text-cyan-400">Cours d'eau</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Saison Peak</p>
                <p className="text-3xl font-bold text-blue-400">Hivernage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Peche