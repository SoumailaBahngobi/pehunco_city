import guerra1 from '../../../assets/img/guerra1.jpg'

const Pehunco_centre = () => {
  const features = [
    { title: 'Siège Administratif', description: 'Centre administratif et politique de la commune' },
    { title: 'Marché Principal', description: 'Cœur économique avec commerce actif et échanges' },
    { title: 'Infrastructures', description: 'Écoles, santé, services publics concentrés' },
    { title: 'Culture', description: 'Centre cultural avec traditions et festivals' },
  ]

  return (
    <div className="space-y-12">
      {/* Header avec Image de Fond */}
      <div 
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${guerra1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">🏛️ Pehunco Centre</h1>
            <p className="text-lg drop-shadow-lg">Le cœur de la commune</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="">Présentation</h2>
            <p className="">
              Pehunco Centre est le cœur administratif, économique et culturel de la commune. 
              C'est le siège du gouvernement local et le principal centre d'activité économique. 
              La population y est plus dense et l'infrastructure plus développée que dans les autres arrondissements.
            </p>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-4xl font-bold ">Caractéristiques Principales</h2>
            <div className="">
              {features.map((feature, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-xl font-bold  mb-2">{feature.title}</h3>
                  <p className="">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Infrastructure */}
          <section className="space-y-4">
            <h2 className="">Infrastructures</h2>
            <div className="">
              <div className="">
                <h3 className="">Éducation</h3>
                <ul className="">
                  <li> Écoles primaires</li>
                  <li> Collèges</li>
                  <li>Formation professionnelle</li>
                </ul>
              </div>
              <div className="">
                <h3 className=""> Services</h3>
                <ul className="space-y-2 text-slate-30">
                  <li> Centre de santé</li>
                  <li> Administration locale</li>
                  <li>Services postaux</li>
                </ul>
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
                <p className="">~2,500+</p>
              </div>
              <div className="t"></div>
              <div>
                <p className="">Rôle</p>
                <p className="">Capital</p>
              </div>
              <div className=""></div>
              <div>
                <p className="">Infrastructure</p>
                <p className="">Élevée</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pehunco_centre