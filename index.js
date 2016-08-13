const express = require('express')
const app = express()
const medalsMiddleware = require('./medalsMiddleware')

app.get('/', medalsMiddleware)

app.listen('8000')

console.log('server started on port 8000')
