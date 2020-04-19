const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/employee-db', 
{ useNewUrlParser: true,
    useUnifiedTopology: true })
.then(() => console.log('Connected to Mongo db...'))
.catch(error => {
    console.log('Could not connect to db');
    process.exit();
})

require('./model/employee.model')