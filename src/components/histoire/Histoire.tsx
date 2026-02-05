
import cabane from '../../assets/img/cabane.jpg'

const Histoire = () => {
  return (
    <div className="space-y-12">
      <div 
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cabane})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Histoire de Pehunco</h1>
            <p className="text-lg drop-shadow-lg">Un voyage à travers le temps</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-10">
        <h2 className="text-4xl font-bold text-white">Chronologie</h2>

        <div className="space-y-6">
          {/* 1900s */}
          <div className="">
            <div className="">
              <h3 className="">Les Origines (1900s)</h3>
              <p className="text-slate-300">
                Pehunco a ses racines profondément ancrées dans les traditions et la culture locale. 
                La communauté s'est progressivement développée autour de l'agriculture et de l'élevage, 
                formant le tissu social qui persiste aujourd'hui.
              </p>
            </div>
          </div>

          {/* 1950s */}
          <div className="">
            <div className="">
              <h3 className="">Développement Moderne (1950s-1970s)</h3>
              <p className="">
                Au cours de cette période, Pehunco a connu une transformation significative. 
                Les infrastructures se sont améliorées, et la communauté a renforcé ses liens 
                avec les régions voisines, favorisant le commerce et l'échange culturel.
              </p>
            </div>
          </div>

          {/* 1980s-2000s */}
          <div className="">
            <div className="">
              <h3 className="">Ère Contemporaine (1980s-2000s)</h3>
              <p className="text-slate-300">
                Pehunco a continué à se développer en preservant ses valeurs traditionnelles. 
                L'éducation, la santé et les services communautaires se sont améliorés, 
                offrant une meilleure qualité de vie à ses habitants.
              </p>
            </div>
          </div>

          {/* Modern Era */}
          <div className="">
            <div className="">
              <h3 className="">Aujourd'hui et Demain (2000s-Présent)</h3>
              <p className="text-slate-300">
                Aujourd'hui, Pehunco regarde vers l'avenir avec optimisme. La communauté travaille 
                au développement durable, à l'innovation et à l'amélioration continue tout en 
                honorant son riche héritage culturel et historique.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Heritage */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold text-white">Patrimoine Culturel</h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          Le patrimoine culturel de Pehunco est un élément central de son identité. 
          Les traditions, les arts, la musique et les festivals reflètent les valeurs 
          et l'âme de notre communauté, transmises de génération en génération.
        </p>
      </section>
    </div>
  )
}

export default Histoire