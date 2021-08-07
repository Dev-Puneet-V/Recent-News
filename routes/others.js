const express = require('express');

const router = express.Router();
const otherController = require('../controllers/other_controller');


router.get('/', otherController.choices);
module.exports = router;