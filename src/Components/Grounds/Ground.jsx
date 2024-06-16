import React from 'react'
import './Ground.css'
function Ground({ground:{image,headerText}}) {
  return (
    <div className="ground-container">
        <img src={image}></img>
        <h1>{headerText}</h1>
    </div>
  )
}

export default Ground