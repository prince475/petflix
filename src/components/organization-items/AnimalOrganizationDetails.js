import React from "react";

function AnimalOrganizationDetails({organizations}) {
    const details = organizations.map((org) => 
    <div>
        <div>
            <img src={org.photos.map((pic) => {pic.medium})}/>
        </div>
        <h1>{org.name}</h1>
        <>{org.email}</>
        <>{org.phone}</>
        <p>{org.address.city}{org.address.state}{org.address.postcode}{org.address.country}</p>
        <a href={org._links.animals.href}>animals</a>
        <a href={org.self.href}>self</a>
    </div>)
    return (
        <div>
            {details}

        </div>
    )
}

export default AnimalOrganizationDetails
