const mongoose = require('mongoose');

const PariwisataSchema = mongoose.Schema(
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

const Pariwisata = mongoose.model('Pariwisata',PariwisataSchema);

module.exports = Pariwisata;