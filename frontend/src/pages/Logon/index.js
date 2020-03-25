import React from 'react'
import {FiLogIn} from 'react-icons/fi'

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
                    <button type="submit">Logon</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        I don't have a registration
                    </a>
                </form>

            </section>
            <img src={heroesImage} alt="Heroes"/>
        </div>
    )
}