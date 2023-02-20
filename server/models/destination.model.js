const mongoose = require("mongoose");

// our model is a blueprint for individual entries

const DestinationSchema = new mongoose.Schema({
    location : {
        type: String,
        required: [true, "{PATH} is required"], // {PATH} injects the key
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters long"] // {MINLENGTH} injects the minlength value
    },
    description : {
        type: String,
        required: [true, "{PATH} is required"], // {PATH} injects the key
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters long"] // {MINLENGTH} injects the minlength value
    },
    src : {
        type: String,
        required: [true, "{PATH} is required"]
    },
    srcType: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    summer: {
        type: Boolean,
        default: false
    },
    winter: {
        type: Boolean,
        default: false
    },
    spring: {
        type: Boolean,
        default: false
    },
    fall: {
        type: Boolean,
        default: false
    }
}, {timestamps: true}); // adds createdAt and updatedAt

const Destination = mongoose.model("Destination", DestinationSchema);

module.exports = Destination;