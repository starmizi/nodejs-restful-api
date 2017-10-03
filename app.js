// app.js
var express = require('express');
var app = express();
var db = require('./db');

app.get('/', (req, res) => {
res.send('Hello World')});

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;
