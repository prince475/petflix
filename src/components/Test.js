import React from "react";

function Test(){

    let timer = 0;

    useEffect(() => {
    const API_KEY = "ucdp0pz8lc0O6nZMgae67jxk6OaeqHS6TPl5xxYcWMmmU6S9c1";
    const SECRET = "ql1sHh4dIuQrwScLR6PUHZNY1Y4V8xSC3IwiIiFQ";
    const headers = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${API_KEY}:${SECRET}`)}`,
    });
    const body = new URLSearchParams({
        grant_type: "client_credentials",
    });
    const endpoint = "https://api.petfinder.com/v2/oauth2/token";
    fetch(endpoint, { method: "POST", headers: headers, body: body })
        .then((response) => response.json())
        .then((animals) => { 
        // console.log(data);
        // Extract access_token from data
        const access_token = animals.access_token;
        localStorage.setItem("token",access_token);
        setTimeout(() =>timer++,3600000);
        })
        .catch((error) => {
        console.error(error);
        });

    }, [timer])



    useEffect(() => {

    fetch(endpoint, { method: "GET", headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessT}}`,
        // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJWdDJWY3BXNEZsOWtSaUV1SVh2WGFDa2hvcHNyZXlXMDlVcGg3ck1IWXhyRmdmM3RoVSIsImp0aSI6IjE0YzBjYTJhODJjMzgxMTQyODliM2IzMjFhMzUzNDEzOWM3NzU5ZTAwOWIxZjgzYTdkNzRkNzc2MmFkOGIwNTI4MGZjOWI3MGI0Y2RhNjM3IiwiaWF0IjoxNjc0NjYzODEzLCJuYmYiOjE2NzQ2NjM4MTMsImV4cCI6MTY3NDY2NzQxMywic3ViIjoiIiwic2NvcGVzIjpbXX0.DcBVazTg90be8sJyeKwoJYqS9rWP1Yrdvftn_7oS0-62Q90m0asTI3-OwSCxo36OU4Y2pK9reAfZhLmufKffRgOP7dFpdCuw-2SEpmF0ZYR7a3ZlIl4aeYS2LuPT3-YqqGKc30eCfKQJlH7t8Vp4bN6emw3FmMcLcDlcn086fNa9j4oj5ehGmu-nnJvRu6ANzaFSBBlvOoXEzTMVb_TbaB8lqN7Lg7WcYlz-MxDnsfxUyYwtHm0SO_HDcghY-KNlC4PD19uunU3wAAq65rd8v23xIaKETL18kvu73CY-6Nx3iHIKeq3LK9omxWHXOYOAv6UXuvGc-ZwETUjyEHN88A"}`,

    } })
    .then((response) => response.json())
    .then((data) => { 
        // let myAnimals = data.animals
        setAnimals(data.animals)
        console.log(data);
    })
    }, [])

    const details = animals.map((animal) => {
        return (
        <AnimalCard   
        key={animal.id}
        type={animal.type} 
        breeds={animal.breeds.primary} 
        name={animal.name} 
        age={animal.age}
        gender={animal.gender}
        photos={animal.photos}
        color={animal.colors.primary}
        country={animal.contact.address.country}
        email={animal.contact.email}
        url={animal.url}
        /> 
    )
    })


    return (
    <div>
    {details}
    </div>
    );
}

export default Test