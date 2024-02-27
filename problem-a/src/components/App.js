import React from 'react'; //import React Component
import { AboutNav } from './Nav';
import PetPage from './PetPage';
import PetList from './PetList';
import AboutPage from './AboutPage';
import ResourcesPage from './ResourcesPage';
import PetDetail from './PetDetail';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import SAMPLE_DOGS from '../data/dogs.json'; //a sample list of dogs (model)

function App(props) {

  const pets = SAMPLE_DOGS; //pretend this was loaded externally or via prop

  return (
    <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="adopt" element={<PetPage />} />
        <Route path="index" element={<PetList props={props.pets} />} />
    </Routes>
    
  );
}

export default App;

/*

<div>
  <header className="jumbotron py-4 mb-4">
    <div className="container">
      <h1>Adopt a Pet</h1>
    </div>
  </header>
    
  <main className="container">
    <div className="row">
      <div className="col-3">
        <AboutNav />
      </div>
      <div className="col">
        <PetList pets={pets} />
      </div>
    </div>
  </main>

  <footer className="container">
    <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
  </footer>
</div>

*/
