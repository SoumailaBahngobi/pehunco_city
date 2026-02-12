import { useState } from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'
import cabane1 from '../../assets/img/cabane1.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Téléphone",
      details: "+226 XX XX XX XX",
      color: "blue"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: "contact@pehunco.bf",
      color: "green"
    },
    {
      icon: MapPinIcon,
      title: "Adresse",
      details: "Pehunco Centre, Burkina Faso",
      color: "purple"
    },
    {
      icon: ClockIcon,
      title: "Horaires",
      details: "Lun-Ven: 8h-17h",
      color: "yellow"
    },
  ]

  const colorClasses: Record<string, { border: string; text: string; bg: string }> = {
    blue: { border: "border-blue-500", text: "text-blue-400", bg: "bg-blue-500/10" },
    green: { border: "border-green-500", text: "text-green-400", bg: "bg-green-500/10" },
    purple: { border: "border-purple-500", text: "text-purple-400", bg: "bg-purple-500/10" },
    yellow: { border: "border-yellow-500", text: "text-yellow-400", bg: "bg-yellow-500/10" },
  }

  return (
    <div className="space-y-12">
      {/* Header avec Image */}
      <div 
        className="rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cabane1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Nous Contacter</h1>
            <p className="text-lg drop-shadow-lg">Connectez-vous avec nous pour toute question ou demande</p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Informations de Contact</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            const colors = colorClasses[info.color as keyof typeof colorClasses]
            return (
              <div 
                key={idx} 
                className={`rounded-xl p-6 border-2 ${colors.border} ${colors.bg} text-center transition-all hover:shadow-xl`}
              >
                <Icon className={`w-10 h-10 mx-auto mb-3 ${colors.text}`} />
                <h3 className={`font-bold mb-2 ${colors.text}`}>{info.title}</h3>
                <p className="text-slate-300">{info.details}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Envoyez-nous un Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text"
              name="name"
              placeholder="Votre Nom"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
            />
            <input 
              type="email"
              name="email"
              placeholder="Votre Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
            />
            <input 
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              required
              className="input input-bordered w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Votre Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="textarea textarea-bordered w-full bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Envoyer le Message
            </button>
          </form>
        </section>

        {/* Map Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Localisation</h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl overflow-hidden shadow-xl border border-slate-600 h-80">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.1234567890!2d-2.0!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiAywrAwMCcwMC4wIlc!5e0!3m2!1sfr!2sbf!4v1234567890"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
            ></iframe>
          </div>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
            <p className="text-slate-300 leading-relaxed">
              Visitez-nous à Pehunco Centre pour discuter de vos projets et collaborations.
              Notre équipe est prête à répondre à toutes vos questions.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact