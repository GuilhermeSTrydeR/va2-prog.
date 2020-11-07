const express = require('express')

const routes = express.Router()

const apiController = require('./controllers/apiController')


routes.get('/api_va2', apiController.list)


module.exports = routes