
import guerra from '../../../assets/img/guerra.jpg'
import sarclage from '../../../assets/img/sarclage.jpg'
import un_mois_mais from '../../../assets/img/un_mois_mais.jpg'
import chargement_coton from '../../../assets/img/chargement_coton.jpg'

const Agriculture = () => {
 
    const tubercules = [
      { name: 'Igname', description: 'Très important  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',semance:'Mars-Avril', image_semence: '../../../assets/img/igname.jpg',  traitement:'Traitement', image_traitement: '../../../assets/img/igname.jpg' , recolte:'Septembre-Octobre', image_recolte: '../../../assets/img/igname.jpg' },
      { name: 'Manioc', description: 'Important, Lorem ipsum dolor, sit amet consectetur adipisicing elit, Lorem ipsum dolor, sit amet consectetur adipisicing elit.', semance:'Mars-Avril', traitement:'Traitement', image_traitement: '../../../assets/img/manioc.jpg', recolte:'Septembre-Octobre', image: '../../../assets/img/manioc.jpg' },
      { name: 'Pâte douce', description: 'Modéré, Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit.', semance:'Mars-Avril', traitement:'Traitement', recolte:'Septembre-Octobre', image: '../../../assets/img/pate_douce.jpg' },
    ]

 const  cereals = [
    { name: 'Mil', description: 'Très important, Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit.', semance:'Mars-Avril', traitement:'Traitement', recolte:'Septembre-Octobre', image: '../../../assets/img/mil.jpg' },
    { name: 'Sorgho', description: 'Important, Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit.', semance:'Mars-Avril', traitement:'Traitement', recolte:'Septembre-Octobre', image: '../../../assets/img/sorgho.jpg' },
    { name: 'Arachide', description: 'Très important, Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit.', semance:'Mars-Avril', traitement:'Traitement', recolte:'Septembre-Octobre', image: '../../../assets/img/arachide.jpg' },
    { name: 'Maïs', description: 'Important, Lorem ipsum dolor, sit amet consectetur adipisicing elit,Lorem ipsum dolor, sit amet consectetur adipisicing elit.', semance:'Mars-Avril', traitement:'Traitement', recolte:'Septembre-Octobre', image: '../../../assets/img/mais.jpg' },
   ]

  return (
    <div className="space-y-6">
      {/* Header avec Image de Fond */}

      <title>Agriculture</title>
      <h1 className='text-3xl font-bold text-center mb-4'> <span>L'agriculture est l'activité économique principale</span></h1>
      <div
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0,0,0,0.6)), url(${un_mois_mais})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="">
          <div>
            <h1 className="text-2xl font-bold text-center"> Agriculture</h1>
            <p className="text-center italic">L'agriculture est l'activité économique principale de Pehunco, employant la majorité de la population.</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-center mb-4">Aperçu</h2>
            <p className="italic text-lg text-justify">
              L'agriculture est l'activité économique principale de Pehunco, employing la majorité de la population.
              Notre communauté cultive diverses cultures adaptées au climat local, avec des techniques
              traditionnelles combinées à des méthodes modernes pour maximiser la productivité.
            </p>
          </section>

          <section className='space-y-8'>
            <h2 className='text-3xl font-bold text-center'> Les différentes cultures</h2>
            <p >Les habitants cultivent diverses cultures adaptées au climat local.</p>

            <div className='card'>
              <h2 className='text-3xl font-bold text-center'>Les Céréales</h2>
              <div className='flex space-y-2 md:space-y-0 md:flex-row md:space-x-4 '>
                
                {cereals.map((cereal, index) => (
                  <div key={index} className='mb-4'>
                    <h3 className='text-2xl font-bold text-center'>{cereal.name}</h3>
                    <p>{cereal.description}</p>
                    <p><strong>Semence :</strong> {cereal.semance}</p>
                    <p><strong>Traitement :</strong> {cereal.traitement}</p>
                    <p><strong>Récolte :</strong> {cereal.recolte}</p>
                    <img src={cereal.image} alt={cereal.name} className='w-full h-48 object-cover rounded-lg mt-2' />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className='text-3xl font-bold text-center'>Les Tubercules</h2>
              <div className='flex space-y-2 md:space-y-0 md:flex-row md:space-x-4 '>
                { tubercules.map((tubercule, index) => (
                  <div key={index} className='mb-4'>
                    <h3 className='text-2xl font-bold text-center'>{tubercule.name}</h3>
                    <p>{tubercule.description}</p>
                    <p><strong>Semence 
                      <br />Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br />Mollitia perferendis itaque optio natus aspernatur unde laudantium omnis neque voluptas quae, <br />
                       esse nesciunt adipisci tenetur ad, voluptatum quis? Corporis, nobis sint.
                      :</strong> {tubercule.semance}</p>
                    <p><strong>Traitement  <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil eligendi facere excepturi unde distinctio laudantium, minus recusandae. Ut sint ex eligendi,  <br />
                     aperiam esse inventore cupiditate architecto dolores fugit! Corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur dolores quae amet exercitationem quaerat quasi sunt ad aperiam, voluptas saepe libero laudantium. Enim iusto neque corporis rerum? Dolorum, laudantium?
                    :</strong> {tubercule.traitement}</p>
                    <p><strong>Récolte :</strong> {tubercule.recolte}</p>
                    <img src={tubercule.image} alt={tubercule.name} className='w-full h-48 object-cover rounded-lg mt-2' />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-center'>Commercialisation</h2>
            <p>Les produits agricoles sont vendus sur les marchés locaux et régionaux, contribuant à l'économie de Pehunco.</p>
            <img src={chargement_coton} alt="Commercialisation des produits agricoles" className='w-full h-48 object-cover rounded-lg mt-2' />
          </section>
          <section>
            <div>
              <h2 className='text-2xl font-bold text-center'>Consommation ou conservation des produits agricoles</h2>
              <p>Les produits agricoles sont consommés localement ou conservés pour une utilisation ultérieure, selon les traditions et les ressources disponibles.</p>
              <img src={sarclage} alt="Consommation ou conservation des produits agricoles" className='w-full h-48 object-cover rounded-lg mt-2' />
            </div>
          </section>
          <section>
            <h2 className='text-2xl font-bold text-center'>Transformation des produits agricoles</h2>
            <p>Certains produits agricoles sont transformés en produits finis, tels que la farine de maïs <br />
             ou l'huile d'arachide, pour ajouter de la valeur et diversifier les sources de revenus. <br />
             </p>
            <img src={guerra} alt="Transformation des produits agricoles" className='w-full h-48 object-cover rounded-lg mt-2' />
          </section>
        </div>
      </div>
    </div>


  )
}

export default Agriculture