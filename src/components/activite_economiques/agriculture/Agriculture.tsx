
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

          {/* Main Crops */}
          <section className="space-y-4">
            <h2 className="">Principales Cultures</h2>
            <div className="grid grid-cols-1 gap-4">
              {crops.map((crop, idx) => (
                <div key={idx} className="">
                  <h3 className="">{crop.name}</h3>
                  <div className="">
                    <div>
                      <p className="">Importance</p>
                      <p className="">{crop.importance}</p>
                    </div>
                    <div>
                      <p className="">Saison</p>
                      <p className="">{crop.season}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges and Opportunities */}
          <section className="space-y-4">
            <h2 className="">Défis et Opportunités</h2>
            <div className="">
              <div className="">
                <h3 className="">Défis</h3>
                <ul className="">
                  <li>• Variabilité climatique</li>
                  <li>• Accès limité aux intrants</li>
                  <li>• Irrigation insuffisante</li>
                </ul>
              </div>
              <div className="">
                <h3 className="">Opportunités</h3>
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
          <div className="">
            <h3 className="">📊 Statistiques</h3>
            <div className="space-y-6">
              <div>
                <p className="">Population Agricole</p>
                <p className="">~70%</p>
              </div>
              <div className=""></div>
              <div>
                <p className="">Rendement Moyen</p>
                <p className="">Bon</p>
              </div>
              <div className=" "></div>
              <div>
                <p className="">Cultures Principales</p>
                <p className="">4+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agriculture