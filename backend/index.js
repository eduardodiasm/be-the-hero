const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.send('Hello, world!')
})

app.listen(3333)
