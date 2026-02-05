import tata from '../../../assets/img/tata.jpg'

const Tobre = () => {
  const features = [
    { title: 'Patrimoine Culturel', description: 'Traditions et pratiques ancestrales bien préservées' },
    { title: 'Tissu Social Fort', description: 'Communauté très unie et solidaire' },
    { title: 'Économie Locale', description: 'Agriculture et petit commerce comme bases' },
    { title: 'Richesses Naturelles', description: 'Potentiel environnemental important' },
  ]

  return (
    <div className="space-y-12">
      {/* Header avec Image de Fond */}
      <div 
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(82, 179, 37, 0.6), rgba(0,0,0,0.6)), url(${tata})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg"> Tobré</h1>
            <p className="text-lg drop-shadow-lg">Authenticité et traditions</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Présentation</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Tobré est un arrondissement caractérisé par un fort attachement aux traditions 
              et une communauté très soudée. Bien que moins urbanisé que Pehunco Centre, 
              il offre une vie communautaire riche avec des valeurs profondément ancrées 
              dans la culture locale.
            </p>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Caractéristiques Principales</h2>
            <div className="">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-orange-500/30 hover:border-orange-500 transition shadow-lg">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cultural Heritage */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Patrimoine Culturel</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              Tobré est le gardien des traditions ancestrales de Pehunco. Les coutumes, 
              les cérémonies et les pratiques culturelles y sont particulièrement préservées et respectées.
            </p>
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-orange-900/30 to-slate-800 rounded-xl p-4 border-l-4 border-orange-500 shadow-lg">
                <p className="font-semibold text-orange-400 text-lg"> Traditions Cérémoniales</p>
                <p className="text-slate-300 text-sm">Rites et cérémonies traditionnelles</p>
              </div>
              <div className="bg-gradient-to-br from-amber-900/30 to-slate-800 rounded-xl p-4 border-l-4 border-amber-500 shadow-lg">
                <p className="font-semibold text-amber-400 text-lg"> Arts et Métiers</p>
                <p className="text-slate-300 text-sm">Artisanat traditionnel et savoir-faire</p>
              </div>
              <div className="bg-gradient-to-br from-rose-900/30 to-slate-800 rounded-xl p-4 border-l-4 border-rose-500 shadow-lg">
                <p className="font-semibold text-rose-400 text-lg"> Communauté</p>
                <p className="text-slate-300 text-sm">Vie communautaire harmonieuse et organisée</p>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-xl border border-slate-600 sticky top-20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Informations</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-1">Population</p>
                <p className="text-3xl font-bold text-orange-400">~1,000+</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Caractère</p>
                <p className="text-3xl font-bold text-amber-400">Traditionnel</p>
              </div>
              <div className="h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Culture</p>
                <p className="text-3xl font-bold text-rose-400">Forte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tobre