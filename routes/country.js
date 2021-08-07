const express = require('express');
const router = express.Router();

const countryController = require('../controllers/country_controller');

router.get('/india', countryController.india);
router.get('/usa', countryController.usa);
router.get('/germany', countryController.germany);
router.get('/uk', countryController.germany);
module.exports = router;