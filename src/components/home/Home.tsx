
import guerra1 from '../../assets/img/guerra1.jpg'
import ba from '../../assets/img/baobab.jpg'
import ca from '../../assets/img/cabane.jpg'
import ac from '../../assets/img/art_culture.jpg'
import gaani from  '../../assets/img/gaani.jpg'
import tata from  '../../assets/img/tata.jpg'

function Home() {
  return (
    <div className="space-y-16">
      <section

      >
        <div className="relative z-10 text-center space-y-6">
          <h1 className="text-7xl font-bold drop-shadow-lg leading-tight">Bienvenue à Pehunco</h1>
          <p className="text-2xl text-white/95 drop-shadow-lg max-w-3xl mx-auto">Découvrez l'histoire, la culture et l'économie d'une communauté vibrante</p>
          <button className="mt-8 px-8 py-4 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105">
            Explorer
          </button>
        </div>
      </section>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="">
          <div className="text-2xl  text-black">
            <button><h2 className="mt-8 px-4 py-1 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105">À Propos</h2></button>
            <img src={ba} alt="Guerra1" className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text text-black">Découvrez l'histoire riche et la culture unique de Pehunco, ses traditions et ses racines profondément ancrées.</p>
            <div className="">
              <a href="/about" className="mt-8 px-4 py-1 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-100">Savoir  plus</a>
            </div>
          </div>
        </div>

        <div className="group card bg-gradient-to-br from-slate-800 to-slate-700 shadow-xl hover:shadow-2xl transition border border-slate-600 hover:border-blue-500">
          <div className="card-body">
            <h2 className="card-title text-2xl text-white">Histoire</h2>
            <img src={gaani} alt="Histoire de Pehunco" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-slate-300">Plongez dans les récits fascinants du passé de Pehunco et de ses personnalités marquantes.</p>
            <div className="card-actions justify-end">
              <a href="/histoire" className="mt-8 px-4 py-1 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105">Découvrir</a>
            </div>
          </div>
        </div>

        <div className="group card bg-gradient-to-br from-slate-800 to-slate-700 shadow-xl hover:shadow-2xl transition border border-slate-600 hover:border-blue-500">
          <div className="card-body">
            <h2 className="card-title text-2xl text-white">Culture</h2>
            <img src={tata} alt="Culture de Pehunco" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-slate-300">Découvrez les traditions, les arts et les coutumes de notre communauté.</p>
            <div className="card-actions justify-end">
              <a href="/culture" className="mt-8 px-4 py-1 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105">Explorer</a>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <h1 className=' flex justify-center text-3xl font-bold text-black'>Activités Economiques</h1>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-gray-100 rounded-lg shadow-md'>

          <img src={guerra1} alt="Guerra1" className="w-full h-48 object-cover rounded-lg" />
          <p>
            <a href="/elevage" className="">
              <h3 className="mt-8 px-4 py-1 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105"> Élevage</h3>
              <p className="">Une activité importante pour la subsistance et le développement.</p>
            </a>
          </p>
          <p>
            <a href="/agriculture" className="">

              <h3 className="mt-8 px-4 py-1 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105"> Agriculture</h3>
              <p className="">Une activité importante pour la subsistance et le développement.</p>
            </a>
          </p>
          <p>
            <a href="/peche" className="">
              <h3 className="mt-8 px-4 py-1 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105"> Pêche</h3>
              <p className="">Explorez cette activité traditionnelle de notre communauté.</p>
            </a>
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className=" mt-8 px-4 py-1 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105">Arrondissements</h2>
        <img src={ca} alt="tam" className="w-full h-64 object-cover rounded-lg mb-4" />
        <div className="flex flex-col md:flex-row gap-6">
          <a href="/pehunco-centre" className="">
            <p className="">
              <h3 className="text-3xl font-bold text-black"> Pehunco Centre</h3>
              <p className="">Le cœur administratif et culturel de la commune.</p>
            </p>
          </a>
          <a href="/gninmasson" className="">
            <p className="">
              <h3 className=" text-3xl font-bold text-black group-hover:text-green-400 transition"> Gninmasson</h3>
              <p className="">Une zone dynamique avec ses propres caractéristiques.</p>
            </p>
          </a>
          <a href="/tobre" className="">
            <p className="">
              <h3 className=" text-3xl font-bold text-black group-hover:text-orange-400 transition"> Tobré</h3>
              <p className="">Découvrez les spécificités de cet arrondissement.</p>
            </p>
          </a>
        </div>
      </section>

      <section className=''>
        
        <div className="flex flex-col">
          <a href="/art-culture" className=" flex justify-center"><h2 ><button className=" mt-8 px-8 py-4 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105">Art & Culture</button></h2></a>
          <img src={ac} alt="art_culture" className="w-full h-full object-contain rounded-lg mb-4 w-full md:w-auto" />
        
          <p className="text-3xl text-black">Explorez les traditions, les arts et la richesse culturelle de Pehunco
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat, tempore amet sint quae enim? Rerum in sint omnis <br /> similique sunt voluptates, reiciendis ut numquam optio, repudiandae itaque? Perspiciatis, tempore!
          </p>
        
        </div>
      </section>
    </div>
  )
}

export default Home