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
    
        res.render('project', {
            userObj: req.user.dataValues,
            project: project,
            projectID: projectID,
            user: user,
            comment: comment
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

    console.log('+++++++++++++++++++++');
    console.log(language);
    console.log(score);

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

        console.log('______________==========_____________');

        let projectObj = await db.projects.findAll(
            {where: {userID: req.params.userID}},
            {raw: true})

        console.log('``~~~~~~~~~~~~~~~~~~~~``');
    
        let currentScore = projectObj[0].dataValues.score;
        let newScore = currentScore + score

        console.log(newScore);

        let updatedProject = await db.projects.update(
            {score: newScore},
            {where: {userID: req.params.userID}},
            {raw: true})

        console.log('{}{}{}{{}{{}{}{}}}}');

        console.log(db.profile);

        let profileObj = await db.profile.findAll(
            {where: {userID: req.params.userID}},
            {raw: true})

        console.log(profileObj);

        console.log('//////////////////////////////');
        
        let userScoreJS = profileObj[0].dataValues.userScoreJS
        let userScorePY = profileObj[0].dataValues.userScorePY
        let userScoreCsharp = profileObj[0].dataValues.userScoreCsharp
        let userScoreCSS = profileObj[0].dataValues.userScoreCSS
        let userScoreHTML = profileObj[0].dataValues.userScoreHTML
        let userScoreJAVA = profileObj[0].dataValues.userScoreJAVA

        console.log(userScoreHTML);

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

        console.log(userScoreHTML);

        let updatedProfile = await db.profile.update(
            {userScoreJS: userScoreJS, userScoreHTML: userScoreHTML, userScorePY: userScorePY, userScoreCsharp:userScoreCsharp, userScoreCSS:userScoreCSS, userScoreJAVA:userScoreJAVA},
            {where: {userID: req.params.userID}},
            {raw: true})


    } catch (error) {
        res.send('Error submitting comment')
    }

})

// router.post('/project/:id/:userID', async (req, res) => {
//     let language = req.body.language;
//     let score = req.body.score;

//     console.log('+++++++++++++++++++++++++++++');
//     console.log(language);
//     console.log(score);
    
//     let record = await db.users.findAll(
//         {where: {id: req.params.userID}},
//         {raw: true})

//     console.log('+++++++++++');

//     let currentScore = record.score;
//     let newScore = currentScore + score


//     console.log(currentScore);
//     console.log(newScore);


    // let profile = await db.profile.update(
    //     {userScoreJS: 3},
    //     {where: {userID: req.params.userID}},
    //     {raw: true})

    // let project = await db.projects.update(
    //     {score: newScore},
    //     {where: {userID: }},
    //     {raw: true})
    
// })


module.exports = router;