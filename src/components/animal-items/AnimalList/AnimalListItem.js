import React from "react";
import "./AnimalList.css"

function AnimalListItem({ photo, name, age, breeds, item, callback}) {
    
    const state = {
        animals: []
    }

    const sendToParent = (item) => {
        state.animals.push(item)
        callback(state)
    }
    return (
        <div>
            <div>
                <div className="animal-wrapper" >
                    <div className="pet-list-card">
                        <div className="image" >
                            <img  className="petlist-img" src={photo} alt="{animal image}"/>
                        </div>
                        <div className="name">
                            <h3>{name}</h3>
                        </div>
                        <h4>{age}</h4> 
                        <h4>{breeds}</h4>
                        <button onClick={() => sendToParent(item)}>View Details</button>
                    </div>
                </div>
            </div> 
        </div>
    )

}

export default AnimalListItem