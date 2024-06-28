import React, { useMemo, useState } from 'react'

const UseMemo = () => {


let [A,setA] = useState(0)

let F = ()=>{
    setA(A++)
}

let D = useMemo(()=>{
    return A
},[A])







  return (
    <div>
        <h1>{D}</h1>
      <button onClick={F}>+</button>
    </div>
  )
}

export default UseMemo
