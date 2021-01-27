const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/submission", (req, res) => {
    res.render('submission');
});

router.post("/submission"), async (req, res) => {
    let username = req.body.username;
    let postTitle = req.body.postTitle;
    let postDesc = req.body.postDesc;
    let gitHub = req.body.gitHub;
    let hostLink = req.body.hostLink;
    console.log(req.body);


    let insertResult = await db.submission.create({
        username: username,
        postTitle: postTitle,
        postDesc: postDesc,
        gitHub: gitHub,
        hostLink: hostLink
    });
    res.redirect("/submission");
} 


module.exports = router;