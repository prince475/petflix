import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Login from '../login/Login';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';



function App() {
  const [token, setToken] = useState()
  
  if (!token) {
    return <Login setToken={setToken}/>
  }


  return (
    <div className='wrapper'>
      {/* <h1>Petflix</h1> */}
      <BrowserRouter>
      <NavBar  />
      <Switch>
          {/* <Route path="/"> <NavBar /> </Route> */}
          <Route path="/"> <Home /> </Route>

        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
