import React, { useState, useEffect } from "react";
import './NavBar.css';
import { Route, Switch} from "react-router-dom"
import {NavLink} from "react-router-dom";
import {IoMdPaw} from "react-icons/io"
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import Home from '../home/Home';
import Footer from "../footer/Footer";
import AnimalData from '../animal-items/AnimalCard/AnimalData';

import AnimalOrganizationData from '../organization-items/AnimalOrganizationData'



const SEARCH_URL = 'https://api.npoint.io/61de2641c6b0c40684e2'


function NavBar(){
  //store value of the search input
  const [searchText, setSearchText] = useState("");
  const [animals, setAnimals] = useState([])
  const[isHome, setIsHome] = useState(true)
  //function to handle changes to search input
  const submitForm = (e) => {
    e.preventDefault()
    setIsHome(false)
  }

  const loadPage = () => {
    fetch('https://api.npoint.io/61de2641c6b0c40684e2')
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data)
        console.log(data)
      })
     
  }
  
  useEffect(() => {

    if(isHome) {
      loadPage(Home)
    }else {
      loadPage ( SEARCH_URL )
    }

  }, [isHome])
  
  return(
    <div>
    <div className="wrapper">
      <div className="n-left">
        <div className="n-name"><IoMdPaw/>Petflix</div>
      
    <div className="n-right"></div>
      <div className="n-list">
        <ul style={{listStyleType:'none'}}>
          <li>
            <NavLink to="/" exact activeClassName="active-link" onClick={() => setIsHome(true)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals" exact activeClassName="active-link">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/organization" exact activeClassName="active-link">Organization</NavLink>
          </li>
        </ul>
      </div>
      <form onSubmit={submitForm}>
        <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={ (e) => setSearchText(e.target.value)}
        />
        <button type="submit"><AiOutlineSearch /></button>
      </form>
      
       <button className="logout-btn" type="logout"><BsFillPersonFill/></button>

      </div>
    </div>

    <Switch>
          <Route exact path="/animals"><AnimalData/></Route>
          <Route exact path="/organization" > <AnimalOrganizationData/> </Route>
          {/* <Route exact path="/type" > <Breeds/> </Route> */}
          
          <Route exact path="/"> <Home animals={animals} isHome={isHome}/> </Route>
        </Switch>
    </div>
  )
}
export default NavBar

