const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const driverSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    driverLicense: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true
    }
});

const Driver = model("Driver", driverSchema, "Driver");

module.exports = Driver;