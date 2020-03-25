import React from 'react'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import './style.css'

import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

export default function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero!"/>

                <form action="">
                    <h1>Logon here!</h1>

                    <input type="text" placeholder="Your ID"/>
                    <button type="submit" className="button">Logon</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        I don't have a registration
                    </Link>
                </form>
            </section>
            
            <img src={heroesImage} alt="Heroes"/>
        </div>
    )
}