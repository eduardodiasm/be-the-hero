const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')

const { errors } = require('celebrate')

app.use(cors())
// Middleware to convert JSON to JS data structure.
app.use(express.json())

app.use(routes)
app.use(errors())

app.listen(3333)
