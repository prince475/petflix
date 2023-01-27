import React from 'react';
import AnimalOrganizationData from './components/organization-items/AnimalOrganizationData';
//import AnimalOrganizationList from './components/organization-items/AnimalOrganizationList';
import './App.css'

import React from 'react';
//import AnimalData from './components/animal-items/AnimalCard/AnimalData';
// import Test from './components/Test';
import AnimalList from './components/animal-items/AnimalList/AnimalList';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes , Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <AnimalList />
      {/* <AnimalData /> */}
      <AnimalOrganizationData />
    </div>
  );
}

export default App;
