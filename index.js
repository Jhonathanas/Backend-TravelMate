const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://jonathanadisaputro99:cBBb2feD46DVlRJV@yourbaedev.54l9qpe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=YourbaeDev';

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log('Connected to DB');
    })
    .catch((error) => {
        console.error('Connection to DB failed:', error.message); // Log the error for debugging
    });

module.exports = app; 
