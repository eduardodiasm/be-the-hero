const express = require('express')
const routes = express.Router()
const crypto = require('crypto')
const connection = require('./database/connection')

// Query params: used to filter something.
// Route params: used to identify something.
// Request body: used to create or modify something.

routes.get('/ngos', async (req, res) => {
    const ngos = await connection('ngos').select('*')
    return res.json(ngos)
})

routes.post('/ngos', async (req, res) => {
    const { name, email, whatsapp, city, state } = req.body
    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ngos').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        state,
    })

    return res.json({ id })
})

module.exports = routes
