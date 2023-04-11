import React from 'react'
import './style.css'
import pic from '../../images/img.png'
import loc from '../../images/loc.png'
import cal from '../../images/cal.png'
const ServiceDetails = () => {
  return (
    <div className='service-container'>
        <img src={pic} alt="" />
        <div className="service-container-right">
            <h3>Japanese lessons</h3>
            <div className="s-c-r-icon">
                <img src={cal} alt="" />
                <span>Nov 7, 2020 · 11:30</span>
            </div>
            <div className="s-c-r-icon">
                <img src={loc} alt="" />
                <span>Client`s place</span>
            </div>
            <h3>Rp 350.000</h3>
        </div>
    </div>
  )
}

export default ServiceDetails