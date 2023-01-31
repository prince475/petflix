import React from "react"
import AnimalList from "../animal-items/AnimalList/AnimalList"
import './Home.css'
import AnimalListItem from "../animal-items/AnimalList/AnimalListItem"




const Home = ({animals, isHome}) => {
    if (!isHome) {
        const details = animals?.map((animal) => {

            return (
              <AnimalListItem 
                key={animal.id} 
                photos={animal.photos.map((pic) => pic.small)}
                name={animal.name}
                age={animal.age}
                breeds={animal.breeds.primary}
                />
          )
        })
          
            return (
              <div>
                <div>

                  {details}
                </div>
              </div>
            );
          }
        
    return(
                <div className="intro">
                <div className="i-left">
                    <div className="i-name">
                        
                        <span> Get Yourself a</span>
                        <span> Best Friend</span>
                        <span> Life is better with pets</span>

                    </div>
                    <button className="button i-button" id="home-btn">Find a Pet</button>
                 
            
                </div>
                <div className="i-right">
                <img id="home-img" src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dog" />
                
                </div>
            </div>
    )
}
export default Home