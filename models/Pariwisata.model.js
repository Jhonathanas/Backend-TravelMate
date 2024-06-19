const mongoose = require('mongoose');

const PariwisataSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter name place'],
        },
        category: {
            type: String,
            enum: ['Kuliner', 'Budaya', 'Religi', 'Pendidikan', 'Kesenian', 'Alam'],
            required: true,
        },
        description: {
            type: String,
            required: [true, 'Please the description place'],
        },
        description: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
    },
    {
        timestamps: true,
    }
);

const Pariwisata = mongoose.model('Pariwisata', PariwisataSchema);

module.exports = Pariwisata;