import React from "react";
import './AnimalCard.css'

export default function AnimalCard({photos, breeds, name, gender, country, email, description, tags, status }) {
   

    return (
                <div className="container">
                    <div className="card">
                        <div className="card-left">
                            <div>
                                <img className="pet-img" src={photos} alt="{Image}"/>
                            </div>
                            <div className="card-right">
                                <div className="pet-listing">
                                    {/*<h1>{type}</h1>*/}
                                    <p className="card-text"><span className="title_start"></span><span className="title">{name}</span></p>

                                    <p className="card-title"><span className="title_start">Breed:</span><span className="title_end p-2">{breeds}</span></p>

                                    <p className="card-text"><span className="title_start">Gender:</span><span className="title_end p-2">{gender}</span></p>

                        <p className="description">{description}</p>
                        <h6><u>Characteristics</u></h6>
                        <ul>{tags}</ul>
                <div>
                    <h6><u id="contact">Contact:</u></h6>
                    
                    <p><span className="title_start">Country:</span><span className="country">{country}</span></p>
                    <p><span className="title_start">Email:</span><span className="email">{email}</span></p>
                </div>
            </div>
            </div>
            
            <p className="card-text"><span className="title_start">Status:</span><span className="status">{status}</span></p>
            <button className="adoptBtn">ADOPT</button>
        </div>
    </div>
    </div>
    )
}



