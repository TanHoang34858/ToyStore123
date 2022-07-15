const mongoose = require('mongoose');
var validator = require("email-validator");

var toySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String
    },
    mobile: {
        type: String
        
    },
    city: {
        type: String
    }
})


mongoose.model('Toy', toySchema);