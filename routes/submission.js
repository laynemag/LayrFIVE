const express = require("express");
const router = express.Router();
const db = require('../models');

router.get("/submission", (req, res) => {
    res.render('submission', {
        userObj: req.user.dataValues
    });
});

router.post("/submission"), async (req, res) => {
    let username = req.body.name;
    let postTitle = req.body.postTitle;
    let postDesc = req.body.postDesc;
    let languages = req.body.languages;
    let hostLink = req.body.hostLink;
    let score = req.body.score;
    console.log(req.body);

    try {
        let insertResult = await db.submissions.create({
            username: username,
            postTitle: postTitle,
            postDesc: postDesc,
            gitHub: gitHub,
            hostLink: hostLink,
            languages: languages,
            score: score
        });
    if (insertResult){
        res.redirect("/");
    }} catch (error) {
    res.send(`error: can't submit this project`);
    }

    
} 


module.exports = router;