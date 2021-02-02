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

        res.render('homepage', {
            userObj: req.user.dataValues,
            projects: projects,
        })
    }
    catch(error){
        res.send(error);
    }
})



// router.post('/homepage/:userID', async ((req, res) => {
//     let language = req.body.language
    
<<<<<<< HEAD
//     let profiles = await db.profiles.update({raw: true})
=======
//     // let profiles = await db.profiles.update({raw: true})
>>>>>>> main
    
// }))



module.exports = router;