import React from 'react'
import './user.css'
const User = () => {
  return (
    <div className='user-container'>
        <div className="user-left">
            <div className="user-letter">
                <h3>J</h3>
            </div>
            <div className="user-left-details">
                <h3>John</h3>
                <p>(88) 99602-2404</p>
            </div>
        </div>

        <div className="user-right">
            <button>Log out</button>
        </div>
    </div>
  )
}

export default User