const mongoose = require('mongoose');

// Assuming you have User and Pariwisata schemas defined elsewhere
const User = require('./User.model');
const Pariwisata = require('./Pariwisata.model');

const ArticleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter the title'],
        },
        description: {
            type: String, // Changed to String to match typical descriptions
            required: [true, 'Please enter the description'],
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User, // Reference to the User model
            required: true,
        },
        pariwisata: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Pariwisata, // Reference to the Pariwisata model
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
