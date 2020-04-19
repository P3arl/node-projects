const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
//const expressHandleBars = require('express-handlebars')
require('./db')
const app = express()
const employeeController = require('./controller/employeeController')

app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )

app.use(bodyParser.json())

//app.set('views', path.join(__dirname, '/views/'))

// app.engine('hbs', expressHandleBars({
//     extname: 'hbs',
//     defaultLayout: 'mainlayout',
//     layoutsDir: __dirname + '/views/layouts'
// }))

//app.set('view engine', 'hbs')

app.get('/', (req, res) => 
res.json({
    "message": "NodeJS CRUD APP"
})
)

app.use('/employee', employeeController)

app.listen(3000, 
    () => console.log('Server is listening on port 3000'))