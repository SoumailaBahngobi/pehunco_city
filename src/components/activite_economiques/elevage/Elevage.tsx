
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
        <div className="relative z-10 hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">🐄 Élevage</h1>
            <p className="text-lg drop-shadow-lg">Une activité économique vitale</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Aperçu</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              L'élevage est une activité économique importante complémentaire à l'agriculture. 
              Les éleveurs de Pehunco élèvent divers types d'animaux pour la viande, le lait, 
              les œufs et autres produits dérivés. C'est une source importante de revenus et de nutrition.
            </p>
          </section>

          {/* Livestock Types */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Cheptel Local</h2>
            <div className="">
              {livestock.map((animal, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-amber-500/30 hover:border-amber-500 transition shadow-lg">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">{animal.name}</h3>
                  <div className="">
                    <div>
                      <p className="text-sm text-slate-400">Nombre Estimé</p>
                      <p className="font-semibold text-amber-300">{animal.count}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Utilisation</p>
                      <p className="font-semibold text-slate-200">{animal.purpose}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practices */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Pratiques d'Élevage</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Les méthodes d'élevage à Pehunco combinent les techniques traditionnelles avec des approches modernes. 
              Les animaux sont généralement élevés en semi-liberté avec un accès aux pâturages locaux et aux ressources naturelles.
            </p>
            <div className="bg-gradient-to-br from-blue-900/30 to-slate-800 rounded-xl p-6 border border-blue-500/30">
              <h3 className="font-bold mb-3 text-blue-400 text-lg">Points Clés</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ Élevage extensif et semi-intensif</li>
                <li>✓ Respect du bien-être animal</li>
                <li>✓ Utilisation des ressources locales</li>
                <li>✓ Amélioration progressive des races</li>
              </ul>
            </div>
          </section>
        </div>

        <div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-xl border border-slate-600 sticky top-20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">📊 Impact Économique</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-1">Contribution Revenu</p>
                <p className="text-3xl font-bold text-amber-400">~20%</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Familles Impliquées</p>
                <p className="text-3xl font-bold text-orange-400">~40%</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Nombre Animaux</p>
                <p className="text-3xl font-bold text-yellow-400">~9,500+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elevage