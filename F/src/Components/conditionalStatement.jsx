import React from 'react'
import { LoginForm,LoginForm1,LoginForm2 } from './LoginForm'



export const Formdata = () => {
    let Form=true
    if(Form){
return(                                         //if statement
    <LoginForm/>
)
}
else {
    return(
        <h1>something wrong</h1>
    )
}
 
}



export const Formdata1 = () => {
 let Form1=true

  return (                                        //logic statement
    <div>
      {Form1&&<LoginForm1/>}
    </div>
  )
}

export const Formdata2 = () => {
    let Form2=true
    return (                                      //Terinary 
        <div>                                     
        {Form2==true?<LoginForm2/>:""}
      </div>
    )
  }


