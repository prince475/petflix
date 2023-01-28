import React, {useState} from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom"
import Login from '../login/Login';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import AnimalData from '../animal-items/AnimalCard/AnimalData';
import AnimalList from '../animal-items/AnimalList/AnimalList';

//import AnimalOrganizationList from '../organization-items/AnimalOrganizationList'

import AnimalOrganizationData from '../organization-items/AnimalOrganizationData'
// import Breeds from '../breeds/Breeds';


function App() {
  const [token, setToken] = useState()
  
  if (!token) {
    return <Login setToken={setToken}/>
  }


  return (
    <>
     <NavBar  />
     <div className='wrapper'>
      <Switch>
          <Route exact path="/animals" > <AnimalList/> </Route>
          <Route exact path="/card"><AnimalData/></Route>
          <Route exact path="/organization" > <AnimalOrganizationData/> </Route>
          {/* <Route exact path="/type" > <Breeds/> </Route> */}
          {/* <Route exact path="/organization"><AnimalCard /></Route> */}
          <Route exact path="/"> <Home /> </Route>
        </Switch>
    </div>
    </>
   
  );
}

export default App;
