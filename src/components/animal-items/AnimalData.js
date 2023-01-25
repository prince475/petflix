import React from 'react';

/* Copy this command on the terminal. It will generate an access token */
// curl -d "grant_type=client_credentials&client_id=z2A29HxoG5nr55LKkr3Pnfd31bUXKuNmTihc8HmjQ4H7axjm1T&client_secret=kQtviuIal5S01ujllezHZFcAYthkOaatpPZSy22S" https://api.petfinder.com/v2/oauth2/token

/* the token expires after every one hour */

/* The access token is put below in the header after the word Bearer to make a get request*/

function AnimalData() {

  fetch ("https://api.petfinder.com/v2/animals", 
  {
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ6MkEyOUh4b0c1bnI1NUxLa3IzUG5mZDMxYlVYS3VObVRpaGM4SG1qUTRIN2F4am0xVCIsImp0aSI6ImVhYmRjMTZkYmMyYzQ0MGY0N2JlOGZlYTIzODc2NDFhMDFjOGUwODY4ZThmZjRjZmEzN2Y4MTk2YjE3Yjk2NTExZjZhNjVmOTU5ZmUzY2UzIiwiaWF0IjoxNjc0NjM0OTUzLCJuYmYiOjE2NzQ2MzQ5NTMsImV4cCI6MTY3NDYzODU1Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.EopBdBkBhF3iuazKyII6IQV7rKEsqSdyDAPk9OcD26YSItJ6KVw2VlBHse4q9Jhmkib5FNJfJjmr32w6HZG9yhABaXuZx2ypiAMa3l0GasigdsTC3etSnvElydlFOz0JUXE8sznLKlSgzsioS_-ROkpxbXJ1IVnB-ReigqZt2SWUeIo7Tel1QLzk9E477bGmqk8OfD2xXu05slKajQ4mZ7mvcvg8Hxqx4zs8PdxE_gQzKJFTfvlhw31lZUn6g55nFwY5YwxTT7k2jEx3CdSkXF_RUVXw-QG5tRm-PZ5GX2JtKJTfy7S8E9bQT7BaO-N3hEJ6jZZ3mawscXDz_thpMQ"
    }
  })
  .then(r => r.json())
  .then(data => console.log(data))
  return (
    <div>
     

    </div>
  );
}

export default AnimalData;