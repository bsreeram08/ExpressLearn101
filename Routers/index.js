const express = require('express');
const router = express.Router();
const landingPage = require('../controllers/landingPage');
router.get('/', landingPage.getLandingPage);
router.post("/", landingPage.submitLandingPage);
module.exports = router;