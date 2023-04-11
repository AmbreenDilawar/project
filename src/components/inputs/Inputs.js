import React from 'react'
import './inputs.css'
const Inputs = () => {
  return (
    <div className='inputs-container'>
        <div className="input">
            <label htmlFor="location">Enter your location</label>
            <input type="text" placeholder='Enter address'/>
        </div>
        <div className="input">
            <label htmlFor="location">Note (optional)</label>
            <input type="text" placeholder='Enter text here'/>
        </div>
    </div>
  )
}

export default Inputs