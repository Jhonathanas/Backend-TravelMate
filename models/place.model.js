const mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter name place'],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
)

const Place = mongoose.model('Place',PlaceSchema);

module.exports = Place;