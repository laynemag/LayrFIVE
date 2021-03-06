const express = require('express');
const app = express();
const PORT = 3000;
const helmet = require('helmet')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const passport = require('passport');

require('./auth/passport-config')(passport);

var cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: ['lsdjfs;ldjs;lkjdl;skdjf;lsdkjf'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

//views
app.set('view engine', 'ejs');

//public folder
app.use(express.static('public'));
app.use(helmet({contentSecurityPolicy: false,}));
app.use(passport.initialize());
app.use(passport.session());

//Accessing User
app.get('*', function(req, res,next){
    res.locals.user = req.user || null;
    next();
})

//sub routes
app.use(require('./routes'));
app.use(require('./routes/homepage'));
app.use(require('./routes/registration'));
app.use(require('./routes/submission'));
app.use(require('./routes/project'));
app.use(require('./routes/aboutus'));


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})



