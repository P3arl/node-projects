const router = require('express').Router()
const mongoose = require('mongoose')

const employeeModel = mongoose.model('Employee')

router.post('/', (req, res) => {
    console.log(req.body)
    var employee = new employeeModel();
    employee.name = req.body.name;
    employee.email = req.body.email;

    employee.save((error, doc) => {
        if(!error) {
            res.json(doc)
        }
    })
})

router.get('/', (req, res) => {
    employeeModel.find((error, docs) => {
        if(!error) {
            res.json(docs)
        } else {
            res.send("Error")
        }
    })
})

router.put('/:id', (req, res) => {
    employeeModel.findById(req.params.id, (error, doc) => {
        if(error) {
            res.send(error)
        }
        doc.sa
    })
})

module.exports = router