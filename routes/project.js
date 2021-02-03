const express = require('express');
const router = express.Router();
const db = require("../models");

router.get('/project/:id/:userID', async (req, res) => {
    console.log("---------------");
    console.log(req.user.dataValues.username);
    try{
        let projectID = parseInt(req.params.id);
        
        let users = await db.users.findAll({raw: true});
        let project = await db.projects.findAll({where: {id:req.params.id}, raw:true});
        let user = await db.users.findAll({where: {id:req.params.userID}, raw:true});
        let comment = await db.comment.findAll({raw:true});
        let languages = await db.languages.findAll({where: {userID:req.params.userID}, raw: true})
        console.log(languages);
    
        res.render('project', {
            userObj: req.user.dataValues,
            project: project,
            projectID: projectID,
            user: user,
            comment: comment,
            languages: languages
        })
        
    }
    catch(error){
        res.send(error);
    }
})

router.post("/project/:id/:userID", async (req, res) => {
    let commentBox = req.body.commentBox;
    let language = req.body.language;
    let score = req.body.score;

    try{
        if(commentBox){
            let insertResult = await db.comment.create({
                comment: commentBox,
                username: req.user.username,
                userID: req.user.id,
                projectID: req.params.id
            })
            console.log(insertResult);
            
        }

        let projectObj = await db.projects.findAll(
            {where: {userID: req.params.userID}},
            {raw: true})
    
        let currentScore = projectObj[0].dataValues.score;
        let newScore = currentScore + score

        let updatedProject = await db.projects.update(
            {score: newScore},
            {where: {userID: req.params.userID}},
            {raw: true})

        let profileObj = await db.languages.findAll(
            {where: {userID: req.params.userID}},
            {raw: true})
        
        let userScoreJS = profileObj[0].dataValues.userScoreJS
        let userScorePY = profileObj[0].dataValues.userScorePY
        let userScoreCsharp = profileObj[0].dataValues.userScoreCsharp
        let userScoreCSS = profileObj[0].dataValues.userScoreCSS
        let userScoreHTML = profileObj[0].dataValues.userScoreHTML
        let userScoreJAVA = profileObj[0].dataValues.userScoreJAVA

        switch (language){
            case 'HTML' :
                userScoreHTML += 1;
                break
            case 'Python' :
                userScorePY += 1;
                break
            case 'Csharp' :
                userScoreCsharp += 1;
                break
            case 'CSS' :
                userScoreCSS += 1;
                break
            case 'JavaScript' :
                userScoreJS += 1;
                break
            case 'JAVA' :
                userScoreJAVA += 1;
                break
        }

        let total = userScoreJS + userScorePY + userScoreHTML + userScoreCsharp + userScoreCSS + userScoreJAVA

        let updatedProfile = await db.languages.update(
            {postTotal: total, userScoreJS: userScoreJS, userScoreHTML: userScoreHTML, userScorePY: userScorePY, userScoreCsharp:userScoreCsharp, userScoreCSS:userScoreCSS, userScoreJAVA:userScoreJAVA},
            {where: {userID: req.params.userID}},
            {raw: true})


    } catch (error) {
        res.send('Error submitting comment')
    }

})


module.exports = router;