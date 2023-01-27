import React from "react";

function Breeds({name, image, description, url}){
    return(
        <div className="breeds">
            <div className="card">
                <img className="card-img" src={image} alt="breed item" />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text">{description}</p>
                        <a target={''} className="btn btn-warning" href={url}>{'SHOW ITEM'}</a>
                    </div>
            </div>
        </div>
    )
}

export default Breeds