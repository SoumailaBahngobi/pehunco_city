import React, { useState } from 'react'
import type { ReactNode } from 'react'  // Import type-only
import { 
  Building2, Users, FileText, Settings, Landmark, 
  BarChart, TreePine, Wrench, Cpu, Archive, 
  Shield, Search, Download, ChevronDown, ChevronUp
} from 'lucide-react'

// Types pour l'organigramme
type ServiceType = {
  name: string;
  responsibilities: string[];
}

type StructureItemType = {
  name: string;
  role: string;
}

type OrganigrammeSection = {
  icon: ReactNode;  // Utilisation de ReactNode
  color: string;
  services?: ServiceType[];
  structure?: StructureItemType[];
  items?: string[];
}

type OrganigrammeStructure = {
  [key: string]: OrganigrammeSection;
}

type AcronymeType = {
  sigle: string;
  signification: string;
}

type DirectionType = {
  name: string;
  color: string;
  desc: string;
}

const Mairie = () => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({})

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const organigrammeStructure: OrganigrammeStructure = {
    "Personnel Politique": {
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-700",
      items: [
        "Maire - Koto Orou Maré",
        "Adjoints au Maire",
        "Conseillers Municipaux"
      ]
    },
    "Direction des Affaires Administratives et Financières (DAAF)": {
      icon: <FileText className="w-6 h-6" />,
      color: "bg-green-100 text-green-700",
      services: [
        {
          name: "Service des Ressources Humaines et des Affaires Générales (SRHAG)",
          responsibilities: [
            "Gestion du personnel",
            "Affaires générales",
            "Archives administratives"
          ]
        },
        {
          name: "Service du Budget, des Finances et des Comptabilités (SBFC)",
          responsibilities: [
            "Élaboration du budget",
            "Gestion financière",
            "Comptabilité municipale"
          ]
        },
        {
          name: "Service de Recouvrement des Recettes (SRR)",
          responsibilities: [
            "Perception des impôts",
            "Recouvrement des taxes",
            "Gestion des recettes"
          ]
        }
      ]
    },
    "Direction du Développement Local et de la Planification (DDLP)": {
      icon: <BarChart className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-700",
      services: [
        {
          name: "Service du Développement, de la Planification, du Suivi-Evaluation et de la Statistique (SDPSES)",
          responsibilities: [
            "Planification communale",
            "Suivi-évaluation des projets",
            "Statistiques locales"
          ]
        },
        {
          name: "Service de la Coopération et des Affaires Sociales (SCAS)",
          responsibilities: [
            "Coopération décentralisée",
            "Affaires sociales",
            "Actions communautaires"
          ]
        }
      ]
    },
    "Direction des Affaires Domaniales et Environnementales (DADE)": {
      icon: <TreePine className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-700",
      services: [
        {
          name: "Service des Affaires Domaniales et de l'Urbanisme (SADU)",
          responsibilities: [
            "Gestion du domaine communal",
            "Urbanisme et aménagement",
            "Permis de construire"
          ]
        },
        {
          name: "Service de la Protection de l'Environnement (SPE)",
          responsibilities: [
            "Protection de l'environnement",
            "Gestion des déchets",
            "Sensibilisation écologique"
          ]
        }
      ]
    },
    "Direction des Services Techniques (DST)": {
      icon: <Wrench className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-700",
      services: [
        {
          name: "Service des Études et du Suivi des Travaux (SEST)",
          responsibilities: [
            "Études techniques",
            "Suivi des chantiers",
            "Contrôle qualité"
          ]
        },
        {
          name: "Service de la Voirie, de l'Entretien et de la Maintenance des Infrastructures (SVEMI)",
          responsibilities: [
            "Entretien des routes",
            "Maintenance des infrastructures",
            "Voirie communale"
          ]
        }
      ]
    },
    "Direction des Systèmes d'Information (DSI)": {
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-700",
      services: [
        {
          name: "Service des Infrastructures et Systèmes (SIS)",
          responsibilities: [
            "Infrastructure informatique",
            "Réseaux et télécoms",
            "Maintenance matérielle"
          ]
        },
        {
          name: "Service des Applications et E-Services (SAE-S)",
          responsibilities: [
            "Développement d'applications",
            "Services en ligne",
            "Digitalisation"
          ]
        },
        {
          name: "Service d'Archivage et de Gestion des Savoirs (SAGeS)",
          responsibilities: [
            "Archivage numérique",
            "Gestion documentaire",
            "Base de connaissances"
          ]
        }
      ]
    },
    "Marchés Publics": {
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-100 text-red-700",
      structure: [
        {
          name: "Personne Responsable des Marchés Publics (PRMP)",
          role: "Responsable des procédures de marchés publics"
        },
        {
          name: "Cellule de Contrôle des Marchés Publics (CCMP)",
          role: "Contrôle et vérification des marchés"
        },
        {
          name: "Secrétariat Permanent de la PRMP (SP-PRMP)",
          role: "Support administratif permanent"
        },
        {
          name: "Commission d'Ouverture et d'Évaluation des offres (COE)",
          role: "Évaluation des propositions"
        }
      ]
    },
    "Services Déconcentrés": {
      icon: <Landmark className="w-6 h-6" />,
      color: "bg-amber-100 text-amber-700",
      items: [
        "Secrétariat Administratif d'Arrondissement (SAA)",
        "Division des Services Techniques (DST)",
        "Division des Affaires Courantes (DAC)"
      ]
    },
    "Cabinet du Maire": {
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-cyan-100 text-cyan-700",
      items: [
        "Secrétaire Particulier (SP)",
        "Secrétariat Administratif (SA)",
        "Collaborateurs directs"
      ]
    }
  }

  const acronymes: AcronymeType[] = [
    { sigle: "PRMP", signification: "Personne Responsable des Marchés Publics" },
    { sigle: "CCMP", signification: "Cellule de Contrôle des Marchés Publics" },
    { sigle: "SP-PRMP", signification: "Secrétariat Permanent de la Personne Responsable des Marchés Publics" },
    { sigle: "COE", signification: "Commission d'Ouverture et d'Évaluation des offres" },
    { sigle: "DAAF", signification: "Direction des Affaires Administratives et Financières" },
    { sigle: "DDLP", signification: "Direction du Développement Local et de la Planification" },
    { sigle: "DADE", signification: "Direction des Affaires Domaniales et Environnementales" },
    { sigle: "DST", signification: "Direction des Services Techniques" },
    { sigle: "DSI", signification: "Direction des Systèmes d'Information" },
    { sigle: "SRHAG", signification: "Service des Ressources Humaines et des Affaires Générales" },
    { sigle: "SBFC", signification: "Service du Budget, des Finances et des Comptabilités" },
    { sigle: "SRR", signification: "Service de Recouvrement des Recettes" },
    { sigle: "SDPSES", signification: "Service du Développement, de la Planification, du Suivi-Evaluation et de la Statistique" },
    { sigle: "SCAS", signification: "Service de la Coopération et des Affaires Sociales" },
    { sigle: "SADU", signification: "Service des Affaires Domaniales et de l'Urbanisme" },
    { sigle: "SPE", signification: "Service de la Protection de l'Environnement" },
    { sigle: "SEST", signification: "Service des Études et du Suivi des Travaux" },
    { sigle: "SVEMI", signification: "Service de la Voirie, de l'Entretien et de la Maintenance des Infrastructures" },
    { sigle: "SIS", signification: "Service des Infrastructures et Systèmes" },
    { sigle: "SAE-S", signification: "Service des Applications et E-Services" },
    { sigle: "SAGeS", signification: "Service d'Archivage et de Gestion des Savoirs" },
    { sigle: "SAA", signification: "Secrétariat Administratif d'Arrondissement" },
    { sigle: "DAC", signification: "Division des Affaires Courantes" },
    { sigle: "SP", signification: "Secrétaire Particulier" },
    { sigle: "SA", signification: "Secrétariat Administratif" }
  ]

  const directions: DirectionType[] = [
    { name: "DAAF", color: "bg-green-50 text-green-800", desc: "Affaires Administratives" },
    { name: "DDLP", color: "bg-purple-50 text-purple-800", desc: "Développement Local" },
    { name: "DADE", color: "bg-emerald-50 text-emerald-800", desc: "Affaires Domaniales" },
    { name: "DST/DSI", color: "bg-orange-50 text-orange-800", desc: "Services Techniques & SI" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <Building2 className="w-12 h-12" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">Mairie de Péhunco</h1>
                  <p className="text-xl text-blue-200 mt-2">Organisation et Structure Administrative</p>
                </div>
              </div>
              <p className="text-blue-100 max-w-2xl">
                "Solidarité, Travail, Équité" - Une administration au service de la population
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-center">
                <p className="text-2xl font-bold">Maire</p>
                <p className="text-xl">Koto Orou Maré</p>
                <p className="text-sm text-blue-200 mt-2">Administration Communale</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Settings className="w-8 h-8 text-blue-600" />
            Structure Organisationnelle
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            La Mairie de Péhunco est organisée autour de plusieurs directions et services spécialisés, 
            chacun œuvrant pour le développement harmonieux de la commune. Cette structure garantit 
            une gestion efficace des affaires publiques et un service optimal aux citoyens.
          </p>
        </div>

        {/* Organigramme Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {Object.entries(organigrammeStructure).map(([section, data]) => (
            <div key={section} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${data.color}`}>
                    {data.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{section}</h3>
                </div>
                {expandedSections[section] ? (
                  <ChevronUp className="w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>

              {/* Expanded Content */}
              {expandedSections[section] && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  {/* Services */}
                  {data.services && (
                    <div className="space-y-4">
                      {data.services.map((service: ServiceType, index: number) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-bold text-gray-800 mb-2">{service.name}</h4>
                          {service.responsibilities && (
                            <ul className="space-y-1">
                              {service.responsibilities.map((resp: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Structure (for Marchés Publics) */}
                  {data.structure && (
                    <div className="space-y-3">
                      {data.structure.map((item: StructureItemType, index: number) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-bold text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{item.role}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Simple Items */}
                  {data.items && (
                    <ul className="space-y-2">
                      {data.items.map((item: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Visual Organigramme */}
        <div className="mb-12 bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Schéma de l'Organigramme
          </h2>
          <div className="relative">
            {/* Maire */}
            <div className="flex flex-col items-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg w-64 text-center">
                <Building2 className="w-10 h-10 mx-auto mb-3" />
                <h3 className="font-bold text-xl">Maire</h3>
                <p className="text-sm opacity-90">Koto Orou Maré</p>
              </div>
              <div className="h-8 w-0.5 bg-blue-400"></div>
            </div>

            {/* Niveau 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow">
                  <h4 className="font-bold">Cabinet du Maire</h4>
                  <p className="text-sm">SP, SA, Collaborateurs</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow">
                  <h4 className="font-bold">Personnel Politique</h4>
                  <p className="text-sm">Adjoints, Conseillers</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-red-100 text-red-800 p-4 rounded-lg shadow">
                  <h4 className="font-bold">Marchés Publics</h4>
                  <p className="text-sm">PRMP, CCMP, COE</p>
                </div>
              </div>
            </div>

            {/* Niveau 2 - Directions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {directions.map((dir: DirectionType, index: number) => (
                <div key={index} className="text-center">
                  <div className={`${dir.color} p-4 rounded-lg shadow border`}>
                    <h4 className="font-bold">{dir.name}</h4>
                    <p className="text-xs">{dir.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Services Déconcentrés */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-amber-50 text-amber-800 p-4 rounded-lg shadow border">
                <h4 className="font-bold">Services Déconcentrés</h4>
                <p className="text-sm">SAA, DST, DAC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lexique des Acronymes */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <Search className="w-6 h-6 text-blue-600" />
              Lexique des Acronymes
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FileText className="w-4 h-4" />
              <span>{acronymes.length} acronymes référencés</span>
            </div>
          </div>  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {acronymes.map((acronyme: AcronymeType, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">
                    {acronyme.sigle}
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{acronyme.signification}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Info */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Informations Pratiques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-700 mb-4">Horaires d'Ouverture</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-bold">7h30 - 15h30</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-bold">8h00 - 12h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-bold text-red-600">Fermé</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-4">Documents Utiles</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow border hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-700">Télécharger l'organigramme complet</span>
                  <Download className="w-5 h-5 text-blue-600" />
                </button>
                <button className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow border hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-700">Guide des procédures administratives</span>
                  <FileText className="w-5 h-5 text-green-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Mairie de Péhunco</span>
              </div>
              <p className="text-gray-400 text-sm">
                Commune de Péhunco - Département de l'Atacora<br />
                Bénin - Afrique de l'Ouest
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg font-bold mb-2">Devise Communale</p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-blue-700 rounded-full text-sm">Solidarité</span>
                <span className="px-4 py-2 bg-green-700 rounded-full text-sm">Travail</span>
                <span className="px-4 py-2 bg-purple-700 rounded-full text-sm">Équité</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Mairie