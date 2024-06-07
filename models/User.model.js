const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter name place'],
        },
        email: {
            type: Number,
            required: true,
            default: 0
        },
        password: {
            type: Number,
            required: true,
            default: 0
        },
    },
    {
        timestamps: true,
    }
)

const Users = mongoose.model('Users',UserSchema);

module.exports = Users;