const express = require("express");
const router = express.Router();
const passport = require('passport');
const authReq = require('../auth');



router.get('/aboutus', function(req, res) {
    res.render('aboutus');
})


module.exports = router;