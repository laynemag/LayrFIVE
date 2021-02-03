const express = require("express");
const app = express();
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require('passport');
const home = require("./index")

router.get("/registration", (req, res) => {
    res.render("registration");
});

router.post("/registration", async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let github = req.body.githubUsername;
    let imageurl = req.body.imageurl


    // try {
    let passwordEncrypted = bcrypt.hashSync(password, 8);

    
    let insertResultUser = await db.users.create({
        username: username,
        email: email,
        password: passwordEncrypted,
        github: github,
        imageurl: imageurl,
    })

    console.log('+++++++++++++++++++++++');

    let record = await db.users.findAll({where: {username: username}}, {raw: true})
    console.log(record[0].dataValues.id);

    console.log('0000000000000000000000000000');

    let insertResultProfile = await db.languages.create({
        userID: record[0].dataValues.id,
        PostTotal: 0,
        userScoreJS: 0,
        userScorePY: 0,
        userScoreCsharp: 0,
        userScoreHTML: 0,
        userScoreCSS: 0,
        userScoreJAVA: 0,
    })

    console.log('????????????????????????');


    
    // } catch (error) {
    // res.send(`error: can't register this username`);
    // }

    
    console.log("you are here");
});

module.exports = router;
