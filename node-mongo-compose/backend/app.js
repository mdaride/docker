const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose

// Database
monogoose.Promisse = global.Promisse
monogoose.connect('mongodb://db/mydb')

// Teste
server.get('/', (req, res, next) =>  res.send('Backend'))

// Start Server
server.listen(3000)