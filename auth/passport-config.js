const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');
const db = require('../models');
//req.body.username 
//req.body.password
const init = (passport) => {
    passport.use( new LocalStrategy((username, password, done) =>{
        db.users.findAll({where: {username: username}})
        .then(records =>{
            //[{}]
            if( records  != null){
                   let record = records[0];
                   bcrypt.compare(password, record.password, (err, response)=>{
                        if(response){
                            //this means a match, user with correct password 
                            console.log('passwords matched');
                            //serialize user gets called here
                            done(null, { id: record.id, username: record.username })
                        }
                        else {
                            //no session for you - username mismatch 
                            console.log('passwords didnt');
                            done(null, false)
                        }
                   })
            }
            else{
                //no session fo you
                console.log(`user not found`)
                done(null, false)
            }
        })
    }))
    passport.serializeUser((user, done) =>{
        //passport adding information to the sessions
        console.log(`serializing user`)
        done(null, user.id)
    })
    passport.deserializeUser((id, done)=>{
        //checking to see if user is valid with the cookie that was passed from request 
        // 5, 7
        db.users.findByPk(id)
        .then(record =>{
            done(null, record)
        })
    })
}
module.exports = init;