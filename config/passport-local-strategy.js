// https://mianlabs.com/2018/05/09/understanding-sessions-and-local-authentication-in-express-with-passport-and-mongodb/#:~:text=Using%20Sessions%20with%20Passport&text=It%20then%20serializes%20the%20provided,or%20retrieve%20the%20User%20model.

const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

//authenticating the user 
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    //here 'done' is function which is reporting back to passport.js
    //whenever passport is called function(email, passwords, done) is automatically called
    function(req, email, password, done){//req can be used due to line no 12
        //find a user and establish the idenity
        User.findOne({email: email}, function(err, user){
            if(err){
               // req.flash('error', err);
                console.log('Error in finding user --> Passport');
                return done(err);
            }

            if(!user || user.password != password){//user.verifyPassword(password)
           //     req.flash('error', 'Invalid Username/Password');
                console.log('Invalid Username/Password');
                return done(null, false);
            }
            return done(null, user);
        });
    }
));
//user authentication function will send done to serialize

// serialize user function and deserialize user function

//serialize the user to decide which key is to be kept in the cookies 
passport.serializeUser(function(user, done){
    done(null, user.id);//encrypts automatically using express-layout
});

//deserializing the user from the key in the cookies, when browser makes a request then we deserialize
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
           console.log('Error in finding user --> Passport');
           return done(err);          
        }
        return done(null, user);
    });
});

//check if the user is authenticated
passport.checkAuthentication = function(req , res, next){
    
    //if the user id signed in , then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }

    //if the user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the session cookie and we are just sending this to the locals  for the views
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;
