const express = require('express');
const app = express();
const helmet = require('helmet');
const PORT = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const passport = require('passport');

require('./auth/passport-config')(passport);

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
app.use(helmet());
// app.use(passport.initialize());
// app.use(passport.session());
//sub routes
app.use(require('./routes'));
app.use(require('./routes/homepage'));
app.use(require('./routes/registration'));


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})



