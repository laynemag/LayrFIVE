const express = require('express');
const router = express.Router();
const db = require("../models");
// const auth = require('../auth');

router.get('/homepage', (req, res) => {

    res.render('homepage', {
        userObj: req.user.dataValues,
    })
})



router.get('/homepage/:userID', async (req, res) => {

    try{
        let userID = parseInt(req.params.userID);
        let users = await db.users.findAll({raw: true});
        let projects = await db.projects.findAll({raw: true});
        let user = await db.users.findAll({where: {id:req.params.userID}, raw:true});

        res.render('homepage', {
            userObj: req.user.dataValues,
            projects: projects,
            user: user,
            users: users
        })
    }
    catch(error){
        res.send(error);
    }
})



router.post('/homepage/:userID', async (req, res) => {
    let language = req.body.language;
    let score = req.body.score;
    
    let record = await db.users.findAll(
        {where: {id: req.params.userID}},
        {raw: true})

    console.log('+++++++++++');

    let currentScore = record.score;
    let newScore = currentScore + score


    console.log(currentScore);


    // let profile = await db.profile.update(
    //     {userScoreJS: 3},
    //     {where: {userID: req.params.userID}},
    //     {raw: true})

    // let project = await db.projects.update(
    //     {score: newScore},
    //     {where: {userID: }},
    //     {raw: true})
    
})



module.exports = router;