import React from 'react'

const Batters = (props) => {

// let {Name,Img} = props

  return (
    <div>
      <h1>{props.Name}</h1>
      <img src={props.Img} alt="" srcset="" width={200} />
    </div>
  )
}

export default Batters
