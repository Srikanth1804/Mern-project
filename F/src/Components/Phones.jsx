import React from 'react'
import {PhoneData} from "./Phone"

const Phones = () => {





  return (
    <div>
    {PhoneData.map((Phone)=>{
        return(
            <>
            
            <h1>{Phone.Brand}</h1>
            <img src={Phone.Img} alt="" srcset="" width={200}/>
             <h3> price : {Phone.Price}</h3>
            </>
       
        )
    })}  
    </div>
  )
}

export default Phones
