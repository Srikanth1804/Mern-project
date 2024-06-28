import React from 'react'
import  { useContext } from 'react'

import { Name } from './Context/A1'
const A4 = () => {
    let Data = useContext(Name)
  return (
    <div>
      <h1>{Data}</h1>
    </div>
  )
}

export default A4
