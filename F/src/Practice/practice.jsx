import React from 'react'
import image from "../assets/itachi.jpg"
import { useState } from 'react'
const Itachi = () => {
    let [A,A1]=useState("subscribe")
    let anime=()=>{
        A1("unsubscribe")
    }
  return (
    <div>
      <h1>ITACHII!</h1>
      <img src={image} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus ipsam ipsa nulla, officia obcaecati consequuntur architecto dolorum voluptatem mollitia corporis dolores expedita earum, qui ducimus perferendis illo! Eveniet, tenetur?</p>
      <button onClick={anime}>{A}</button>
    </div>
  )
}

export default Itachi
