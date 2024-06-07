const express = require('express');
const pariwisataRoutes = require('./routes/PariwisataRoute'); // Ensure this path is correct

const app = express();

app.use(express.json());

app.use('/Pariwisata', pariwisataRoutes);

app.get('/', (req, res) => {
    res.send('hello from node Api tessss');
});

module.exports = app;
