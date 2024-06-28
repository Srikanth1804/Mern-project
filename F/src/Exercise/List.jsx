import React, { useState } from 'react'
import { Fruits } from './List Data'
import '../Exercise/list1.css'
import Liststyle from "../Exercise/list.module.css"

const List = () => {

// let style={
//   border:"1px solid red"           style={style}(apply method in tag)
// }



let [Name,SetName] = useState("")
let [Email,SetEmail] = useState("")



let Mail = (event)=>{

SetEmail(event.target.value)

}


let Submit = (event)=>{
  event.preventDefault();



let Data = {

Name:Name,
Email:Email

}

console.log(Data);

  // console.log(Email);
  // console.log(Name);

  
}




  return (
    <div className='bg-primary'>
    {Fruits.map((fruit)=>{
        return(
            <>
             <h1 className={Liststyle.name}>{fruit.Name}</h1>
            <img id={Liststyle.image} src={fruit.Fruitimage} alt="" />







            </>
        )
    }
    )}




<form action="" onSubmit={Submit}>
  <input type="text" onChange={(event)=>SetName(event.target.value)}/>
  <input type="email" onChange={Mail} />
  <input type="submit" />
</form>



    </div>
  )
}

export default List
