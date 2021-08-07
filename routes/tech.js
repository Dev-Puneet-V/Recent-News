const express = require('express');
const router = express.Router();

const techController = require('../controllers/tech_controller');

router.get('/news', techController.news);

module.exports = router;