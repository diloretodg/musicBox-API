const express = require('express');
const app = express();
const morgan = require('morgan'); //Importing the package

const songRoutes = require('./routes/songss'); //CRUD for musicboxdb

app.use('/songs', songRoutes);
app.use(morgan('dev')); //Using the package, dev is the format.

//Here we handle the errors for the requests.
app.use((req, res, next) => {
    const error = new Error('Not Found');   //We are creating new error object, with not found.
    error.status = 404; //Here we are setting the error status code to 404.
    next(error);    //Here we are executing the next callback, to forward the error request, and passing the error.
});

//Here we will handle all kinds of errors.
app.use((error, req, res, next) => {
    res.status(error.status || 500);    //Here we are setting the status code from the error or 500.
    res.json({
        error: {
            message: error.message  //Here we are returning JSON data with a message.
        }
    })
});

module.exports = app;