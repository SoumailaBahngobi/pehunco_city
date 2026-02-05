

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Layout from './components/Layout/Layout'
import { Outlet } from "react-router";
import g1 from './assets/img/guerra1.jpg'
import Histoire from './components/histoire/Histoire'
import Contact from './components/contact/Contact'
import Agriculture from './components/activite_economiques/agriculture/Agriculture'
import ArtCulture from './components/art-culture/ArtCulture'
import Elevage from './components/activite_economiques/elevage/Elevage'
import Peche from './components/activite_economiques/peche/Peche'
import Pehunco_centre from './components/arrondissements/pehunco_centre/Pehunco_centre'
import Tobre from './components/arrondissements/tobre/Tobre'
import Gninmasson from './components/arrondissements/gninmasson/Gninmasson'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="histoire" element={<Histoire />} />
          <Route path="agriculture" element={<Agriculture />} />
          <Route path="art-culture" element={<ArtCulture />} />
          <Route path="elevage" element={<Elevage />} />
          <Route path="peche" element={<Peche />} />
          <Route path="pehunco-centre" element={<Pehunco_centre />} />
          <Route path="tobre" element={<Tobre />} />
          <Route path="gninmasson" element={<Gninmasson />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
