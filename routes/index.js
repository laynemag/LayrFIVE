const express = require("express");
const router = express.Router();
const passport = require('passport');
const auth = require('../auth');

router.get("/", (req, res) => {
    res.render('index');
});

router.post("/",
passport.authenticate('local', 
{successRedirect: '/protected', 
failureRedirect: '/',
// failureFlash: 'Invalid username or password.
}));


router.get("/protected", authReq, (req, res) => {
    console.log('authenticated');

    res.send('protected')
})

router.get("/error", (req, res) => {

    res.send("error")
})

router.get("/logout", (req, res) => {
  //session is cleared
    req.logout();

    res.redirect("/")
})

module.exports = router;


