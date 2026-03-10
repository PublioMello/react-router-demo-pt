import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Reviews from './Reviews/Reviews';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import AboutMe from './AboutMe/AboutMe';
// Importe os novos componentes
import Contact from './AboutMe/Contact';
import Hobbies from './AboutMe/Hobbies';
import MyStory from './AboutMe/MyStory';
import SiteHistory from './AboutUs/SiteHistory'
import SiteMission from './AboutUs/SiteMission'
import './App.css';

function App() {
  // Adicione as rotas filhas à rota /about-me.
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        {/* Aqui tem que abrir e Fechar o Router para poder adicionar
            coisas no interior dele */}
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} >
          <Route path='site-history' element={<SiteHistory/>}/>
          <Route path='site-mission' element={<SiteMission/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;