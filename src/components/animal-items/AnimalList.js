import React from "react";

function AnimalList({animals}) {
    return (
        <ul>
            <div>{animals.type}</div>
        </ul>
    )
}

export default AnimalList