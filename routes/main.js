// Create a new router
const express = require("express");
const router = express.Router();

var shopData = {shopName: "The Thirsty Student",
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
                shopLocations: ['London', 'Manchester'],
                shopManagers: ['Bob', 'Jeff']
};

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
});

// Handles the 'about' route.
router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

// Handles the 'search' route.
router.get('/search', (req, res) => {
    res.render('search.ejs', shopData)
});

// Handles the input received by the form in the 'search' route.
router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send('You searched for ' + req.query.search_text + ' in ' + req.query.category + '.');
});

// Handles the 'register' route.
router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
});

// Handles the input received by the form in the 'register' route. 
router.post("/registered", (req,res) => { 
  res.send('Hello '+ req.body.first + ' '+ req.body.last +', you are now registered! We will send an email to you at ' + req.body.email + '.') 
});

router.get("/survey", (req,res) => {
    res.render("survey.ejs",  shopData); 
});

// router.post("/survey", (req,res) => {
//     res.send('') 
// });


// Export the router object so index.js can access it
module.exports = router;