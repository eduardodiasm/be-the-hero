const express = require('express')
const routes = express.Router()
const ngoController = require('./controllers/ngosController')
const profileController = require('./controllers/profileController')
const incidentController = require('./controllers/incidentesController')

// Query params: used to filter something.
// Route params: used to identify something.
// Request body: used to create or modify something.

// NGO's routes.
routes.get('/ngos', ngoController.index)
routes.post('/ngos', ngoController.create)

// NGO profile.
routes.get('/profile', profileController.index)

// Incidents routes.
routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)


module.exports = routes
