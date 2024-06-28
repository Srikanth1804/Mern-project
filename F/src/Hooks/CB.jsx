import React, { useCallback, useEffect, useMemo, useState } from 'react'

export const CB = () => {
    let [D1,setD] = useState()

let [Data,setData] = useState([])
console.log(Data);

let D = useCallback(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json)).catch((e)=>{console.log("Error!");})
},[])

useEffect(()=>{


D()



},[])








  return (
<>

{Data.map((D)=>{
  return(
    <div className="card" key={D.id}>
      <h1>{D.title}</h1>
    </div>

  )
})}



</>


  )
}


