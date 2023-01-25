import React from "react";

export default function AnimalItems({animals}) {
    return (
        <div className="card">
        <div className="container">
            <div className="card-body">
                <h2>{animals.animals.breeds.primary}</h2>
                <p>{animals.animals.age}</p>
                <p>{animals.animals.colors}</p>
            </div>
        </div>
    </div>
    )
}