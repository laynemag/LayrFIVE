const express = require("express");
const router = express.Router();
const db = require('../models');

router.get("/submission", (req, res) => {
    res.render('submission', {
        userObj: req.user.dataValues
    });
});

router.post("/submission", async (req, res) => {
    let userID = req.user.dataValues.id;
    let usernameGithub = req.body.usernameGithub;
    let repoGithub = req.body.githubProject;
    let postTitle = req.body.postTitle;
    let postDesc = req.body.postDesc;
    let languages = req.body.languages;
    let hostLink = req.body.hostLink;
    let score = req.body.score;
    let collaborators = req.body.help;



    try {
    let insertResult = await db.projects.create({
        userID: userID,
        postTitle: postTitle,
        postDesc: postDesc,
        languages: languages,
        githubUsername: usernameGithub,
        githubRepo: repoGithub,
        hostLink: hostLink,
        score: score
    });
    console.log('++++++++++++');
    console.log(insertResult);
    if (insertResult){
        res.redirect(`/homepage/${userID}`);
    }
} 
    
    catch (error) {
    res.send(`error: can't submit this project`);
    }

    
})


module.exports = router;