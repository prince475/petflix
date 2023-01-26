import React, { useEffect, useState } from 'react';
import AnimalCard from "./AnimalCard"

/* the token expires after every one hour */

/* The access token is put below in the header after the word Bearer to make a get request*/

function AnimalData() {
  const [animals, setAnimals] = useState([])
  useEffect(() => {

  fetch ("https://api.petfinder.com/v2/animals", 
  {
    method: "GET",
    headers: {
      "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ6MkEyOUh4b0c1bnI1NUxLa3IzUG5mZDMxYlVYS3VObVRpaGM4SG1qUTRIN2F4am0xVCIsImp0aSI6IjNjMGE2YzJjOTEyMmRjNWVhZDg0MzgxZmViYjc5NDEyMjY5YTExOGE0YThiMjA2YzA3NTU4NzlkYjYxNjcwMWNmMzZlOTA0YzUxY2UwNWI5IiwiaWF0IjoxNjc0NzE5MDg0LCJuYmYiOjE2NzQ3MTkwODQsImV4cCI6MTY3NDcyMjY4NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.nEiIS2YGzpMSjrNPjwc1z6MFIXl6ZUQdEvmf0_4fcpkuHj9RF15zXnxi89VTQApNqd1ySo9dEo9yYAi0Hwu8p7CXQpSz6lm4rNRLAw3fOnutlVWwH3cJm7buLF39ZMNXwm3Yn0ZtC-xpMOpP8IJ1MlnlI0-nmmABNqrbypdD5cQ75RkoVxXhUFlnqqlTr8XLgTD-MJul3C1S6miqA7QLyQJH0GFmLy8ei1s2nx-ay3ES2tkm6BDcvbOKElYu0Klr0GpulsUHiDjj5BVG2a0gwElqbPxzx56w6ws8R5k7k9K15yzWUObHZ1evO6zEhkQyu2-eaG1KOPXBZEPiHcuOmA"
    }
  })

  .then((response) => response.json())
  .then((data) => { 
    // let myAnimals = data.animals
    
    setAnimals(data.animals)
   console.log(data.animals);
    // Extract access_token from data
  })
  .catch((error) => {
    console.error(error);
  });
}, [])
const list = animals.map((animal) => {
  return (
    <AnimalCard   
    key={animal.id}
    type={animal.type} 
    breeds={animal.breeds.primary} 
    name={animal.name} 
    age={animal.age}
    gender={animal.gender}
    photos={animal.photos.map((pic) => <img src={pic.small} alt=""/>)}
    color={animal.colors.primary}
    country={animal.contact.address.country}
    email={animal.contact.email}
    url={animal.url}
    />

    // <div key={animal.id}>
    //   <h1>{animal.type}</h1>
    //   <h3>{animal.breeds.primary}</h3>
    //   <p>{animal.name}</p>
    //   <p>{animal.age}</p>
    //   <p>{animal.gender}</p>
     
    //   {animal.photos.map((pic) => <img src={pic.small} alt=""/>)}
    //   <p>{animal.colors.primary}</p>
    //   <p>{animal.contact.address.country}</p>
    //   <p>{animal.contact.email}</p>
    // </div>
  )
})

  return (
    <div>
      {list}
    </div>
  );
}

export default AnimalData;