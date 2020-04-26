const router = require('express').Router()
require('../../database/mongo')
const noteModel = require('../../database/noteModel')

// GET api
router.get('/', (req, resp) => {
    noteModel.find((error, notes) => {
        if(error) {
            resp.send(error)
        } else {
            resp.send(notes)
        }
    })
})

// POST api
router.post('/', (req, resp) => {
    const newNote = new noteModel({
        note: req.body.note
    })
    newNote.save((error, note) => {
        if(error) {
            resp.send(error)
        } else {
            resp.send(note)
        }
    })
})

// UPDATE api
router.put('/', (req, resp) => {
    const id = req.body.id
    const noteToUpdate = req.body.note
    noteModel.findByIdAndUpdate(id, {
        note: noteToUpdate,
        modifiedAt: new Date()
    }, {new: true}).then(note => {
        resp.send(note)
    }).catch(error => {
        resp.send(error)
    })
})

// DELETE api
router.delete('/:id',(req, resp) => {
    noteModel.findByIdAndDelete(req.params.id, (error) => {
        if(!error) {
            resp.send({
                "message": `Note deleted with id: ${req.params.id}`
            })
        }
    })
})

module.exports = router