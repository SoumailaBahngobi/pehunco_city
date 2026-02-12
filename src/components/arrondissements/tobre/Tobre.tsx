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
        <div className="">
          <div>
            <h1 className=""> Tobré</h1>
            <p className="">Authenticité et traditions</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="">Présentation</h2>
            <p className="">
              Tobré est un arrondissement caractérisé par un fort attachement aux traditions 
              et une communauté très soudée. Bien que moins urbanisé que Pehunco Centre, 
              il offre une vie communautaire riche avec des valeurs profondément ancrées 
              dans la culture locale.
            </p>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="">Caractéristiques Principales</h2>
            <div className="">
              {features.map((feature, idx) => (
                <div key={idx} className="">
                  <h3 className="">{feature.title}</h3>
                  <p className="">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cultural Heritage */}
          <section className="space-y-4">
            <h2 className="">Patrimoine Culturel</h2>
            <p className="">
              Tobré est le gardien des traditions ancestrales de Pehunco. Les coutumes, 
              les cérémonies et les pratiques culturelles y sont particulièrement préservées et respectées.
            </p>
            <div className="space-y-3">
              <div className=" ">
                <p className=""> Traditions Cérémoniales</p>
                <p className="">Rites et cérémonies traditionnelles</p>
              </div>
              <div className="">
                <p className=""> Arts et Métiers</p>
                <p className="">Artisanat traditionnel et savoir-faire</p>
              </div>
              <div className="">
                <p className=""> Communauté</p>
                <p className="">Vie communautaire harmonieuse et organisée</p>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="">
            <h3 className="">Informations</h3>
            <div className="space-y-6">
              <div>
                <p className="">Population</p>
                <p className="">~1,000+</p>
              </div>
              <div className=""></div>
              <div>
                <p className="">Caractère</p>
                <p className="">Traditionnel</p>
              </div>
              <div className=""></div>
              <div>
                <p className="">Culture</p>
                <p className="">Forte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tobre