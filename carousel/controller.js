const express = require('express');
const carouselData = require('./sampledata');
const { getRecords, createRecord } = require('./service');

const getSlides = async (req, res) => {
  let slideCount = 10;

  if (req.query.slides && parseInt(req.query.slides) <= 10) {
    slideCount = parseInt(req.query.slides);
  }

  const response = await getRecords(slideCount);

  if (response) {
    await res.json(
      {
        status: 'success',
        slides: response,
      },
      200
    );
  } else {
    await res.json(
      {
        status: 'fail',
        slides: 'No data found',
      },
      404
    );
  }
};

const createSlide = async (req, res) => {
  const response = await createRecord(req.body);

  if (response) {
    await res.json(
      {
        response: response,
        status: 'success',
      },
      204
    );
  } else {
    await res.json(
      {
        response: 'Data insert failed',
        status: 'fail',
      },
      400
    );
  }
};

module.exports = {
  getSlides,
  createSlide,
};
