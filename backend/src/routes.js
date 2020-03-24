const express = require('express')
const routes = express.Router()
const ngoController = require('./controllers/ngosController')
const incidentController = require('./controllers/incidentesController')

// Query params: used to filter something.
// Route params: used to identify something.
// Request body: used to create or modify something.

routes.get('/ngos', ngoController.index)
routes.post('/ngos', ngoController.create)

routes.post('/incidents', incidentController.create)

module.exports = routes
