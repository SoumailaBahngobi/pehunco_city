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
        <div className="">
          <div>
            <h1 className="">🌾 Gninmasson</h1>
            <p className="">Une zone dynamique et prospère</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="">Présentation</h2>
            <p className="">
              Gninmasson est un arrondissement dynamique caractérisé par une population engagée 
              et une économie diversifiée basée principalement sur l'agriculture et l'élevage. 
              La zone bénéficie de bonnes ressources naturelles et d'une forte cohésion communautaire.
            </p>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="">Caractéristiques Principales</h2>
            <div className="">
              {features.map((feature, idx) => (
                <div key={idx} className=" ">
                  <h3 className="">{feature.title}</h3>
                  <p className="">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Economic Activities */}
          <section className="space-y-4">
            <h2 className="">Activités Économiques</h2>
            <p className="">
              L'économie de Gninmasson est principalement basée sur :
            </p>
            <div className="grid grid-cols-1 gap-3">
              <div className="">
                <p className="">Cultures vivrières et commerce</p>
              </div>
              <div className="">
                <p className="">🐄 Élevage</p>
                <p className="">Bétail et volailles</p>
              </div>
              <div className="">
                <p className="">🏪 Commerce</p>
                <p className="">Petit commerce et échanges</p>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="">
            <h3 className="">ℹ️ Informations</h3>
            <div className="space-y-6">
              <div>
                <p className="">Population</p>
                <p className="">~1,500+</p>
              </div>
              <div className=""></div>
              <div>
                <p className="">Caractère</p>
                <p className="">Rural</p>
              </div>
              <div className=""></div>
              <div>
                <p className="">Économie</p>
                <p className="">Agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gninmasson