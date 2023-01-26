import React from "react";
import './AnimalCard.css'

export default function AnimalCard({type, photos, breeds, name, age, gender, color, country, email, attributes, coat,description, environChildren, tags, size, status }) {


    return (
    <div className="col-12 p-1">
        <div className="card h-100">
            <img className="card-img-top" src={photos} alt="{Image}"/>
            <div className="card-body">
                <h1>{type}</h1>
                <p className="card-title"><span className="title_start">Breed:</span><span className="title_end p-2">{breeds}</span></p>
                <p className="card-text"><span className="title_start">Name:</span><span className="title_end p-2">{name}</span></p>
                <p className="card-text"><span className="title_start">Age:</span><span className="title_end p-2">{age}</span></p>
                <p className="card-text"><span className="title_start">Gender:</span><span className="title_end p-2">{gender}</span></p>
                <p className="card-text"><span className="title_start">Size:</span><span className="title_end p-2">{size}</span></p>
                <p className="card-text"><span className="title_start">Color:</span><span className="title_end p-2">{color}</span></p>
                <p className="card-text"><span className="title_start">Coat:</span><span className="title_end p-2">{coat}</span></p>

                <ul>attribute:{attributes}</ul>

                <p>{description}</p>
                <ul>{environChildren}</ul>
                <u>Characteristics</u>
                <>{tags}</>


                <div>
                    <h2><u id="contact">Contact:</u></h2>
                    <p><span className="title_start">Country:</span><span className="title_end p-2">{country}</span></p>
                    <p><span className="title_start">Email:</span><span className="title_end p-2">{email}</span></p>
                </div>
            </div>
            <p className="card-text"><span className="title_start">Status:</span><span className="title_end p-2">{status}</span></p>
            <button className="adoptBtn">ADOPT</button>
        </div>
    </div>
    )
}