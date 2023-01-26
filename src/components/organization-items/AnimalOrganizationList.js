// import React, {useState, useEffect} from "react";

// function AnimalOrganizationList() {

//   const [organizations, setOrganizations] = useState([])

//   useEffect(() => {

//   fetch ("https://api.npoint.io/ad8fa9154a4336a9f6ff")
//   .then((r) => r.json())
//   .then(data => {
//     setOrganizations(data)
//     console.log(data)
//   })
//   }, [])

//   const details = organizations.map((org) => {
//     return (
//       <div key={org.id}>
//       <ul>
//           <div>{org.name}</div>
//       </ul>
//   </div>
//     )
//   })


//       return (
//         <div>
//           {details}
//         </div>
        
//       );
//     }
// export default AnimalOrganizationList;



import React, {useState, useEffect} from "react";

function AnimalOrganizationList() {

    const [organizations, setOrganizations] = useState([])

    useEffect(() => {
  
    fetch ("https://api.petfinder.com/v2/organizations", 
    {
      method: "GET",
      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ1Y2RwMHB6OGxjME82blpNZ2FlNjdqeGs2T2FlcUhTNlRQbDV4eFljV01tbVU2UzljMSIsImp0aSI6ImQ4ZTIwNGU3M2I4MGQyNzA1M2Q3YTc1ZWRlYjVhMjQ4ZDJkZWI0YWZiNDQ1NDRmNDEyZGY5OGUyOWZiNTliYjc2ZDI0MGE4OGU3ODY0ZTk2IiwiaWF0IjoxNjc0NzUzMTQ1LCJuYmYiOjE2NzQ3NTMxNDUsImV4cCI6MTY3NDc1Njc0NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.jQcd8_dTg_o_Wc4URdnEWQ95EMKgtJum7EitHyg8g6O_Vqs7TfbqXSuEZeHAFrG5xDRoAFk9cceYJdxW0PJV_BlyXU3ovuBs31eoDOFYsVPhripI_COPPvTc7mFFB2KA2pAx2s6MMCY9VIUTEXHMcJpKOEO8t5R_tc4YDanFPAIhKEC1crTjatBKrcVWiBrjq7kXZl7IZX08FeErpGlEws28CMYLasOxYvh6W5ug1XF-H9MNlVQVM5VkTpyXGcrOjuCjpPh12cbFNys7w2MHgSHbsx_o8hJvM0cEQIjQmIzIwybhTaek4R3U4-uxEE3EIeZL6ayfgMBvyuusCbGcDQ"
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