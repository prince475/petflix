import React from "react";

function Breeds({name, image, description, url}){
    return(
        <div className="breeds">
            <div className="card">
                <img className="card-img" src={image} alt="breed item" />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text">{description}</p>
                        <a target={''} className="btn btn-warning" href={url}>{'SHOW ITEM'}</a>
                    </div>
            </div>
        </div>
    )
}

export default Breeds

// import React, { useEffect, useState } from "react"; 
//  import Animal from "./Animal"; 
//  import Search from "./Search"; 
//  import Breeds from "./Breeds"; 
  
  
//  function AnimalList() { 
//    const [allAnimals, setAllAnimals] = useState([]) 
//  const [animals, setAnimals] = useState([]); 
//    useEffect(() => { 
//      fetch("https://api.npoint.io/85a754bf9c1951c51700/animals/") 
//        .then((response) => response.json()) 
//        .then((data) => { 
//          setAllAnimals(data) 
//          setAnimals(data); 
//        }); 
//    }, []); 
//    function handleSearch(value){ 
//      const updatedAnimals = allAnimals.filter(animal=> animal.breeds.primary.toLowerCase().includes(value.toLowerCase())) 
//      setAnimals(updatedAnimals) 
//    } 
  
//    function handleClick(e){ 
//    if (e.target.alt){ 
//      if(e.target.alt === "others"){ 
//        setAnimals(allAnimals) 
//      }else{ 
//        const updatedAnimals = allAnimals.filter(animal=>animal.type===e.target.alt) 
//        setAnimals(updatedAnimals) 
//      }  
//    } 
//    } 
  
//     
//    return ( 
//      <div className="bg-gray"> 
//          <div className="flex justify-center"> 
//          <Breeds onAnimalClick={handleClick}  key="cats" breed="Cats" image="https://cdn-icons-png.flaticon.com/512/9358/9358469.png"/> 
//          <Breeds onAnimalClick={handleClick}   key="dogs" breed="Dogs" image="https://cdn-icons-png.flaticon.com/512/9342/9342594.png"/> 
//          <Breeds onAnimalClick={handleClick}  key="others" breed="Others" image="https://cdn-icons-png.flaticon.com/512/2609/2609834.png"/> 
//          </div> 
//          <Search onSearch={handleSearch}/> 
//        <div className="flex flex-wrap w-3/4 mx-auto"> 
  
//          {animals.map((animal, index) => { 
//            let imageUrl = animal.primary_photo_cropped?.small; 
//            return ( 
//              <div> 
//                <Animal 
//                key={animal.id} 
//                image={ 
//                  imageUrl 
//                    ? imageUrl 
//                    : "https://thumbs.dreamstime.com/b/vector-group-pets-dog-cat-humming-bird-parrot-rabbit-isolated-white-background-pet-icon-logo-easy-editable-layered-224673941.jpg" 
//                } 
//                name={animal.name ? animal.name : "Milo"} 
//                breed={animal.breeds.primary} 
//                id={index} 
//              /> 
//              </div> 
//            ); 
//          })} 
//        </div> 
//      </div> 
//    ); 
//  } 
  
//  export default AnimalList;