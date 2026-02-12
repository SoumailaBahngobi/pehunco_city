import { MapPin, Users, Leaf } from 'lucide-react'
import cabane from '../../assets/img/cabane.jpg'
import paysage from '../../assets/img/paysage_pehunco.jpg'

const Histoire = () => {
  return (
    <div className="space-y-16 text-gray-800">
      {/* Hero Section */}
      <div
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${cabane})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg font-serif">Histoire et Géographie de Péhunco</h1>
          <p className="text-xl md:text-2xl drop-shadow-lg italic">Des origines ancestrales à la terre nourricière</p>
        </div>
      </div>

      {/* Section Histoire */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-amber-900 border-b-2 border-amber-200 pb-4">
          Histoire de Péhunco
        </h2>
        
        {/* Origines */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-l-4 border-amber-600 mb-8">
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold text-amber-800">Péhunco</span> serait créée vers les années 1770 par des chasseurs Baatombou venus de Kouandé et de Sinendé. 
              À leur arrivée dans la zone, ils y trouvèrent des villages comme Dasso. Les populations qui y vivaient seraient des forgerons et parleraient Baatonu.
            </p>
          </div>
        </div>

        {/* Étymologie */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Wassa Card */}
          <div className="bg-white rounded-xl p-8 shadow-xl border border-amber-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-100 rounded-lg">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-amber-800">"Wassa" (Ouassa)</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <h4 className="font-bold text-amber-700 mb-2">Version : "Souffrance"</h4>
                <p className="italic text-gray-700 mb-2">"Kon da n'wassaraco"</p>
                <p className="text-gray-700">
                  Les chasseurs disaient : <span className="font-semibold">"Je vais souffrir là où il n'y a rien"</span>. 
                  Wassaraco signifie "souffrir", désignant une zone sans ressources.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
                <h4 className="font-bold text-emerald-700 mb-2">Version : "Propreté"</h4>
                <p className="italic text-gray-700 mb-2">"Na dem koua wassa-wassa !"</p>
                <p className="text-gray-700">
                  Après s'être baigné dans la rivière <span className="font-semibold">Assari</span>, un chasseur s'exclama : 
                  <span className="font-semibold"> "Je suis devenu très propre à présent !"</span>
                </p>
              </div>
            </div>
          </div>

          {/* Péhunco Card */}
          <div className="bg-white rounded-xl p-8 shadow-xl border border-stone-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-stone-100 rounded-lg">
                <MapPin className="w-8 h-8 text-stone-700" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800">"Kpéwonkou" (Péhunco)</h3>
            </div>
            
            <div className="space-y-6">
              <div className="mb-6">
                <h4 className="font-bold text-stone-700 text-xl mb-4">"Pierre-Noire"</h4>
                <p className="text-gray-700 mb-4">
                  Une divinité protectrice à laquelle les chasseurs faisaient des sacrifices pour invoquer la pluie, 
                  demander la fécondité et prévenir les épidémies.
                </p>
              </div>

              <div className="bg-stone-50 p-6 rounded-lg">
                <p className="font-semibold text-stone-700">
                  La communauté s'est installée autour de cette divinité, donnant son nom au village : 
                  <span className="block text-2xl text-stone-800 mt-2">Kpéwonkou = Péhunco</span>
                </p>
                <p className="mt-4 text-sm italic text-stone-600">
                  Cette pierre noire existe encore aujourd'hui et les rituels se perpétuent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formation du nom */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12 border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Formation du nom officiel</h3>
          <p className="text-gray-700">
            Les concertations mutuelles lors des préparations des expéditions de chasse furent à l'origine du nom 
            <span className="font-semibold"> "wassara"</span> devenu aujourd'hui <span className="font-semibold">"Ouassa"</span>. 
            Avec l'arrivée du colon, les deux noms <span className="font-semibold">Wassa</span> et <span className="font-semibold">Kpéwonkou</span> 
            sont devenus <span className="font-bold text-blue-800">"Ouassa-Péhunco"</span>.
          </p>
        </div>
      </section>

      {/* Section Géographie */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-900 border-b-2 border-green-200 pb-4">
          Géographie de Péhunco
        </h2>

        {/* Bannière Géographique */}
        <div
          className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl mb-12"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${paysage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8">Situation Géographique</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Superficie</h4>
                <p className="text-3xl font-bold">1900 km²</p>
                <p className="text-sm opacity-90 mt-2">Pénéplaine entre l'Alibori et le Mékrou</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Localisation</h4>
                <p className="text-lg">Département de l'Atacora</p>
                <p className="text-sm opacity-90 mt-2">Entre les vallées de l'Alibori et du Mékrou</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Climat</h4>
                <p className="text-lg">Soudano-guinéen</p>
                <p className="text-sm opacity-90 mt-2">Saison pluvieuse : mai à octobre</p>
              </div>
            </div>
          </div>
        </div>

        {/* Structure Administrative */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Structure Administrative</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="w-8 h-8 text-blue-700" />
                </div>
                <h4 className="text-xl font-bold text-blue-900">Organisation Territoriale</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-blue-800">3 arrondissements :</span>
                    <p className="text-gray-700">Gnémasson, Péhunco, Tobré</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-blue-800">26 villages et quartiers :</span>
                    <p className="text-gray-700">Unités administratives éclatées</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-blue-800">Maire :</span>
                    <p className="text-gray-700">Koto Orou Maré</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <MapPin className="w-8 h-8 text-green-700" />
                </div>
                <h4 className="text-xl font-bold text-green-900">Limites Territoriales</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-green-800">Nord :</span>
                    <p className="text-gray-700">Commune de Kérou</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-green-800">Sud :</span>
                    <p className="text-gray-700">Commune de Djougou</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-green-800">Est :</span>
                    <p className="text-gray-700">Commune de Sinendé</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-green-800">Ouest :</span>
                    <p className="text-gray-700">Commune de Kouandé</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hydrographie */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-teal-100 rounded-lg">
              <Leaf className="w-8 h-8 text-teal-700" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-900">Hydrographie et Ressources Naturelles</h3>
              <p className="text-teal-700">Réseau hydrographique abondant</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-teal-800 mb-4">Cours d'eau principaux</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="font-semibold">Fleuve Mékrou</span> - À l'Ouest
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="font-semibold">Fleuve Alibori</span> - À l'Est
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="font-semibold">Nombreuses rivières</span> à régime torrentiel
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="font-semibold">Cours d'eau temporaires</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-teal-800 mb-4">Caractéristiques naturelles</h4>
              <div className="space-y-4">
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="font-semibold text-teal-700">Territoire essentiellement rural</p>
                  <p className="text-sm text-gray-600 mt-1">Paysage de pénéplaine agricole</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="font-semibold text-teal-700">Sol fertile</p>
                  <p className="text-sm text-gray-600 mt-1">Propice à l'agriculture et à l'élevage</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="font-semibold text-teal-700">Biodiversité riche</p>
                  <p className="text-sm text-gray-600 mt-1">Écosystèmes variés</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coopération intercommunale */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 shadow-lg border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Coopération Intercommunale</h3>
          <p className="text-gray-700 mb-4">
            Depuis 2014, Péhunco forme un établissement public de coopération intercommunale avec 
            <span className="font-semibold text-purple-800"> Kouandé et Kérou</span>, connu sous le vocable abrégé 
            <span className="font-bold text-purple-900"> "2KP"</span>.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-bold">2KP</div>
            <span className="text-gray-600">= Kouandé + Kérou + Péhunco</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Histoire