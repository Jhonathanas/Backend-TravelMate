const express = require('express');
const dotenv = require('dotenv');
const pariwisataRoutes = require('./routes/PariwisataRoute'); // Ensure this path is correct
const userRoutes = require('./routes/UserRoute'); // Ensure this path is correct
const articleRouter = require('./routes/ArticleRoute');
const authRoutes = require('./routes/AuthenticationRoute');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/pariwisata', pariwisataRoutes);
app.use('/users', userRoutes);
app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    res.send('hello This is node API TRAVELMATE silahkan membaca Dokumentasi di sini https://github.com/Jhonathanas/Backend-TravelMate.git');
});

module.exports = app;
