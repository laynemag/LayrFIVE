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
    let email = req.body.email;
    let githubUsername = req.body.githubUsername;
    let imageURL = req.body.imageURL;
    console.log(req.body);


    try {
        let passwordEncrypted = bcrypt.hashSync(password, 8);
        // let response = await fetch(url)
        // let result = await response.json()
        // let github = `www.github.com/${req.body.githubUsername}`;
        // let url = `https://api.github.com/users/${github}`

        // if(result.avatar_url){
        //     let imageurl = result.avatar_url
        // }

        
        let insertResult = await db.users.create({
            username: username,
            email: email,
            password: passwordEncrypted,
            imageurl: imageURL, 
            github: githubUsername
            // roletype: 1,
    });

    res.redirect("/");
    } catch (error) {
    res.send(`error: can't register this username`);
    }
});

module.exports = router;
