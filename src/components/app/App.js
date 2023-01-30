import React, {useState} from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom"
import Login from '../login/Login';
import Home from '../home/Home';
import NavBar from '../navBar/NavBar'
import AnimalData from '../animal-items/AnimalCard/AnimalData';

import AnimalOrganizationData from '../organization-items/AnimalOrganizationData'



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
          <Route exact path="/animals"><AnimalData/></Route>
          <Route exact path="/organization" > <AnimalOrganizationData/> </Route>
          {/* <Route exact path="/type" > <Breeds/> </Route> */}
          <Route exact path="/"> <Home /> </Route>
        </Switch>
    </div>
    </>
   
  );
}

export default App;
