var express = require('express');
var app = express();
var db = require('./database.js'); 
var UserController = require('./controllers/CategoryController');
app.use('/Category', UserController);
module.exports = app;

let port = 5000;

app.listen(port, () => {
    console.log('Server listening on dvelopment mode on port numner ' + port);
});

