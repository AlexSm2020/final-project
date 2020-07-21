// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const passport = require("./config/passport")
const session = require("express-session")

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const routes = require('./routes/api');

// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/job_search', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use( (req, res, next) => {
    console.log("req.session", req.session);

    next()
});
app.use(passport.initialize());
app.use(passport.session());

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// HTTP request logger
app.use(morgan('tiny'));
app.use('/user', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));