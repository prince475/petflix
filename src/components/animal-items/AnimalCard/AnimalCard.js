import React from "react";
import './AnimalCard.css'

export default function AnimalCard({breeds, name, gender, country, email, description, tags, status, goBackCallback, item}) {

    const sendDataToParent = (action,item) => { 
        goBackCallback({action:action, item:item})
    };


    return (
                <div>
                    <div className="card">
                        <div>
                            <div className="card-right">
                                <div className="pet-listing">
                                    <p className="card-text"><span className="title_start"></span><span className="animal-title">{name}</span></p>

                                    <p className="card-title"><span className="title_start">Breed:</span><span className="title_end p-2">{breeds}</span></p>

                                    <p className="card-text"><span className="title_start">Gender:</span><span className="title_end p-2">{gender}</span></p>

                        <p className="description">{description}</p>
                        <h6><u>Characteristics</u></h6>
                        <ul>{tags}</ul>
                <div>
                    <h6><u id="contact">Contact:</u></h6>
                    
                    <p><span className="title_start">Country:</span><span className="title_start">{country}</span></p>
                    <p><span className="title_start">Email:</span><span className="title_start">{email}</span></p>
                </div>
            </div>
            </div>
            
            <p className="card-text"><span className="title_start">Status:</span><span className="status">{status}</span></p>
            <button className="adoptBtn">ADOPT</button>
            <button className="animal-card-close-btn"onClick={() => sendDataToParent("go back",item)}>CLOSE</button>
        </div>
    </div>
    </div>
    )
}



