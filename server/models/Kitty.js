const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const kittySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    breed: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    trauma: {
        type: String,
    },
    declawed: {
        type: Boolean,
        required: true
    }
});

const Kitty = mongoose.model("Kitty", kittySchema);
module.exports = Kitty;