import React from 'react';

{/* Copy this command on the terminal. It will generate an access token */}
// curl -d "grant_type=client_credentials&client_id=z2A29HxoG5nr55LKkr3Pnfd31bUXKuNmTihc8HmjQ4H7axjm1T&client_secret=kQtviuIal5S01ujllezHZFcAYthkOaatpPZSy22S" https://api.petfinder.com/v2/oauth2/token

{/* the token expires after every one hour */}

{/* The access token is put below in the header after the word Bearer to make a get request*/}

function AnimalData() {

  fetch ("https://api.petfinder.com/v2/animals", 
  {
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ6MkEyOUh4b0c1bnI1NUxLa3IzUG5mZDMxYlVYS3VObVRpaGM4SG1qUTRIN2F4am0xVCIsImp0aSI6ImQ1NGQ3Y2MwOGViOWY0ZjdmMjg5MDA5MTNlN2I5YWZlNWFjM2M3NDMyNmQ1ZWI2MTIxODBlOTFiZDU0MjIxOWQ3N2UyNzEyOGQ4Y2ZkM2ZhIiwiaWF0IjoxNjc0NTY5NzQ0LCJuYmYiOjE2NzQ1Njk3NDQsImV4cCI6MTY3NDU3MzM0NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.wK-CfvYrvqi8u0HtfOKV2v88f503gp7jof-1_jHtyKi1bSBDVXC8MyBg9ngNbu-uy60uZEMjBBmhb60cuVsGqVjrTfTnhgJsoDHNXPxWdbnWunO8lK9G2WnuMtXCuhoYCh2NwHkYmljkVCXAu01Zz3txnjq9slCmqSBOLfV8nrayRgrnToVZ6UZz33IaHlLdGy95DJI3emSUnq1sALvm6pw-CQ3yiQ5XS9Gic5nCA3XWoxAUkAaq4s9IMDZGM9I9GZgSKBpcBL3a6F7oY4vsh6e8D6LJyHd73WYYSdvigaPIf7uCSTZ0Zjo_1Fqnpc7jzilnCClmcMi6WVjNcCAfbQ"
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