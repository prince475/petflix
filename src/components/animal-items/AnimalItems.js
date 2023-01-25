import React from "react";

export default function AnimalItems({animals}) {
    return (
    <div className="card">
        <div className="container">
            <div className="card-body">
                <h2>{animals.breeds.map((breed) => <>{breed.primary}</>)}</h2>
                <p>{animals.age}</p>
                <>{animals.colors.map((color) => <p>{color.primary}</p>)}</>
                {animals.photos.map((pic) => <img src={pic.small} />)}
            </div>
        </div>
    </div>
    )
}