import React from 'react'
import {useLocation} from "react-router-dom";

export default function search() {
  const location = useLocation()
  console.log(location)
  return (
    <div>search</div>
  )
}
