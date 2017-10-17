'use strict'

// Load system environment configuration
require('dotenv').config()

const http = require('http')
const path = require('path')
const express = require('express')
const urlencoded = require('body-parser').urlencoded
const controllers = require('./src/controllers')

// Configure Express app
const app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))
app.use(urlencoded({ extended: false }))

// Mount application routes
controllers(app)

// Create and run server
const port = process.env.PORT || 3000
const server = http.createServer(app)
server.listen(port, () => console.log(`Express server running on *:${port}`))
