
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import Histoire from './components/histoire/Histoire'
import Agriculture from './components/activite_economiques/agriculture/Agriculture'
import Mairie from './components/mairie/Mairie'

describe('Tests du Projet Péhunco - Tous les Composants', () => {
  describe('1. Composant App - Navigation et Structure', () => {
    test('renders app without crashing', () => {
      render(<App />)
      expect(screen.getByRole('main')).toBeInTheDocument()
    })

    test('has navigation links', () => {
      render(<App />)
      const navigationLinks = [
        /accueil/i,
        /histoire/i,
        /agriculture/i,
        /mairie/i,
        /contact/i
      ]
      
      navigationLinks.forEach(link => {
        expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
      })
    })
  })

  describe('2. Composant Histoire - Contenu Historique', () => {
    beforeEach(() => {
      render(<Histoire />)
    })

    test('displays main history title', () => {
      expect(screen.getByText(/Histoire de Péhunco/i)).toBeInTheDocument()
    })

    test('contains etymology sections', () => {
      expect(screen.getByText(/"Wassa" \(Ouassa\)/i)).toBeInTheDocument()
      expect(screen.getByText(/"Kpéwonkou" \(Péhunco\)/i)).toBeInTheDocument()
    })

    test('displays timeline sections', () => {
      const timelineItems = [
        /Les Origines \(1900s\)/i,
        /Développement Moderne \(1950s-1970s\)/i,
        /Ère Contemporaine \(1980s-2000s\)/i,
        /Aujourd'hui et Demain/i
      ]
      
      timelineItems.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument()
      })
    })

    test('contains geographical information', () => {
      expect(screen.getByText(/1900 km²/i)).toBeInTheDocument()
      expect(screen.getByText(/Département de l'Atacora/i)).toBeInTheDocument()
    })

    test('displays demographic data', () => {
      expect(screen.getByText(/78 173 hab/i)).toBeInTheDocument()
      expect(screen.getByText(/Bariba \(Baatombu\)/i)).toBeInTheDocument()
      expect(screen.getByText(/Peulh/i)).toBeInTheDocument()
    })
  })

  describe('3. Composant Agriculture - Données Agricoles', () => {
    beforeEach(() => {
      render(<Agriculture />)
    })

    test('displays agriculture title', () => {
      expect(screen.getByText(/Agriculture à Péhunco/i)).toBeInTheDocument()
    })

    test('lists all cereal types', () => {
      const cereals = [
        /Mil/i,
        /Sorgho/i,
        /Arachide/i,
        /Maïs/i
      ]
      
      cereals.forEach(cereal => {
        expect(screen.getByText(cereal)).toBeInTheDocument()
      })
    })

    test('lists all tuber types', () => {
      const tubers = [
        /Igname/i,
        /Manioc/i,
        /Patate douce/i
      ]
      
      tubers.forEach(tuber => {
        expect(screen.getByText(tuber)).toBeInTheDocument()
      })
    })

    test('displays agricultural value chain', () => {
      const valueChain = [
        /Commercialisation/i,
        /Transformation/i,
        /Conservation/i
      ]
      
      valueChain.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument()
      })
    })

    test('shows agricultural calendar', () => {
      expect(screen.getByText(/Cycle Agricole Annuel/i)).toBeInTheDocument()
      expect(screen.getByText(/Préparation/i)).toBeInTheDocument()
      expect(screen.getByText(/Récolte/i)).toBeInTheDocument()
    })
  })

  describe('4. Composant Mairie - Organisation Administrative', () => {
    beforeEach(() => {
      render(<Mairie />)
    })

    test('displays municipality title', () => {
      expect(screen.getByText(/Mairie de Péhunco/i)).toBeInTheDocument()
      expect(screen.getByText(/Koto Orou Maré/i)).toBeInTheDocument()
    })

    test('contains motto', () => {
      expect(screen.getByText(/Solidarité, Travail, Équité/i)).toBeInTheDocument()
    })

    test('has organizational structure sections', () => {
      const sections = [
        /Personnel Politique/i,
        /Direction des Affaires Administratives et Financières/i,
        /Direction du Développement Local et de la Planification/i,
        /Direction des Affaires Domaniales et Environnementales/i,
        /Direction des Services Techniques/i,
        /Marchés Publics/i,
        /Services Déconcentrés/i,
        /Cabinet du Maire/i
      ]
      
      sections.forEach(section => {
        expect(screen.getByText(section)).toBeInTheDocument()
      })
    })

    test('acronyms dictionary is present', () => {
      expect(screen.getByText(/Lexique des Acronymes/i)).toBeInTheDocument()
      expect(screen.getByText(/PRMP/i)).toBeInTheDocument()
      expect(screen.getByText(/DAAF/i)).toBeInTheDocument()
    })

    test('visual organigram is displayed', () => {
      expect(screen.getByText(/Schéma de l'Organigramme/i)).toBeInTheDocument()
      expect(screen.getByText(/Maire/i)).toBeInTheDocument()
    })

    test('practical information is shown', () => {
      expect(screen.getByText(/Horaires d'Ouverture/i)).toBeInTheDocument()
      expect(screen.getByText(/7h30 - 15h30/i)).toBeInTheDocument()
      expect(screen.getByText(/Documents Utiles/i)).toBeInTheDocument()
    })

    test('sections are expandable/collapsible', async () => {
      const firstSectionButton = screen.getAllByRole('button', { 
        name: /Personnel Politique/i 
      })[0]
      
      // Vérifier que la section est fermée au départ
      expect(screen.queryByText(/Adjoints au Maire/i)).not.toBeInTheDocument()
      
      // Cliquer pour ouvrir
      fireEvent.click(firstSectionButton)
      
      // Vérifier que le contenu est maintenant visible
      await waitFor(() => {
        expect(screen.getByText(/Adjoints au Maire/i)).toBeInTheDocument()
        expect(screen.getByText(/Conseillers Municipaux/i)).toBeInTheDocument()
      })
      
      // Cliquer pour fermer
      fireEvent.click(firstSectionButton)
      
      // Vérifier que le contenu est à nouveau caché
      await waitFor(() => {
        expect(screen.queryByText(/Adjoints au Maire/i)).not.toBeInTheDocument()
      })
    })

    test('all acronyms are listed', () => {
      const acronyms = [
        'PRMP', 'CCMP', 'SP-PRMP', 'COE', 'DAAF', 'DDLP', 'DADE', 'DST', 'DSI',
        'SRHAG', 'SBFC', 'SRR', 'SDPSES', 'SCAS', 'SADU', 'SPE', 'SEST', 'SVEMI',
        'SIS', 'SAE-S', 'SAGeS', 'SAA', 'DAC', 'SP', 'SA'
      ]
      
      acronyms.forEach(acronym => {
        expect(screen.getByText(acronym)).toBeInTheDocument()
      })
    })
  })

  describe('5. Tests d\'Intégration - Navigation entre Pages', () => {
    test('theme consistency across components', () => {
      // Vérifier que tous les composants utilisent les mêmes couleurs/thème
      const histoireComponent = render(<Histoire />)
      const agricultureComponent = render(<Agriculture />)
      const mairieComponent = render(<Mairie />)
      
      // Vérifier la présence de classes Tailwind communes
      const histoireContainer = histoireComponent.container.querySelector('.bg-gradient-to-b')
      const agricultureContainer = agricultureComponent.container.querySelector('.bg-gradient-to-b')
      const mairieContainer = mairieComponent.container.querySelector('.bg-gradient-to-b')
      
      expect(histoireContainer).toHaveClass('from-gray-50', 'to-white')
      expect(agricultureContainer).toHaveClass('from-gray-50', 'to-white')
      expect(mairieContainer).toHaveClass('from-gray-50', 'to-white')
    })
  })

  describe('6. Tests de Performance et Accessibilité', () => {
    test('all images have alt text', () => {
      render(<Mairie />)
      const images = screen.getAllByRole('img')
      
      images.forEach(img => {
        expect(img).toHaveAttribute('alt')
        expect(img.getAttribute('alt')).not.toBe('')
      })
    })

    test('buttons have descriptive text', () => {
      render(<Mairie />)
      const buttons = screen.getAllByRole('button')
      
      buttons.forEach(button => {
        // Vérifier que les boutons ont soit du texte, soit aria-label
        const hasText = button.textContent.trim() !== ''
        const hasAriaLabel = button.hasAttribute('aria-label')
        
        expect(hasText || hasAriaLabel).toBe(true)
      })
    })

    test('headings hierarchy is correct', () => {
      render(<Histoire />)
      const h1 = screen.getByRole('heading', { level: 1 })
      const h2 = screen.getAllByRole('heading', { level: 2 })
      const h3 = screen.getAllByRole('heading', { level: 3 })
      
      expect(h1).toBeInTheDocument()
      expect(h2.length).toBeGreaterThan(0)
      expect(h3.length).toBeGreaterThan(0)
    })
  })

  describe('7. Tests de Données - Vérification des Informations', () => {
    test('historical dates are correct', () => {
      render(<Histoire />)
      expect(screen.getByText(/années 1770/i)).toBeInTheDocument()
    })

    test('population data matches', () => {
      render(<Histoire />)
      expect(screen.getByText(/78 173 habitants/i)).toBeInTheDocument()
      expect(screen.getByText(/65%/i)).toBeInTheDocument() // Bariba
      expect(screen.getByText(/33%/i)).toBeInTheDocument() // Peulh
    })

    test('agricultural seasons are correct', () => {
      render(<Agriculture />)
      expect(screen.getAllByText(/Mars-Avril/i).length).toBeGreaterThan(0)
      expect(screen.getAllByText(/Septembre-Octobre/i).length).toBeGreaterThan(0)
    })

    test('municipality acronyms are defined', () => {
      render(<Mairie />)
      
      // Vérifier quelques acronymes importants
      const prmpElement = screen.getByText('PRMP')
      expect(prmpElement).toBeInTheDocument()
      expect(screen.getByText(/Personne Responsable des Marchés Publics/i)).toBeInTheDocument()
    })
  })

  describe('8. Tests Responsive Design', () => {
    test('components have responsive classes', () => {
      // Histoire
      const { container: histoireContainer } = render(<Histoire />)
      expect(histoireContainer.querySelector('.grid-cols-1.lg\\:grid-cols-2')).toBeInTheDocument()
      
      // Agriculture
      const { container: agricultureContainer } = render(<Agriculture />)
      expect(agricultureContainer.querySelector('.md\\:grid-cols-2')).toBeInTheDocument()
      
      // Mairie
      const { container: mairieContainer } = render(<Mairie />)
      expect(mairieContainer.querySelector('.md\\:grid-cols-2')).toBeInTheDocument()
    })
  })
})