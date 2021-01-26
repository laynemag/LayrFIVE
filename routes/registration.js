const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");

router.get("/registration", (req, res) => {
    res.render("registration");
});

router.post("/registration", async (req, res) => {

    
    let username = req.body.username;
    let password = req.body.password;
    // let email = req.body.email;
    // let githubUsername = req.body.githubUsername;
    // let url = `https://api.github.com/users/${username}`;
    // let response = await fetch(url)
    // let result = await response.json()

    // if(result.avatar_url){
    //     let imageURL = results.avatar_url
    // }

    console.log(req.body);


    try {
    let passwordEncrypted = bcrypt.hashSync(password, 8);

    
    let insertResult = await db.users.create({
        username: username,
        // email: email,
        password: passwordEncrypted,
        // github: `www.github.com/${githubUsername}`,
        // imageurl: imageURL,
        // roleID: 1,
    });

    res.redirect("/login");
    } catch (error) {
    res.send(`error: can't register this username`);
    }
});

module.exports = router;
