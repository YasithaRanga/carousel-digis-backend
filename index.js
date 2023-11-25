const express = require('express');
const http = require('http');
const cors = require('cors');
require('dotenv').config();

const carouselRoutes = require('./carousel/routes');
const { connectDb } = require('./db');
connectDb();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', [carouselRoutes]);

const PORT = process.env.PORT || 8000;

const httpServer = http.createServer(app);

const server = httpServer
  .listen(PORT, async () => {
    console.log(`Server listening on Port: ${PORT}`);
    await connectDb();
  })
  .on('error', (e) => {
    console.log(`Unknown error: ${e}`);
  });

module.exports = app;
