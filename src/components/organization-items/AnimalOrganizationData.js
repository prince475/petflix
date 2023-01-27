import React, {useState, useEffect} from "react";
import AnimalOrganizationDetails from "./AnimalOrganizationDetails";
import './Organization.css'

function AnimalOrganizationData() {

    const [organizations, setOrganizations] = useState([])

    useEffect(() => {
  
    fetch ("https://api.npoint.io/818b301731f17cde4a52")
    .then((r) => r.json())
    .then(data => {
      setOrganizations(data)
      console.log(data)
    })
    }, [])

    const details = organizations.map((org) => {
        return (
            <AnimalOrganizationDetails 
            key={org.id}
            name={org.name}
            email={org.email}
            phone={org.phone}
            city={org.address.city}
            state={org.address.state}
            postcode={org.address.postcode}
            country={org.address.country}
            url={org.url}
            photos={org.photos.map((pic) => pic.medium)}
            animalLink={org._links.animals.href}
            selfLink={org._links.self.href}
            />

        )
    })
    
      return (
        <div>
            {details}
        </div>
      );
    }
export default AnimalOrganizationData;