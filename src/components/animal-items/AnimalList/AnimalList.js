import React, {useState, useEffect} from "react";
import "./AnimalList.css"

function AnimalList() {

  const [animals, setAnimals] = useState([])

  useEffect(() => {

  fetch ("https://api.npoint.io/61de2641c6b0c40684e2")
  .then((r) => r.json())
  .then(data => {
    setAnimals(data)
    console.log(data)
  })
  }, [])
  

  const details = animals.map((animal) => {
    return (

       <div>
            <div key={animal.id} >
            <div className="animal-wrapper">
                <div className="pet-list-card">
                    <div className="image" >
                          <img  className="petlist-img" src={animal.photos.map((pic) => pic.small)} alt="{animal image}"/>
                    </div>
                <div className="name">
                      <h3>{animal.name}</h3>
                </div>
               
                    <h4>{animal.age}</h4> 
                    <h4>{animal.breeds.primary}</h4>
                
            </div>
          </div>
        </div> 
      </div>
       


   
     
  
  )
})  




      return (
        <div>
          {details}
        </div>
        
      );
    }
export default AnimalList;



// import React, {useState, useEffect} from "react";

// function AnimalList() {

//     const [animals, setAnimals] = useState([])

//     useEffect(() => {
  
//     fetch ("GET https://api.petfinder.com/v2/animals", 
//     {
//       method: "GET",
//       headers: {
//         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJZWjNKc2VZOExDMDZPclIxOU9aSXVHOGJyc3lBZmtDblBYN2duVUhQUjlhdzN0ZjRPVyIsImp0aSI6ImI4MWI5MjAwNjBhYmM5MmRlZWNiOGIwZmE4MTkwNjUyMDM4MTdkNmU5ZTE0MzEwYTE5MmFkMTQ3YTVmNTdjNTE2OTgwMjY4ZWY3MWJhMDQ5IiwiaWF0IjoxNjc0NjcwMDgzLCJuYmYiOjE2NzQ2NzAwODMsImV4cCI6MTY3NDY3MzY4Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.dYsYnN3sVhHZes1paMKG7x38O8kS4TIVIQ04RnaeJqKdHfRjACCOKBYy7_Qz2B8if99JZZc9iSiCJ2WhcFloFBteXql-KcQkOfPKbPk9PZJ9HUYQ0HFDExcma740npNiYlCr5lmWgE9dz6j7zARfZguhhVCm5GNFc1YGvGtJmgZzxfyuKlUEZR4UmVeOvxLvaFVE95X3fdxXTE5QiZkTXTfV4zekWQmEp_Fmgo3-t4yVu4hbVjrVYTmWBuEOEEHFCj0B3vx75q_ji5v7c873G6JLuV1RgyjbMm6VeT-05bHZjPX61FwPYnv0H08cbEGgxJgZOMT4xCIonJOQfvPutQ"
//       }
//     })
  
//       .then((response) => response.json())
//       .then((data) => { 
        
//         setAnimals(data.animals)
//         console.log(data.animals);
        
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//     }, [])

//     const list = animals.map((animal) => {
//       return (
  
//         <div key={animal.id}>
//             <ul>
//                 <div>{animal.name}</div>
//                  <div>
//             </ul>
//         </div>
//       )
//     })
    
//       return (
//         <div>
//           {list}
//         </div>
//       );
//     }
// export default AnimalList;