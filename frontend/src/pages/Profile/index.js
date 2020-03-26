import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImage from '../../assets/logo.svg'

import './style.css'

export default function Profile() {
    return(
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be The Hero!"/>
                
                <span>Welcome, XYZ NGO!</span>
                
                <Link className="button" to="/incidents/new">Add an incident</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Your registred incidents</h1>

            <ul>

                <li>
                    <strong>INCIDENT:</strong>
                    <p>test incident</p>

                    <strong>DESCRIPTION:</strong>
                    <p>description</p>

                    <strong>VALUE:</strong>
                    <p>$40.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>

                </li>

                <li>
                    <strong>INCIDENT:</strong>
                    <p>test incident</p>

                    <strong>DESCRIPTION:</strong>
                    <p>description</p>

                    <strong>VALUE:</strong>
                    <p>$40.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>

                </li>

                <li>
                    <strong>INCIDENT:</strong>
                    <p>test incident</p>

                    <strong>DESCRIPTION:</strong>
                    <p>description</p>

                    <strong>VALUE:</strong>
                    <p>$40.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>

                </li>

                <li>
                    <strong>INCIDENT:</strong>
                    <p>test incident</p>

                    <strong>DESCRIPTION:</strong>
                    <p>description</p>

                    <strong>VALUE:</strong>
                    <p>$40.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3"/>
                    </button>

                </li>

            </ul>

        </div>
    )
}