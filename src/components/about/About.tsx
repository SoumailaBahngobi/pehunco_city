
import baobab from '../../assets/img/baobab.jpg'

const About = () => {
  return (
    <div className="space-y-12">
      {/* Header avec Image de Fond */}
      <div 
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${baobab})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">À Propos de Pehunco</h1>
            <p className="text-lg drop-shadow-lg">Découvrez qui nous sommes et ce qui nous définit</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        <div className="">
          <section>
            <h2 className="text-4xl font-bold mb-6 text-white">Qui sommes-nous?</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Pehunco est une commune dynamique avec une riche histoire et une population engagée. 
              Notre communauté est caractérisée par ses traditions fortes, sa solidarité et son 
              engagement envers le développement durable et la prospérité collective.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-6 text-white">Notre Mission</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Promouvoir le développement économique, social et culturel de Pehunco en valorisant 
              nos ressources naturelles, en renforçant notre patrimoine culturel et en créant des 
              opportunités pour nos citoyens.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-6 text-white">Nos Valeurs</h2>
            <div className="">
              <div className="p-6 bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold mb-2 text-white text-lg">Solidarité</h3>
                <p className="text-slate-300">Nous croyons en l'importance de rester unis et de s'entraider</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-green-900/30 to-green-800/20 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold mb-2 text-white text-lg">Durabilité</h3>
                <p className="text-slate-300">Protéger notre environnement pour les générations futures</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-purple-900/30 to-purple-800/20 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold mb-2 text-white text-lg">Excellence</h3>
                <p className="text-slate-300">Poursuivre l'excellence dans tous nos efforts et initiatives</p>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-xl border border-slate-600 sticky top-20 p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Faits Clés</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Population</p>
                  <p className="text-3xl font-bold text-blue-400">~5,000+</p>
                </div>
                <div className="divider my-0"></div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Arrondissements</p>
                  <p className="text-3xl font-bold text-green-400">3</p>
                </div>
                <div className="divider my-0"></div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Principale Activité</p>
                  <p className="text-3xl font-bold text-yellow-400">Agriculture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About