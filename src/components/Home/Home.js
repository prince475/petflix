import React from "react"
import './Home.css'



const Home= () => {
    return(
                <div className="intro">
                <div className="i-left">
                    <div className="i-name">
                        
                        <span> Get Yourself a</span>
                        <span> Best Friend</span>
                        <span> Life is better with pets</span>

                    </div>
                    <button className="button i-button">Find a Pet</button>
                 
            
                </div>
                <div className="i-right">
                <img src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dog" />
                
                </div>
            </div>
    )
}
export default Home