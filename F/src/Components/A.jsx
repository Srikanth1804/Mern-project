import React from 'react'
import insta from "../assets/insta.jpg"
import { useState } from 'react'
const A = () => {
let [A,A1]=useState("Follow")
let fun=()=>{
  A1("Following")
}
let [B,B1]=useState("follow")
let demo=()=>{
  B1("Unfollow")
}
  return (
    <div>
      <h1>Welcome To Instagram!</h1>
      <img src={insta} alt="" />
      <h3>
      👑Mr. Prince 🤴
📷Photoholic📷
🍟 Foodie🍕
🔥Killer Attitude 🔥
🙏🏻 Mahakal Bhakt 😍
💰I’m not rich but I’m Royal✨
🛬 Landed on 🌎 5 may🎂


      </h3>
<button onClick={fun}>{A}</button><br />
{/* <button onClick={demo}>{B}</button> */}
    </div>
  )
}
export default A
