const express = require('express');
const mongoose = require('mongoose');
const pariwisataRoutes = require('./routes/pariwisataRoutes');

const app = express();

app.use(express.json());

app.use('/Pariwisata', pariwisataRoutes);

app.get('/', (req, res) => {
    res.send('hello from node Api tessss');
});

module.exports = app;
