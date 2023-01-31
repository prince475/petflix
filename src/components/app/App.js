import React, {useState} from 'react';
import './App.css';
// import { Route, Switch} from "react-router-dom"
import Login from '../login/Login';
// import Home from '../home/Home';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
// import AnimalData from '../animal-items/AnimalCard/AnimalData';

// import AnimalOrganizationData from '../organization-items/AnimalOrganizationData'



function App() {
  const [token, setToken] = useState()
  
  if (!token) {
    return <Login setToken={setToken}/>
  }


  return (
    <>
     <NavBar  />
     <Footer />
     <div className='wrapper'>
      
    </div>
    </>
   
  );
}

export default App;
