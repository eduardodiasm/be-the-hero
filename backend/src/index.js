const express = require('express')
const app = express()
const routes = require('./routes')

// Middleware to convert JSON to JS data structure.
app.use(express.json())

app.use(routes)

app.listen(3333)
