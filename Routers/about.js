const express = require('express');
const router = express.Router();
const aboutPage = require('../controllers/about');
router.get('/', aboutPage.aboutPage);
module.exports = router;