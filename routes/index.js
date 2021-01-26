const express = require("express");
const router = express.Router();
const passport = require('passport');
const authReq = require('../auth');

router.get("/", (req, res) => {
    res.render('index');
});

router.post("/", passport.authenticate('local', 
{successRedirect: "/homepage", 
failureRedirect: '/',}, 
));


router.get("/homepage", authReq, (req, res) => {

    res.render('homepage')
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


