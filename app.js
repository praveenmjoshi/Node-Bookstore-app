const express = require('express');

const app = express()

const apiRouter = require('./routers/api')

// static assets
app.use(express.static('./static'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use('/api', apiRouter)


module.exports = app;