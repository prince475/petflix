import React, {useState} from "react";
import './NavBar.css';
import {NavLink} from "react-router-dom";
import {IoMdPaw} from "react-icons/io"
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"

function NavBar(){
  //store value of the search input
  const [searchValue, setSearchValue] = useState("");
  //function to handle changes to search input
  const handleSearch = (event) => {
    setSearchValue(event.target.value)
  }
  
  return(
    <div className="n-wwrapper">
      <div className="n-left">
        <div className="n-name"><IoMdPaw/>Petflix</div>
      
    <div className="n-right"></div>
      <div className="n-list">

      <ul style={{listStyleType:'none'}}>
          <NavLink to="/" exact activeClassName="active-link"><li>Home</li></NavLink>
          <NavLink to="/animals" exact activeClassName="active-link"><li>Animals</li></NavLink>
          <NavLink to="/organization" exact activeClassName="active-link"><li>Organization</li></NavLink>
          <NavLink to="/type" exact activeClassName="active-link"><li>Type</li></NavLink>
          
      </ul>
      </div>
      <form>
        <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearch}
        />
        <button type="submit"><AiOutlineSearch/></button>
      </form>
       <button type="login"><BsFillPersonFill/></button>

      </div>
    </div>
    
  )
}
export default NavBar