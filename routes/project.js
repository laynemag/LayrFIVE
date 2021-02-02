const express = require('express');
const router = express.Router();
const db = require("../models");
// const auth = require('../auth');


router.get('/project/:id/:userID', async (req, res) => {
    console.log("---------------");
    console.log(req.user.dataValues.username);
    try{
        let projectID = parseInt(req.params.id);
        
        let users = await db.users.findAll({raw: true});
        let project = await db.projects.findAll({where: {id:req.params.id}, raw:true});
        let user = await db.users.findAll({where: {id:req.params.userID}, raw:true});
        // console.log(project);
        // console.log(user);



        // for (let i = 0 ; i < users.length ; i++){
        //     if (userID === users[i].id){
        //         userObj = users[i]
        //         console.log(users[i].username);
        //         projectObj = await db.submissions.findAll({where: {id:users[i].authorID}, raw:true})
        //         // authorObj = await db.author.findAll({where: {id:blogs[i].authorID}, raw:true})
        //     }
        // }

        // projectObj = await db.submissions.findAll({where: {id:req.params.userID}, raw:true})
    
        res.render('project', {
            userObj: req.user.dataValues,
            project: project,
            projectID: projectID,
            user, user
    

        })
        
    }
    catch(error){
        res.send(error);
    }
    
    
})

router.post("/project", async (req, res) => {
    let commentBox = req.body.commentBox;
    console.log(commentBox);
    try{
        let insertResult = await db.comment.create({
            comment: commentBox,
            username: req.user.username,
            userID: req.user.id 
        })
        console.log(insertResult);
    } catch (error) {
        res.send('Error submitting comment')
    }

})


module.exports = router;