const router = require('express').Router()
require('../../database/mongo')
const postModel = require('../../database/postModel')

//GET Posts
router.get('/', (req, resp) => {
    postModel.find((error, posts) => {
        if(error) {
            resp.send(error)
        } else {
            resp.send(posts)
        }
    })
})

router.post('/', (req, resp) => {
    const newPost = new postModel({
        name: 'P3arl',
        message: req.body.message
    })
    newPost.save(error => {
        if(error) {
            resp.send(error)
        } else {
            resp.send('Post saved!')
        }
    })
})
module.exports = router