import React, { useEffect, useState } from 'react';

/* Copy this command on the terminal. It will generate an access token */
// curl -d "grant_type=client_credentials&client_id=z2A29HxoG5nr55LKkr3Pnfd31bUXKuNmTihc8HmjQ4H7axjm1T&client_secret=kQtviuIal5S01ujllezHZFcAYthkOaatpPZSy22S" https://api.petfinder.com/v2/oauth2/token

/* the token expires after every one hour */

/* The access token is put below in the header after the word Bearer to make a get request*/

function AnimalData() {
  const [animals, setAnimals] = useState([])
  useEffect(() => {
    // let accessT = localStorage.getItem("token")
  // const endpoint = `https://api.petfinder.com/v2/animals`;

  fetch ("https://api.petfinder.com/v2/animals", 
  {
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ6MkEyOUh4b0c1bnI1NUxLa3IzUG5mZDMxYlVYS3VObVRpaGM4SG1qUTRIN2F4am0xVCIsImp0aSI6IjhhOWMzYTM3OThhNDA5MDZiMjk3NjMyZjY3ZDM2MDkzYjBkNjk1MTI2NWNlNTE1OGE1NTYxNTM0NjZlNzc5ODA5ODk2ZGI0YTkyNTgzNTBmIiwiaWF0IjoxNjc0NjI4NjQyLCJuYmYiOjE2NzQ2Mjg2NDIsImV4cCI6MTY3NDYzMjI0Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZHmRmMlTa7Vc9HGJeYMhLk0-kv4_1TuckROaN8jtFVvQCf9p3So5KRZdBUpqWlvTtiUn1O8_ssYf8CiYXuDqiSwS9TIPOw2rNhcVtFVXsYUE_lhYI81vrtr6yCCzFjEOyEdR_u6W_RHYRjZfp0scoYzdy7yNkV056oH8-ka97Rmdpzrkf97cs8P70hN2Of-pjK_VZZ4dnyVyqHo1B_Qqm6CPFU8sA9kJRlC4zXpRBjqt4kEreNuAvffT0wEE02fUN_Uy-omGtXoluUuiHWt9jJCh4ewu9BC5zWIO3Rz2JSS7_O46NIkmaobyVsoSOLqfpwhNMV2KiS4Bfq9IPbFXDQ"
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

      <div key={animal.id}>
        <h1>{animal.type}</h1>
        <h3>{animal.breeds.map((breed) => <>{breed.primary}</>)}</h3>
        <p>{animal.name}</p>
        <p>{animal.age}</p>
        <p>{animal.gender}</p>
       
        {animal.photos.map((pic) => <img src={pic.small} alt=""/>)}
        <>{animals.colors.map((color) => <p>{color.primary}</p>)}</>
        {animal.contact.map((contacts) => 
        <p>{contacts.address.map((adresses) => <>{adresses.country}</>)}</p>)}
        {animal.contact.map((emails) => 
        <>{emails.email}</>)}
      </div>
    )
  })
  
    return (
      <div>
        {list}
      </div>
    );
  }

export default AnimalData;