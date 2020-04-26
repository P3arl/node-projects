const mongoose = require('mongoose')

var noteSchema = new mongoose.Schema({
    "note": String,
    "createdAt": {
        type: Date,
        default: new Date()
    },
    "modifiedAt": {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('Note', noteSchema)