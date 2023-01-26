import React from "react";

export default function AnimalCard({type, photos, breeds, name, age, gender, color, country, email, url }) {


    return (
    <div className="card p-1">
        <div className="col h-100">
        <img src={photos} alt=""/>
        <h1>{type}</h1>
            <div className="card-body">
                <h2 className="card-title">Breed: {breeds}</h2>
                <p>Name: {name}</p>
                <p className="card-text">Age: {age}</p>
                <p>Gender: {gender}</p>
                {color}
            </div>
            <div>
                <h2>Contact:</h2>
                <p>Country: {country}</p>
                <p>Email: {email}</p>
            </div>
            <a href={url}>ADOPT</a>
        </div>
    </div>
    )
}