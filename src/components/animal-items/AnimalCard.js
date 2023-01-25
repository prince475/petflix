import React from "react";

export default function AnimalCard({animals}) {
    return (
    <div className="col-3 p-1">
        <div className="card h-100">
            {animals.photos.map((pic) => <img className="card-img-top" src={pic.small} alt="animal image" />)}
            <div className="card-body">
                <h2 className="card-title">{animals.breeds.map((breed) => <>{breed.primary}</>)}</h2>
                <p className="card-text">{animals.age}</p>
                <>{animals.colors.map((color) => <p>{color.primary}</p>)}</>
              
            </div>
        </div>
    </div>
    )
}