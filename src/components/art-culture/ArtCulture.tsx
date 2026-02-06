
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
        <h2 className="">Les Arts de Pehunco</h2>
        <div className="">
          {arts.map((art, idx) => (
            <div key={idx} className="">
              <div className="card-body">
                <h3 className="">{art.title}</h3>
                <p className="">{art.description}</p>
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
            <div key={idx} className="">
              <div className="">
                <h3 className="">{fest.name}</h3>
                <div className="space-y-2">
                  <p className="">{fest.period}</p>
                  <p className="">{fest.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artisans Section */}
      <section className="space-y-8">
        <h2 className="">Nos Artisans</h2>
        <p className="">
          Pehunco abrite une communauté vibrant d'artisans talentueux qui perpétuent les traditions 
          tout en créant des œuvres contemporaines. Ces créateurs apportent vie, couleur et beauté 
          à notre communauté par leurs talents uniques.
        </p>
        <div className="">
          <p className="">Découvrez le travail exceptionnel de nos artisans locaux</p>
          <button className="btn btn-primary hover:scale-105 transition-transform">Contacter les Artisans</button>
        </div>
      </section>
    </div>
  )
}

export default ArtCulture