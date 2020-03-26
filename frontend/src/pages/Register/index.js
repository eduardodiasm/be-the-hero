import React, { useState } from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import api from '../../services/api'

import './style.css'

import logoImage from '../../assets/logo.svg'

export default function Register(){
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    async function handleRegister(e) {
        e.preventDefault()
        const data = {
            name,
            email,
            whatsapp,
            city,
            state
        }
        try {
            const response = await api.post('ngos', data)
            alert(`Your ID: ${response.data.id}`)
        } catch(err) {
            alert('Register error')
        }
    }
    
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

                <form onSubmit={handleRegister}>
                    <input type="text" 
                    placeholder="NGO Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input type="text" 
                    placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input type="text" 
                        placeholder="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input type="text" 
                        placeholder="State" style={{ width: 95 }}
                        value={state}
                        onChange={e => setState(e.target.value)}
                        />
                        <button className="button">Register</button>
                    </div>

                </form>
            </div>
        </div>
    )
}