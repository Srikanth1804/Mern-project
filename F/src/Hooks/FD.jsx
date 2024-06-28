import React, { useEffect, useState } from 'react'

const FD = () => {


  


let [Data,setData] = useState([])
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
          
},[])

  return (
    <div>
    {Data.map((D) => {
      return (
        <div  style={{ display: "inline-block", margin: "1rem" }}>
          <div className="card" style={{ width: "18rem"}}>
            <div className="card-header">
              <img src={D.image} alt={D.title} className="img-fluid"  />
            </div>
            <div className="card-body">
              <h6 className="card-title">{D.title}</h6>
              <h5>
                Price: <span className="badge bg-secondary">{D.price}</span>
              </h5>
              <p className="lead">{D.description}</p>
              <h6 style={{ display: "inline-block" }}>Category:</h6>
              <small>
                <span className="badge bg-success p-2">{D.category}</span>
              </small>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
      );
    })}
   
  </div>
  
  )
}

export default FD
