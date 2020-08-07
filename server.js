// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const passport = require("./config/passport")
const session = require("express-session")
const cors = require('cors')

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const inProduction = process.env.NODE_ENV==="production"

app.use(
    cors({
        origin: inProduction ? "https://dreamjob2.herokuapp.com" : "http://localhost:3000"
    })
);

const routes = require('./routes/api');

// Production Mode
if (inProduction) {
    app.use(express.static(path.join(__dirname, './client/build')))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const options = {
    useNewURLParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/job_search'

// Step 2
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGODB_URI, options);

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

// HTTP request logger
app.use(morgan('tiny'));
app.use('/user', routes);

const { createProxyMiddleware } = require('http-proxy-middleware')

app.use('/user', createProxyMiddleware({ target: 'https://dreamjob2.herokuapp.com', changeOrigin: true }))

// add other server routes to path array

app.listen(PORT, console.log(`Server is starting at ${PORT}`));