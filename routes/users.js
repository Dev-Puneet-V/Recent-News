
const express = require('express');

const router = express.Router();

const passport = require('passport');

const userController = require('../controllers/user_controller');

router.get('/profile/:id', passport.checkAuthentication, userController.profile);
router.get('/signUp', userController.signUp);
router.get('/signIn', userController.signIn);
router.post('/create', userController.create);
router.get('/sign-out', userController.destroySession);
//use passport as a middleware to authenticate
router.post('/create-session', 
passport.authenticate(
    'local',//strategy is local
    {failureRedirect: '/users/signIn'}
) ,userController.createSession);

module.exports = router;