import React from 'react'
import './home.css'
import cross from '../images/cross.png'
import User from '../components/user/User'
import ServiceDetails from '../components/serviceDetails/ServiceDetails'
import Inputs from '../components/inputs/Inputs'
import Button from '../components/button/Button'
const Home = () => {
    return (
        <div className='home-container'>
            <div className="top-banner">
                <h3>Choose the form of payment</h3>
                <img src={cross} alt="" />
            </div>

            <div className="down-container">
                <User />
                <h3>Selected service</h3>
                <ServiceDetails />
                <Inputs />
                <h1>Choose a way to pay</h1>
                <div className="upper-btns">
                    <button className='cash-btn'>Cash</button>
                    <Button text={'Credit card'} />
                </div>
                <button className='down-button last'>eWallet/ <br /> Virtual bank</button>

                <div className="check-contt">
                    <input type="checkbox" id='check' />
                    <label htmlFor="check">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                         &nbsp;<a href="/">do eiusmod</a>
                    </label>
                </div>
            </div>
            <hr />

            <div className="footer">
                <p>Previous</p>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Home