import React, {useState, useEffect} from "react";

function AnimalOrganizationList() {

    const [organizations, setOrganizations] = useState([])

    useEffect(() => {
  
    fetch ("https://api.petfinder.com/v2/organizations", 
    {
      method: "GET",
      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJZWjNKc2VZOExDMDZPclIxOU9aSXVHOGJyc3lBZmtDblBYN2duVUhQUjlhdzN0ZjRPVyIsImp0aSI6ImI4MWI5MjAwNjBhYmM5MmRlZWNiOGIwZmE4MTkwNjUyMDM4MTdkNmU5ZTE0MzEwYTE5MmFkMTQ3YTVmNTdjNTE2OTgwMjY4ZWY3MWJhMDQ5IiwiaWF0IjoxNjc0NjcwMDgzLCJuYmYiOjE2NzQ2NzAwODMsImV4cCI6MTY3NDY3MzY4Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.dYsYnN3sVhHZes1paMKG7x38O8kS4TIVIQ04RnaeJqKdHfRjACCOKBYy7_Qz2B8if99JZZc9iSiCJ2WhcFloFBteXql-KcQkOfPKbPk9PZJ9HUYQ0HFDExcma740npNiYlCr5lmWgE9dz6j7zARfZguhhVCm5GNFc1YGvGtJmgZzxfyuKlUEZR4UmVeOvxLvaFVE95X3fdxXTE5QiZkTXTfV4zekWQmEp_Fmgo3-t4yVu4hbVjrVYTmWBuEOEEHFCj0B3vx75q_ji5v7c873G6JLuV1RgyjbMm6VeT-05bHZjPX61FwPYnv0H08cbEGgxJgZOMT4xCIonJOQfvPutQ"
      }
    })
  
      .then((response) => response.json())
      .then((data) => { 
        
        setOrganizations(data.organizations)
        console.log(data.organizations);
        
      })
      .catch((error) => {
        console.error(error);
      });
    }, [])

    const list = organizations.map((org) => {
      return (
  
        <div key={org.id}>
            <ul>
                <div>{org.name}</div>
            </ul>
        </div>
      )
    })
    
      return (
        <div>
          {list}
        </div>
      );
    }
export default AnimalOrganizationList;