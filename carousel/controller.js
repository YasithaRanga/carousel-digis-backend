const express = require('express');
const carouselData = require('./sampledata');

const getSlides = (req, res) => {
  let slideCount = 10;

  if (req.query.slides && req.query.slides <= 10) {
    slideCount = req.query.slides;
  }

  res.json(
    {
      status: 'success',
      slides: carouselData.slice(0, slideCount),
    },
    200
  );
};

const createSlide = (req, res) => {
  res.json(
    {
      status: 'success',
      slides: carouselData.slice(0, slideCount),
    },
    200
  );
};

module.exports = {
  getSlides,
  createSlide,
};
