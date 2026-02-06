
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

      <title>Agriculture</title>
      <h1 className='text-3xl font-bold text-center mb-4'> <span>L'Agriculture, une Activité Majeure et Structurante</span></h1>
      <div
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0,0,0,0.6)), url(${guerra})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="">
          <div>
            <h1 className="">🌾 Agriculture</h1>
            <p className="">Le fondement de notre économie</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="">Aperçu</h2>
            <p className="">
              L'agriculture est l'activité économique principale de Pehunco, employing la majorité de la population.
              Notre communauté cultive diverses cultures adaptées au climat local, avec des techniques
              traditionnelles combinées à des méthodes modernes pour maximiser la productivité.
            </p>
          </section>

          <section>
            <div>
              <h2> Les caractéristiques Générales</h2>
              <div className="space-y-2">
                <h3>Superficie agricole utile (SAU), types de propriétés (petites exploitations familiales, grandes concessions).</h3>
              </div>
              <div>
                <h3>Principales cultures (céréales, maraîchage, arboriculture, cultures de rente) et leur répartition géographique</h3>
              </div>
            </div>

            <div>
              <h2>Les systèmes de production </h2>
              <div>
                <h3>Méthodes utilisées (agriculture pluviale/irriguée, intensive/extensive, présence de pratiques modernes ou traditionnelles).</h3>
              </div>
              <div>
                <h3>Cycle cultural et saisonnalité</h3>
              </div>
              <div>
                <h2> Le poids économique et social</h2>
                <div>
                  <h3>Part de l'agriculture dans l'économie locale (emplois, revenus générés).</h3>
                </div>
                <div>
                  <h3>Commercialisation : circuits courts (marchés locaux) ou longs (exportation, transformation).</h3>
                </div>
                <div>
                  <h3>Rôle dans l'auto-suffisance alimentaire.</h3>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

      
  )
}

export default Agriculture