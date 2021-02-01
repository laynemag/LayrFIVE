const express = require("express");
const router = express.Router();
const passport = require('passport');
const authReq = require('../auth');
const db = require("../models");

router.get("/", (req, res) => {
    res.render('index');
});


// router.post ("/", passport.authenticate('local'), (req, res)=>{

//     res.redirect(`/homepage/${req.user.id}`)
// }

// );

router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        console.log("you are here")
    if (err) { return next(err); }
    if (!user) { return res.redirect('/'); }
    req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect(`/homepage/${req.user.id}`);
    });
    })(req, res, next);
});


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




