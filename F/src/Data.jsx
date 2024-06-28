import React from 'react'
import Actor from './Components/actor'
import vijay from './assets/vijay.jpg';
import ajith from './assets/ajith.jpg';
const Data = () => {
  let File=[
    {
      Name:"Vijay",
      Image:vijay
    },
    {
      Name:"Ajith",
      Image:ajith
    }
  ]

  return (
    <div>
      <Actor Name={File[0].Name} Image={File[0].Image}/>
      <Actor Name={File[1].Name} Image={File[1].Image}/>
    </div>
  )
}
export default Data
