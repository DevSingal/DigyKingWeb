const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,

    },
    phone_number: {
        type: Number,
        required: true,
        unique: true
    },
    feedback: {
        type: String,
        required: true
    }
});

const user_info = new mongoose.model("digyKing-user-info", user_schema);

module.exports = user_info;