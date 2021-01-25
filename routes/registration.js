const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");

router.get("/registration", (req, res) => {
    res.render("registration");
});

router.post("/registration", async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;



    try {
    let passwordEncrypted = bcrypt.hashSync(password, 8);

    
    let insertResult = await db.users.create({
        username: username,
        email: email,
        password: passwordEncrypted,
        roleID: 1,
    });

    res.redirect("/login");
    } catch (error) {
    res.send(`error: can't register this username`);
    }
});

module.exports = router;
