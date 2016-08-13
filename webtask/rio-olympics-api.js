'use latest'

const express = require('express')
const webtask = require('webtask-tools')
const app = express()

const medalsMiddleware = require('../medalsMiddleware')

app.get('/', medalsMiddleware)

module.exports = webtask.fromExpress(app)
