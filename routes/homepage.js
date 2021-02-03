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



module.exports = router;