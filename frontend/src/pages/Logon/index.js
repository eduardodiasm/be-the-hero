import React, { useState } from 'react'
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import './style.css'

import api from '../../services/api'

import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

export default function Logon() {

    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try{

            const response = await api.post('sessions', { id })

            localStorage.setItem('ngoId', id)
            localStorage.setItem('ngoName', response.data.name)

            history.push('/profile')
            
       } catch(error) {
            alert('Login failed, try again')
       }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero!"/>

                <form action="" onSubmit={handleLogin}>
                    <h1>Logon here!</h1>

                    <input type="text" 
                    placeholder="Your ID"
                    value={id}
                    onChange={e => setId(e.target.value)}/>
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