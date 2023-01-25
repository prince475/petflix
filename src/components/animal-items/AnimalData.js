import React, { useEffect, useState } from 'react';

/* Copy this command on the terminal. It will generate an access token */
// curl -d "grant_type=client_credentials&client_id=z2A29HxoG5nr55LKkr3Pnfd31bUXKuNmTihc8HmjQ4H7axjm1T&client_secret=kQtviuIal5S01ujllezHZFcAYthkOaatpPZSy22S" https://api.petfinder.com/v2/oauth2/token

/* the token expires after every one hour */

/* The access token is put below in the header after the word Bearer to make a get request*/

function AnimalData() {
  const [animals, setAnimals] = useState([])
  useEffect(() => {
    let accessT = localStorage.getItem("token")
  const endpoint = `https://api.petfinder.com/v2/animals`;

    fetch(endpoint, { 
      method: "GET", headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // Authorization: `Bearer ${accessT}}`,
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ6MkEyOUh4b0c1bnI1NUxLa3IzUG5mZDMxYlVYS3VObVRpaGM4SG1qUTRIN2F4am0xVCIsImp0aSI6IjQ2YjdkM2UwMmRjMDlhNTVkZjM3NmZkZTU2NGUzMTEwMjFmMTM3MGY1OWMwZjgzMGI5ZDQzYmRlZTA3YmUzOGQxZWM5NDQzNjJiZWFmZjM5IiwiaWF0IjoxNjc0NjUxOTc1LCJuYmYiOjE2NzQ2NTE5NzUsImV4cCI6MTY3NDY1NTU3NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Y2R0D6vCwVsbsFxQ8-VBMSveT8YddaS2DtIQRUTP_AVCo6WQdg8iUZ-TveSd7RJu87qqwIg4DMwRPHCqZ6NKtQqAlCvSQs2Pd7GO-wEollO854iY1gx4vR7SQqLQVSKpSOKivZ9SXdKRY5RCHL6xl0rf4y8QC84Qi5vIt_dCxnzBHqLdZ8NlWNZ1MsRWYBh_FeZnVoS1qV6nIhO1n6iM1OxWDJRdRcsvrH8MXlTZDSCOY8udgCsUVTWrC93LcM9vgOJj70yu_PdlJaG-DWUa4Svg5KeUoiTa608kOrLe5haQn91mDGwUXKLhLrBA0ohP_7Jxbdd61t2cgkvMD7jNgg",

    } })
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
        <h3>{animals.breeds.map((breed) => <>{breed.primary}</>)}</h3>
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