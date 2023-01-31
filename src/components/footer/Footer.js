import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2>Give Yourself a Best Friend</h2>
              <p>Life is always better with pets</p>
              
            </div>

            <div className="col-3">
              <h3> Useful Links</h3>
              <p><Link to="/animals" className="hover:text-rose-500">
                Find A Pet
              </Link>
              </p>
              <p>
              <Link to="/organization" className="hover:text-rose-500">
                Organizations & Partners
              </Link>
              </p>
              <p>
              <Link to="/Login" className="hover:text-rose-500">
                Login
              </Link>
              </p>
            </div>


            <div className="col-3">
              <h3> Social Media Handles</h3>
              <ul className="unstyled">
                <li>About</li>
                <li>ContactUs</li>  
                <li>Location</li>  
              </ul>

            </div>

            
          </div>

        </div>

      </div>
    );  
}
export default Footer;