const express = require('express')
const routes = express.Router()

const { celebrate, Segments, Joi} = require('celebrate')

const sessionController = require('./controllers/sessionController')
const ngoController = require('./controllers/ngosController')
const profileController = require('./controllers/profileController')
const incidentController = require('./controllers/incidentesController')

// Query params: used to filter something.
// Route params: used to identify something.
// Request body: used to create or modify something.

// Sessions
routes.post('/sessions', sessionController.create)

// NGO's routes.
routes.get('/ngos', ngoController.index)

routes.post('/ngos', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(11).max(14),
        city: Joi.string().required(),
        state: Joi.string().required().length(2),
    })
}) ,ngoController.create)

// NGO profile.
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required()
    }).unknown(),
}), profileController.index)

// Incidents routes.
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),incidentController.index)

routes.post('/incidents', incidentController.create)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),incidentController.delete)


module.exports = routes
