import React from 'react'
import { useForm } from 'react-hook-form'
const Hookform = () => {

    const{register,handleSubmit,formState:{errors}}=useForm()

    let Datafun=(File)=>{
        console.log(File);
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit(Datafun)}>
      <input type="text" id='Username' {...register("Username",{required:"Fill the field",minLength:{value:10,message:"minimum 10 letters"}})}/>
      {errors.Username&&<p>{errors.Username.message}</p>}
      <input type="submit" />
      </form>
    </div>
  )
}

export default Hookform
