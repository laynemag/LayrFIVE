const express = require("express");
const router = express.Router();
const db = require('../models');

router.get("/submission", (req, res) => {
    res.render('submission', {
        userObj: req.user.dataValues
    });
});

router.post("/submission", async (req, res) => {
    let usernameGithub = req.body.usernameGithub;
    let postTitle = req.body.postTitle;
    let postDesc = req.body.postDesc;
    let languages = req.body.languages;
    let hostLink = req.body.hostLink;
    let score = req.body.score;


    // try {
    let insertResult = await db.submission.create({
        postTitle: postTitle,
        // postDesc: postDesc,
        gitHub: usernameGithub,
        hostLink: hostLink,
        // languages: languages,
        score: score
    });
    console.log('++++++++++++');
    console.log(insertResult);
    if (insertResult){
        res.redirect("/homepage");
    }
// } 
    
    // catch (error) {
    // res.send(`error: can't submit this project`);
    // }

    
})


module.exports = router;