const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log("router loaded");
router.get('/', homeController.home);
router.use('/country', require('./country'));
router.use('/others', require('./others'));
router.use('/tech', require('./tech'));
router.use('/users', require('./users'));
module.exports = router;