const express = require('express');
const router = express.Router();
const request = require('request');
const JobPosts = require("../models/JobPosts");
const isAuthenticated = require("../config/middleware/isAuthenticated")

// Accessing our models and passport for login/signup 

const db = require("../models")
const passport = require("../config/passport")

// LOGIN AND SIGNUP ROUTES SECTION

// Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
router.post(
    "/login", 
    passport.authenticate("local"),
    (req, res) => {
        if (req.user || req.session.user) {
            var redir = { redirect: "/" };
            return res.json(redir)
        }
        else {
            var redir = { redirect: "/login" }
            return res.json(redir)
        }
 });

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Mongoose User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error

router.post("/signup", function (req, res) {
    
    console.log(req.body)

    console.log("user signup")

    req.session.username = req.body.email

    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password
    })
        .then(function () {
            console.log("user successfully added")
            res.redirect(307, "user/login")
        })
        .catch(function (err) {
            console.log(err.message)
            res.status(401).json(err);
        });
})

// Here we've added our isAuthenticated middleware to help make sure only logged-in users have access to the members page
// If a user who is not logged in tries to access this route they will be redirected to the signup page

router.get("/members", isAuthenticated, function (req, res) {
    res.json(req.user)
    console.log("Members page")
})

router.get("/", isAuthenticated, function (req, res){
    res.json(req.user)
})

// Routes
router.get('/user', (req, res) => {

    console.log("Home Page")

    // JobPosts.find({  })
    //     .then((data) => {
    //         console.log('Data: ', data);
    //         res.json(data);
    //     })
    //     .catch((error) => {
    //         console.log('error: ', daerrorta);
    //     });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newJobPost = new JobPosts(data);

    newJobPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!! for Mongo'
        });
    });
});


router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});

// Takes query parameters from search form and generates URL string for API call
router.post('/indeed', (req, res) => {

    const baseURL = "https://api.indeed.com/ads/apisearch?v=2&userip=1.2.3.4&format=json&limit=25";
    const publisherId = "&publisher=1397045879077994";
    console.log(req.body)
    let query = `&q=${(req.body.query).toLowerCase().split(" ").join("+")}`;
    let location = `&l=${(req.body.location).split(" ").join("+")}`;
    let radius = `&radius=${(req.body.radius)}`;
    let jobType = `&jt=${(req.body.jobType).toLowerCase().split("-").join("")}`;

    const queryURL = baseURL + publisherId + query + location + radius + jobType;

     request({ url: queryURL }, (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
          }
          res.json(JSON.parse(body));
        }
      )
})

module.exports = router;