import React from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import './style.css'

import logoImage from '../../assets/logo.svg'

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero!"/>
                    <h1>Registration</h1>
                    <p>Register yourself in your platform to support NOGS to help people!</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Returns to the logon page
                    </Link>
                </section>

                <form action="">
                    <input type="text" placeholder="NGO Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input type="text" placeholder="City"/>
                        <input type="text" placeholder="State" style={{ width: 95 }}/>
                        <button className="button">Register</button>
                    </div>

                </form>
            </div>
        </div>
    )
}