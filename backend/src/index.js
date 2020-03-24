const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')

app.use(cors())
// Middleware to convert JSON to JS data structure.
app.use(express.json())

app.use(routes)

app.listen(3333)
