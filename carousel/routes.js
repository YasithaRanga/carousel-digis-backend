const express = require('express');
const { getSlides, createSlide } = require('./controller');
const router = express.Router();

router.get('/carousel', getSlides);

router.post('/carousel', createSlide);

module.exports = router;
