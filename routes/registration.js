const express = require("express");
const app = express();
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require('passport');

router.get("/registration", (req, res) => {
    res.render("registration");
});

router.post("/registration", async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let github = req.body.githubUsername;
    let imageurl = req.body.imageurl


    try {
    let passwordEncrypted = bcrypt.hashSync(password, 8);

    
    let insertResult = await db.users.create({
        username: username,
        email: email,
        password: passwordEncrypted,
        github: github,
        imageurl: imageurl,
        
    });next();

    app.get('/', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect(`/homepage/${req.user.id}`);
        });
        })(req, res, next);
    });
    
} catch (error) {
    res.send(`error: can't register this username`);
    }
});

module.exports = router;
