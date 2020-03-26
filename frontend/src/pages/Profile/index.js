import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import logoImage from '../../assets/logo.svg'

import './style.css'

export default function Profile() {
    
    const [incidents, setIncidents] = useState([])

    const ngoId = localStorage.getItem('ngoId')
    const ngoName = localStorage.getItem('ngoName')

    const history = useHistory()

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ngoId,
            }
        }).then(Response => {
            setIncidents(Response.data)
        })
    }, [ngoId])

    async function handleIncidentDelete(id) {

        try{

            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ngoId,
                }
            })
        
            setIncidents(incidents.filter(incident => incident.id !== id))

        } catch {
            alert('Error while deleting, try again.')
        }
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be The Hero!"/>
                
    <span>Welcome, {ngoName}!</span>
                
                <Link className="button" to="/incidents/new">Add an incident</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Your registred incidents</h1>

            <ul>
                    
                    {incidents.map(incident => (
                         <li key={incident.id}>

                            <strong>INCIDENT:</strong>
                            <p>{incident.title}</p>
        
                            <strong>DESCRIPTION:</strong>
                            <p>{incident.description}</p>
        
                            <strong>VALUE:</strong>
                            <p>
                                {Intl.NumberFormat('en-US',
                                { style: 'currency', currency: 'USD' }
                                ).format(incident.value)}
                            </p>
        
                            <button type="button" onClick={() => handleIncidentDelete(incident.id)}>
                                <FiTrash2 size={20} color="#A8A8B3"/>
                            </button>

                         </li>
                    ))}

            </ul>

        </div>
    )
}