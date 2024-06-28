import React from 'react'
import {Link} from "react-router-dom"

const RouteBar = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/call">Call</Link>
      <Link to="/">Home</Link>
    </div>
  )
}

export default RouteBar
