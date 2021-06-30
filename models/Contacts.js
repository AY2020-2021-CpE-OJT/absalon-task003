const mongoose = require('mongoose');

const ContactsSchema = new mongoose.Schema({
    _name: {
        last: {
            type: String,
            required:true
        },
        first: {
            type: String,
            required:true
        },
    },
    date: {
        type: Date,
        default: Date.now
    },
    phone_numbers: {
        type: [String]
    }

});

module.exports = mongoose.model('contacts', ContactsSchema);