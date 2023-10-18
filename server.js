const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const axios = require('axios')

require('dotenv').config();

require('./config/database');


const app = express();
   
app.use(logger('dev'));
app.use(express.json());

	
 // Configure both serve-favicon & static middleware
 // to serve from the production 'build' folder
 app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
 app.use(express.static(path.join(__dirname, 'build')));
 
 app.use(require('./config/checkToken'))

 const port = process.env.PORZTZ || 3001;

//PUT API routes here, before catch all routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/trails', require('./routes/api/trail'))
app.use('/api/reviews', require('./routes/api/reviews'))

//The following "catch all: toure (note the *) is necessary
//to reture the index.html on all non-AJAX/API requests
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


 app.listen(port, function(){
    console.log( `Express app running on port ${port}`)
 })