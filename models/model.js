const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true

    },
    age: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true

    },

    gender: {
        type: String,
        required: true

    },
    creator: {
        type: Object,
        required: String
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);