const express = require('express')
const router = require('./src/router')

const app = express()
app.use(express.json())
app.use(router)

app.listen(9090, () => {
    console.log('Server started on http://localhost:9090')
})