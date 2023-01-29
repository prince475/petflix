import React, {useState} from "react";
import './NavBar.css';
import {NavLink} from "react-router-dom";
import {IoMdPaw} from "react-icons/io"
import {AiOutlineSearch} from "react-icons/ai"



function NavBar(){
  //store value of the search input
  const [searchValue, setSearchValue] = useState("");
  //function to handle changes to search input
  const handleSearch = (event) => {
    setSearchValue(event.target.value)
  }
  
  return(
    <div className="wrapper">
      <div className="n-left">
        <div className="n-name"><IoMdPaw id="paw"/>Petflix</div>
      
    <div className="n-right"></div>
      <div className="n-list">
        <ul style={{listStyleType:'none'}}>
          <li>
            <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals" exact activeClassName="active-link">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/organization" exact activeClassName="active-link">Organization</NavLink>
          </li>
        </ul>
      </div>
      <form>
        <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearch}
        />
        <button className="nav-search-btn" type="submit"><AiOutlineSearch/></button>
      </form>
       <button className="logout-btn"type="logout">Logout</button>

      </div>
    </div>
    
  )
}
export default NavBar

