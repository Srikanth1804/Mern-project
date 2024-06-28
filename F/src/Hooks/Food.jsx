import React from 'react'
import CustomHook from './CustomHook'

const Food = () => {

let [Data] = CustomHook("http://localhost:5000/items")


console.log(Data);



  return (
    <div>
      {Data.map((D)=>{
        return(
            <>
            <h1>{D.Name}</h1>
            </>
        )
        
      })}
    </div>
  )
}

export default Food
