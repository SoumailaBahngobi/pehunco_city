import guerra1 from '../../../assets/img/guerra1.jpg'

const Pehunco_centre = () => {
  const features = [
    { title: 'Siège Administratif', description: 'Centre administratif et politique de la commune' },
    { title: 'Marché Principal', description: 'Cœur économique avec commerce actif et échanges' },
    { title: 'Infrastructures', description: 'Écoles, santé, services publics concentrés' },
    { title: 'Culture', description: 'Centre cultural avec traditions et festivals' },
  ]

  return (
    <div className="space-y-12">
      {/* Header avec Image de Fond */}
      <div 
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${guerra1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">🏛️ Pehunco Centre</h1>
            <p className="text-lg drop-shadow-lg">Le cœur de la commune</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Présentation</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Pehunco Centre est le cœur administratif, économique et culturel de la commune. 
              C'est le siège du gouvernement local et le principal centre d'activité économique. 
              La population y est plus dense et l'infrastructure plus développée que dans les autres arrondissements.
            </p>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Caractéristiques Principales</h2>
            <div className="">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500 transition shadow-lg">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Infrastructure */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Infrastructures</h2>
            <div className="">
              <div className="bg-gradient-to-br from-blue-900/30 to-slate-800 rounded-xl p-6 border border-blue-500/30 shadow-lg">
                <h3 className="font-bold mb-3 text-blue-400 text-lg">📚 Éducation</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✓ Écoles primaires</li>
                  <li>✓ Collèges</li>
                  <li>✓ Formation professionnelle</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-slate-800 rounded-xl p-6 border border-green-500/30 shadow-lg">
                <h3 className="font-bold mb-3 text-green-400 text-lg">🏥 Services</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✓ Centre de santé</li>
                  <li>✓ Administration locale</li>
                  <li>✓ Services postaux</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-xl border border-slate-600 sticky top-20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">ℹ️ Informations</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-1">Population</p>
                <p className="text-3xl font-bold text-blue-400">~2,500+</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Rôle</p>
                <p className="text-3xl font-bold text-purple-400">Capital</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Infrastructure</p>
                <p className="text-3xl font-bold text-green-400">Élevée</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pehunco_centre