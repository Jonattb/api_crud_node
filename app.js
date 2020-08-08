// Dependencies
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Get the environment and the port
const { port, enviroment } = require('@config/server')

// Get the connection
const connection = require('@core/connection');

// Build the application
const app = express();

// Get route versions
const v1 = require('@route/v1');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

if( 'development' == enviroment ){
	app.use(morgan('dev'));
}

// Connection with the database
connection();

// set the routes
app.use('/api/v1', v1);

// Listen port
app.listen(port, () => {
	console.log(`[OK] The server is listening on port ${port}`);
});