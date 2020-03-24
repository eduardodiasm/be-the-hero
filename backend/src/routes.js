const express = require('express')
const routes = express.Router()

// Query params: used to filter something.
// Route params: used to identify something.
// Request body: used to create or modify something.


routes.get('/users', (req, res) => {
    const body = req.body
    console.log(body)
    return res.send(body)
})

module.exports = routes
