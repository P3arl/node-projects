const mongoose = require('mongoose')
// const postSchema = require('./noteModel')

mongoose.connect('mongodb://localhost:27017/mevn-db', 
{ useNewUrlParser: true,
    useUnifiedTopology: true })
.then(() => console.log('Connected to Mongo db...'))
.catch(error => {
    console.log(`Could not connect to db: ${error}`);
    process.exit();
})