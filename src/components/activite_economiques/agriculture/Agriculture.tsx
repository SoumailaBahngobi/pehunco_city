
import guerra from '../../../assets/img/guerra.jpg'

const Agriculture = () => {
  const crops = [
    { name: 'Mil', importance: 'Très important', season: 'Juin - Septembre' },
    { name: 'Sorgho', importance: 'Important', season: 'Juin - Septembre' },
    { name: 'Arachide', importance: 'Très important', season: 'Juin - Octobre' },
    { name: 'Maïs', importance: 'Important', season: 'Juin - Novembre' },
  ]

  return (
    <div className="space-y-12">
      {/* Header avec Image de Fond */}
      <div 
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0,0,0,0.6)), url(${guerra})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">🌾 Agriculture</h1>
            <p className="text-lg drop-shadow-lg">Le fondement de notre économie</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Aperçu</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              L'agriculture est l'activité économique principale de Pehunco, employing la majorité de la population. 
              Notre communauté cultive diverses cultures adaptées au climat local, avec des techniques 
              traditionnelles combinées à des méthodes modernes pour maximiser la productivité.
            </p>
          </section>

          {/* Main Crops */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Principales Cultures</h2>
            <div className="grid grid-cols-1 gap-4">
              {crops.map((crop, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-green-500/30 hover:border-green-500 transition shadow-lg">
                  <h3 className="text-xl font-bold text-green-400 mb-4">{crop.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Importance</p>
                      <p className="font-semibold text-green-300">{crop.importance}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Saison</p>
                      <p className="font-semibold text-slate-200">{crop.season}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges and Opportunities */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Défis et Opportunités</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-900/30 to-slate-800 rounded-xl p-6 border-l-4 border-red-500 shadow-lg">
                <h3 className="font-bold mb-3 text-red-400 text-lg">Défis</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Variabilité climatique</li>
                  <li>• Accès limité aux intrants</li>
                  <li>• Irrigation insuffisante</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-slate-800 rounded-xl p-6 border-l-4 border-green-500 shadow-lg">
                <h3 className="font-bold mb-3 text-green-400 text-lg">Opportunités</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Agriculture biologique</li>
                  <li>• Coopératives agricoles</li>
                  <li>• Mécanisation progressive</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-xl border border-slate-600 sticky top-20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">📊 Statistiques</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-1">Population Agricole</p>
                <p className="text-3xl font-bold text-green-400">~70%</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Rendement Moyen</p>
                <p className="text-3xl font-bold text-yellow-400">Bon</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Cultures Principales</p>
                <p className="text-3xl font-bold text-blue-400">4+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agriculture