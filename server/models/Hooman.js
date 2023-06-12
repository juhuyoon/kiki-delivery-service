const mongoose = require("mongoose");

const { Schema, model } = mongoose;
// May come back to this.
// Will have to set up bcrypt for password encryp later
const kitty = require('./Kitty');
const hoomanSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phoneNum: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    creditCard: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 4
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    },
    ssn: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    kitty: {
        type: Schema.Types.ObjectId,
        ref: "kitty"
    }
});

const Hooman = model("Hooman", hoomanSchema, "Hooman");

module.exports = Hooman;