
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Navbar from './Navbar';
import ProjectLayout from '../templates/ProjectLayout';
import PokemonProject from '../pages/projects/PokemonProject';


function App() {
  return (

    <div className="App">

      <BrowserRouter>

      {/* This is our custom navbar */}
      <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path="/projects" element={<ProjectLayout />}>
            <Route path="pokemon" element={<PokemonProject />}> </Route>
            <Route path="/projects/pokemon/:pokemonNumber" element={<PokemonProject />}> </Route>
          </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
