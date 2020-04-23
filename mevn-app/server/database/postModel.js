const mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
    "name": String,
    "message": String
})

module.exports = mongoose.model('Post', postSchema)