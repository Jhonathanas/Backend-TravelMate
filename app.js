const express = require('express');
const pariwisataRoutes = require('./routes/PariwisataRoute'); // Ensure this path is correct
const userRoutes = require('./routes/UserRoute'); // Ensure this path is correct

const app = express();

app.use(express.json());

app.use('/pariwisata', pariwisataRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('hello from node API TRAVELMATE');
});

module.exports = app;
