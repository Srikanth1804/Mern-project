import React, { useState } from 'react'

export const Form = () => {

    let [Username,SetName]=useState("")
    let [Userpwd,SetPwd]=useState("")

    let Text=(event)=>{
        SetName(event.target.value)
    }

    let Password=(event)=>{
        SetPwd(event.target.value)
    }

    let Submitbtn=(event)=>{
        event.preventDefault()


        let Data={
            Name:Username,
            Pwd:Userpwd
        }
        console.log(Data);
    }

  return (
    <div>
      <form action="" onSubmit={Submitbtn}>
        <input type="text" onChange={Text} />
        <input type="password" onChange={Password} />
        <input type="submit" />
      </form>
    </div>
  )
}


 
 export const FormStore  = () => {

    let [Name,SetName]=useState("")
    let [Email,SetEmail]=useState("")

    let Submit=(event)=>{
        event.preventDefault()

        let Storage={
            UserName:Name,
            UserEmail:Email
        }
        console.log(Storage);
    }

   return (
     <div>
         <form action="" onSubmit={Submit}>
        <input type="text" onChange={(event)=>SetName(event.target.value)} />
        <input type="email" onChange={(event)=>SetEmail(event.target.value)} />
        <input type="submit" />
      </form>
     </div>
   )
 }
 
 
 
