import React, { createContext } from 'react'
import A2 from './A2'



export let Name=createContext()

const A1 = () => {


let Data = "ABD";




  return (
    <div>
      <Name.Provider value={Data}>
<A2   />
      </Name.Provider>
    </div>
  )
}

export default A1
