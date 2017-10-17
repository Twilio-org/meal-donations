'use strict'

// Load system environment configuration
require('dotenv').config()

const http = require('http')
const path = require('path')
const express = require('express')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 3000
const server = http.createServer(app)
server.listen(port, () => console.log(`Express server running on *:${port}`))
