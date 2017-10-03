// app.js
var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

app.get('/', (req, res) => {
res.send('Hello World')});

module.exports = app;
