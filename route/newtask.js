const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('newTask.ejs')
})

router.post('/', (req, res) => {
    res.render('index.ejs')
})
module.exports = router