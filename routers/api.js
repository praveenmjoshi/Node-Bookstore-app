var express = require('express');
var bookRouter = require('./books');

var app = express();

app.use('/book', bookRouter);

module.exports = app;
