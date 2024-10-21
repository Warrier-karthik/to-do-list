const express = require('express')
const router = express.Router()
const date = new Date()

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
router.get('/', (req, res) => {
    res.render('newTask.ejs')
})

router.post('/', (req, res) => {
    console.log(req.body.Task)
})
module.exports = router