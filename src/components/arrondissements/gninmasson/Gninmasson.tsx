import cabane from '../../../assets/img/cabane.jpg'

const Gninmasson = () => {
  const features = [
    { title: 'Agriculture Active', description: 'Zone à forte production agricole' },
    { title: 'Communauté Unie', description: 'Forte cohésion sociale et traditions' },
    { title: 'Ressources Naturelles', description: 'Richesse en ressources forestières et hydriques' },
    { title: 'Développement', description: 'En évolution avec nouveaux projets' },
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
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">🌾 Gninmasson</h1>
            <p className="text-lg drop-shadow-lg">Une zone dynamique et prospère</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Présentation</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Gninmasson est un arrondissement dynamique caractérisé par une population engagée 
              et une économie diversifiée basée principalement sur l'agriculture et l'élevage. 
              La zone bénéficie de bonnes ressources naturelles et d'une forte cohésion communautaire.
            </p>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Caractéristiques Principales</h2>
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-green-500/30 hover:border-green-500 transition shadow-lg">
                  <h3 className="text-xl font-bold text-green-400 mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Economic Activities */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Activités Économiques</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              L'économie de Gninmasson est principalement basée sur :
            </p>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-gradient-to-br from-green-900/30 to-slate-800 rounded-xl p-4 border-l-4 border-green-500 shadow-lg">
                <p className="font-semibold text-green-400 text-lg">🌾 Agriculture</p>
                <p className="text-slate-300 text-sm">Cultures vivrières et commerce</p>
              </div>
              <div className="bg-gradient-to-br from-amber-900/30 to-slate-800 rounded-xl p-4 border-l-4 border-amber-500 shadow-lg">
                <p className="font-semibold text-amber-400 text-lg">🐄 Élevage</p>
                <p className="text-slate-300 text-sm">Bétail et volailles</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-slate-800 rounded-xl p-4 border-l-4 border-blue-500 shadow-lg">
                <p className="font-semibold text-blue-400 text-lg">🏪 Commerce</p>
                <p className="text-slate-300 text-sm">Petit commerce et échanges</p>
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
                <p className="text-3xl font-bold text-green-400">~1,500+</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Caractère</p>
                <p className="text-3xl font-bold text-yellow-400">Rural</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Économie</p>
                <p className="text-3xl font-bold text-amber-400">Agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gninmasson