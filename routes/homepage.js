const express = require('express');
const router = express.Router();
const db = require("../models");
// const auth = require('../auth');

router.get('/homepage', (req, res) => {
    res.render('homepage')
})


router.get('/homepage/:userID', async (req, res) => {

    try{
        let userID = parseInt(req.params.userID);
        let userObj;
        let users = await db.users.findAll({raw: true});


        for (let i = 0 ; i < users.length ; i++){
            if (userID === users[i].id){
                userObj = users[i]
                console.log(users[i].username);
                // authorObj = await db.author.findAll({where: {id:blogs[i].authorID}, raw:true})
            }
        }

        res.render('homepage', {
            userObj: userObj
        })
        
    }
    catch(error){
        res.send(error);
    }
    
    
})

// <%= userObj.username %> 
{/* <a href="<%= userObj.github %> " class="card-link">My Github</a> */}


module.exports = router;