import React, { useState } from 'react'
import {useForm } from "react-hook-form"

export const Form2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

let Inputs = (FV)=>{
    console.log(FV);

}


  return (
    <div>
      <form action="" onSubmit={handleSubmit(Inputs)}>
        <input type="text" id='A' {...register("A",{required:"h"})} />
        {errors.A && <p className='text-danger'>Is Must Be Fillout</p>}
        <input type="text" id='B' {...register("B",{required:"Fill",minLength:{value:10,message:"Min is 10"}})}/>
        <input type="submit" name="" id=""  value="Send"/>
        {errors.B && <p className='text-danger'>{errors.B.message}</p>}
      </form>
    </div>
  )
}



// export const Form3 = () => {
//   const {register,handlesubmit,formstate:{errors}} = useForm()
// let btnfun=(Btnvalue)=>{
//  console.log(Btnvalue);
// }
//  return (
//    <div>
//      <form action="" onSubmit={handlesubmit(btnfun)}>
//      <input type="text" id='text' {...register("text",{required:"Fill"})} />
//      {errors.text&&<p>Please fill up it!</p>}
//      <input type="password" id='pwd' {...register("pwd",{required:"Fill"})} />
//      {errors.pwd&&<p>Please fill up it!</p>}
//      <input type="submit" />
//      </form>   
//    </div>
//  )
// }