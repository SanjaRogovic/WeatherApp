import React from 'react'
import "./tempgrid.css"
import {FaArrowDown} from "react-icons/fa"

const TempGrid = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>

      <div className="card">
        <div className="card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>

      <div className="card">
        <div className="card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>

      <div className="card">
        <div className="card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
     
    </div>
  )
}

export default TempGrid