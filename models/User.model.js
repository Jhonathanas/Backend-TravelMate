const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter name place'],
        },
        email: {
            type: String,
            required: true,
            unique: true, // Menambahkan unique untuk memastikan tidak ada duplikasi email
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
