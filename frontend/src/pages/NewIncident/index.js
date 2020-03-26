import React from 'react'

import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import './style.css'

import logoImage from '../../assets/logo.svg'

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero!"/>
                    <h1>Register an incident</h1>
                    <p>Explain the incident so people can help about it.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Returns to the profile page
                    </Link>
                </section>

                <form action="">
                    
                    <input type="text" placeholder="Incident title"/>                    
                    <textarea placeholder="Description"></textarea>
                    <input type="text" placeholder="Value in dollars"/>

                    <button className="button">Register</button>

                </form>
            </div>
        </div>
    )
}