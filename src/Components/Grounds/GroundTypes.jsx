import React from 'react'
import football from '../../assets/footballtruf.jpg'
import tennis from '../../assets/Tennistruf.jpg'
import cricket from '../../assets/crickettruf.jpg'
import volleyball from '../../assets/volleyballtruf.jpg'
import Ground from './Ground'

import './GroundTypes.css'
function GroundTypes() {
    let groundTypeList=
    [
        {image : football , headerText : "FootBall Truf"},
        {image : tennis , headerText : "Tennis Truf"},
        {image :  cricket, headerText : "Cricket Truf"},
        {image :  volleyball, headerText : "Volleyball Truf"}
    ]
  return (
    
    <div className="ground-types">
      <h1>Grounds Provided</h1>
          <div className="container">
     
     {groundTypeList.map((groundobj,index)=>
     
         <Ground key={index}  ground = {groundobj}/>
     )
 }
 </div>
    </div>

  )
}

export default GroundTypes