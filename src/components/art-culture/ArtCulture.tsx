
import tata from '../../assets/img/tata.jpg'

const ArtCulture = () => {
  const arts = [
    { title: "Musique Traditionnelle", description: "Les sons authentiques de nos traditions, porteurs d'histoires et d'émotions" },
    { title: "Danse", description: "Expressions gracieuses et énergiques du patrimoine culturel de Pehunco" },
    { title: "Artisanat Local", description: "Créations magnifiques façonnées par les mains expertes de nos artisans" },
    { title: "Cuisine Traditionnelle", description: "Saveurs authentiques et recettes transmises à travers les générations" },
  ]

  const festivals = [
    { name: "Festival Communautaire", period: "Annuel", description: "Célébration de notre identité collective" },
    { name: "Marché d'Art", period: "Saisonnier", description: "Vitrine des talents artistiques locaux" },
    { name: "Nuit Culturelle", period: "Mensuel", description: "Soirées dédiées à la musique et aux arts vivants" },
  ]

  return (
    <div className="space-y-12">
      {/* Header avec Image de Fond */}
      <div 
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${tata})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Art & Culture</h1>
            <p className="text-lg drop-shadow-lg">La richesse créative de Pehunco</p>
          </div>
        </div>
      </div>

      {/* Arts Section */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-white">Les Arts de Pehunco</h2>
        <div className="">
          {arts.map((art, idx) => (
            <div key={idx} className="">
              <div className="card-body">
                <h3 className="l">{art.title}</h3>
                <p className="text-slate-300">{art.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Festivals Section */}
      <section className="space-y-8">
        <h2 className="">Événements & Festivals</h2>
        <div className="">
          {festivals.map((fest, idx) => (
            <div key={idx} className="card bg-gradient-to-br from-purple-900/40 to-slate-800 shadow-lg border border-purple-700/50 hover:border-purple-500 transition">
              <div className="">
                <h3 className="card-title text-white text-lg">{fest.name}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-purple-300 font-semibold">{fest.period}</p>
                  <p className="text-slate-300">{fest.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artisans Section */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-white">Nos Artisans</h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          Pehunco abrite une communauté vibrant d'artisans talentueux qui perpétuent les traditions 
          tout en créant des œuvres contemporaines. Ces créateurs apportent vie, couleur et beauté 
          à notre communauté par leurs talents uniques.
        </p>
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 text-center border border-blue-500/30">
          <p className="text-lg font-semibold mb-4 text-white">Découvrez le travail exceptionnel de nos artisans locaux</p>
          <button className="btn btn-primary">Contacter les Artisans</button>
        </div>
      </section>
    </div>
  )
}

export default ArtCulture