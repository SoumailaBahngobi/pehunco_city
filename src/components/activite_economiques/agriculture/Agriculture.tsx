import { Sprout, Wheat, Carrot, Store, Package, TrendingUp } from 'lucide-react'
import guerra from '../../../assets/img/guerra.jpg'
import sarclage from '../../../assets/img/sarclage.jpg'
import un_mois_mais from '../../../assets/img/un_mois_mais.jpg'
import chargement_coton from '../../../assets/img/chargement_coton.jpg'

// Images par défaut pour les cultures (à remplacer par vos images réelles)
import igname from '../../../assets/img/igname.jpg'
import manioc from '../../../assets/img/manioc.jpg'
import pate_douce from '../../../assets/img/patate_douce.jpg'
import mil from '../../../assets/img/mil.jpg'
import sorgho from '../../../assets/img/sorgho.jpg'
import arachide from '../../../assets/img/arachide.jpg'
import mais from '../../../assets/img/mais.jpg'

const Agriculture = () => {
  const tubercules = [
    { 
      name: 'Igname', 
      description: 'Culture vivrière fondamentale, base de l\'alimentation locale. Variétés riches en nutriments, adaptées au climat tropical.',
      importance: 'Très important',
      semance: 'Mars-Avril', 
      image_semence: igname,  
      traitement: 'Traitement fongicide, lutte contre les nématodes', 
      image_traitement: igname,
      recolte: 'Septembre-Octobre', 
      image_recolte: igname,
      icon: '🥔'
    },
    { 
      name: 'Manioc', 
      description: 'Culture résistante à la sécheresse, transformée en farine, gari et tapioca.',
      importance: 'Important',
      semance: 'Mars-Avril', 
      image_semence: manioc,
      traitement: 'Rotation des cultures, contrôle des maladies', 
      image_traitement: manioc,
      recolte: 'Septembre-Octobre', 
      image_recolte: manioc,
      icon: '🌿'
    },
    { 
      name: 'Patate douce', 
      description: 'Culture à cycle court, riche en vitamines, adaptée aux sols légers.',
      importance: 'Modéré',
      semance: 'Mars-Avril', 
      image_semence: pate_douce,
      traitement: 'Lutte contre les ravageurs, irrigation modérée', 
      image_traitement: pate_douce,
      recolte: 'Juillet-Août', 
      image_recolte: pate_douce,
      icon: '🍠'
    },
  ]

  const cereals = [
    { 
      name: 'Mil', 
      description: 'Céréale traditionnelle résistante à la sécheresse, base de nombreux plats locaux.',
      importance: 'Très important',
      semance: 'Mai-Juin', 
      image_semence: mil,
      traitement: 'Sarclage manuel, protection contre les oiseaux', 
      image_traitement: mil,
      recolte: 'Octobre-Novembre', 
      image_recolte: mil,
      icon: '🌾'
    },
    { 
      name: 'Sorgho', 
      description: 'Culture polyvalente utilisée pour l\'alimentation humaine et animale.',
      importance: 'Important',
      semance: 'Mai-Juin', 
      image_semence: sorgho,
      traitement: 'Traitement des semences, contrôle des adventices', 
      image_traitement: sorgho,
      recolte: 'Octobre-Novembre', 
      image_recolte: sorgho,
      icon: '🌱'
    },
    { 
      name: 'Arachide', 
      description: 'Légumineuse riche en protéines, importante pour la rotation des cultures.',
      importance: 'Très important',
      semance: 'Juin-Juillet', 
      image_semence: arachide,
      traitement: 'Inoculation des semences, buttage', 
      image_traitement: arachide,
      recolte: 'Septembre-Octobre', 
      image_recolte: arachide,
      icon: '🥜'
    },
    { 
      name: 'Maïs', 
      description: 'Culture principale pour l\'alimentation humaine et animale, base de nombreux produits transformés.',
      importance: 'Important',
      semance: 'Mai-Juin', 
      image_semence: mais,
      traitement: 'Fertilisation équilibrée, lutte contre les foreurs', 
      image_traitement: mais,
      recolte: 'Août-Septembre', 
      image_recolte: mais,
      icon: '🌽'
    },
  ]

  return (
    <div className="space-y-12">
      {/* Header avec Image de Fond */}
      <div
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0,0,0,0.7)), url(${un_mois_mais})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-green-900/30 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Sprout className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Agriculture à Péhunco</h1>
          </div>
          <p className="text-xl md:text-2xl italic drop-shadow-lg">
            L'activité économique principale, pilier du développement local
          </p>
        </div>
      </div>

      {/* Aperçu */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <Sprout className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-3xl font-bold text-green-900">Aperçu Général</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                L'agriculture constitue le socle économique de Péhunco, employant plus de <span className="font-bold text-green-800">80%</span> de la population active. 
                Notre communauté pratique une agriculture diversifiée, alliant <span className="font-semibold">savoir-faire traditionnel</span> et 
                <span className="font-semibold"> techniques modernes</span> pour une production durable.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-green-800 mb-4">Caractéristiques</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Agriculture pluviale et manuelle</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Rotation des cultures traditionnelle</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Valorisation des produits locaux</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Agriculture familiale prédominante</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Les Cultures */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Les Différentes Cultures</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une diversité de cultures adaptées au climat local, garantissant la sécurité alimentaire et les revenus des familles
          </p>
        </div>

        {/* Céréales */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-amber-100 rounded-full">
              <Wheat className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-3xl font-bold text-amber-900">Les Céréales</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cereals.map((cereal, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{cereal.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900">{cereal.name}</h3>
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                        {cereal.importance}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{cereal.description}</p>
                  
                  <div className="space-y-3">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="font-semibold text-amber-800 text-sm">Semence</p>
                      <p className="text-gray-700">{cereal.semance}</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="font-semibold text-amber-800 text-sm">Traitement</p>
                      <p className="text-gray-700">{cereal.traitement}</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="font-semibold text-amber-800 text-sm">Récolte</p>
                      <p className="text-gray-700">{cereal.recolte}</p>
                    </div>
                  </div>
                </div>
                <img 
                  src={cereal.image_semence} 
                  alt={cereal.name} 
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tubercules */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-orange-100 rounded-full">
              <Carrot className="w-8 h-8 text-orange-700" />
            </div>
            <h2 className="text-3xl font-bold text-orange-900">Les Tubercules</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tubercules.map((tubercule, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{tubercule.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-orange-900">{tubercule.name}</h3>
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                        {tubercule.importance}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{tubercule.description}</p>
                  
                  <div className="space-y-3">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="font-semibold text-orange-800 text-sm">Semence</p>
                      <p className="text-gray-700">{tubercule.semance}</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="font-semibold text-orange-800 text-sm">Traitement</p>
                      <p className="text-gray-700 text-sm">{tubercule.traitement}</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="font-semibold text-orange-800 text-sm">Récolte</p>
                      <p className="text-gray-700">{tubercule.recolte}</p>
                    </div>
                  </div>
                </div>
                <img 
                  src={tubercule.image_semence} 
                  alt={tubercule.name} 
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chaîne de Valeur */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Chaîne de Valeur Agricole</h2>
          <p className="text-gray-600">De la production à la consommation, un circuit complet de valorisation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Commercialisation */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Store className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Commercialisation</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Les produits agricoles sont vendus sur les marchés locaux de Péhunco et régionaux, 
              contribuant significativement à l'économie locale. Le coton, notamment, représente 
              une importante culture de rente.
            </p>
            <img 
              src={chargement_coton} 
              alt="Commercialisation des produits agricoles" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Transformation */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Package className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900">Transformation</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Valorisation des produits bruts en produits finis : farine de maïs, huile d'arachide, 
              gari de manioc. Ces transformations ajoutent de la valeur et créent des emplois locaux.
            </p>
            <img 
              src={guerra} 
              alt="Transformation des produits agricoles" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Conservation */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-green-900">Conservation</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Techniques traditionnelles de conservation : séchage, stockage en greniers, transformation 
              en produits secs. Ces méthodes assurent la sécurité alimentaire pendant la saison sèche.
            </p>
            <img 
              src={sarclage} 
              alt="Conservation des produits agricoles" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Cycle Agricole */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-slate-100 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Cycle Agricole Annuel</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-xl shadow">
              <div className="text-2xl mb-2">🌧️</div>
              <h4 className="font-bold text-blue-700">Préparation</h4>
              <p className="text-sm text-gray-600">Mars-Avril</p>
              <p className="text-sm">Préparation des sols, semis</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-bold text-green-700">Croissance</h4>
              <p className="text-sm text-gray-600">Mai-Juillet</p>
              <p className="text-sm">Entretien, sarclage</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow">
              <div className="text-2xl mb-2">☀️</div>
              <h4 className="font-bold text-amber-700">Maturation</h4>
              <p className="text-sm text-gray-600">Août-Septembre</p>
              <p className="text-sm">Protection, surveillance</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow">
              <div className="text-2xl mb-2">📦</div>
              <h4 className="font-bold text-orange-700">Récolte</h4>
              <p className="text-sm text-gray-600">Septembre-Novembre</p>
              <p className="text-sm">Collecte, stockage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Défis et Perspectives */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Perspectives d'Avenir</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-green-700 mb-3">📈 Opportunités</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Développement de l'agriculture biologique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Valorisation des produits locaux transformés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Formation aux techniques modernes durables</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-amber-700 mb-3">🎯 Objectifs</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>Augmentation de la productivité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>Amélioration de la sécurité alimentaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>Création de coopératives agricoles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Agriculture