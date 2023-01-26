import React, { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard"

function AnimalData() {
  const [animals, setAnimals] = useState([])

  const API = "https://api.npoint.io/61de2641c6b0c40684e2"
  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((data) => {
      setAnimals(data)
      console.log(data);
    })
  }, [])

  const details = animals.map((animal) => {
        return (
          <AnimalCard   
          key={animal.id}
          attributes={animal.attributes.house_trained}
          type={animal.type} 
          coat={animal.coat}
          breeds={animal.breeds.primary} 
          name={animal.name} 
          age={animal.age}
          gender={animal.gender}
          photos={animal.photos.map((pic) => pic.medium)}
          color={animal.colors.primary}
          country={animal.contact.address.country}
          email={animal.contact.email}
          description={animal.description}
          environChildren={animal.environment.dogs}
          tags={animal.tags.map((tag) => <ol key={tag}>{tag}</ol>)}
          size={animal.size}
          status={animal.status}
          /> 
  )
})


  return (
    <div>
      {details}
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import AnimalCard from "./AnimalCard"

// /* the token expires after every one hour */

// /* The access token is put below in the header after the word Bearer to make a get request*/

// function AnimalData() {
//   const [animals, setAnimals] = useState([])
//   useEffect(() => {

//   fetch ("https://api.npoint.io/ad8fa9154a4336a9f6ff", 
//   {
//     method: "GET",
//     headers: {
//       "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ1Y2RwMHB6OGxjME82blpNZ2FlNjdqeGs2T2FlcUhTNlRQbDV4eFljV01tbVU2UzljMSIsImp0aSI6ImUxMDE2NGJjYzFiNmU0NmI1ZWM1MWUxMjhmZWU4YjA5NDQ0MmU4MmMyZTMzZGU3NDExMTNiYjdmNDc5NzllMTViYWRjYjhkM2M3MGQ3MTMzIiwiaWF0IjoxNjc0NzMwOTQwLCJuYmYiOjE2NzQ3MzA5NDAsImV4cCI6MTY3NDczNDU0MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.sfR8udKtooyF0iP9gfErIDHLt2u0GvcLVvDKCIUgskwttK2aLKX7AO1O-BWdgTXt_dROrS51mjO0D1qLltU8qVQbSqvkEuY1EfMCNAeK9LK-Nyjh4t-0BuTb_dvW_ymGjKv2QNWIF-jv4IWV0Wmc0U3XJy_k1xm4brY_EovDxjxHTkBOlUVrGlOq9lva_tFdCzo6MLhJwiS8ChpZQZl_LIpIYYwJh4Ju5pxnj_gEg0zHE3mh_wOE4hys8I8i9VLTzF_T8JqDQQirOWP2JTRaYKmebf3NaGlGqJT6cqKkS-4oGBD4t-Z9-PJ_W88ZoZAN3j5DcFYNWUcV3iyNrw5fZQ"
//     }
//   }
//   )

//   .then((response) => response.json())
//   .then((data) => { 
    
//     setAnimals(data.animals)
//    console.log(data.animals);
//     // Extract access_token from data
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// }, [])
//   const details = animals.map((animal) => {
//     return (
//       <AnimalCard   
//       key={animal.id}
//       type={animal.type} 
//       breeds={animal.breeds.primary} 
//       name={animal.name} 
//       age={animal.age}
//       gender={animal.gender}
//       photos={animal.photos.map((pic) => <img src={pic.small} alt=""/>)}
//       color={animal.colors.primary}
//       country={animal.contact.address.country}
//       email={animal.contact.email}
//       url={animal.url}
//       />

//   return (
//     <div>
//       {details}
//     </div>
//   );
// }

export default AnimalData;