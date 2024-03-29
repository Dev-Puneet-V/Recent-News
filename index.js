const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

//use expree-ejs-layout for loading 'layout.ejs' file by default-> thgis is for layout -> npm install express-ejs-layouts
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');

//used for session cookie
const session = require('express-session');//it is helping to automatically encrypt cookie
const  passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const MongoStore = require('connect-mongo')(session);//an argument(session), the express session, here it is used for storing the session cookies in DB

app.use(express.urlencoded({ extended: false }));//used to get encoded data due to the post request
app.use(express.static('./assets'));
app.use(expressLayout);

app.use(cookieParser());

// extract style and scripts from sub pages into the layout.ejs file otherwise the link files of css comes under head 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store the session cookie in the db
//express-session
app.use(session({
    name: 'NEWS',
    //TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60  * 100)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'
    },
    function(err){
        console.log(err || 'connect-mongodb setup ok');
    })
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//use express router
app.use('/', require('./routes'));//middleware

//Start server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);//this is called interpolation, writing variabe inside string
        return;
    }
    console.log(`Server is running on port: ${port}`);
});
